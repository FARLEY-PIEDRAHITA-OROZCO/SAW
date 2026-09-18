---
title: 1.2 Infraestructura de aplicaciones web
description: Componentes que integran la infraestructura de una aplicación web y su arquitectura técnica
tags: [infraestructura, arquitectura, frontend, backend, servidor]
---

# 1.2 Infraestructura de aplicaciones web

Las aplicaciones web han ganado terreno en las organizaciones por su flexibilidad, compatibilidad, capacidad de gestionar información y rapidez de implementación. Requieren una **infraestructura centralizada** que facilita su mantenimiento, y a los usuarios les permite acceder desde cualquier dispositivo con un navegador conectado a una red local o a internet.

## Componentes de una aplicación web

| Componente | Descripción |
|------------|-------------|
| **Usuario** | Persona u otra aplicación que solicita acceso a un recurso web. |
| **Dispositivo de acceso** | Equipo físico (computador, portátil, tableta, móvil) desde el cual el usuario se conecta. |
| **Navegador web** | Programa que permite navegar y visualizar recursos enriquecidos (texto, imágenes, video, audio). Ej.: Edge, Firefox, Chrome, Opera, Safari, Brave. |
| **Servidor web** | Programa especializado (en hardware o virtual) con recursos de procesamiento, almacenamiento y tráfico, que aloja los recursos web. |
| **Lenguajes de programación** | Permiten programar la lógica de negocio de la aplicación. HTML no es de alto nivel; se usan lenguajes compilados o interpretados. |
| **Motor de base de datos** | Programa que almacena la información de forma sistematizada en bases de datos, tablas y registros. |

## Arquitectura de una aplicación web

![Arquitectura front-end y back-end](/assets/arquitectura-web.svg)

Flujo de una solicitud de un recurso web:

1. El **usuario** solicita un recurso web a través de un **navegador**.
2. El navegador realiza la petición del recurso mediante el protocolo **HTTP**.
3. El **servidor web** recibe la petición y procesa la respuesta:
   - Procesa la lógica de negocio.
   - Procesa información desde las bases de datos.
   - Conforma la respuesta.
4. El servidor devuelve la respuesta hacia el navegador.
5. El navegador despliega el resultado al usuario.

```text
┌─────────┐     HTTP      ┌──────────────┐      ┌──────────────┐
│ Usuario │ ────────────▶ │  Navegador   │ ───▶ │ Servidor web │
│ (cliente│◀──────────── │ (cliente)    │ ◀─── │ + lógica     │
└─────────┘   Respuesta  └──────────────┘      │ + base datos │
                                               └──────────────┘
```

## Tipos de aplicaciones web comunes

| Tipo | Ejemplos |
|------|----------|
| **Hogar inteligente** | Termostatos, control de televisores, detectores de humo, cámaras de seguridad, cafeteras. |
| **Fuera del hogar** | Automóviles en red, prendas tecnológicas, monitores de salud, apps de ciclismo, gafas inteligentes. |
| **Wearables** | Dispositivos médicos, marcapasos, bombas de insulina; monitorean geolocalización, frecuencia cardíaca, sueño, etc. |
| **Transporte** | Vehículos conectados, sensores de proximidad, parqueo, vehículos autónomos, peajes remotos. |
| **Contadores inteligentes** | Medición de energía, calefacción, climatización y agua. |

::: warning Relevancia para la seguridad
Cada tipo de aplicación web amplía la **superficie de ataque** (IoT, wearables, vehículos conectados). Comprender la arquitectura técnica permite dimensionar el ejercicio de aseguramiento de aplicaciones web.
:::