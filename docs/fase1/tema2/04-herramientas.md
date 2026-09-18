---
title: "2.4 Herramientas especializadas"
description: "Herramientas SAST, DAST e IAST para la auditoría de aplicaciones web"
tags: [herramientas, sast, dast, iast, zap, burp, owasp]
---

# 2.4 Herramientas especializadas

Las herramientas son fundamentales en la búsqueda y gestión de vulnerabilidades: permiten agilizar, automatizar y realizar cientos de validaciones en segundos, generando informes completos sobre los hallazgos.

## Categorías de herramientas

| Categoría | Tipo | Descripción |
|-----------|------|-------------|
| **SAST** | *Static Application Security Testing* | Análisis estático del código fuente sin ejecutarlo. |
| **DAST** | *Dynamic Application Security Testing* | Pruebas dinámicas sobre la aplicación en ejecución. |
| **IAST** | *Interactive Application Security Testing* | Pruebas interactivas que combinan SAST y DAST durante la ejecución. |

## Herramientas SAST

| Herramienta | Descripción |
|-------------|-------------|
| **GitHub Code Scanning** | Servicio gratuito de análisis estático usando CodeQL. Soporta C/C++, C#, Ruby, Java, JavaScript/TypeScript, Python y Go. |
| **Coverity Scan** | Análisis estático que se conecta a Travis-CI. Soporta más de una docena de lenguajes. |
| **Reshift** | Herramienta CI/CD con análisis estático y aprendizaje automático para detectar falsos positivos. Soporta Java. |
| **WhiteSource Free Tools** | Suite para detectar vulnerabilidades en código fuente. |
| **HCL AppScan CodeSweep** | Versión community SAST. Soporta Python, Ruby, JS (Vue, Node, Angular, React), PHP, Perl, Go, TypeScript. |

## Herramientas DAST

| Herramienta | Descripción |
|-------------|-------------|
| **OWASP ZAP** | Gratuita y de código abierto. Escaneo automatizado + herramientas para pruebas manuales de lápiz. |
| **StackHawk** | Construida sobre ZAP, optimizada para CI/CD. Gratuito para proyectos open source (1 aplicación). |
| **Arachni** | Escáner con soporte comercial; gratuito para la mayoría de casos de uso. |
| **VWT Digital's Sec-helpers** | Colección de ayudantes dinámicos de seguridad para validar la seguridad de un dominio. |
| **OWASP Purpleteam** | Regresión de seguridad SaaS y CLI. No necesita escribir pruebas, solo un archivo de trabajo. |

## Herramientas IAST

| Herramienta | Descripción |
|-------------|-------------|
| **Contrast Community Edition (CE)** | Versión gratuita para 1 aplicación y hasta 5 usuarios. Soporta Java y .NET. |

## Herramientas de código abierto (OSS)

Las bibliotecas o componentes de código abierto que los desarrolladores aprovechan para construir aplicaciones.

| Categoría | Herramientas |
|-----------|-------------|
| OSS (Open Source) | Plugin Maven Versions, Dependabot |
| Componentes vulnerables conocidos | OWASP Dependency Check, GitHub, Debricked |
| Calidad de código | SpotBugs, SonarQube, DeepScan |
| Entornos DevOps/CI | Grendel-Scan, Vega, Wapiti, Skipfish, SQLMap, Grabber, Ratproxy, Wfuzz |

::: tip ¿Qué elegir?
Para proyectos pequeños y aprendizaje, empieza con **OWASP ZAP** (DAST) y **SonarQube Community** (calidad de código). Son gratuitos y tienen comunidad activa.
:::

## Resumen

```text
Herramientas de auditoría web
├── SAST (análisis estático del código)
│   → CodeQL, Coverity, AppScan CodeSweep
├── DAST (pruebas dinámicas sobre app en ejecución)
│   → OWASP ZAP, StackHawk, Arachni
├── IAST (interactivo, durante ejecución)
│   → Contrast CE
└── Calidad de código / Dependencias
    → SonarQube, SpotBugs, Dependabot
```