---
title: 2.5 Análisis de resultados
description: Instrumentos para documentar, analizar y evaluar los hallazgos de pruebas de seguridad
tags: [resultados, riesgo, checklist, reporte, pentesting]
---

# 2.5 Análisis de resultados

Una vez realizado el plan de pruebas con las herramientas y técnicas seleccionadas, se deben **documentar los hallazgos** mediante instrumentos que permitan registrar, analizar y evaluar el estado actual de la seguridad de las aplicaciones web.

## Instrumentos de registro

### Checklist para registro de la evaluación

Permite obtener un informe del riesgo de una determinada aplicación web, registrando cada aplicación evaluada y el resultado de las pruebas practicadas. Esta información es útil para generar un **informe final del nivel de riesgo**.

::: info Recursos
- [OWASP Web Security Testing Guide Checklist](https://github.com/0xRadi/OWASP-Web-Checklist)
- [Web Security Testing Guide 4.2 (PDF)](https://github.com/OWASP/wstg/releases/download/v4.2/wstg-v4.2.pdf)
:::

### OWASP Risk Assessment Calculator

Calculadora de evaluación de riesgos OWASP que permite cuantificar el nivel de riesgo de cada vulnerabilidad encontrada.

::: info Herramienta en línea
[OWASP Risk Assessment Calculator](https://javierolmedo.github.io/OWASP-Calculator/)
:::

## Reporte técnico

El ejercicio de pruebas y la obtención del indicador de riesgo son productos importantes, **pero ante la organización** se deben presentar **reportes técnicos** con:

- Evidencias.
- Detalles de las pruebas realizadas.
- Resultados obtenidos.
- Recomendaciones para subsanar las vulnerabilidades.

### Estructura general de un reporte de pentesting

OWASP, en el capítulo 5 de su metodología, sugiere las partes mínimas de un informe:

```text
01. Introducción
   1. Control de versiones
   2. Tabla de contenido
   3. Equipo de trabajo
   4. Ámbito de aplicación
   5. Limitaciones
   6. Cronología
   7. Descargo de responsabilidades

02. Resumen ejecutivo
   a. Conclusiones
      1. Resumen de conclusiones
      2. Detalles de hallazgos
   b. Apéndices
```

## Modelo de reporte de pentesting

Para la presentación y sustentación ante la organización del ejercicio realizado (argumentando con detalles y pruebas las debilidades), se puede recurrir al **modelo de reporte de pentesting** de OWASP, incluyendo un plan de mejoramiento que reduzca la brecha de seguridad.

::: info Fuente
[OWASP Web Security Testing Guide — Reporting](https://owasp.org/www-project-web-security-testing-guide/v42/5-Reporting/README)
:::

::: tip Claves de un buen reporte
1. **Sé específico** — cada hallazgo con URL, parámetro y paso de reproducción.
2. **Incluye evidencia** — capturas, requests/responses, headers.
3. **Prioriza por riesgo** — usa la calculadora OWASP para ordenar hallazgos.
4. **Propón remediación** — no solo indiques el problema, sugiere la solución.
:::