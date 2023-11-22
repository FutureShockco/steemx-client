<script>
import { SimpleBar } from 'simplebar-vue3';

localStorage.setItem("rightbar_isopen", false);
import { layoutMethods, layoutComputed } from "@/state/helpers";

export default {
    data() {
        return {
            show: false,
            resetValueBtn:{}
        };
    },
    beforeCreate() {
            this.resetValue = JSON.stringify(this.$store.state.layout);
  },
    mounted() {
        let backtoTop = document.getElementById("back-to-top");

        if (backtoTop) {
            backtoTop = document.getElementById("back-to-top");
            window.onscroll = function () {
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    backtoTop.style.display = "block";
                } else {
                    backtoTop.style.display = "none";
                }
            };
        }

        // Preloader
        var setpreloader = document.getElementById("preloader");
        if (localStorage.getItem('data-preloader') && localStorage.getItem('data-preloader') == 'enable') {
            document.documentElement.setAttribute("data-preloader", "enable");
            if (setpreloader) {
                setTimeout(function () {
                    setpreloader.style.opacity = "0";
                    setpreloader.style.visibility = "hidden";
                }, 1000);
            }
        } else {
            document.documentElement.setAttribute("data-preloader", "disable");
            if (setpreloader) {
                setpreloader.style.opacity = "0";
                setpreloader.style.visibility = "hidden";
            }
        }
    },
    methods: {
        ...layoutMethods,
        click() {
            this.show = !this.show;
        },
        topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },

        resetBtn(){
            let reset = JSON.parse(this.resetValue)
            this.changeMode({ mode: reset.mode });
            this.changeCardLayout({ cardLayout: reset.cardLayout });
            this.changeLayoutWidth({ layoutWidth: reset.layoutWidth });
            this.changePosition({ position: reset.position });
            this.changeTopbar({ topbar: reset.topbar });
            this.changeTopbarImage({ topbarImage: reset.topbarImage });
            this.changePreloader({ preloader: reset.preloader });
        }
    },
    computed: {
        ...layoutComputed,
        mode: {
            get() {
                return this.$store ? this.$store.state.layout.mode : {} || {};
            },
            set(mode) {
                if (mode == "dark") {
                    this.changeMode({ mode: mode });
                    this.changeTopbar({ topbar: "dark" });
                } else if (mode == "brand") {
                    this.changeMode({ mode: mode });
                    this.changeTopbar({ topbar: "brand" });
                } else {
                    this.changeMode({ mode: mode });
                    this.changeTopbar({ topbar: "dark" });
                }
            },
        },
        cardLayout: {
            get() {
                return this.$store ? this.$store.state.layout.cardLayout : {} || {};
            },
            set(layout) {
                localStorage.setItem("rightbar_isopen", true);
                this.changeCardLayout({ cardLayout: layout, });
                // document.querySelector(".hamburger-icon").classList.remove("open");
            },
        },
        layoutWidth: {
            get() {
                return this.$store ? this.$store.state.layout.layoutWidth : {} || {};
            },
            set(width) {
                if (width == 'boxed') {
                    this.changeLayoutWidth({ layoutWidth: width });
                } else {
                    this.changeLayoutWidth({ layoutWidth: width });
                }
            },
        },
        position: {
            get() {
                return this.$store ? this.$store.state.layout.position : {} || {};
            },
            set(position) {
                return this.changePosition({
                    position: position,
                });
            },
        },
        topbar: {
            get() {
                return this.$store ? this.$store.state.layout.topbar : {} || {};
            },
            set(topbar) {
                this.changeTopbar({
                    topbar: topbar,
                });
            },
        },
        topbarImage: {
            get() {
                return this.$store ? this.$store.state.layout.topbarImage : {} || {};
            },
            set(topbarImage) {
                return this.changeTopbarImage({
                    topbarImage: topbarImage,
                });
            },
        },
        preloader: {
            get() {
                return this.$store ? this.$store.state.layout.preloader : {} || {};
            },
            set(preloader) {
                return this.changePreloader({
                    preloader: preloader,
                });
            },
        }
    },
    watch: {
        mode: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    switch (newVal) {
                        case "dark":
                            document.documentElement.setAttribute("data-bs-theme", "dark");
                            break;
                        case "light":
                            document.documentElement.setAttribute("data-bs-theme", "light");
                            break;
                        case "brand":
                            document.documentElement.setAttribute("data-bs-theme", "brand");
                            break;
                        default:
                            document.documentElement.setAttribute("data-bs-theme", "dark");
                            break;
                    }
                }
            },
        },
        cardLayout: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    switch (newVal) {
                        case "borderless":
                            document.documentElement.setAttribute("data-card-layout", "borderless");
                            break;
                        case "border":
                            document.documentElement.setAttribute("data-card-layout", "border");
                            break;
                        default:
                            document.documentElement.setAttribute("data-card-layout", "borderless");
                            break;
                    }
                }
            },
        },
        layoutWidth: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    switch (newVal) {
                        case "fluid":
                            document.documentElement.setAttribute(
                                "data-layout-width",
                                "fluid"
                            );
                            break;
                        case "boxed":
                            document.documentElement.setAttribute(
                                "data-layout-width",
                                "boxed"
                            );
                            break;
                    }
                }
            },
        },
        position: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    switch (newVal) {
                        case "fixed":
                            document.documentElement.setAttribute(
                                "data-layout-position",
                                "fixed"
                            );
                            break;
                        case "scrollable":
                            document.documentElement.setAttribute(
                                "data-layout-position",
                                "scrollable"
                            );
                            break;
                    }
                }
            },
        },
        topbar: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    switch (newVal) {
                        case "light":
                            document.documentElement.setAttribute("data-topbar", "light");
                            break;
                        case "dark":
                            document.documentElement.setAttribute("data-topbar", "dark");
                            break;
                        case "brand":
                            document.documentElement.setAttribute("data-topbar", "brand");
                            break;
                    }
                }
            },
        },
        topbarImage: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    switch (newVal) {
                        case "pattern-1":
                            document.documentElement.setAttribute("data-topbar-image", "pattern-1");
                            break;
                        case "pattern-2":
                            document.documentElement.setAttribute("data-topbar-image", "pattern-2");
                            break;
                        case "pattern-3":
                            document.documentElement.setAttribute("data-topbar-image", "pattern-3");
                            break;
                        default:
                            document.documentElement.setAttribute("data-sidebar-image", "none");
                            break;
                    }
                }
            },
        },
        preloader: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    switch (newVal) {
                        case "enable":
                            document.documentElement.setAttribute("data-preloader", "enable");
                            break;
                        case "disable":
                            document.documentElement.setAttribute("data-preloader", "disable");
                            break;
                    }
                    localStorage.setItem('data-preloader', newVal);
                }
            },
        }
    },
    components: { SimpleBar },
};
</script>

