---
title: "2.1 Metodologías para la gestión de vulnerabilidades"
description: "Metodología OWASP para la identificación de vulnerabilidades en aplicaciones web"
tags: [owasp, pruebas, vulnerabilidades]
---

# 2.1 Metodologías para la gestión de vulnerabilidades

OWASP propone una **metodología para la identificación de vulnerabilidades** basada en pruebas de seguridad sobre las aplicaciones web, con la finalidad de encontrar las debilidades presentes en un sistema.

## Los tres pilares del modelo de pruebas OWASP

| Pilares | Quién hace qué |
|---------|----------------|
| **Probador / Auditor** | La persona que realiza las pruebas y validaciones. |
| **Herramienta y metodología** | La guía de pruebas de OWASP (WSTG). |
| **Aplicación** | El objeto que se desea probar. |

## Tipos de pruebas

### Pruebas pasivas

El probador **intenta comprender la lógica** de la aplicación y la explora como un usuario normal. Se pueden usar herramientas para la recopilación de información, como un **proxy HTTP** para observar todas las solicitudes y respuestas.

Al final de esta fase, el probador debe comprender:
- Todos los puntos de acceso del sistema.
- La funcionalidad completa: encabezados HTTP, parámetros, cookies, APIs, patrones de tecnología, etc.

### Pruebas activas

El probador comienza a aplicar las metodologías descritas en las **12 categorías de OWASP**:

| # | Categoría |
|---|-----------|
| 1 | Recopilación de información |
| 2 | Pruebas de administración de configuración e implementación |
| 3 | Pruebas de administración de identidades |
| 4 | Pruebas de autenticación |
| 5 | Pruebas de autorización |
| 6 | Pruebas de gestión de sesiones |
| 7 | Pruebas de validación de entrada |
| 8 | Manejo de errores |
| 9 | Criptografía |
| 10 | Pruebas de lógica empresarial |
| 11 | Pruebas del lado del cliente |
| 12 | Pruebas de API |

::: tip Flujo recomendado
Un punto de entrada típico puede ser una URL como:
```
https://www.example.com/appx?a=1&b=1
```
En este caso, la aplicación expone **dos parámetros** (`a` y `b`), que representan dos puntos de acceso que son objetivos para las pruebas. Todos los puntos de entrada encontrados en la fase pasiva son objetivos para pruebas activas.
:::