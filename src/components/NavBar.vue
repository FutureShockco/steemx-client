<script>
import { SimpleBar } from 'simplebar-vue3';
import i18n from "../i18n";
import horMenu from "./menu";
import { ref } from 'vue';

export default {
    data() {
        return {
            languages: [{
                flag: require("@/assets/images/flags/us.svg"),
                language: "en",
                title: "English",
            },
            {
                flag: require("@/assets/images/flags/spain.svg"),
                language: "sp",
                title: "Española",
            },
            {
                flag: require("@/assets/images/flags/germany.svg"),
                language: "gr",
                title: "Deutsche",
            },
            {
                flag: require("@/assets/images/flags/italy.svg"),
                language: "it",
                title: "italiana",
            },
            {
                flag: require("@/assets/images/flags/russia.svg"),
                language: "ru",
                title: "русский",
            },
            {
                flag: require("@/assets/images/flags/china.svg"),
                language: "ch",
                title: "中國人",
            },
            {
                flag: require("@/assets/images/flags/french.svg"),
                language: "fr",
                title: "Français",
            },
            {
                flag: require("@/assets/images/flags/ae.svg"),
                language: "ar",
                title: "عربي",
            },
            ],
            lan: i18n.locale,
            text: null,
            flag: null,
            newMenuItems: [],
            splitMenuItems: [],
            menuItems: horMenu,
            navbarMenuItems: []
        };
    },
    computed: {
        profile() {
            return this.$store.state.auth.account || null
        },
    },
    beforeCreate() {
        let pageTopbar = document.getElementById("page-topbar");
        if (pageTopbar) {
            document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20 ? pageTopbar.classList.add("topbar-shadow") : pageTopbar.classList.remove("topbar-shadow");
        }
    },
    mounted() {
        // active menu
        this.initActiveMenu();

        // on window scroll topbar class add
        var This = this;
        document.addEventListener("scroll", function () {
            This.windowScroll();
        }, This);

        window.addEventListener("load", function () {
            This.initActiveMenu();
            if (window.scrollY > 0)
                This.windowScroll();
        }, This);

        if (process.env.VUE_APP_I18N_LOCALE) {
            this.flag = process.env.VUE_APP_I18N_LOCALE;
            this.languages.forEach((item) => {
                if (item.language == this.flag) {
                    document.getElementById("header-lang-img").setAttribute("src", item.flag);
                }
            });
        }

        window.addEventListener('resize', this.setupHorizontalMenu);
        this.setupHorizontalMenu("2");

        if (document.getElementById("topnav-hamburger-icon"))
            document.getElementById("topnav-hamburger-icon").addEventListener("click", this.toggleHamburgerMenu);
    },
    methods: {
        initActiveMenu() {
            var currentPath = location.pathname;
            if (currentPath && document) {
                var a = document.getElementById("navbar-nav").querySelector('[href="' + currentPath + '"]');
                if (a) {
                    a.classList.add("active");
                    var parentCollapseDiv = a.closest(".collapse.menu-dropdown");
                    if (parentCollapseDiv) {
                        parentCollapseDiv.classList.add("show");
                        parentCollapseDiv.parentElement.children[0].classList.add("active");
                        parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
                        if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
                            parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
                            if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
                                parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");

                            if (parentCollapseDiv.parentElement.parentElement.parentElement.parentElement.closest(".collapse.menu-dropdown")) {
                                parentCollapseDiv.parentElement.parentElement.parentElement.parentElement.closest(".collapse").classList.add("show");
                                if (parentCollapseDiv.parentElement.parentElement.parentElement.parentElement.closest(".collapse").previousElementSibling) {

                                    parentCollapseDiv.parentElement.parentElement.parentElement.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
                                    // if ((document.documentElement.getAttribute("data-layout") == "horizontal") && parentCollapseDiv.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.closest(".collapse")) {
                                    parentCollapseDiv.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
                                    // }
                                }
                            }
                        }
                    }
                }
            }
        },
        windowScroll() {
            let pageTopbar = document.getElementById("page-topbar");
            if (pageTopbar) {
                document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20 ? pageTopbar.classList.add("topbar-shadow") : pageTopbar.classList.remove("topbar-shadow");
            }
        },
        setLanguage(locale, country, flag) {
            this.lan = locale;
            this.text = country;
            this.flag = flag;
            document.getElementById("header-lang-img").setAttribute("src", flag);
            i18n.global.locale = locale;

            this.setupHorizontalMenu("1");
        },
        setupHorizontalMenu(langChange = null) {
            const isMoreMenu = ref(false);
            const navbarNav = document.getElementById("navbar-header");
            const navbarMenu = document.querySelector(".navbar-menu");
            navbarMenu.classList.add("opacity-0");

            // count width of horizontal menu
            const headerLogo = document.getElementById("header-logo")?.clientWidth ?? 0;
            const headerItems = document.getElementById("header-items")?.clientWidth ?? 0;
            const fullWidthOfMenu = navbarNav.clientWidth - headerLogo - headerItems - 150;
            const menuData = horMenu;

            langChange = (typeof (langChange) === "object") ? null : langChange;
            // Create the "More" menu item and add the hidden items to its subItems
            const menuItems = document.querySelectorAll("ul.navbar-nav > li.nav-item");
            if (this.navbarMenuItems.length === 0 || langChange === "2") {
                langChange = null;
                const menuArray = [];
                Array.prototype.forEach.call(menuItems, function (item) {
                    menuArray.push(item.offsetWidth);
                });
                this.navbarMenuItems = menuArray;
            }
            const navbarNavWidth = this.navbarMenuItems;
            let totalItemsWidth = 0;
            let visibleItems = [];
            let hiddenItems = [];

            const moreMenuItem = {
                id: 'more',
                label: 't-more',
                icon: 'ri-briefcase-2-line',
                subItems: null,
                link: 'sidebarMore',
                stateVariables: isMoreMenu.value,
                click: (e) => {
                    e.preventDefault();
                    isMoreMenu.value = !isMoreMenu.value;
                },
            };

            Array.prototype.forEach.call(menuData, function (item, index) {
                const itemWidth = navbarNavWidth[index];
                totalItemsWidth += itemWidth;
                if (totalItemsWidth > fullWidthOfMenu && fullWidthOfMenu != 0 && langChange === null) {
                    hiddenItems.push(item);
                } else {
                    visibleItems.push(item);
                }
                if (index + 1 === menuData.length) {
                    moreMenuItem.subItems = hiddenItems;
                }
            });
            const updatedMenuItems = hiddenItems.length > 0 ? [...visibleItems, moreMenuItem] : visibleItems;
            this.menuItems = updatedMenuItems;

            if (langChange === "1")
                setTimeout(() => {
                    this.setupHorizontalMenu("2");
                }, 0);
            else
                navbarMenu.classList.remove("opacity-0");
        },

        toggleHamburgerMenu() {
            var windowSize = document.documentElement.clientWidth;
            if (windowSize > 767)
                document.querySelector(".hamburger-icon").classList.toggle("open");

            //For collapse horizontal menu
            document.body.classList.contains("menu") ? document.body.classList.remove("menu") : document.body.classList.add("menu");
        },

        changeMode(mode) {
            if (mode == "dark") {
                document.documentElement.setAttribute("data-bs-theme", "dark");
                document.documentElement.setAttribute("data-topbar", "dark");
                document.documentElement.classList.remove("mode-auto");
            } else if (mode == "brand") {
                document.documentElement.setAttribute("data-bs-theme", "brand");
                document.documentElement.setAttribute("data-topbar", "brand");
                document.documentElement.classList.remove("mode-auto");
            } else if (mode == "auto") {
                document.documentElement.setAttribute("data-bs-theme", "light");
                document.documentElement.setAttribute("data-topbar", "dark");
                document.documentElement.classList.add("mode-auto");
            } else {
                document.documentElement.setAttribute("data-bs-theme", "light");
                document.documentElement.setAttribute("data-topbar", "dark");
                document.documentElement.classList.remove("mode-auto");
            }
        },

        markAsRead() {
            document.querySelectorAll(".notification-item").forEach((item) => {
                if (item.classList.contains("unread-message")) {
                    item.classList.remove("unread-message");
                }
            });
        },

        allClear() {
            document.querySelector(".empty-notification-elem").classList.remove("d-none");

            document.querySelectorAll(".notification-item").forEach((item) => {
                item.remove();
            });
            document.querySelectorAll(".notification-badge").forEach((item) => {
                item.innerHTML = 0;
            });
        }

    },
    components: { SimpleBar },
};
</script>

