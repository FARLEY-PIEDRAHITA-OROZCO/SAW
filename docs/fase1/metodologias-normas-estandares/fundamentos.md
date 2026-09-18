---
title: "Fundamentos de la gestión de vulnerabilidades"
description: "Conceptos fundamentales de la gestión de vulnerabilidades en aplicaciones web"
tags: [conceptos, vulnerabilidad, amenaza, riesgo]
---

# Fundamentos de la gestión de vulnerabilidades

Dentro del ejercicio de la **gestión de vulnerabilidades en aplicaciones web** se hace uso de metodologías, técnicas y herramientas especializadas, las cuales presentan términos poco comunes que es necesario reconocer para interpretar adecuadamente la información y transmitir los resultados obtenidos.

## Conceptos base

| Concepto | Definición |
|----------|------------|
| **Vulnerabilidad** | Debilidad o fallo en un sistema de información que pone en riesgo la seguridad de la información. |
| **Amenaza** | Toda acción que aprovecha una vulnerabilidad para atentar contra la seguridad de un sistema de información. |
| **Riesgo** | Probabilidad de que se produzca un incidente de seguridad, materializándose una amenaza y causando pérdidas o daños. |

![Relación de conceptos](/fase1/metodologias-normas-estandares/img/conceptos-relacion.svg)

> La presencia de una **vulnerabilidad no significa que esté afectando** la información. El riesgo resulta del aprovechamiento de una vulnerabilidad y la materialización de una amenaza.

## Otros conceptos importantes

| Término | Significado |
|---------|-------------|
| **Bug** | Error o fallo en un programa que produce un resultado o comportamiento inesperado. |
| **Patch** | Pieza de programa adicional que corrige un bug o adiciona funcionalidades. También llamado "parche". |
| **Testing** | Conjunto de técnicas y pruebas usadas en la auditoría de aplicaciones web para verificar si son vulnerables. |
| **Medida** | Mediciones realizadas en una prueba de auditoría, útiles para tomar decisiones. |
| **Métrica** | Instrumento que permite interpretar una medición frente a una escala, identificando el estado actual del objeto evaluado. |
| **KPI** | *Key Performance Indicator*: indicador clave de desempeño que representa la eficacia de las acciones adoptadas. |

![Uso de medidas, métricas y KPI](/fase1/metodologias-normas-estandares/img/medidas-metricas-kpi.svg)

Estos conceptos permiten comprender mejor el ejercicio realizado, interpretar los resultados obtenidos y generar **informes técnicos con datos coherentes** que demuestren el estado actual de la seguridad de una aplicación web.

## Riesgo en una fórmula

Muchos profesionales expresan el riesgo como una relación entre activos, amenazas y vulnerabilidades:

```text
Riesgo = f(Activos, Amenazas, Vulnerabilidades, Impacto)
```

| Variable | Descripción |
|----------|-------------|
| Activo | Información, recurso o proceso de valor para la organización |
| Amenaza | Agente o evento que puede causar daño |
| Vulnerabilidad | Debilidad explotable |
| Impacto | Consecuencia de que la amenaza se materialice |

::: tip Para recordar
**Riesgo = Amenaza × Vulnerabilidad × Impacto**. Reducir cualquiera de estos factores reduce el riesgo de una aplicación web.
:::

## Glosario rápido

- **2FA** — Doble factor de autenticación; agrega una capa de seguridad a la autenticación.
- **GUI** — Interfaz gráfica de usuario.
- **URL** — Localizador de recursos uniforme; dirección que apunta a un recurso en la web.