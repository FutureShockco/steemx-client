
import store from "@/state/store";

const routes = [
  // auth
  {
    path: "/login",
    name: "login",
    component: () => import("../views/account/login"),
    meta: {
      title: "Login",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: '/callback',
    name: 'callback',
    component: () => import("../views/Callback"),
    meta: {
      title: "Login", authRequired: false,
    },
  }, 
  {
    path: "/logout",
    name: "logout",
    meta: { title: "Logout", authRequired: false },
    component: () => import("../views/account/logout"),
  },
  // Dashboards
  {
    path: "/",
    name: "dashboard",
    meta: { title: "Dashboard Crypto", authRequired: false },
    component: () => import("../views/dashboards"),
  },

  // Apps

  // Calendar
  {
    path: "/calendar",
    name: "calendar",
    meta: { title: "Calendar", authRequired: false },
    component: () => import("../views/calendar"),
  },

  // Chat
  {
    path: "/chat",
    name: "chat",
    meta: { title: "Chat", authRequired: false },
    component: () => import("../views/chat/single-chat"),
  },
  {
    path: "/chat/video-conference",
    name: "video-conference",
    meta: { title: "Video Conference", authRequired: false },
    component: () => import("../views/chat/video-conference"),
  },

  // Crypto
  {
    path: "/tokens",
    name: "tokens",
    meta: { title: "Tokens", authRequired: false },
    component: () => import("../views/Tokens/Tokens"),
  },
  {
    path: "/lease",
    name: "lease",
    meta: { title: "Exchange", authRequired: false },
    component: () => import("../views/crypto/lease"),
  },
  {
    path: "/crypto/ico",
    name: "crypto-ico",
    meta: { title: "ICO", authRequired: false },
    component: () => import("../views/crypto/ico"),
  },
  {
    path: "/crypto/transactions",
    name: "crypto-transactions",
    meta: { title: "Transactions", authRequired: false },
    component: () => import("../views/crypto/transactions"),
  },

  {
    path: "/trade/:token",
    name: "Trade",
    meta: { title: "Coin Overview", authRequired: false },
    component: () => import("../views/crypto/coin-overview"),
  },
  {
    path: "/trade/steem",
    name: "Trade",
    meta: { title: "Market", authRequired: false },
    component: () => import("../views/SteemMarket/Market"),
  },
  {
    path: "/crypto/coin-overview",
    name: "crypto-coin-overview",
    meta: { title: "Coin Overview", authRequired: false },
    component: () => import("../views/crypto/coin-overview"),
  },
  {
    path: "/deposit/:coin",
    name: "deposit-coin",
    meta: { title: "Deposit", authRequired: false },
    component: () => import("../views/crypto/deposit"),
  },
  // Customers
  {
    path: "/customers/list",
    name: "customers-list",
    meta: { title: "List View", authRequired: false },
    component: () => import("../views/customers/list-view"),
  },
  {
    path: "/customers/overview",
    name: "customers-overview",
    meta: { title: "Overview", authRequired: false },
    component: () => import("../views/customers/overview"),
  },

  // File Manager
  {
    path: "/file-manager",
    name: "file-manager",
    meta: { title: "File Manager", authRequired: false },
    component: () => import("../views/file-manager"),
  },

  // Invoices
  {
    path: "/invoices/list",
    name: "invoices-list",
    meta: { title: "List view", authRequired: false },
    component: () => import("../views/invoices/list-view"),
  },
  {
    path: "/invoices/create",
    name: "invoices-create",
    meta: { title: "Create", authRequired: false },
    component: () => import("../views/invoices/create-invoice"),
  },
  {
    path: "/invoices/overview",
    name: "invoices-overview",
    meta: { title: "Overview", authRequired: false },
    component: () => import("../views/invoices/overview"),
  },

  // Notes
  {
    path: "/notes",
    name: "notes",
    meta: { title: "Notes", authRequired: false },
    component: () => import("../views/notes"),
  },

  // To-Do
  {
    path: "/to-do",
    name: "to-do",
    meta: { title: "To Do", authRequired: false },
    component: () => import("../views/to-do"),
  },

  // Pages
  {
    path: "/pages/starter",
    name: "starter",
    meta: { title: "Starter", authRequired: false },
    component: () => import("../views/pages/starter"),
  },
  {
    path: "/wallet",
    name: "profile",
    meta: { title: "Wallet", authRequired: false },
    component: () => import("../views/profile/wallet"),
  },
  {
    path: "/pages/timeline",
    name: "timeline",
    meta: { title: "Timeline", authRequired: false },
    component: () => import("../views/pages/timeline"),
  },
  {
    path: "/faq",
    name: "FAQs",
    meta: { title: "FAQs", authRequired: false },
    component: () => import("../views/faq/faq"),
  },
  {
    path: "/pages/pricing",
    name: "pricing",
    meta: { title: "Pricing", authRequired: false },
    component: () => import("../views/pages/pricing"),
  },
  {
    path: "/pages/maintenance",
    name: "maintenance",
    meta: { title: "Maintanance", authRequired: false },
    component: () => import("../views/pages/maintenance"),
  },
  {
    path: "/pages/coming-soon",
    name: "coming-soon",
    meta: { title: "Comming Soon", authRequired: false },
    component: () => import("../views/pages/coming-soon"),
  },
  {
    path: "/pages/privacy-policy",
    name: "privacy-policy",
    meta: { title: "Privacy Policy", authRequired: false },
    component: () => import("../views/pages/privacy-policy"),
  },
  {
    path: "/pages/term-conditions",
    name: "term-conditions",
    meta: { title: "Term Conditions", authRequired: false },
    component: () => import("../views/pages/term-conditions"),
  },

  // Authentication
  {
    path: "/auth/signin",
    name: "signin",
    meta: { title: "Sign In", authRequired: false },
    component: () => import("../views/auth/signin"),
  },
  {
    path: "/auth/signup",
    name: "signup",
    meta: { title: "Sign Up", authRequired: false },
    component: () => import("../views/auth/signup"),
  },
  {
    path: "/auth/lockscreen",
    name: "lockscreen",
    meta: { title: "Lockscreen", authRequired: false },
    component: () => import("../views/auth/lockscreen"),
  },
  {
    path: "/auth/logout",
    name: "auth-logout",
    meta: { title: "Logout", authRequired: false },
    component: () => import("../views/auth/logout"),
  },
  {
    path: "/auth/success-msg",
    name: "success-msg",
    meta: { title: "Success Message", authRequired: false },
    component: () => import("../views/auth/success-msg"),
  },
  {
    path: "/auth/twostep",
    name: "twostep",
    meta: { title: "Two Step Verification", authRequired: false },
    component: () => import("../views/auth/twostep"),
  },
  {
    path: "/auth/404",
    name: "404",
    meta: { title: "404 Error", authRequired: false },
    component: () => import("../views/auth/errors/404"),
  },
  {
    path: "/auth/500",
    name: "500",
    meta: { title: "500 Error", authRequired: false },
    component: () => import("../views/auth/errors/500"),
  },
  {
    path: "/auth/503",
    name: "503",
    meta: { title: "503 Error", authRequired: false },
    component: () => import("../views/auth/errors/503"),
  },
  {
    path: "/auth/offline",
    name: "offline",
    meta: { title: "Offline Page", authRequired: false },
    component: () => import("../views/auth/errors/offline"),
  },

  // Advance UI
  {
    path: "/advance-ui/crop-images",
    name: "crop-images",
    meta: { title: "Crop Images", authRequired: false },
    component: () => import("../views/advance-ui/crop-images"),
  },
  {
    path: "/advance-ui/highlight",
    name: "highlight",
    meta: { title: "Highlight", authRequired: false },
    component: () => import("../views/advance-ui/highlight"),
  },
  {
    path: "/advance-ui/scrollbar",
    name: "scrollbar",
    meta: { title: "Scrollbar", authRequired: false },
    component: () => import("../views/advance-ui/scrollbar"),
  },
  {
    path: "/advance-ui/sweetalerts",
    name: "sweetalerts",
    meta: { title: "Sweet Alerts", authRequired: false },
    component: () => import("../views/advance-ui/sweet-alerts"),
  },
  {
    path: "/advance-ui/swiper",
    name: "swiper",
    meta: { title: "Swiper", authRequired: false },
    component: () => import("../views/advance-ui/swiper-slider"),
  },

  // Forms
  {
    path: "/forms/elements",
    name: "forms-elements",
    meta: { title: "Forms Elements", authRequired: false },
    component: () => import("../views/forms/basic-elements"),
  },
  {
    path: "/forms/select",
    name: "forms-select",
    meta: { title: "Forms select", authRequired: false },
    component: () => import("../views/forms/form-select"),
  },
  {
    path: "/forms/checkboxs-radios",
    name: "forms-checkboxs-radios",
    meta: { title: "Forms Checkboxs & Radios", authRequired: false },
    component: () => import("../views/forms/checkboxes-radios"),
  },
  {
    path: "/forms/pickers",
    name: "forms-pickers",
    meta: { title: "Forms Pickers", authRequired: false },
    component: () => import("../views/forms/pickers"),
  },
  {
    path: "/forms/masks",
    name: "forms-masks",
    meta: { title: "Forms Masks", authRequired: false },
    component: () => import("../views/forms/input-masks"),
  },
  {
    path: "/forms/range-sliders",
    name: "forms-range-sliders",
    meta: { title: "Forms Range Sliders", authRequired: false },
    component: () => import("../views/forms/range-slider"),
  },
  {
    path: "/forms/validation",
    name: "forms-validation",
    meta: { title: "Forms Validation", authRequired: false },
    component: () => import("../views/forms/validation"),
  },
  {
    path: "/forms/editors",
    name: "forms-editors",
    meta: { title: "Forms Editors", authRequired: false },
    component: () => import("../views/forms/editors"),
  },
  {
    path: "/forms/file-uploads",
    name: "forms-file-uploads",
    meta: { title: "Forms File Uploads", authRequired: false },
    component: () => import("../views/forms/file-uploads"),
  },
  {
    path: "/forms/layouts",
    name: "forms-layouts",
    meta: { title: "Forms Layouts", authRequired: false },
    component: () => import("../views/forms/form-layouts"),
  },
  {
    path: "/forms/wizard",
    name: "forms-wizard",
    meta: { title: "Wizard", authRequired: false },
    component: () => import("../views/forms/wizard"),
  },
  {
    path: "/forms/advanced",
    name: "forms-advanced",
    meta: { title: "Forms Advanced", authRequired: false },
    component: () => import("../views/forms/advanced"),
  },

  // Base Ui
  {
    path: "/ui/accordions",
    name: "accordions",
    meta: { title: "Accordions", authRequired: false },
    component: () => import("../views/base-ui/accordions"),
  },
  {
    path: "/ui/alerts",
    name: "Alerts",
    meta: {
      title: "Alerts", authRequired: false,
    },
    component: () => import("../views/base-ui/alerts"),
  },
  {
    path: "/ui/badges",
    name: "badges",
    meta: { title: "Badges", authRequired: false },
    component: () => import("../views/base-ui/badges"),
  },
  {
    path: "/ui/buttons",
    name: "Buttons",
    meta: {
      title: "Buttons", authRequired: false,
    },
    component: () => import("../views/base-ui/buttons"),
  },
  {
    path: "/ui/cards",
    name: "Cards",
    meta: { title: "Cards", authRequired: false },
    component: () => import("../views/base-ui/cards"),
  },
  {
    path: "/ui/carousel",
    name: "Carousel",
    meta: { title: "Carousel", authRequired: false },
    component: () => import("../views/base-ui/carousel"),
  },
  {
    path: "/ui/colors",
    name: "Colors",
    meta: { title: "Colors", authRequired: false },
    component: () => import("../views/base-ui/colors"),
  },
  {
    path: "/ui/dropdowns",
    name: "Dropdowns",
    meta: { title: "Dropdowns", authRequired: false },
    component: () => import("../views/base-ui/dropdowns"),
  },
  {
    path: "/ui/embed-video",
    name: "embed-video",
    meta: { title: "Embed Video", authRequired: false },
    component: () => import("../views/base-ui/embed-video"),
  },
  {
    path: "/ui/general",
    name: "General",
    meta: { title: "General", authRequired: false },
    component: () => import("../views/base-ui/general"),
  },
  {
    path: "/ui/grid",
    name: "Grid",
    meta: { title: "Grid", authRequired: false },
    component: () => import("../views/base-ui/grid"),
  },
  {
    path: "/ui/images",
    name: "Images",
    meta: { title: "Images", authRequired: false },
    component: () => import("../views/base-ui/images"),
  },
  {
    path: "/ui/links",
    name: "links",
    meta: { title: "Links", authRequired: false },
    component: () => import("../views/base-ui/links"),
  },
  {
    path: "/ui/lists",
    name: "lists",
    meta: { title: "Lists", authRequired: false },
    component: () => import("../views/base-ui/lists"),
  },
  {
    path: "/ui/media",
    name: "media",
    meta: { title: "Media", authRequired: false },
    component: () => import("../views/base-ui/media"),
  },
  {
    path: "/ui/modals",
    name: "Modals",
    meta: { title: "Modals", authRequired: false },
    component: () => import("../views/base-ui/modals"),
  },
  {
    path: "/ui/offcanvas",
    name: "offcanvas",
    meta: { title: "Offcanvas", authRequired: false },
    component: () => import("../views/base-ui/offcanvas"),
  },
  {
    path: "/ui/placeholders",
    name: "Placeholders",
    meta: { title: "Placeholders", authRequired: false },
    component: () => import("../views/base-ui/placeholders"),
  },
  {
    path: "/ui/progress",
    name: "Progress",
    meta: { title: "Progress", authRequired: false },
    component: () => import("../views/base-ui/progress"),
  },
  {
    path: "/ui/tabs",
    name: "tabs",
    meta: { title: "Tabs", authRequired: false },
    component: () => import("../views/base-ui/tabs"),
  },
  {
    path: "/ui/typography",
    name: "Typography",
    meta: { title: "Typography", authRequired: false },
    component: () => import("../views/base-ui/typography"),
  },
  {
    path: "/ui/utilities",
    name: "utilities",
    meta: { title: "Utilities", authRequired: false },
    component: () => import("../views/base-ui/utilities"),
  },

  // Table
  {
    path: "/tables/basic",
    name: "basic-tables",
    meta: { title: "Basic Table", authRequired: false },
    component: () => import("../views/tables/basic"),
  },

  // Apex Charts
  {
    path: "/charts/apex-line",
    name: "line charts",
    meta: { title: "Apex Line Charts", authRequired: false },
    component: () => import("../views/charts/line"),
  },
  {
    path: "/charts/apex-area",
    name: "area charts",
    meta: { title: "Apex Area Charts", authRequired: false },
    component: () => import("../views/charts/area"),
  },
  {
    path: "/charts/apex-column",
    name: "column charts",
    meta: { title: "Apex Column Charts", authRequired: false },
    component: () => import("../views/charts/column"),
  },
  {
    path: "/charts/apex-bar",
    name: "bar charts",
    meta: { title: "Apex Bar Charts", authRequired: false },
    component: () => import("../views/charts/bar"),
  },
  {
    path: "/charts/apex-mixed",
    name: "mixed charts",
    meta: { title: "Apex Mixed Charts", authRequired: false },
    component: () => import("../views/charts/mixed"),
  },
  {
    path: "/charts/apex-range-area",
    name: "range area charts",
    meta: { title: "Range Area Charts", authRequired: false },
    component: () => import("../views/charts/range-area"),
  },
  {
    path: "/charts/apex-candlestick",
    name: "candlestick charts",
    meta: { title: "Apex Candlestick Charts", authRequired: false },
    component: () => import("../views/charts/candlestick"),
  },
  {
    path: "/charts/apex-boxplot",
    name: "boxplot charts",
    meta: { title: "Apex Boxplot Charts", authRequired: false },
    component: () => import("../views/charts/boxplot"),
  },
  {
    path: "/charts/apex-bubble",
    name: "bubble charts",
    meta: { title: "Apex Bubble Charts", authRequired: false },
    component: () => import("../views/charts/bubble"),
  },
  {
    path: "/charts/apex-scatter",
    name: "scatter charts",
    meta: { title: "Apex Scatter Charts", authRequired: false },
    component: () => import("../views/charts/scatter"),
  },
  {
    path: "/charts/apex-heatmap",
    name: "heatmap charts",
    meta: { title: "Apex Heatmap Charts", authRequired: false },
    component: () => import("../views/charts/heatmap"),
  },
  {
    path: "/charts/apex-treemap",
    name: "treemap charts",
    meta: { title: "Apex Treemap Charts", authRequired: false },
    component: () => import("../views/charts/treemap"),
  },
  {
    path: "/charts/apex-pie",
    name: "pie charts",
    meta: { title: "Apex Pie Charts", authRequired: false },
    component: () => import("../views/charts/pie"),
  },
  {
    path: "/charts/apex-radialbar",
    name: "radialbar charts",
    meta: { title: "Apex Radialbar Charts", authRequired: false },
    component: () => import("../views/charts/radialbar"),
  },
  {
    path: "/charts/apex-radar",
    name: "radar charts",
    meta: { title: "Apex Radar Charts", authRequired: false },
    component: () => import("../views/charts/radar"),
  },
  {
    path: "/charts/apex-polar",
    name: "polar charts",
    meta: { title: "Apex Polararea Charts", authRequired: false },
    component: () => import("../views/charts/polararea"),
  },

  // Icons
  {
    path: "/icons/remix",
    name: "remix",
    meta: { title: "Remix Icons", authRequired: false },
    component: () => import("../views/icons/remixIcons"),
  },
  {
    path: "/icons/boxicons",
    name: "boxicons",
    meta: { title: "Boxicons", authRequired: false },
    component: () => import("../views/icons/boxicons"),
  },
  {
    path: "/icons/bootstrap",
    name: "bootstrap",
    meta: { title: "Bootstrap Icons", authRequired: false },
    component: () => import("../views/icons/bootstrapIcons"),
  },
  {
    path: "/icons/phosphor",
    name: "phosphor",
    meta: { title: "Phosphor Icons", authRequired: false },
    component: () => import("../views/icons/phosphorIcons"),
  },

  // Maps
  {
    path: "/maps/google",
    name: "google",
    meta: { title: "Google Maps", authRequired: false },
    component: () => import("../views/maps/google"),
  },
  {
    path: "/maps/amcharts",
    name: "amcharts",
    meta: { title: "AmCharts Maps", authRequired: false },
    component: () => import("../views/maps/amcharts"),
  },
];

export default routes;