"""Valida la integridad de enlaces internos del build de VitePress (sin red).

Detecta los dos fallos reales que han aparecido en este proyecto:
  1. hrefs crudos sin el prefijo de base (p.ej. href="/fase1/..." cuando el
     sitio se sirve bajo /SAW/).
  2. hrefs que apuntan a rutas que no existen en el dist generado.

Uso:  python scripts/checklinks.py  [--dist docs/.vitepress/dist] [--base /SAW/]
Exit code 0 = OK, 1 = se encontraron errores (para usarlo en CI como gate).
"""

from __future__ import annotations

import argparse
import html
import os
import re
import sys
from pathlib import Path

TAG_RE = re.compile(r'<(?:a|link|img|script)\b[^>]*\b(?:href|src)="([^"]*)"', re.I)
MAILTO = ('mailto:', 'tel:', 'javascript:', 'data:', 'https://', 'http://', '#')

def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument('--dist', default='docs/.vitepress/dist')
    ap.add_argument('--base', default='/SAW/')
    args = ap.parse_args()

    dist = Path(args.dist).resolve()
    if not dist.is_dir():
        print(f'ERROR: no existe el dist generado: {dist}')
        return 1

    base = args.base if args.base.endswith('/') else args.base + '/'
    errors: list[str] = []
    pages = 0

    for html_file in dist.rglob('*.html'):
        pages += 1
        rel = html_file.relative_to(dist).as_posix()
        content = html_file.read_text(encoding='utf-8', errors='replace')

        for m in TAG_RE.finditer(content):
            href = html.unescape(m.group(1)).split('#')[0].split('?')[0]
            if not href or href.startswith(MAILTO):
                continue

            # 1) Enlace absoluto sin prefijo de base (apuntaría a la raiz del host)
            if href.startswith('/') and not href.startswith(base):
                errors.append(f'{rel}: href="\u001b[31m{href}\u001b[0m" sin base "{base}"')

            # 2) Ruta local inexistente en el dist
            if href.startswith('/') and href.startswith(base):
                rest = href[len(base):]
                if rest.endswith('/'):
                    target = (dist / rest / 'index.html').resolve()
                else:
                    target = (dist / rest).resolve()
                if dist in target.parents and not target.exists():
                    # VitePress genera .html tambien; comprobar ambas
                    target2 = (dist / rest).resolve()
                    cands = [target]
                    if not rest.endswith('.html'):
                        cands.append(dist / (rest + '.html'))
                    if not any(dist in c.parents and c.exists() for c in cands):
                        errors.append(f'{rel}: href="/{rest}" no existe en el dist')

    print(f'Paginas HTML: {pages}')
    if errors:
        print(f'ERRORES ({len(errors)}):')
        for e in errors:
            print('  ' + e)
        return 1
    print('OK: todos los enlaces internos resuelven dentro de la base.')
    return 0

if __name__ == '__main__':
    sys.exit(main())
