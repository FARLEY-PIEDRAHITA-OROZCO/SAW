---
title: "2.3 OWASP Top 10"
description: "Las 10 vulnerabilidades más críticas en aplicaciones web según OWASP 2021"
tags: [owasp-top-10, vulnerabilidades, inyeccion, xss, idor, ssrf]
---

# 2.3 OWASP Top 10

De acuerdo con la comunidad de OWASP, se generan reportes sobre las vulnerabilidades que más se encuentran en las aplicaciones web. A continuación se presenta el **Top 10 de OWASP 2021**.

---

## A01 — Pérdida del control de acceso (Broken Access Control)

> Un usuario **sin privilegios** puede acceder a un recurso al que no debería acceder.

El control de acceso permite cumplir una política de permisos y roles: que un usuario pueda acceder solo a determinados lugares. Estas restricciones impiden que los usuarios actúen fuera de los permisos y llevan un control de quién accede a cada recurso.

**Vulnerabilidades comunes:**
- IDOR (*Insecure Direct Object References*)
- Elevación de privilegios desde cliente
- Manipulación de JWT o tokens
- Configuración defectuosa de control de acceso en CORS

---

## A02 — Fallos criptográficos (Cryptographic Failures)

> Datos que deberían estar cifrados (credenciales, datos bancarios, información confidencial) son expuestos.

Para que estos datos sean vistos únicamente por las personas autorizadas, hay que aplicarles un **cifrado con algoritmos y protocolos estándares y robustos**.

**Buenas prácticas:**
- No almacenar contraseñas en texto plano (usar bcrypt, Argon2)
- Cifrar comunicaciones con TLS 1.2+
- Usar algoritmos actualizados (AES-256, RSA ≥2048 bits)

---

## A03 — Inyección (Injection)

> Un atacante envía datos dañinos que la aplicación ejecuta. Desde 2021, **XSS** (*Cross-site Scripting*) forma parte de esta categoría.

**Tipos comunes:**
- **SQL Injection** — Inyección de consultas SQL en campos de entrada.
- **XSS** — Inyección de scripts maliciosos en un sitio web.
- **OS Command Injection** — Ejecución de comandos del sistema operativo.

**Ejemplo de SQLi:**
```sql
-- Entrada del usuario: ' OR '1'='1
SELECT * FROM usuarios WHERE nombre = '' OR '1'='1';
-- Resultado: retorna TODOS los usuarios (bypass de autenticación)
```

**Prevención:**
- Usar *prepared statements* / *parameterized queries*
- Validar y sanitizar toda entrada de usuario
- Usar ORM cuando sea posible

---

## A04 — Diseño inseguro (Insecure Design)

> La seguridad no fue incluida **desde la fase de diseño** de la aplicación web.

Se centra en la detección de riesgos relacionados con el diseño y las fallas arquitectónicas, y refuerza:
- Modelado de amenazas
- Patrones de diseño seguros
- Arquitecturas de referencia

---

## A05 — Configuración de seguridad defectuosa (Security Misconfiguration)

> Cuentas por defecto, versiones obsoletas, directorios desprotegidos, configuración innecesaria habilitada.

**Recomendaciones:**
- Eliminar credenciales por defecto del servidor, aplicaciones y dispositivos.
- Desactivar funciones innecesarias (paneles de admin, métodos HTTP no usados).
- Revisar permisos de archivos y directorios.

---

## A06 — Componentes vulnerables y obsoletos (Vulnerable and Outdated Components)

> Un atacante compromete un sistema mediante vulnerabilidades **ya conocidas** en componentes comunes: versión del SO, bibliotecas de terceros, frameworks desactualizados.

**Prevención:**
- Mantener un inventario de dependencias.
- Usar herramientas de escaneo de dependencias (Dependabot, Snyk, OWASP Dependency Check).
- Eliminar componentes no usados.

---

## A07 — Fallos de identificación y autenticación (Identification and Authentication Failures)

> Interfaces de acceso sin control de intentos, contraseñas débiles o ausencia de autenticación multifactor (2FA).

**Vulnerabilidades:**
- Ataques de fuerza bruta o diccionario permitidos.
- Contraseñas débiles aceptadas.
- Falta de MFA (*Multi-Factor Authentication*).

---

## A08 — Fallos de integridad del software y los datos (Software and Data Integrity Failures)

> Actualizaciones automáticas no verificadas que permiten a atacantes modificarlas y distribuirlas.

**Prevención:**
- Verificar integridad de paquetes instalados (hashes, firmas digitales).
- Usar herramientas como Sigstore para firmar artefactos de CI/CD.
- Revisar cambios en dependencias antes de incorporarlos.

---

## A09 — Fallos en el registro y la supervisión de la seguridad (Security Logging and Monitoring Failures)

> Falta de registros (*logs*) sobre eventos, tanto válidos como fallidos. Si estos registros no se almacenan remotamente, no se pueden detectar infracciones.

**Requisitos mínimos:**
- Registrar todos los inicios de sesión, controles de acceso y fallos de entrada.
- Almacenar logs en un sistema centralizado (SIEM).
- Establecer alertas para patrones sospechosos.

---

## A10 — Falsificación de solicitud del lado del servidor (SSRF)

> Cuando la aplicación obtiene un recurso externo sin validar la URL, un atacante puede modificarla para realizar **peticiones no autorizadas** a recursos internos.

**Ejemplo conceptual:**
```
URL original:  https://api.empresa.com/datos
URL manipulada: http://192.168.1.1/admin/config
```

**Prevención:**
- Validar y sanitizar las URLs solicitadas.
- Usar listas blancas (*allowlist*) de dominios/IPs permitidos.
- Segmentar la red interna.

---

## Resumen visual

| # | Vulnerabilidad | Nivel de riesgo |
|---|----------------|----------------|
| A01 | Pérdida del control de acceso | 🔴 Crítico |
| A02 | Fallos criptográficos | 🔴 Crítico |
| A03 | Inyección | 🔴 Crítico |
| A04 | Diseño inseguro | 🟠 Alto |
| A05 | Configuración defectuosa | 🟠 Alto |
| A06 | Componentes vulnerables | 🟠 Alto |
| A07 | Fallos de autenticación | 🟠 Alto |
| A08 | Fallos de integridad | 🟡 Medio |
| A09 | Fallos de registro/monitoreo | 🟡 Medio |
| A10 | SSRF | 🟠 Alto |

::: info Fuente
[OWASP Top 10:2021](https://owasp.org/Top10/)
:::