<template>
    <div class="menu-wrapper">
        <header id="page-topbar">
            <div class="layout-width">
                <div class="navbar-header" id="navbar-header">
                    <div class="d-flex" id="header-logo">
                        <!-- LOGO -->
                        <div class="navbar-brand-box horizontal-logo">
                            <router-link to="/" class="logo logo-dark">
                                <span class="logo-sm">
                                    <img src="@/assets/images/logo-sm.png" alt="" height="22">
                                </span>
                                <span class="logo-lg">
                                    <img src="@/assets/images/logo-dark.png" alt="" height="22">
                                </span>
                            </router-link>

                            <router-link to="/" class="logo logo-light">
                                <span class="logo-sm">
                                    <img src="@/assets/images/logo-sm.png" alt="" height="30">
                                </span>
                                <span class="logo-lg">
                                    <img src="@/assets/images/logo-light.png" alt="" height="30">
                                </span>
                            </router-link>
                        </div>

                        <button type="button" class="btn btn-sm px-3 header-item vertical-menu-btn topnav-hamburger shadow-none" id="topnav-hamburger-icon">
                            <span class="hamburger-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>

                    </div>
                    <!-- ========== App Menu ========== -->
                    <div class="app-menu navbar-menu mx-auto">
                        <div id="scrollbar">
                            <ul class="navbar-nav" id="navbar-nav">
                                <template v-for="(item, index) in menuItems" :key="index">

                                    <!-- for without sub-items -->
                                    <li class="nav-item" v-if="!item.isHeader && !item.subItems">
                                        <router-link :to="item.link" class="nav-link menu-link"> <i :class="item.icon"></i>
                                            <span :data-key="item.label">{{ $t(item.label) }}</span>
                                        </router-link>
                                    </li>

                                    <!-- for subitems -->
                                    <li class="nav-item" v-if="!item.isHeader && item.subItems">
                                        <BLink class="nav-link menu-link collapsed" :href="'#' + item.link" v-b-toggle="`'${item.link}'`" data-bs-toggle="collapse" role="button" aria-expanded="false" :aria-controls="item.link">
                                            <i :class="item.icon" v-if="item.icon"></i> <span :data-key="item.label">{{
                                                $t(item.label) }}</span>
                                        </BLink>
                                        <BCollapse class="menu-dropdown" :id="item.link" v-if="item.subItems" :class="item.id === 'bootstrapui' ? 'menu-dropdown mega-dropdown-menu' : ''">
                                            <BRow v-if="item.id === 'bootstrapui'">
                                                <BCol lg="4" v-for="(bootItem, index) in item.subItems" :key="index">
                                                    <ul class="nav nav-sm flex-column">
                                                        <li class="nav-item">
                                                            <router-link :to="bootItem.link" class="nav-link" :data-key="bootItem.label"> {{
                                                                $t(bootItem.label) }} </router-link>
                                                        </li>
                                                    </ul>
                                                </BCol>
                                            </BRow>

                                            <ul class="nav nav-sm flex-column" v-if="item.id !== 'bootstrapui'">
                                                <li class="nav-item 121" v-for="(subItem, index) in item.subItems" :key="index">
                                                    <!-- {{ subItem }} -->
                                                    <!-- for without subitems -->
                                                    <router-link class="nav-link" :to="subItem.link" v-if="!subItem.subItems && !subItem.isHeader">
                                                        <i v-if="subItem.icon" :class="subItem.icon"></i>
                                                        <span :data-key="subItem.label">{{ $t(subItem.label) }}</span>
                                                    </router-link>

                                                    <!-- for with subitems -->
                                                    <BLink class="nav-link menu-link collapsed" :href="'#' + subItem.link" v-b-toggle="`'${subItem.link}'`" data-bs-toggle="collapse" role="button" aria-expanded="false" :aria-controls="subItem.link" v-if="subItem.subItems">
                                                        <i :class="subItem.icon" v-if="subItem.icon"></i> <span :data-key="subItem.label">{{
                                                            $t(subItem.label) }}</span>
                                                    </BLink>
                                                    <BCollapse class="menu-dropdown" :id="subItem.link" v-if="subItem.subItems">
                                                        <!-- for other all ui -->
                                                        <ul class="nav nav-sm flex-column">
                                                            <li class="nav-item" v-for="(childItem, index) in subItem.subItems" :key="index">

                                                                <!-- for whitout child items -->
                                                                <router-link class="nav-link" :to="childItem.link" v-if="!childItem.childItems">
                                                                    <span>{{ $t(childItem.label) }}</span>
                                                                </router-link>

                                                                <!-- for with childitems -->
                                                                <BLink :href="'#' + childItem.link" v-b-toggle="`'${childItem.link}'`" class="nav-link collapsed" data-bs-toggle="collapse" role="button" aria-expanded="false" :aria-controls="childItem.link" :data-key="childItem.label" v-if="childItem.childItems">
                                                                    {{ $t(childItem.label)
                                                                    }}</BLink>
                                                                <BCollapse class="menu-dropdown" :id="childItem.link" v-if="childItem.childItems">
                                                                    <ul class="nav nav-sm flex-column">
                                                                        <li class="nav-item" v-for="(subItem, index) in childItem.childItems" :key="index">

                                                                            <!-- for without subitems -->
                                                                            <router-link class="nav-link" :to="subItem.link" v-if="!subItem.childItems">
                                                                                <span>{{ $t(subItem.label) }}</span>
                                                                            </router-link>

                                                                            <!-- for with subitems -->
                                                                            <BLink :href="'#' + subItem.link" v-b-toggle="`'${subItem.link}'`" class="nav-link collapsed" data-bs-toggle="collapse" role="button" aria-expanded="false" :aria-controls="subItem.link" :data-key="subItem.label" v-if="subItem.childItems">{{
                                                                                $t(subItem.label) }}</BLink>
                                                                            <BCollapse class="menu-dropdown" :id="subItem.link" v-if="subItem.childItems">
                                                                                <ul class="nav nav-sm flex-column">
                                                                                    <li class="nav-item" v-for="(lastMenu, index) in subItem.childItems" :key="index">

                                                                                        <!-- for last menu  -->
                                                                                        <router-link :to="lastMenu.link" class="nav-link">{{
                                                                                            $t(lastMenu.label)
                                                                                        }}</router-link>
                                                                                    </li>
                                                                                </ul>
                                                                            </BCollapse>
                                                                        </li>
                                                                    </ul>
                                                                </BCollapse>
                                                            </li>
                                                        </ul>
                                                    </BCollapse>
                                                </li>
                                            </ul>
                                        </BCollapse>
                                    </li>
                                </template>
                            </ul>
                        </div>
                    </div>

                    <div class="d-flex align-items-center" id="header-items">

                        <!-- <BDropdown variant="link" class="ms-1 topbar-head-dropdown header-item" dropstart auto-close="outside" :offset="{ alignmentAxis: 60, crossAxis: 0, mainAxis: -50 }" toggle-class="btn-icon btn-topbar rounded-circle arrow-none" menu-class="dropdown-menu-lg dropdown-menu-end p-0">
                            <template #button-content> <i class="bx bx-search align-middle fs-3xl"></i> </template>
                            <form class="p-3">
                                <div class="form-group m-0">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username">
                                        <button class="btn btn-primary" type="submit"><i class="bi bi-search"></i></button>
                                    </div>
                                </div>
                            </form>
                        </BDropdown> -->
                        <BDropdown variant="link" class="ms-1 topbar-head-dropdown header-item" dropstart :offset="{ alignmentAxis: 60, crossAxis: 0, mainAxis: -50 }" toggle-class="btn-icon btn-topbar rounded-circle arrow-none" menu-class="dropdown-menu-end">
                            <template #button-content> <img id="header-lang-img" src="@/assets/images/flags/us.svg" alt="Header Language" height="20" class="rounded"> </template>
                            <BLink href="javascript:void(0);" class="dropdown-item notify-item language py-2" v-for="(entry, key) in languages" :data-lang="entry.language" :title="entry.title" @click="setLanguage(entry.language, entry.title, entry.flag)" :key="key">
                                <img :src="entry.flag" alt="user-image" class="me-2 rounded" height="18">
                                <span class="align-middle">{{ entry.title }}</span>
                            </BLink>
                        </BDropdown>

                        <BDropdown variant="link" class="ms-1 topbar-head-dropdown header-item" dropstart :offset="{ alignmentAxis: 60, crossAxis: 0, mainAxis: -50 }" toggle-class="btn-icon btn-topbar rounded-circle mode-layout arrow-none" menu-class="p-2 dropdown-menu-end">
                            <template #button-content>
                                <i class="bi bi-sun align-middle fs-3xl"></i>
                            </template>
                            <BLink href="#!" class="dropdown-item" data-mode="light" @click="changeMode('light')"><i class="bi bi-sun align-middle me-2"></i>
                                Default (light mode)</BLink>
                            <BLink href="#!" class="dropdown-item" data-mode="dark" @click="changeMode('dark')"><i class="bi bi-moon align-middle me-2"></i>
                                Dark</BLink>
                        </BDropdown>

                        <BDropdown v-if="profile" variant="link" class="ms-1 topbar-head-dropdown header-item" dropstart auto-close="outside" :offset="{ alignmentAxis: 60, crossAxis: 0, mainAxis: -50 }" toggle-class="btn-icon btn-topbar rounded-circle arrow-none" menu-class="dropdown-menu-xl dropdown-menu-end p-0">
                            <template #button-content>
                                <i class='bi bi-bell fs-2xl'></i>
                                <span class="position-absolute topbar-badge p-0 d-flex align-items-center justify-content-center translate-middle badge rounded-pill bg-danger"><span class="notification-badge">4</span><span class="visually-hidden">unread
                                        messages
                                    </span>
                                </span>
                            </template>
                            <div class="dropdown-head rounded-top">
                                <div class="p-3 pb-1">
                                    <BRow class="align-items-center mb-3">
                                        <BCol>
                                            <h6 class="mb-0 fs-lg fw-semibold"> Notifications <span class="badge bg-danger-subtle text-danger fs-sm notification-badge">
                                                    4</span></h6>
                                        </BCol>
                                        <BDropdown variant="link" class="col-auto" toggle-class="link-secondary fs-md arrow-none">
                                            <template #button-content> <i class="bi bi-three-dots-vertical"></i> </template>
                                            <BDropdownItem @click="allClear">All Clear</BDropdownItem>
                                            <BDropdownItem @click="markAsRead">Mark all as read</BDropdownItem>
                                            <BDropdownItem>Archive All</BDropdownItem>
                                        </BDropdown>
                                    </BRow>
                                </div>
                            </div>

                            <BCard no-body class="border-top border-bottom mb-0 rounded-0">
                                <div class="p-3 d-flex align-items-center gap-2">
                                    <div class="flex-shrink-0">
                                        <i class="bi bi-bell fs-3xl"></i>
                                    </div>
                                    <div class="flex-grow-1">
                                        <h6 class="mb-1">Push Notification</h6>
                                        <p class="text-muted mb-0">Automatically send new notification</p>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                                        </div>
                                    </div>
                                </div>
                            </BCard>

                            <div class="py-2 ps-3" id="notificationItemsTabContent">
                                <SimpleBar style="max-height: 300px;" class="pe-3">
                                    <div class="text-reset notification-item d-block dropdown-item position-relative unread-message">
                                        <div class="d-flex gap-3">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/companies/img-3.png" class="rounded-circle avatar-xs" alt="Notification Images">
                                            </div>
                                            <div class="flex-grow-1">
                                                <BLink href="#!" class="stretched-link">
                                                    <h6 class="fs-md mb-1 lh-base">SteemX Membership</h6>
                                                </BLink>
                                                <p class="text-muted mb-0">Successfully purchased a business plan for
                                                    <span class="text-danger fw-medium">-$24.99</span>
                                                </p>
                                            </div>
                                            <p class="mb-0 fs-xs fw-medium flex-shrink-0 text-muted">
                                                57 sec ago
                                            </p>
                                        </div>
                                    </div>

                                    <div class="text-reset notification-item d-block dropdown-item position-relative">
                                        <div class="d-flex gap-3">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-8.jpg" class="rounded-circle avatar-xs" alt="Notification Images">
                                            </div>
                                            <div class="flex-grow-1">
                                                <BLink href="#!" class="stretched-link">
                                                    <h6 class="fs-md mb-1 lh-base">Bella Bailey</h6>
                                                </BLink>
                                                <p class="text-muted mb-0">Assigned you on the call with Fatima</p>
                                            </div>
                                            <p class="mb-0 fs-xs fw-medium flex-shrink-0 text-muted">
                                                5 min ago
                                            </p>
                                        </div>
                                    </div>

                                    <div class="text-reset notification-item d-block dropdown-item position-relative unread-message">
                                        <div class="d-flex gap-3">
                                            <div class="avatar-xs flex-shrink-0">
                                                <span class="avatar-title bg-danger-subtle text-danger rounded-circle fs-lg">
                                                    <i class='bx bx-message-square-dots'></i>
                                                </span>
                                            </div>
                                            <div class="flex-grow-1">
                                                <p class="text-muted mb-0"><b class="text-body">Nathan Keeling</b>
                                                    replied to your comment on <b>Steex - Admin & Dashboards</b></p>
                                            </div>
                                            <p class="mb-0 fs-xs fw-medium flex-shrink-0 text-muted">
                                                3 hrs ago
                                            </p>
                                        </div>
                                    </div>

                                    <div class="text-reset notification-item d-block dropdown-item position-relative">
                                        <div class="d-flex gap-3">
                                            <div class="position-relative flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-2.jpg" class="rounded-circle avatar-xs" alt="Notification Images">
                                                <span class="active-badge position-absolute start-100 translate-middle p-1 bg-success rounded-circle">
                                                    <span class="visually-hidden">New alerts</span>
                                                </span>
                                            </div>
                                            <div class="flex-grow-1">
                                                <BLink href="#!" class="stretched-link">
                                                    <h6 class="fs-md mb-1 lh-base">Angela Bernier</h6>
                                                </BLink>
                                                <p class="text-muted mb-0">Answered to your comment on the cash flow
                                                    forecast's graph 🔔.</p>
                                            </div>
                                            <p class="mb-0 fs-xs fw-medium flex-shrink-0 text-muted">
                                                1 week ago
                                            </p>
                                        </div>
                                    </div>

                                    <div class="text-reset notification-item d-block dropdown-item position-relative">
                                        <div class="d-flex gap-3">
                                            <div class="position-relative flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-3.jpg" class="rounded-circle avatar-xs" alt="Notification Images">
                                                <span class="active-badge position-absolute start-100 translate-middle p-1 bg-warning rounded-circle">
                                                    <span class="visually-hidden">New alerts</span>
                                                </span>
                                            </div>
                                            <div class="flex-grow-1">
                                                <BLink href="#!" class="stretched-link">
                                                    <h6 class="fs-md mb-1 lh-base">Maureen Gibson</h6>
                                                </BLink>
                                                <p class="text-muted mb-0">We talked about a project on linkedin.</p>
                                            </div>
                                            <p class="mb-0 fs-xs fw-medium flex-shrink-0 text-muted">
                                                2 week ago
                                            </p>
                                        </div>
                                    </div>
                                </SimpleBar>

                            </div>

                            <div class="empty-notification-elem text-center px-4 d-none">
                                <div class="mt-3 avatar-md mx-auto">
                                    <div class="avatar-title bg-info-subtle text-info fs-24 rounded-circle"> <i class="bi bi-bell "></i> </div>
                                </div>
                                <div class="pb-3 mt-2">
                                    <h6 class="fs-lg fw-semibold lh-base">Hey! You have no any notifications </h6>
                                </div>
                            </div>
                        </BDropdown>
                        <BDropdown v-if="profile" variant="link" class="ms-2 topbar-head-dropdown header-item" dropstart :offset="{ alignmentAxis: 60, crossAxis: 0, mainAxis: -50 }" toggle-class="btn-icon rounded-circle arrow-none" menu-class="p-2 dropdown-menu-end">
                            <template #button-content> <img class="rounded-circle img-fluid" :src="'https://steemitimages.com/u/'+profile.name+'/avatar'" alt="Header Avatar">
                            </template>
                            <div class="d-flex gap-2 mb-3 topbar-profile">
                                <div class="position-relative">
                                    <img class="rounded-1" :src="'https://steemitimages.com/u/'+profile.name+'/avatar'" alt="Header Avatar">
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger"><span class="visually-hidden">unread messages</span></span>
                                </div>
                                <div>
                                    <h6 class="mb-1 fs-sm user-name">@{{ profile.name }}</h6>
                                    <p class="mb-0 fw-medium fs-xs">
                                        <BLink target="_blank" :href="'https://steemit.com/@'+profile.name">View on Steemit</BLink>
                                    </p>
                                </div>
                            </div>
                            <router-link to="/wallet" class="dropdown-item"><i class="bi bi-person align-middle me-2"></i>
                                Profile</router-link>
                            <router-link to="/chat" class="dropdown-item"><i class="bi bi-chat-right-text align-middle me-2"></i>
                                Messages</router-link>
                            <router-link to="/pages/pricing" class="dropdown-item"><i class="bi bi-gem align-middle me-2"></i>
                                My Subscription</router-link>
                            <router-link to="/pages/profile" class="dropdown-item"><i class="bi bi-person-gear align-middle me-2"></i> Account Settings</router-link>
                            <BLink href="/logout" class="dropdown-item"><i class="bi bi-box-arrow-right align-middle me-2"></i>
                                Sign Out
                            </BLink>
                        </BDropdown>
                        <div v-else class="ms-2 topbar-head-dropdown header-item">
                            <BLink href="/login"
                                class="btn btn-primary"
                                >
                                <span class="icon-user"
                                    ><i class="ri-login-box-line align-bottom me-1"></i>
                                    {{ $t("t-signin") }}</span
                                >
                            </BLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
