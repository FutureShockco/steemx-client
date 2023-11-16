const horMenu = [
  {
    id: "dashboard",
    label: "t-market",
    link: "/"
    , icon: "ph-chart-bar"
  },
  { id: "tokens", label: "t-tokens", link: "/tokens", icon: "ph-coins" },
  { id: "exchange", label: "t-lease", link: "/lease", icon: "ph-hand-coins" },
  { id: "ipo", label: "t-ipo", link: "/crypto/ico", icon: "ph-users-three" },
  { id: "transactions", label: "t-explorer", link: "/crypto/transactions", icon: "ph-database" },
  { id: "faq", label: "t-faqs", link: "/faq", icon: "ph-question" },
  { id: "wallet", label: "t-wallet", link: "/wallet", icon: "ph-piggy-bank" },

  // { id: "coin-overview", label: "t-coin-overview", link: "/crypto/coin-overview" },
  // {
  //   id: "apps",
  //   label: "t-apps",
  //   icon: "ph-layout",
  //   link: "topbarApps",
  //   subItems: [
  //     { id: 'calendar', label: "t-calendar", link: "/calendar", parentId: "apps" },
  //     {
  //       id: "chat",
  //       label: "t-chat",
  //       link: "sidebarChat",
  //       parentId: "apps",
  //       isChildItem: true,
  //       subItems: [
  //         { id: "single-chat", label: "t-single-chat", link: "/chat", parentId: "chat" },
  //         { id: "video-conference", label: "t-video-conference", link: "/chat/video-conference", parentId: "chat" },
  //       ]
  //     },
  //     {
  //       id: "crypto",
  //       label: "t-crypto",
  //       link: "sidebarCrypto",
  //       parentId: "apps",
  //       isChildItem: true,
  //       subItems: [
  //         { id: "marketplace", label: "t-marketplace", link: "/crypto/marketplace", parentId: "crypto" },
  //         { id: "exchange", label: "t-exchange", link: "/crypto/exchange", parentId: "crypto" },
  //         { id: "ico", label: "t-ico", link: "/crypto/ico", parentId: "crypto" },
  //         { id: "transactions", label: "t-transactions", link: "/crypto/transactions", parentId: "crypto" },
  //         { id: "coin-overview", label: "t-coin-overview", link: "/crypto/coin-overview", parentId: "crypto" },
  //       ]
  //     },
  //     {
  //       id: "customers",
  //       label: "t-customers",
  //       link: "sidebarCustomers",
  //       parentId: "apps",
  //       isChildItem: true,
  //       subItems: [
  //         { id: "list-view", label: "t-list-view", link: "/customers/list", parentId: "customers" },
  //         { id: "overview", label: "t-overview", link: "/customers/overview", parentId: "customers" },
  //       ]
  //     },
  //     { id: 'file-manager', label: "t-file-manager", link: "/file-manager", parentId: "apps" },
  //     {
  //       id: "invoices",
  //       label: "t-invoices",
  //       link: "topbarInvoice",
  //       parentId: "apps",
  //       isChildItem: true,
  //       subItems: [
  //         { id: "list-view", label: "t-list-view", link: "/invoices/list", parentId: "invoices" },
  //         { id: "create-invoice", label: "t-create-invoice", link: "/invoices/create", parentId: "invoices" },
  //         { id: "overview", label: "t-overview", link: "/invoices/overview", parentId: "invoices" },
  //       ]
  //     },
  //     { id: 'notes', label: "t-notes", link: "/notes", parentId: "apps" },
  //     { id: 'todo', label: "t-to-do", link: "/to-do", parentId: "apps" },
  //   ],
  // },
  // {
  //   id: "Pages",
  //   label: "t-pages",
  //   icon: "ph-address-book",
  //   link: "sidebarPages",
  //   subItems: [
  //     { id: 'starter', label: "t-starter", link: "/pages/starter", parentId: "Pages" },
  //     { id: 'profile', label: "t-profile", link: "/pages/profile", parentId: "Pages" },
  //     { id: 'timeline', label: "t-timeline", link: "/pages/timeline", parentId: "Pages" },
  //     { id: 'faqs', label: "t-faqs", link: "/pages/faqs", parentId: "Pages" },
  //     { id: 'pricing', label: "t-pricing", link: "/pages/pricing", parentId: "Pages" },
  //     {
  //       id: "authentication",
  //       label: "t-authentication",
  //       link: "sidebarAuth",
  //       parentId: "Pages",
  //       isChildItem: true,
  //       subItems: [
  //         { id: "signin", label: "t-signin", link: "/auth/signin", parentId: "authentication" },
  //         { id: "sign up", label: "t-signup", link: "/auth/signup", parentId: "authentication" },
  //         { id: "password-reset", label: "t-password-reset", link: "/auth/pass-reset", parentId: "authentication" },
  //         { id: "password-create", label: "t-password-create", link: "/auth/pass-change", parentId: "authentication" },
  //         { id: "lockscreen", label: "t-lock-screen", link: "/auth/lockscreen", parentId: "authentication" },
  //         { id: "logout", label: "t-logout", link: "/auth/logout", parentId: "authentication" },
  //         { id: "successmessage", label: "t-success-message", link: "/auth/success-msg", parentId: "authentication" },
  //         { id: "verification", label: "t-two-step-verification", link: "/auth/twostep", parentId: "authentication" },
  //       ]
  //     },
  //     {
  //       id: "errors",
  //       label: "t-errors",
  //       link: "sidebarErrors",
  //       parentId: "Pages",
  //       isChildItem: true,
  //       subItems: [
  //         { id: 1, label: "t-404-error", link: "/auth/404", parentId: "errors" },
  //         { id: 2, label: "t-500", link: "/auth/500", parentId: "errors" },
  //         { id: 3, label: "t-503", link: "/auth/503", parentId: "errors" },
  //         { id: 4, label: "t-offline-page", link: "/auth/offline", parentId: "errors" },
  //       ]
  //     },
  //     { id: 'maintenance', label: "t-maintenance", link: "/pages/maintenance", parentId: "Pages" },
  //     { id: 'comingsoon', label: "t-coming-soon", link: "/pages/coming-soon", parentId: "Pages" },
  //     { id: 'privacypolicy', label: "t-privacy-policy", link: "/pages/privacy-policy", parentId: "Pages" },
  //     { id: 'terms', label: "t-term-conditions", link: "/pages/term-conditions", parentId: "Pages" },
  //   ],
  // },
  // {
  //   id: "bootstrapui",
  //   label: "t-bootstrap-ui",
  //   icon: "ph-bandaids",
  //   link: "sidebarUI",
  //   subItems: [
  //     { id: 1, label: "t-accordion-collapse", link: "/ui/accordions", parentId: "bootstrapui" },
  //     { id: 2, label: "t-alerts", link: "/ui/alerts", parentId: "bootstrapui", },
  //     { id: 3, label: "t-badges", link: "/ui/badges", parentId: "bootstrapui" },
  //     { id: 4, label: "t-buttons", link: "/ui/buttons", parentId: "bootstrapui" },
  //     { id: 5, label: "t-cards", link: "/ui/cards", parentId: "bootstrapui" },
  //     { id: 6, label: "t-carousel", link: "/ui/carousel", parentId: "bootstrapui" },
  //     { id: 7, label: "t-colors", link: "/ui/colors", parentId: "bootstrapui" },
  //     { id: 8, label: "t-dropdowns", link: "/ui/dropdowns", parentId: "bootstrapui" },
  //     { id: 9, label: "t-embed-video", link: "/ui/embed-video", parentId: "bootstrapui" },
  //     { id: 10, label: "t-general", link: "/ui/general", parentId: "bootstrapui" },
  //     { id: 11, label: "t-grid", link: "/ui/grid", parentId: "bootstrapui" },
  //     { id: 12, label: "t-images", link: "/ui/images", parentId: "bootstrapui" },
  //     { id: 13, label: "t-links", link: "/ui/links", parentId: "bootstrapui" },
  //     { id: 14, label: "t-lists", link: "/ui/lists", parentId: "bootstrapui" },
  //     { id: 15, label: "t-media-object", link: "/ui/media", parentId: "bootstrapui" },
  //     { id: 16, label: "t-modals", link: "/ui/modals", parentId: "bootstrapui" },
  //     { id: 18, label: "t-offcanvas", link: "/ui/offcanvas", parentId: "bootstrapui" },
  //     { id: 19, label: "t-placeholders", link: "/ui/placeholders", parentId: "bootstrapui" },
  //     { id: 20, label: "t-progress", link: "/ui/progress", parentId: "bootstrapui" },
  //     { id: 22, label: "t-tabs", link: "/ui/tabs", parentId: "bootstrapui" },
  //     { id: 23, label: "t-typography", link: "/ui/typography", parentId: "bootstrapui" },
  //     { id: 24, label: "t-utilities", link: "/ui/utilities", parentId: "bootstrapui" },
  //   ],
  // },
  // {
  //   id: "advanceui",
  //   label: "t-advance-ui",
  //   icon: "ph-stack-simple",
  //   link: "sidebarAdvanceUI",
  //   subItems: [
  //     { id: 1, label: "t-crop-images", link: "/advance-ui/crop-images", parentId: "advanceui" },
  //     { id: 5, label: "t-highlight", link: "/advance-ui/highlight", parentId: "advanceui" },
  //     { id: 2, label: "t-scrollbar", link: "/advance-ui/scrollbar", parentId: "advanceui" },
  //     { id: 4, label: "t-sweet-alerts", link: "/advance-ui/sweetalerts", parentId: "advanceui" },
  //     { id: 3, label: "t-swiper-slider", link: "/advance-ui/swiper", parentId: "advanceui" },
  //   ],
  // },
  // { id: "widgets", label: "t-widgets", icon: "ph-paint-brush-broad", link: "/widgets", },
  // {
  //   id: "forms",
  //   label: "t-forms",
  //   icon: "ri-file-list-3-line",
  //   link: "sidebarForms",
  //   subItems: [
  //     { id: 1, label: "t-basic-elements", link: "/forms/elements", parentId: "forms", },
  //     { id: 2, label: "t-form-select", link: "/forms/select", parentId: "forms" },
  //     { id: 3, label: "t-checkboxes-radios", link: "/forms/checkboxs-radios", parentId: "forms" },
  //     { id: 4, label: "t-pickers", link: "/forms/pickers", parentId: "forms" },
  //     { id: 5, label: "t-input-masks", link: "/forms/masks", parentId: "forms" },
  //     { id: 6, label: "t-advanced", link: "/forms/advanced", parentId: "forms" },
  //     { id: 7, label: "t-range-slider", link: "/forms/range-sliders", parentId: "forms" },
  //     { id: 8, label: "t-validation", link: "/forms/validation", parentId: "forms" },
  //     { id: 9, label: "t-wizard", link: "/forms/wizard", parentId: "forms" },
  //     { id: 10, label: "t-editors", link: "/forms/editors", parentId: "forms" },
  //     { id: 11, label: "t-file-uploads", link: "/forms/file-uploads", parentId: "forms" },
  //     { id: 12, label: "t-form-layouts", link: "/forms/layouts", parentId: "forms" },
  //   ],
  // },
  // {
  //   id: "tables",
  //   label: "t-tables",
  //   icon: "ph-table",
  //   link: "sidebarTables",
  //   subItems: [
  //     { id: 1, label: "t-basic-tables", link: "/tables/basic", parentId: "tables" },
  //   ],
  // },
  // {
  //   id: "apexcharts",
  //   label: "t-apexcharts",
  //   icon: "ph-chart-pie-slice",
  //   link: "sidebarCharts",
  //   subItems: [
  //     { id: 1, label: "t-area", link: "/charts/apex-area", parentId: "apexcharts" },
  //     { id: 2, label: "t-bar", link: "/charts/apex-bar", parentId: "apexcharts" },
  //     { id: 3, label: "t-boxplot", link: "/charts/apex-boxplot", parentId: "apexcharts" },
  //     { id: 4, label: "t-bubble", link: "/charts/apex-bubble", parentId: "apexcharts" },
  //     { id: 5, label: "t-candlstick", link: "/charts/apex-candlestick", parentId: "apexcharts" },
  //     { id: 6, label: "t-column", link: "/charts/apex-column", parentId: "apexcharts" },
  //     { id: 7, label: "t-heatmap", link: "/charts/apex-heatmap", parentId: "apexcharts" },
  //     { id: 8, label: "t-line", link: "/charts/apex-line", parentId: "apexcharts", },
  //     { id: 9, label: "t-mixed", link: "/charts/apex-mixed", parentId: "apexcharts" },
  //     { id: 10, label: "t-pie", link: "/charts/apex-pie", parentId: "apexcharts" },
  //     { id: 11, label: "t-polar-area", link: "/charts/apex-polar", parentId: "apexcharts" },
  //     { id: 12, label: "t-radar", link: "/charts/apex-radar", parentId: "apexcharts" },
  //     { id: 13, label: "t-radialbar", link: "/charts/apex-radialbar", parentId: "apexcharts" },
  //     { id: 14, label: "t-range-area", link: "/charts/apex-range-area", parentId: "apexcharts" },
  //     { id: 15, label: "t-scatter", link: "/charts/apex-scatter", parentId: "apexcharts" },
  //     { id: 17, label: "t-treemap", link: "/charts/apex-treemap", parentId: "apexcharts" },
  //   ],
  // },
  // {
  //   id: "icons",
  //   label: "t-icons",
  //   icon: "ph-traffic-cone",
  //   link: "sidebarIcons",
  //   subItems: [
  //     { id: 1, label: "t-bootstrap", link: "/icons/bootstrap", parentId: "icons" },
  //     { id: 2, label: "t-boxicons", link: "/icons/boxicons", parentId: "icons" },
  //     { id: 3, label: "t-phosphor", link: "/icons/phosphor", parentId: "icons" },
  //     { id: 4, label: "t-remix", link: "/icons/remix", parentId: "icons", },
  //   ],
  // },
  // {
  //   id: "maps",
  //   label: "t-maps",
  //   icon: "ph-map-trifold",
  //   link: "sidebarMaps",
  //   subItems: [
  //     { id: 1, label: "t-google", link: "/maps/google", parentId: "maps", },
  //     { id: 2, label: "t-amcharts", link: "/maps/amcharts", parentId: "maps" }
  //   ],
  // },
  // {
  //   id: "multilevel", label: "t-multi-level", icon: "bi bi-share", link: "sidebarMultilevel",
  //   subItems: [
  //     { id: "level1.1", label: "t-level-1.1", link: "/#", parentId: "multilevel" },
  //     {
  //       id: "level1.2", label: "t-level-1.2", link: "sidebarAccount", isChildItem: true,
  //       childItems: [
  //         { id: 1, label: "t-level-2.1", link: "/#" },
  //         {
  //           id: "level2.2", label: "t-level-2.2", link: "sidebarCrm", isChildItem: true,
  //           childItems: [
  //             { id: 1, label: "t-level-3.1", link: "/#" },
  //             { id: 2, label: "t-level-3.2", link: "/#" },
  //           ]
  //         },
  //       ]
  //     },
  //   ],
  // },
];

export default horMenu;