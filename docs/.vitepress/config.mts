import { defineConfig } from 'vitepress'

const metodologiasSidebar = [
  {
    text: 'Metodologías, normas y estándares',
    collapsed: false,
    items: [
      { text: 'Inicio de la OVA', link: '/fase1/metodologias-normas-estandares/' },
      { text: 'Introducción', link: '/fase1/metodologias-normas-estandares/introduccion' },
      { text: 'Fundamentos', link: '/fase1/metodologias-normas-estandares/fundamentos' },
      { text: 'Infraestructura de aplicaciones web', link: '/fase1/metodologias-normas-estandares/infraestructura' },
      { text: 'Normatividad y estándares', link: '/fase1/metodologias-normas-estandares/normatividad' },
      { text: 'Metodologías', link: '/fase1/metodologias-normas-estandares/metodologias' },
      { text: 'Gestión de vulnerabilidades', link: '/fase1/metodologias-normas-estandares/gestion-vulnerabilidades' },
      { text: 'Pentesting', link: '/fase1/metodologias-normas-estandares/pentesting' },
      { text: 'OWASP Top 10', link: '/fase1/metodologias-normas-estandares/owasp-top-10' },
      { text: 'Herramientas especializadas', link: '/fase1/metodologias-normas-estandares/herramientas' },
      { text: 'Análisis de resultados', link: '/fase1/metodologias-normas-estandares/analisis-resultados' },
    ],
  },
]

const argumentacionSidebar = [
  {
    text: 'COMUNICACIÓN · ARGUMENTACIÓN',
    collapsed: false,
    items: [
      { text: 'Inicio de la OVA', link: '/fase1/argumentacion/' },
      { text: 'Introducción', link: '/fase1/argumentacion/introduccion' },
      { text: 'Tema 1 · La argumentación', link: '/fase1/argumentacion/tema1' },
      { text: 'Tema 2 · Pensamiento y lenguaje', link: '/fase1/argumentacion/tema2' },
      { text: 'Tema 3 · Tipos de argumentación', link: '/fase1/argumentacion/tema3' },
      { text: 'Síntesis', link: '/fase1/argumentacion/sintesis' },
    ],
  },
]

const comunicandonosSidebar = [
  {
    text: 'COMUNICACIÓN · COMUNICÁNDONOS',
    collapsed: false,
    items: [
      { text: 'Inicio de la OVA', link: '/fase1/comunicandonos/' },
      { text: 'Introducción', link: '/fase1/comunicandonos/introduccion' },
      { text: 'Tema 1 · La comunicación', link: '/fase1/comunicandonos/tema1' },
      { text: 'Tema 2 · Comunicación verbal y no verbal', link: '/fase1/comunicandonos/tema2' },
      { text: 'Síntesis', link: '/fase1/comunicandonos/sintesis' },
    ],
  },
]

const escribiendoSidebar = [
  {
    text: 'COMUNICACIÓN · ESCRIBIENDO',
    collapsed: false,
    items: [
      { text: 'Inicio de la OVA', link: '/fase1/escribiendo/' },
      { text: 'Introducción', link: '/fase1/escribiendo/introduccion' },
      { text: 'Tema 1 · Producción de textos', link: '/fase1/escribiendo/tema1' },
      { text: 'Tema 2 · Comunicación digital', link: '/fase1/escribiendo/tema2' },
      { text: 'Síntesis', link: '/fase1/escribiendo/sintesis' },
    ],
  },
]

const relacionandoSidebar = [
  {
    text: 'COMUNICACIÓN · RELACIONANDO',
    collapsed: false,
    items: [
      { text: 'Inicio de la OVA', link: '/fase1/relacionando/' },
      { text: 'Introducción', link: '/fase1/relacionando/introduccion' },
      { text: 'Tema 1 · Semiótica y semiología', link: '/fase1/relacionando/tema1' },
      { text: 'Tema 2 · La interpretación', link: '/fase1/relacionando/tema2' },
      { text: 'Síntesis', link: '/fase1/relacionando/sintesis' },
    ],
  },
]

