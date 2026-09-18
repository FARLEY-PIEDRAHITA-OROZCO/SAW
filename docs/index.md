---
layout: home

hero:
  name: "SAW Wiki"
  text: "Seguridad de Aplicaciones Web"
  tagline: Wiki personal del técnico en Seguridad de Aplicaciones Web (SENA). Apuntes estructurados por fases y temas, con búsqueda, glosario y referencias siempre disponibles.
  image:
    src: /favicon.svg
    alt: SAW Wiki
  actions:
    - theme: brand
      text: Comenzar
      link: /introduccion
    - theme: alt
      text: Fase 1 · Análisis
      link: /fase1/

features:
  - icon: 📚
    title: Por fases
    details: Contenido organizado siguiendo la estructura del programa formativo del SENA, sin que los materiales desaparezcan al avanzar de trimestre.
  - icon: 🗂️
    title: Por temas
    details: "Navegación temática cruzada: fundamentos, vulnerabilidades, normatividad, herramientas y metodologías."
  - icon: 🔍
    title: Búsqueda integrada
    details: Buscador local sobre todo el wiki para encontrar rápidamente conceptos, normas y herramientas.
  - icon: 🛡️
    title: Enfocado a ciberseguridad
    details: Diseño oscuro tipo terminal, listas de verificación y ejemplos prácticos aplicados a la seguridad de aplicaciones web.
---

## Estructura del contenido

```text
SAW Wiki/
├── Fase 1 · Análisis
│   ├── Tema 1 · Fundamentos de seguridad
│   │   ├── 1.1 Conceptos
│   │   ├── 1.2 Infraestructura de aplicaciones web
│   │   ├── 1.3 Normatividad y estándares
│   │   └── 1.4 Metodologías
│   └── Tema 2 · Vulnerabilidades
│       ├── 2.1 Gestión de vulnerabilidades
│       ├── 2.2 Pentesting
│       ├── 2.3 OWASP Top 10
│       ├── 2.4 Herramientas especializadas
│       └── 2.5 Análisis de resultados
├── Glosario
└── Referencias
```

::: tip ¿Cómo añadir nuevas fases?
Cuando el SENA publique la siguiente fase, solo hay que crear una carpeta `fase2/` con sus páginas en Markdown. El proyecto tiene todo preparado para expandirse.
:::