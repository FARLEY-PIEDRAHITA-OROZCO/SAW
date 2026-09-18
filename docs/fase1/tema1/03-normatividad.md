---
title: 1.3 Normatividad y estándares
description: Normas y estándares para la gestión de la seguridad de aplicaciones web (ISO 27001, 27002, 25010)
tags: [normatividad, iso, 27001, 27002, 25010, sgsi, pdca]
---

# 1.3 Normatividad y estándares

La seguridad de las aplicaciones web **no depende únicamente de las buenas prácticas de programación**. Poseer una aplicación pública que gestione información importante obliga a contar con controles que garanticen los **pilares de la seguridad de la información**:

![Pilares de la seguridad de la información](/assets/pilares-cia.svg)

Para cumplir estos pilares han surgido normas, estándares y buenas prácticas. Los principales son:

## Norma ISO/IEC 27001:2013

Brinda los lineamientos para la adopción de **Sistemas de Gestión de la Seguridad de la Información (SGSI)**, como estrategias corporativas de seguridad.

### Principios del SGSI

- [x] Concientización de la necesidad de adoptar una cultura de seguridad.
- [x] Delegación de responsabilidades sobre la seguridad de la información.
- [x] Involucrar la alta dirección en la estrategia de seguridad.
- [x] Seleccionar los controles adecuados para garantizar la seguridad de la información.
- [x] Adoptar la seguridad como elemento esencial de los sistemas de información.
- [x] Adoptar estrategias activas para la prevención de incidentes.
- [x] Adoptar la mejora continua en la evaluación de la seguridad.

### Ciclo PDCA (PHVA)

La metodología de adopción de la norma usa el ciclo **PDCA** (*Plan-Do-Check-Act*; en español **PHVA**: Planear, Hacer, Verificar, Actuar).

![Fases de un SGSI](/assets/sgsi-infografia.svg)

| Fase | Actividades |
|------|-------------|
| **Planear** | Diseñar el SGSI; análisis de procesos; definir alcance; elaborar política de seguridad; identificar y evaluar inventario de activos; análisis de riesgos; generar la declaración de aplicabilidad (SoA). |
| **Hacer** | Generar y aplicar el plan de mitigación de riesgos; implementar controles seleccionados; administración del cambio. |
| **Verificar** | Revisiones gerenciales e independientes; auditorías internas; revisiones técnicas. |
| **Actuar** | Implementar mejoras; acciones preventivas y correctivas; comunicar resultados. |

::: tip Aplicación a aplicaciones web
Si una organización está certificada (o busca certificarse) bajo la 27001, las aplicaciones web deben:

1. Ser objeto de **análisis, planificación y evaluación** dentro del SGSI, incluyendo su análisis de riesgos.
2. Ser evaluadas **permanentemente** ante los nuevos retos tecnológicos y amenazas.
:::

## Norma ISO/IEC 27002:2013

Guía para la **implementación de controles** de seguridad, a partir de objetivos, controles y estrategias de implementación. Compuesta por **14 dominios, 35 objetivos de control y 114 controles**.

### Controles relacionados con aplicaciones web

- [x] Documento con política de seguridad de la información.
- [x] Asignación de responsabilidades relativas a la seguridad.
- [x] Formación y concienciación sobre la seguridad de la información.
- [x] Notificación de eventos de seguridad de la información.
- [x] Gestión de los derechos de propiedad intelectual.
- [x] Protección de activos y documentación de la organización.
- [x] Protección de datos y privacidad de información sensible de carácter personal.

### Medidas para la seguridad web

| Medida | Detalle |
|--------|---------|
| **Control de acceso al código fuente** | Gestionar la seguridad del código fuente y las personas que acceden. |
| **Procedimientos de control de cambios** | Cambios evaluados y aprobados antes de incluirlos; control centralizado; plan de retroceso; mínimo trastorno para la organización. |
| **Revisión técnica tras cambios** | Evaluar el sistema después de aplicar cambios para verificar que no haya fallas. |
| **Fugas de información** | Adoptar controles para detectar fugas por inadecuados cambios. |
| **Desarrollo externo de aplicaciones** | Verificar requisitos de seguridad, propiedad intelectual, calidad y certificaciones del proveedor. |
| **Gestión de vulnerabilidades** | Priorizar vulnerabilidades de mayor impacto; asignar roles; validar con servicios centralizados; **probar parches en entornos de prueba antes de producción**. |

## Norma ISO/IEC 25010:2013

Aplica a la industria del desarrollo de software para **mejorar la calidad de los productos**, con base en:

| Característica | Descripción |
|----------------|-------------|
| **Adecuación funcional** | El sistema satisface las necesidades declaradas en condiciones específicas. |
| **Eficiencia de desempeño** | Evaluación ante escenarios de volumen, carga, estrés, escalabilidad y rendimiento. |
| **Compatibilidad** | Funcionamiento ante diferentes características de software y hardware. |
| **Usabilidad** | Interfaz y experiencia de usuario para aprender a usar el software rápidamente. |
| **Confiabilidad** | Capacidad de trabajar sin fallas durante un periodo en un entorno específico. |
| **Seguridad** | Análisis mediante pruebas de penetración, vulnerabilidad, *ethical hacking* o análisis estático. |
| **Mantenibilidad** | Facilidad para mantener, analizar, cambiar y probar el sistema. |
| **Portabilidad** | Capacidad de cambiar entre versiones de sistema operativo sin mayores complicaciones. |

![Calidad de software](/assets/calidad-software.svg)

### Video recomendado

<iframe width="100%" height="420" src="https://www.youtube.com/embed/jyQfY4YZwM8" title="Norma ISO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>