const ticSidebar = [
  {
    text: 'TIC',
    collapsed: false,
    items: [
      { text: 'Inicio de la OVA', link: '/fase1/tic/' },
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

const anexosSidebar = [
  {
    text: 'ANEXOS',
    collapsed: false,
    items: [
      { text: 'Glosario', link: '/glosario' },
      { text: 'Referencias', link: '/referencias' },
    ],
  },
]

const fundamentosSidebar = [
  {
    text: 'FUNDAMENTOS Y APLICACIONES DE RIESGO',
    collapsed: false,
    items: [
      { text: 'Inicio de la OVA', link: '/fase2/fundamentos-riesgo/' },
      { text: 'Introducción', link: '/fase2/fundamentos-riesgo/introduccion' },
      { text: 'Tema 1 · Introducción a la ciberseguridad', link: '/fase2/fundamentos-riesgo/tema1' },
      { text: 'Tema 2 · Identificación de riesgos', link: '/fase2/fundamentos-riesgo/tema2' },
      { text: 'Tema 3 · Auditoría infraestructura tecnológica', link: '/fase2/fundamentos-riesgo/tema3' },
      { text: 'Tema 4 · Informes y políticas SGSI', link: '/fase2/fundamentos-riesgo/tema4' },
      { text: 'Tema 5 · Protocolos de seguridad y privacidad', link: '/fase2/fundamentos-riesgo/tema5' },
      { text: 'Síntesis', link: '/fase2/fundamentos-riesgo/sintesis' },
      { text: 'Actividad didáctica', link: '/fase2/fundamentos-riesgo/actividad' },
    ],
  },
]

const matematicasBasicoSidebar = [
  {
    text: 'MATEMÁTICAS · NIVEL BÁSICO',
    collapsed: false,
    items: [
      { text: 'Inicio del nivel', link: '/fase2/matematicas/nivel-basico/' },
      { text: 'Introducción', link: '/fase2/matematicas/nivel-basico/introduccion' },
      { text: 'Tema 1 · Conjuntos numéricos', link: '/fase2/matematicas/nivel-basico/tema1' },
      { text: 'Tema 2 · Operaciones aritméticas', link: '/fase2/matematicas/nivel-basico/tema2' },
      { text: 'Tema 3 · Razones y proporciones', link: '/fase2/matematicas/nivel-basico/tema3' },
    ],
  },
]

const matematicasIntermedioSidebar = [
  {
    text: 'MATEMÁTICAS · NIVEL INTERMEDIO',
    collapsed: false,
    items: [
      { text: 'Inicio del nivel', link: '/fase2/matematicas/nivel-intermedio/' },
      { text: 'Tema 1 · Estadística descriptiva', link: '/fase2/matematicas/nivel-intermedio/tema1' },
      { text: 'Tema 2 · Sistema de unidades', link: '/fase2/matematicas/nivel-intermedio/tema2' },
    ],
  },
]

const matematicasMedioSidebar = [
  {
    text: 'MATEMÁTICAS · NIVEL MEDIO',
    collapsed: false,
    items: [
      { text: 'Inicio del nivel', link: '/fase2/matematicas/nivel-medio/' },
      { text: 'Tema 1 · Área y volumen', link: '/fase2/matematicas/nivel-medio/tema1' },
      { text: 'Tema 2 · Trigonometría', link: '/fase2/matematicas/nivel-medio/tema2' },
      { text: 'Tema 3 · Ecuaciones', link: '/fase2/matematicas/nivel-medio/tema3' },
      { text: 'Tema 4 · Funciones', link: '/fase2/matematicas/nivel-medio/tema4' },
      { text: 'Tema 5 · Función lineal', link: '/fase2/matematicas/nivel-medio/tema5' },
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
      { text: 'Fase 1', link: '/fase1/' },
      {
        text: 'Metodologías',
        activeMatch: '/fase1/metodologias-normas-estandares/',
        link: '/fase1/metodologias-normas-estandares/',
      },
      {
        text: 'Comunicación',
        activeMatch: '/fase1/(argumentacion|comunicandonos|escribiendo|relacionando)/',
        items: [
          { text: 'Argumentación', link: '/fase1/argumentacion/' },
          { text: 'Comunicándonos', link: '/fase1/comunicandonos/' },
          { text: 'Escribiendo', link: '/fase1/escribiendo/' },
          { text: 'Relacionando', link: '/fase1/relacionando/' },
        ],
      },
      { text: 'TIC', activeMatch: '/fase1/tic/', link: '/fase1/tic/' },
      { text: 'Fase 2', activeMatch: '/fase2/', link: '/fase2/' },
      {
        text: 'Fundamentos de riesgo',
        activeMatch: '/fase2/fundamentos-riesgo/',
        link: '/fase2/fundamentos-riesgo/',
      },
      {
        text: 'Matemáticas',
        activeMatch: '/fase2/matematicas/',
        items: [
          { text: 'Nivel básico', link: '/fase2/matematicas/nivel-basico/' },
          { text: 'Nivel intermedio', link: '/fase2/matematicas/nivel-intermedio/' },
          { text: 'Nivel medio', link: '/fase2/matematicas/nivel-medio/' },
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
      '/fase1/metodologias-normas-estandares/': metodologiasSidebar,
      '/fase1/argumentacion/': argumentacionSidebar,
      '/fase1/comunicandonos/': comunicandonosSidebar,
      '/fase1/escribiendo/': escribiendoSidebar,
      '/fase1/relacionando/': relacionandoSidebar,
      '/fase1/tic/': ticSidebar,
      '/fase2/fundamentos-riesgo/': fundamentosSidebar,
      '/fase2/matematicas/nivel-basico/': matematicasBasicoSidebar,
      '/fase2/matematicas/nivel-intermedio/': matematicasIntermedioSidebar,
      '/fase2/matematicas/nivel-medio/': matematicasMedioSidebar,
      '/glosario': anexosSidebar,
      '/referencias': anexosSidebar,
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