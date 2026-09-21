# -*- coding: utf-8 -*-
"""M2 rollout: convierte tarjetas crudas <a class="modulo-card" href="/SAW/..">
   en <ModuloCard href="sin-prefijo" ... /> (withBase pone /SAW/ en el build).

   Idempotente: ya convertidas dejan de casar el patrón crudo.
   --check = dry-run/gate CI (no escribe; exit 1 si queda alguna cruda).
   Sin argumentos = convierte en sitio y verifica.
"""
from __future__ import annotations

import argparse, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"

CRUDA = re.compile(
    r'<a\s+class="modulo-card"\s+href="/(?P<href>SAW/[^"]+)"\s*>\s*'
    r'<span\s+class="modulo-card__icon">(?P<icon>.*?)</span>\s*'
    r'<span\s+class="modulo-card__titulo">(?P<titulo>.*?)</span>\s*'
    r'<span\s+class="modulo-card__desc">(?P<desc>.*?)</span>\s*'
    r'<span\s+class="modulo-card__link">(?P<link>.*?)</span>\s*'
    r'</a>',
    re.S,
)
HARD = re.compile(r'href="/SAW/')


def limpiar_attr(v: str) -> str:
    return (v.strip()
            .replace('&', '&amp;')
            .replace('"', '&quot;'))


def sustituir(m: re.Match) -> str:
    href = m.group('href')
    if href.startswith('SAW/'):
        href = href[len('SAW'):]  # withBase repone el prefijo en el build
    return ('<ModuloCard href="%s" icon="%s" titulo="%s" desc="%s" />'
            % (href,
               limpiar_attr(m.group('icon')),
               limpiar_attr(m.group('titulo')),
               limpiar_attr(m.group('desc'))))


def convertir(txt: str) -> tuple[str, int]:
    return CRUDA.subn(sustituir, txt)


def hubs() -> list[Path]:
    return sorted(DOCS.rglob("index.md"))


def main() -> int:
    ap = argparse.ArgumentParser(
        description="M2 rollout: <a class=modulo-card href=/SAW/..> -> "
                    "<ModuloCard href=.. sin-prefijo /> (withBase añade /SAW/).")
    ap.add_argument("--check", action="store_true",
                    help="dry-run / gate CI: no escribe (exit 1 si queda cruda)")
    ap.add_argument("--silencioso", action="store_true",
                    help="no imprime por-tarjeta, solo resumen")
    args = ap.parse_args()

    conv_total = 0
    hard_total = 0
    for hub in hubs():
        txt = hub.read_text(encoding="utf-8")
        nuevo, n = convertir(txt)
        conv_total += n
        hard = len(HARD.findall(nuevo))
        hard_total += hard
        rel = hub.relative_to(DOCS).as_posix()
        if n or hard:
            print("[%s] convertidas=%d  hardcode-%s=%d" % (rel, n, "SAW", hard))
        if not args.check and n:
            hub.write_text(nuevo, encoding="utf-8")

    print("Total tarjetas convertidas: %d" % conv_total)
    if hard_total:
        print("QUEDAN %d con /SAW a mano (ejecuta sin --check)" % hard_total)
        return 1
    print("OK: ninguna tarjeta hardcodea el prefijo de base a mano.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
