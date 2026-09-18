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
      {
        text: 'Comunicación',
        activeMatch: '/comunicacion/',
        items: [
          { text: 'Argumentación', link: '/comunicacion/argumentacion/' },
          { text: 'Comunicándonos', link: '/comunicacion/comunicandonos/' },
          { text: 'Escribiendo', link: '/comunicacion/escribiendo/' },
          { text: 'Relacionando', link: '/comunicacion/relacionando/' },
        ],
      },
      { text: 'TIC', link: '/tic/' },
      { text: 'Glosario', link: '/glosario' },
      { text: 'Referencias', link: '/referencias' },
    ],

    sidebar: {
      '/comunicacion/argumentacion/': [
        {
          text: 'Comunicación oral y escrita · Argumentación',
          collapsed: false,
          items: [
            { text: 'Inicio', link: '/comunicacion/argumentacion/' },
            { text: 'Introducción', link: '/comunicacion/argumentacion/introduccion' },
            { text: 'Tema 1 · La argumentación', link: '/comunicacion/argumentacion/tema1' },
            { text: 'Tema 2 · Bases de la argumentación', link: '/comunicacion/argumentacion/tema2' },
            { text: 'Tema 3 · Tipos de argumentación', link: '/comunicacion/argumentacion/tema3' },
            { text: 'Síntesis', link: '/comunicacion/argumentacion/sintesis' },
          ],
        },
      ],
      '/comunicacion/comunicandonos/': [
        {
          text: 'Comunicación oral y escrita · Comunicándonos',
          collapsed: false,
          items: [
            { text: 'Inicio', link: '/comunicacion/comunicandonos/' },
            { text: 'Introducción', link: '/comunicacion/comunicandonos/introduccion' },
            { text: 'Tema 1 · La comunicación', link: '/comunicacion/comunicandonos/tema1' },
            { text: 'Tema 2 · La comunicación asertiva', link: '/comunicacion/comunicandonos/tema2' },
            { text: 'Síntesis', link: '/comunicacion/comunicandonos/sintesis' },
          ],
        },
      ],
      '/comunicacion/escribiendo/': [
        {
          text: 'Comunicación oral y escrita · Escribiendo',
          collapsed: false,
          items: [
            { text: 'Inicio', link: '/comunicacion/escribiendo/' },
            { text: 'Introducción', link: '/comunicacion/escribiendo/introduccion' },
            { text: 'Tema 1 · Producción de textos', link: '/comunicacion/escribiendo/tema1' },
            { text: 'Tema 2 · Comunicación digital', link: '/comunicacion/escribiendo/tema2' },
            { text: 'Síntesis', link: '/comunicacion/escribiendo/sintesis' },
          ],
        },
      ],
      '/comunicacion/relacionando/': [
        {
          text: 'Comunicación oral y escrita · Relacionando',
          collapsed: false,
          items: [
            { text: 'Inicio', link: '/comunicacion/relacionando/' },
            { text: 'Introducción', link: '/comunicacion/relacionando/introduccion' },
            { text: 'Tema 1 · Semiótica y semiología', link: '/comunicacion/relacionando/tema1' },
            { text: 'Tema 2 · La interpretación', link: '/comunicacion/relacionando/tema2' },
            { text: 'Síntesis', link: '/comunicacion/relacionando/sintesis' },
          ],
        },
      ],
      '/tic/': [
        {
          text: 'Tecnologías de la Información y la Comunicación',
          collapsed: false,
          items: [
            { text: 'Inicio', link: '/tic/' },
            { text: 'Introducción', link: '/tic/introduccion' },
            { text: 'Tema 1', link: '/tic/tema1' },
            { text: 'Tema 2', link: '/tic/tema2' },
            { text: 'Tema 3', link: '/tic/tema3' },
            { text: 'Tema 4', link: '/tic/tema4' },
            { text: 'Tema 5', link: '/tic/tema5' },
            { text: 'Síntesis', link: '/tic/sintesis' },
          ],
        },
      ],

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