<template>
    <!--start back-to-top-->
    <button class="btn btn-dark btn-icon" id="back-to-top" @click="topFunction">
        <i class="bi bi-caret-up fs-3xl"></i>
    </button>
    <!--end back-to-top-->

    <!--preloader-->
    <div id="preloader">
        <div id="status">
            <div class="spinner-border text-primary avatar-sm" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>

    <!-- <div class="customizer-setting d-none d-md-block" @click="click">
        <div class="btn btn-info" data-bs-toggle="offcanvas" data-bs-target="#theme-settings-offcanvas"
            aria-controls="theme-settings-offcanvas">
            <i class="ph ph-gear-six me-1 align-middle"></i> Customizer
        </div>
    </div> -->

    <!-- Theme Settings -->
    <BOffcanvas class="border-0" id="theme-settings-offcanvas"
        header-class="d-flex align-items-center bg-primary bg-gradient p-3" body-class="p-0"
        footer-class="offcanvas-footer border-top p-3 text-center" placement="end" v-model="show">
        <template #header>
            <div class="me-2">
                <h5 class="mb-1 text-white">SteemX Builder</h5>
                <p class="text-white text-opacity-75 mb-0">Choose your themes & layouts etc.</p>
            </div>
            <button type="button" class="btn-close btn-close-white ms-auto" id="customizerclose-btn"
                @click="click"></button>
        </template>
        <SimpleBar class="h-100">
            <div class="p-4">

                <h6 class="fs-md mb-1">Color Scheme</h6>
                <p class="text-muted fs-sm">Choose Light or Dark Scheme.</p>

                <div class="colorscheme-cardradio">
                    <BRow class="g-3">
                        <BCol cols="4">
                            <div class="form-check card-radio">
                                <input class="form-check-input" type="radio" name="data-bs-theme" id="layout-mode-light"
                                    value="light" v-model="mode">
                                <label class="form-check-label p-3 bg-transparent text-center" for="layout-mode-light">
                                    Light Mode
                                </label>
                            </div>
                            <h5 class="fs-sm text-center fw-medium mt-2">Light</h5>
                        </BCol>

                        <BCol cols="4">
                            <div class="form-check card-radio dark">
                                <input class="form-check-input" type="radio" name="data-bs-theme" id="layout-mode-dark"
                                    value="dark" v-model="mode">
                                <label class="form-check-label p-3 bg-dark text-white text-opacity-75 text-center"
                                    for="layout-mode-dark">
                                    Dark Mode
                                </label>
                            </div>
                            <h5 class="fs-sm text-center fw-medium mt-2">Dark</h5>
                        </BCol>

                        <BCol cols="4">
                            <div class="form-check card-radio brand">
                                <input class="form-check-input" type="radio" name="data-bs-theme" id="layout-mode-brand"
                                    value="brand" v-model="mode">
                                <label class="form-check-label p-3 bg-primary text-white text-opacity-75 text-center"
                                    for="layout-mode-brand">
                                    Brand Mode
                                </label>
                            </div>
                            <h5 class="fs-sm text-center fw-medium mt-2">Brand</h5>
                        </BCol>
                    </BRow>
                </div>

                <div id="data-card-layout">
                    <h6 class="mt-4 fs-md mb-1">Card Layout</h6>
                    <p class="text-muted fs-sm">Choose borderless or border layout.</p>

                    <BRow>
                        <BCol cols="4">
                            <div class="form-check card-radio">
                                <input class="form-check-input" type="radio" name="data-card-layout"
                                    id="data-card-layout-borderless" value="borderless" v-model="cardLayout">
                                <label class="form-check-label p-0 avatar-md w-100" for="data-card-layout-borderless">
                                    <span class="d-flex h-100 flex-column gap-1 bg-light bg-opacity-50">
                                        <span class="bg-light d-flex p-1 gap-1 align-items-center">
                                            <span class="d-block p-1 bg-primary-subtle rounded me-1"></span>
                                            <span class="d-block p-1 pb-0 px-2 bg-primary-subtle ms-auto"></span>
                                            <span class="d-block p-1 pb-0 px-2 bg-primary-subtle"></span>
                                        </span>
                                        <span class="d-flex gap-2 justify-content-center px-1">
                                            <span class="d-block px-2 py-3 bg-body-secondary rounded-1"></span>
                                            <span class="d-block px-2 py-3 bg-body-secondary rounded-1"></span>
                                            <span class="d-block px-2 py-3 bg-body-secondary rounded-1"></span>
                                            <span class="d-block px-2 py-3 bg-body-secondary rounded-1"></span>
                                        </span>
                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                    </span>
                                </label>
                            </div>
                            <h5 class="fs-sm text-center fw-medium mt-2">Borderless</h5>
                        </BCol>
                        <BCol cols="4">
                            <div class="form-check card-radio">
                                <input class="form-check-input" type="radio" name="data-card-layout"
                                    id="data-card-layout-border" value="border" v-model="cardLayout">
                                <label class="form-check-label p-0 avatar-md w-100" for="data-card-layout-border">
                                    <span class="d-flex h-100 flex-column gap-1">
                                        <span class="bg-light d-flex p-1 gap-1 align-items-center">
                                            <span class="d-block p-1 bg-primary-subtle rounded me-1"></span>
                                            <span class="d-block p-1 pb-0 px-2 bg-primary-subtle ms-auto"></span>
                                            <span class="d-block p-1 pb-0 px-2 bg-primary-subtle"></span>
                                        </span>
                                        <span class="d-flex gap-2 justify-content-center px-1">
                                            <span class="d-block px-2 py-3 bg-body-secondary border rounded-1"></span>
                                            <span class="d-block px-2 py-3 bg-body-secondary border rounded-1"></span>
                                            <span class="d-block px-2 py-3 bg-body-secondary border rounded-1"></span>
                                            <span class="d-block px-2 py-3 bg-body-secondary border rounded-1"></span>
                                        </span>
                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                    </span>
                                </label>
                            </div>
                            <h5 class="fs-sm text-center fw-medium mt-2">Border</h5>
                        </BCol>
                    </BRow>
                </div>

                <div id="layout-width">
                    <h6 class="mt-4 fs-md mb-1">Layout Width</h6>
                    <p class="text-muted fs-sm">Choose Fluid or Boxed layout.</p>

                    <BRow>
                        <BCol cols="4">
                            <div class="form-check card-radio">
                                <input class="form-check-input" type="radio" name="data-layout-width"
                                    id="layout-width-fluid" value="fluid" v-model="layoutWidth">
                                <label class="form-check-label p-0 avatar-md w-100" for="layout-width-fluid">
                                    <span class="d-flex h-100 flex-column gap-1">
                                        <span class="bg-light d-flex p-1 gap-1 align-items-center">
                                            <span class="d-block p-1 bg-primary-subtle rounded me-1"></span>
                                            <span class="d-block p-1 pb-0 px-2 bg-primary-subtle ms-auto"></span>
                                            <span class="d-block p-1 pb-0 px-2 bg-primary-subtle"></span>
                                        </span>
                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                    </span>
                                </label>
                            </div>
                            <h5 class="fs-sm text-center fw-medium mt-2">Fluid</h5>
                        </BCol>
                        <BCol cols="4">
                            <div class="form-check card-radio">
                                <input class="form-check-input" type="radio" name="data-layout-width"
                                    id="layout-width-boxed" value="boxed" v-model="layoutWidth">
                                <label class="form-check-label p-0 avatar-md w-100 px-2" for="layout-width-boxed">
                                    <span class="d-flex h-100 flex-column gap-1">
                                        <span class="bg-light d-flex p-1 gap-1 align-items-center">
                                            <span class="d-block p-1 bg-primary-subtle rounded me-1"></span>
                                            <span class="d-block p-1 pb-0 px-2 bg-primary-subtle ms-auto"></span>
                                            <span class="d-block p-1 pb-0 px-2 bg-primary-subtle"></span>
                                        </span>
                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                    </span>
                                </label>
                            </div>
                            <h5 class="fs-sm text-center fw-medium mt-2">Boxed</h5>
                        </BCol>
                    </BRow>
                </div>

                <div id="layout-position">
                    <h6 class="mt-4 fs-md mb-1">Layout Position</h6>
                    <p class="text-muted fs-sm">Choose Fixed or Scrollable Layout Position.</p>

                    <div class="btn-group radio" role="group">
                        <input type="radio" class="btn-check" name="data-layout-position" id="layout-position-fixed"
                            value="fixed" v-model="position">
                        <label class="btn btn-light w-sm" for="layout-position-fixed">Fixed</label>

                        <input type="radio" class="btn-check" name="data-layout-position" id="layout-position-scrollable"
                            value="scrollable" v-model="position">
                        <label class="btn btn-light w-sm ms-0" for="layout-position-scrollable">Scrollable</label>
                    </div>
                </div>

                <h6 class="mt-4 fs-md mb-1">Topbar Color</h6>
                <p class="text-muted fs-sm">Choose Light, Dark or Brand Topbar Color.</p>

                <BRow>
                    <BCol cols="4">
                        <div class="form-check card-radio">
                            <input class="form-check-input" type="radio" name="data-topbar" id="topbar-color-light"
                                value="light" v-model="topbar">
                            <label class="form-check-label p-0 avatar-md w-100" for="topbar-color-light">
                                <span class="d-flex h-100 flex-column gap-1">
                                    <span class="bg-light d-flex p-1 gap-1 align-items-center">
                                        <span class="d-block p-1 bg-primary-subtle rounded me-1"></span>
                                        <span class="d-block p-1 pb-0 px-2 bg-primary-subtle ms-auto"></span>
                                        <span class="d-block p-1 pb-0 px-2 bg-primary-subtle"></span>
                                    </span>
                                    <span class="bg-light d-block p-1 mt-auto"></span>
                                </span>
                            </label>
                        </div>
                        <h5 class="fs-sm text-center fw-medium mt-2">Light</h5>
                    </BCol>
                    <BCol cols="4">
                        <div class="form-check card-radio">
                            <input class="form-check-input" type="radio" name="data-topbar" id="topbar-color-dark"
                                value="dark" v-model="topbar">
                            <label class="form-check-label p-0 avatar-md w-100" for="topbar-color-dark">
                                <span class="d-flex h-100 flex-column gap-1">
                                    <span class="bg-dark d-flex p-1 gap-1 align-items-center">
                                        <span class="d-block p-1 bg-white bg-opacity-25 rounded me-1"></span>
                                        <span class="d-block p-1 pb-0 px-2 bg-white bg-opacity-25 ms-auto"></span>
                                        <span class="d-block p-1 pb-0 px-2 bg-white bg-opacity-25"></span>
                                    </span>
                                    <span class="bg-light d-block p-1 mt-auto"></span>
                                </span>
                            </label>
                        </div>
                        <h5 class="fs-sm text-center fw-medium mt-2">Dark</h5>
                    </BCol>
                    <BCol cols="4">
                        <div class="form-check card-radio">
                            <input class="form-check-input" type="radio" name="data-topbar" id="topbar-color-brand"
                                value="brand" v-model="topbar">
                            <label class="form-check-label p-0 avatar-md w-100" for="topbar-color-brand">
                                <span class="d-flex h-100 flex-column gap-1">
                                    <span class="bg-primary d-flex p-1 gap-1 align-items-center">
                                        <span class="d-block p-1 bg-white bg-opacity-25 rounded me-1"></span>
                                        <span class="d-block p-1 pb-0 px-2 bg-white bg-opacity-25 ms-auto"></span>
                                        <span class="d-block p-1 pb-0 px-2 bg-white bg-opacity-25"></span>
                                    </span>
                                    <span class="bg-light d-block p-1 mt-auto"></span>
                                </span>
                            </label>
                        </div>
                        <h5 class="fs-sm text-center fw-medium mt-2">Brand</h5>
                    </BCol>
                </BRow>

                <h6 class="mt-4 fs-md mb-1">Topbar Images</h6>
                <p class="text-muted fs-sm">Choose Topbar Images.</p>

                <BRow>
                    <BCol cols="4">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="data-topbar-image" value="pattern-1"
                                id="data-topbar-image-one" v-model="topbarImage">
                            <label class="form-check-label" for="data-topbar-image-one">
                                One
                            </label>
                        </div>
                    </BCol>
                    <BCol cols="4">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="data-topbar-image" value="pattern-2"
                                id="data-topbar-image-two" v-model="topbarImage">
                            <label class="form-check-label" for="data-topbar-image-two">
                                Two
                            </label>
                        </div>
                    </BCol>
                    <BCol cols="4">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="data-topbar-image" value="pattern-3"
                                id="data-topbar-image-three" v-model="topbarImage">
                            <label class="form-check-label" for="data-topbar-image-three">
                                Three
                            </label>
                        </div>
                    </BCol>
                </BRow>

                <div id="preloader-menu">
                    <h6 class="mt-4 fw-semibold fs-base">Preloader</h6>
                    <p class="text-muted fs-sm">Choose a preloader.</p>

                    <BRow>
                        <BCol cols="4">
                            <div class="form-check sidebar-setting card-radio">
                                <input class="form-check-input" type="radio" name="data-preloader"
                                    id="preloader-view-custom" value="enable" v-model="preloader">
                                <label class="form-check-label p-0 avatar-md w-100" for="preloader-view-custom">
                                    <span class="d-flex h-100 flex-column gap-1">
                                        <span class="bg-light d-flex p-1 gap-1 align-items-center">
                                            <span class="d-block p-1 bg-primary-subtle rounded me-1"></span>
                                            <span class="d-block p-1 pb-0 px-2 bg-primary-subtle ms-auto"></span>
                                            <span class="d-block p-1 pb-0 px-2 bg-primary-subtle"></span>
                                        </span>
                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                    </span>
                                    <span class="d-flex align-items-center justify-content-center">
                                        <span class="spinner-border text-primary avatar-xxs m-auto" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </span>
                                    </span>
                                </label>
                            </div>
                            <h5 class="fs-sm text-center fw-medium mt-2">Enable</h5>
                        </BCol>
                        <BCol cols="4">
                            <div class="form-check sidebar-setting card-radio">
                                <input class="form-check-input" type="radio" name="data-preloader" id="preloader-view-none"
                                    value="disable" v-model="preloader">
                                <label class="form-check-label p-0 avatar-md w-100" for="preloader-view-none">
                                    <span class="d-flex h-100 flex-column gap-1">
                                        <span class="bg-light d-flex p-1 gap-1 align-items-center">
                                            <span class="d-block p-1 bg-primary-subtle rounded me-1"></span>
                                            <span class="d-block p-1 pb-0 px-2 bg-primary-subtle ms-auto"></span>
                                            <span class="d-block p-1 pb-0 px-2 bg-primary-subtle"></span>
                                        </span>
                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                    </span>
                                </label>
                            </div>
                            <h5 class="fs-sm text-center fw-medium mt-2">Disable</h5>
                        </BCol>
                    </BRow>

                </div>
            </div>
        </SimpleBar>
        <template #footer>
            <BRow>
                <BCol cols="6">
                    <button type="button" class="btn btn-light w-100" id="reset-layout" @click="resetBtn">Reset</button>
                </BCol>
                <BCol cols="6">
                    <BLink href="#!" target="_blank" class="btn btn-primary w-100">Buy Now</BLink>
                </BCol>
            </BRow>
        </template>
    </BOffcanvas>
</template>
