import { defineConfig } from 'vitepress'

const fase1Sidebar = [
  {
    text: 'Fase 1 · Análisis',
    collapsed: false,
    items: [
      { text: 'Introducción', link: '/fase1/introduccion' },
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
  {
    text: 'Comunicación oral y escrita',
    collapsed: true,
    items: [
      {
        text: 'Argumentación',
        collapsed: true,
        items: [
          { text: 'Introducción', link: '/fase1/comunicacion/argumentacion/introduccion' },
          { text: 'Tema 1 · La argumentación', link: '/fase1/comunicacion/argumentacion/tema1' },
          { text: 'Tema 2 · Pensamiento y lenguaje', link: '/fase1/comunicacion/argumentacion/tema2' },
          { text: 'Tema 3 · Tipos de argumentación', link: '/fase1/comunicacion/argumentacion/tema3' },
          { text: 'Síntesis', link: '/fase1/comunicacion/argumentacion/sintesis' },
        ],
      },
      {
        text: 'Comunicándonos',
        collapsed: true,
        items: [
          { text: 'Introducción', link: '/fase1/comunicacion/comunicandonos/introduccion' },
          { text: 'Tema 1 · La comunicación', link: '/fase1/comunicacion/comunicandonos/tema1' },
          { text: 'Tema 2 · Comunicación verbal y no verbal', link: '/fase1/comunicacion/comunicandonos/tema2' },
          { text: 'Síntesis', link: '/fase1/comunicacion/comunicandonos/sintesis' },
        ],
      },
      {
        text: 'Escribiendo',
        collapsed: true,
        items: [
          { text: 'Introducción', link: '/fase1/comunicacion/escribiendo/introduccion' },
          { text: 'Tema 1 · Producción de textos', link: '/fase1/comunicacion/escribiendo/tema1' },
          { text: 'Tema 2 · Comunicación digital', link: '/fase1/comunicacion/escribiendo/tema2' },
          { text: 'Síntesis', link: '/fase1/comunicacion/escribiendo/sintesis' },
        ],
      },
      {
        text: 'Relacionando',
        collapsed: true,
        items: [
          { text: 'Introducción', link: '/fase1/comunicacion/relacionando/introduccion' },
          { text: 'Tema 1 · Semiótica y semiología', link: '/fase1/comunicacion/relacionando/tema1' },
          { text: 'Tema 2 · La interpretación', link: '/fase1/comunicacion/relacionando/tema2' },
          { text: 'Síntesis', link: '/fase1/comunicacion/relacionando/sintesis' },
        ],
      },
    ],
  },
  {
    text: 'Tecnologías de la Información y la Comunicación',
    collapsed: true,
    items: [
      { text: 'Introducción', link: '/fase1/tic/introduccion' },
      { text: 'Tema 1 · Software', link: '/fase1/tic/tema1' },
      { text: 'Tema 2 · Internet', link: '/fase1/tic/tema2' },
      { text: 'Tema 3 · Ofimática', link: '/fase1/tic/tema3' },
      { text: 'Tema 4 · Evaluación', link: '/fase1/tic/tema4' },
      { text: 'Tema 5 · Mejora continua', link: '/fase1/tic/tema5' },
      { text: 'Síntesis', link: '/fase1/tic/sintesis' },
    ],
  },
]

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
      {
        text: 'Fase 1 · Análisis',
        activeMatch: '/fase1/',
        items: [
          { text: 'Introducción', link: '/fase1/introduccion' },
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
          {
            text: 'Comunicación',
            items: [
              { text: 'Argumentación', link: '/fase1/comunicacion/argumentacion/' },
              { text: 'Comunicándonos', link: '/fase1/comunicacion/comunicandonos/' },
              { text: 'Escribiendo', link: '/fase1/comunicacion/escribiendo/' },
              { text: 'Relacionando', link: '/fase1/comunicacion/relacionando/' },
            ],
          },
          { text: 'TIC', link: '/fase1/tic/' },
        ],
      },
      {
        text: 'Anexos',
        items: [
          { text: 'Glosario', link: '/glosario' },
          { text: 'Referencias', link: '/referencias' },
        ],
      },
    ],

    sidebar: {
      '/fase1/': fase1Sidebar,
      '/glosario': fase1Sidebar,
      '/referencias': fase1Sidebar,
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