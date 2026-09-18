---
title: "Metodologías"
description: "Metodologías para la gestión de la seguridad en aplicaciones web (OWASP, SDLC)"
tags: [metodologias, owasp, sdlc, ciclo-devida]
---

# Metodologías

Existen normas y estándares que orientan la adopción de iniciativas de seguridad. Desde el punto de vista práctico, hay metodologías específicas para la gestión de vulnerabilidades en aplicaciones web, siendo la principal **OWASP**.

## OWASP

**OWASP** (*Open Web Application Security Project*) es una metodología de seguridad para la **auditoría web**, orientada al análisis de seguridad de estas aplicaciones. Es la más usada en los trabajos de auditoría de seguridad porque permite realizar una **evaluación de riesgos** a partir de la auditoría.

Parte de la revisión de los controles definidos por la metodología permite al auditor garantizar que:

- La revisión de la plataforma se realiza de forma adecuada.
- Todos los **vectores de ataque** han sido analizados.
- Los **fallos de seguridad** han sido detectados.

![Flujo de trabajo de prueba SDLC genérico](/fase1/metodologias-normas-estandares/img/sdlc-flujo.svg)

::: info Recurso oficial
[OWASP - Web Security Testing Guide Project](https://owasp.org/www-project-web-security-testing-guide/stable/) — la metodología es abierta y su actualización se consulta en su página oficial.
:::

## Ciclo de Vida de Desarrollo de Software (SDLC)

La mayoría de desarrolladores solo validan vulnerabilidades cuando el producto ya es funcional, lo cual no es eficiente. Se sugiere adoptar un **SDLC** que incorpore el factor de seguridad en **cada fase del desarrollo**.

![Ciclo de vida SDLC genérico](/fase1/metodologias-normas-estandares/img/sdlc-ciclo.svg)

| Fase del SDLC | Seguridad incorporada |
|---------------|----------------------|
| **Analizar requisitos** | Identificar requisitos funcionales y de seguridad de la necesidad. |
| **Diseñar** | Mantener componentes seguros desde el diseño y prototipado. |
| **Codificar** | Aplicar buenas prácticas de programación segura. |
| **Testear** | Desarrollar un plan de pruebas de seguridad. |
| **Mantener** | Plan de mantenimiento y actualizaciones que garanticen funcionalidad y seguridad en el tiempo. |

::: warning Enfoque
Con el SDLC se busca que la seguridad esté presente **desde la concepción del software**, no al final del proceso.
:::

## Resumen

```text
Metodologías de seguridad web
│
├── OWASP (auditoría + evaluación de riesgos)
│   ├── Pruebas pasivas
│   ├── Pruebas activas
│   └── 12 categorías de pruebas
│
└── SDLC (seguridad en todo el ciclo de vida)
    ├── Requisitos → Diseño → Código → Pruebas → Mantenimiento
    └── Plan de pruebas de seguridad desde el inicio
```