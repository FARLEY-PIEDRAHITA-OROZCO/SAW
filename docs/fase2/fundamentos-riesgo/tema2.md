---
title: "Tema 2 · Identificación de riesgos"
description: "Riesgos informáticos, técnicas de hacking, OWASP, análisis y valoración de riesgos, ciclo PHVA y controles de seguridad."
tags: [fase2, riesgos, owasp, phva]
---

# Tema 2 · Identificación de riesgos

Se invita a ampliar el conocimiento sobre los riesgos informáticos, a través del siguiente video:

<iframe width="100%" height="420" src="https://www.youtube.com/embed/-5OkRKCWfyg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Video.** Riesgos informáticos

Dentro de los métodos de identificación de riesgos, la organización debe clasificar los tipos de riesgos en **altos, medios y bajos**; en este caso, en las aplicaciones web se revisan varios factores como el lenguaje de programación y la arquitectura del *software* para poder empezar a analizar y trabajar sobre las posibles amenazas o vulnerabilidades.

::: info Guía de gestión de riesgos MinTIC
Conozca la guía de gestión de riesgos del Ministerio de Tecnologías de la información y las comunicaciones (MinTIC) de Colombia:

[Ir al enlace](https://www.mintic.gov.co/gestionti/615/articles-5482_G7_Gestion_Riesgos.pdf)
:::

En el siguiente recurso se podrán conocer las técnicas de *hacking* utilizadas por los ciberdelincuentes:

## Figura 2. Técnicas de hacking utilizadas por los ciberdelincuentes

![Figura 2. Técnicas de hacking](/fase2/fundamentos-riesgo/img/img-1.fbbf5299.jpg)

::: info Explicación
La figura muestra las técnicas de *hacking* utilizadas por ciberdelincuentes: vectores de ataque, debilidades de seguridad, controles de seguridad, impactos técnicos e impactos en el negocio.
:::

El pirata informático mediante **vectores de ataque** utiliza técnicas de *hacking* e ingeniería social, revisa y analiza las debilidades de seguridad de la aplicación o sistema de información, revisa los controles de seguridad con que cuenta la herramienta o la infraestructura y los impactos, buscando el objetivo final: **afectar el negocio de la organización**.

::: info Norma ISO 27005
La prevención de los riesgos se origina del análisis de las amenazas y vulnerabilidades que se detectan en la organización. La **norma ISO 27005** contiene recomendaciones y normas que se deben llevar a cabo o tener en cuenta en los proyectos de aplicaciones web y que sirve de control ante futuras amenazas o riesgos informáticos.

[Ir al enlace](https://gmas2.envigado.gov.co/gmas/downloadFile.public?repositorioArchivo=000000001071&ruta=/documentacion/0000001359/0000000107)
:::

El comercio electrónico, que en Colombia está reglamentado a través de la **Ley 527 de 1999**, ha sido uno de los factores que ha llevado a las empresas a tener un crecimiento económico, pues dentro de la transformación digital una de las líneas de medición es la venta por medio de canales digitales o aplicaciones web.

Pero también existen diferentes factores de ataques, entre ellos la **suplantación**, muy común en este tipo de aplicaciones web, donde un pirata informático podrá alterar el contenido de una *cookie* y redireccionarlo a un servidor diferente.

![Comercio electrónico](/fase2/fundamentos-riesgo/img/img-2.31e4b42f.svg)

## Metodología o estándar para identificar riesgos en aplicaciones web

Una metodología para identificar riesgos en aplicaciones web podría ser a través de una **matriz de riesgo de seguridad de la información**, herramienta que permite analizar o dar valor a los riesgos.

![Matriz de riesgos](/fase2/fundamentos-riesgo/img/img-3.3231ae59.jpg)

La matriz de riesgos **3 × 3** permite clasificar y valorar las diferentes vulnerabilidades comunes según la metodología **OWASP** dentro de las aplicaciones de sitios web.

::: tip Descargar
[Matriz de Riesgos (PDF)](/fase2/fundamentos-riesgo/downloads/matrizRiesgos_pdf.pdf)
:::

Con la metodología *Open Web Application Security Project* (**OWASP**) se pueden aplicar técnicas de evaluación, tipos de controles frente a los riesgos, aplicar métodos de medición de controles y localizar vulnerabilidades.

## Figura 3. Vulnerabilidades

![Figura 3. Vulnerabilidades](/fase2/fundamentos-riesgo/img/img-4.9c6d7f51.jpg)

::: info Explicación
En esta figura se pueden identificar las diferentes vulnerabilidades que se pueden presentar: redirecciones y reenvíos no válidos, fallas en las restricciones de acceso a URL, almacenamiento criptográfico inseguro, configuración defectuosa de ciberseguridad, falsificación de sitios cruzados, referencias inseguras y directas a objetos, pérdida de autenticación, secuencia de comandos XSS e inyección.
:::

Las diferentes acciones que se tomen ayudarían a jerarquizar el impacto. Es importante que las aplicaciones en sitios web se corran en **dominios aptos y seguros** para la protección de la información de los usuarios.

## Modelo OSI en la capa 7

El **modelo OSI en la capa 7**, nivel de aplicación, presenta los siguientes protocolos:

## Figura 4. Protocolos capa aplicación

![Figura 4. Protocolos capa aplicación](/fase2/fundamentos-riesgo/img/img-5.a3e18293.jpg)

::: tip Nota
En esta figura se pueden evidenciar los protocolos para la aplicación en la capa 7 del modelo OSI, que es el nivel de aplicación: HTTP, POP3, IMAP, SMTP, FTP y DNS.
:::

---

## 2.1 Análisis de riesgos

En la identificación de riesgos se debe tener presente que:

> La **inseguridad** se enuncia en procesos de la composición de los resultados de un suceso y la **probabilidad de ocurrencia** está asociada a las fuentes de riesgos, comportamiento humano (interno y externo), comercio, economía y mercado, circunstancias políticas, tecnología, eventos naturales y, finalmente, organizacionales.

![La inseguridad](/fase2/fundamentos-riesgo/img/img-6.4ec69e00.jpg)

Dentro de la gestión del riesgo de seguridad de la información se debe proteger la empresa ante las posibles consecuencias como pérdidas de **confidencialidad, integridad, disponibilidad**; también se tienen otras como no-repudio, autenticidad o confiabilidad de los activos, el incumplimiento de la legislación, pérdidas financieras, impacto de orden público e impactos de orden internacional.

A continuación, se invita a conocer el ciclo **PHVA**, según la *Guía de gestión de riesgos de seguridad de la información* presentada por el Icontec:

## Figura 5. Ciclo PHVA

![Figura 5. Ciclo PHVA](/fase2/fundamentos-riesgo/img/img-7.96e4c11e.svg)

*Nota.* Adaptado de Organización Internacional de Normalización. (2015).

En las políticas, lo primero será determinar el **tratamiento** que se le dará a cada uno de los riesgos identificados en la aplicación, donde se puede tomar la decisión de **aceptarlos, transferirlos** o ejercer **controles apropiados** según el nivel de riesgo. Posteriormente habrá que determinar qué controles se pueden ejercer, una vez determinada la causa que los origina.

De acuerdo con lo anterior, los controles pueden ser de tipo:

| Control | Descripción |
|---------|-------------|
| **Controles preventivos** | Se anticipan a los eventos no deseados antes de que sucedan. |
| **Controles detectivos** | Permiten identificar eventos en el momento en el que se presentan. |
| **Controles correctivos** | Se caracterizan por la toma de acciones para prevenir eventos no deseados. |

![Control preventivo](/fase2/fundamentos-riesgo/img/img-8.1e4df26b.svg)

Los anteriores controles buscan **mitigar los riesgos de mayor impacto** y la posibilidad de ocurrencia. Luego, se buscará integrar estos controles a las políticas y procedimientos empresariales para configurar un **sistema de control denominado sistema de gestión de seguridad de la información**.

---

## 2.2 Herramientas de valoración de riesgos

![Herramientas de valoración](/fase2/fundamentos-riesgo/img/img-11.b70b1784.jpg)

La valoración del riesgo asegura que, para que el sistema logre los efectos previstos, con las mismas herramientas se pueden **prevenir o reducir efectos indeseados**, logrando la mejora progresiva, integrando e implementando acciones en sus procesos.

Se pueden encontrar también empresas en el mundo que ofrecen una gran cantidad de herramientas para la valoración del riesgo, como:

- **SpiraPlan** de Inflectra Corp.
- Rastreados a 1.
- **IsoMetriz** y otras.

![Herramientas de valoración](/fase2/fundamentos-riesgo/img/img-12.ab6fcb9e.svg)

Un **informe de valoración de riesgos** debe contener:

- **Todas las vulnerabilidades y amenazas** detectadas.
- La **matriz de riesgo** aplicada.
- La **información con los métodos y técnicas** utilizados.