import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SAW Wiki',
  description:
    'Wiki personal de Seguridad de Aplicaciones Web - Técnico SENA',
  lang: 'es-ES',

  base: '/SAW/',

  head: [
    ['meta', { name: 'theme-color', content: '#00ff9d' }],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/SAW/favicon.svg',
      },
    ],
  ],

  lastUpdated: true,

  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'SAW Wiki',

    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Introducción', link: '/introduccion' },
      {
        text: 'Fase 1 · Análisis',
        activeMatch: '/fase1/',
        items: [
          { text: 'Resumen de la fase', link: '/fase1/' },
          {
            text: 'Tema 1 · Fundamentos',
            items: [
              { text: '1.1 Conceptos', link: '/fase1/tema1/01-conceptos' },
              { text: '1.2 Infraestructura', link: '/fase1/tema1/02-infraestructura' },
              { text: '1.3 Normatividad', link: '/fase1/tema1/03-normatividad' },
              { text: '1.4 Metodologías', link: '/fase1/tema1/04-metodologias' },
            ],
          },
          {
            text: 'Tema 2 · Vulnerabilidades',
            items: [
              { text: '2.1 Gestión de vulnerabilidades', link: '/fase1/tema2/01-gestion-vulnerabilidades' },
              { text: '2.2 Pentesting', link: '/fase1/tema2/02-pentesting' },
              { text: '2.3 OWASP Top 10', link: '/fase1/tema2/03-owasp-top-10' },
              { text: '2.4 Herramientas', link: '/fase1/tema2/04-herramientas' },
              { text: '2.5 Análisis de resultados', link: '/fase1/tema2/05-analisis-resultados' },
            ],
          },
        ],
      },
      { text: 'Glosario', link: '/glosario' },
      { text: 'Referencias', link: '/referencias' },
    ],

    sidebar: {
      '/fase1/': [
        {
          text: 'Fase 1 · Análisis',
          collapsed: false,
          items: [
            { text: 'Resumen de la fase', link: '/fase1/' },
          ],
        },
        {
          text: 'Tema 1 · Fundamentos de seguridad',
          collapsed: false,
          items: [
            { text: '1.1 Conceptos', link: '/fase1/tema1/01-conceptos' },
            { text: '1.2 Infraestructura de apps web', link: '/fase1/tema1/02-infraestructura' },
            { text: '1.3 Normatividad y estándares', link: '/fase1/tema1/03-normatividad' },
            { text: '1.4 Metodologías', link: '/fase1/tema1/04-metodologias' },
          ],
        },
        {
          text: 'Tema 2 · Vulnerabilidades',
          collapsed: false,
          items: [
            { text: '2.1 Gestión de vulnerabilidades', link: '/fase1/tema2/01-gestion-vulnerabilidades' },
            { text: '2.2 Pentesting', link: '/fase1/tema2/02-pentesting' },
            { text: '2.3 OWASP Top 10', link: '/fase1/tema2/03-owasp-top-10' },
            { text: '2.4 Herramientas especializadas', link: '/fase1/tema2/04-herramientas' },
            { text: '2.5 Análisis de resultados', link: '/fase1/tema2/05-analisis-resultados' },
          ],
        },
      ],
    },

    outline: {
      level: [2, 3],
      label: 'En esta página',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar' },
          modal: {
            noResultsText: 'Sin resultados',
            resetButtonTitle: 'Limpiar',
            footer: { selectText: 'seleccionar', navigateText: 'navegar', closeText: 'cerrar' },
          },
        },
      },
    },

    docFooter: {
      prev: 'Anterior',
      next: 'Siguiente',
    },

    lightModeSwitchTitle: 'Cambiar tema',
    darkModeSwitchLabel: 'Tema',
    returnToTopLabel: 'Volver arriba',
    sidebarMenuLabel: 'Menú',
    lastUpdated: { text: 'Actualizado', formatOptions: { dateStyle: 'short', timeStyle: 'short' } },
  },
})