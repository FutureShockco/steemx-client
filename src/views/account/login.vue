<script>
import { required, email, helpers } from "@vuelidate/validators";
import axios from 'axios';
import sl from '@/helpers/steemlogin';

import { authMethods, authFackMethods, notificationMethods } from "@/state/helpers";

export default {
    data() {
        return {
            username: "",
            email: "admin@themesbrand.com",
            password: "123456",
            submitted: false,
            authError: null,
            tryingToLogIn: false,
            isAuthError: false,
            processing: false,
            togglePassword: false,
            loginURL: sl.getLoginURL(),
            hasKeychain: window.steem_keychain !== undefined ? true : false
        };
    },

    validations: {
        email: {
            required: helpers.withMessage("Email is required", required),
            email: helpers.withMessage("Please enter valid email", email),
        },
        password: {
            required: helpers.withMessage("Password is required", required),
        },
    },
    methods: {
        ...authMethods,
        ...authFackMethods,
        ...notificationMethods,
        async signinKeychain() {
            this.processing = true;
            const that = this;
            window.steem_keychain.requestSignBuffer(
                that.username,
                'hello',
                'Posting',
                function (response) {
                    console.log("main js response - verify key");
                    console.log(response);
                    if (!response.success) {
                        that.processing = false;
                        return that.authError = response.message;
                    }
                    else {
                        localStorage.setItem('user', that.username);
                        localStorage.setItem('login_type', "keychain");

                        that.$router.push({
                            path: '/'
                        });
                    }

                }
            );


        },
        async signinapi() {

            this.processing = true;
            const result = await axios.post('https://api-node.themesbrand.website/auth/signin', {
                email: this.email,
                password: this.password
            });
            if (result.data.status == 'errors') {
                return this.authError = result.data.data;
            }
            localStorage.setItem('jwt', result.data.token);
            this.$router.push({
                path: '/'
            });
        },

        // Try to log the user in with the username
        // and password they provided.
        tryToLogIn() {
            this.processing = true;
            this.submitted = true;
            // stop here if form is invalid
            this.$touch;

            if (this.$invalid) {
                return;
            } else {
                if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
                    this.tryingToLogIn = true;
                    // Reset the authError if it existed.
                    this.authError = null;
                    return (
                        this.logIn({
                            email: this.email,
                            password: this.password,
                        })
                            // eslint-disable-next-line no-unused-vars
                            .then((token) => {
                                this.tryingToLogIn = false;
                                this.isAuthError = false;
                                // Redirect to the originally requested page, or to the home page
                                this.$router.push({
                                    path: '/'
                                });
                            })
                            .catch((error) => {
                                this.tryingToLogIn = false;
                                this.authError = error ? error : "";
                                this.isAuthError = true;
                                this.processing = false;
                            })
                    );
                } else if (process.env.VUE_APP_DEFAULT_AUTH === "fakebackend") {
                    const { email, password } = this;
                    if (email && password) {
                        this.login({
                            email,
                            password,
                        });
                    }
                } else if (process.env.VUE_APP_DEFAULT_AUTH === "authapi") {
                    axios
                        .post("http://127.0.0.1:8000/api/login", {
                            email: this.email,
                            password: this.password,
                        })
                        .then((res) => {
                            return res;
                        });
                }
            }
        },

    },
    mounted() {
        document.documentElement.setAttribute("data-bs-theme", this.$store.state.layout.mode);
        const that = this;

        window.addEventListener('load', () => {
            that.hasKeychain = window.steem_keychain !== undefined ? true : false;
        })
    }
};
</script>

<template>
    <section
        class="auth-page-wrapper bg-primary-subtle py-5 position-relative d-flex align-items-center justify-content-center min-vh-100">
        <BContainer>
            <BRow class="justify-content-center">
                <BCol lg="10">
                    <BCard no-body class="mb-0 p-2">
                        <BRow class="g-0">
                            <BCol xxl="5">
                                <BCard no-body
                                    class="auth-card h-100 border-0 shadow-none d-none d-sm-block overflow-hidden mb-0">
                                    <div class="position-absolute top-0 end-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"
                                            width="500" height="800" preserveAspectRatio="none" viewBox="0 0 500 800">
                                            <g mask="url(&quot;#SvgjsMask1083&quot;)" fill="none">
                                                <path
                                                    d="M51.34 537.01L107.63 569.51L107.63 634.51L51.34 667.01L-4.95 634.51L-4.95 569.51zM51.34 732.01L107.63 764.51L107.63 829.51L51.34 862.01L-4.95 829.51L-4.95 764.51zM220.22 244.51L276.51 277.01L276.51 342.01L220.22 374.51L163.93 342.01L163.93 277.01zM220.22 634.51L276.51 667.01L276.51 732.01L220.22 764.51L163.93 732.01L163.93 667.01zM163.93 732.01L220.22 764.51L220.22 829.51L163.93 862.01L107.63 829.51L107.63 764.51zM276.51 537.01L332.81 569.51L332.81 634.51L276.51 667.01L220.22 634.51L220.22 569.51zM445.39 49.51L501.69 82.01L501.69 147.01L445.39 179.51L389.1 147.01L389.1 82.01zM445.39 244.51L501.69 277.01L501.69 342.01L445.39 374.51L389.1 342.01L389.1 277.01zM389.1 342.01L445.39 374.51L445.39 439.51L389.1 472.01L332.81 439.51L332.81 374.51zM445.39 439.51L501.69 472.01L501.69 537.01L445.39 569.51L389.1 537.01L389.1 472.01zM389.1 732.01L445.39 764.51L445.39 829.51L389.1 862.01L332.81 829.51L332.81 764.51zM501.69 147.01L557.98 179.51L557.98 244.51L501.69 277.01L445.39 244.51L445.39 179.51z"
                                                    stroke="rgba(64, 49, 159, 1)" stroke-width="2"></path>
                                                <path
                                                    d="M44.84 537.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM101.13 569.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM101.13 634.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM44.84 667.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM-11.45 634.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM-11.45 569.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM44.84 732.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM101.13 764.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM101.13 829.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM44.84 862.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM-11.45 829.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM-11.45 764.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM213.72 244.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM270.01 277.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM270.01 342.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM213.72 374.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM157.43 342.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM157.43 277.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM213.72 634.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM270.01 667.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM270.01 732.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM213.72 764.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM157.43 732.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM157.43 667.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM213.72 829.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM157.43 862.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM270.01 537.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM326.31 569.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM326.31 634.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM213.72 569.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM438.89 49.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM495.19 82.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM495.19 147.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM438.89 179.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM382.6 147.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM382.6 82.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM438.89 244.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM495.19 277.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM495.19 342.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM438.89 374.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM382.6 342.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM382.6 277.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM438.89 439.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM382.6 472.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM326.31 439.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM326.31 374.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM495.19 472.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM495.19 537.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM438.89 569.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM382.6 537.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM382.6 732.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM438.89 764.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM438.89 829.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM382.6 862.01 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM326.31 829.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM326.31 764.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM551.48 179.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0zM551.48 244.51 a6.5 6.5 0 1 0 13 0 a6.5 6.5 0 1 0 -13 0z"
                                                    fill="rgba(64, 49, 159, 1)"></path>
                                                <path
                                                    d="M31.74 -12.53L63.78 5.97L63.78 42.97L31.74 61.47L-0.3 42.97L-0.3 5.97zM63.78 42.97L95.83 61.47L95.83 98.47L63.78 116.97L31.74 98.47L31.74 61.47zM31.74 431.47L63.78 449.97L63.78 486.97L31.74 505.47L-0.3 486.97L-0.3 449.97zM63.78 597.97L95.83 616.47L95.83 653.47L63.78 671.97L31.74 653.47L31.74 616.47zM31.74 653.47L63.78 671.97L63.78 708.97L31.74 727.47L-0.3 708.97L-0.3 671.97zM31.74 764.47L63.78 782.97L63.78 819.97L31.74 838.47L-0.3 819.97L-0.3 782.97zM95.83 320.47L127.87 338.97L127.87 375.97L95.83 394.47L63.78 375.97L63.78 338.97zM127.87 486.97L159.92 505.47L159.92 542.47L127.87 560.97L95.83 542.47L95.83 505.47zM159.92 98.47L191.96 116.97L191.96 153.97L159.92 172.47L127.87 153.97L127.87 116.97zM191.96 153.97L224 172.47L224 209.47L191.96 227.97L159.92 209.47L159.92 172.47zM191.96 375.97L224 394.47L224 431.47L191.96 449.97L159.92 431.47L159.92 394.47zM159.92 431.47L191.96 449.97L191.96 486.97L159.92 505.47L127.87 486.97L127.87 449.97zM159.92 542.47L191.96 560.97L191.96 597.97L159.92 616.47L127.87 597.97L127.87 560.97zM159.92 653.47L191.96 671.97L191.96 708.97L159.92 727.47L127.87 708.97L127.87 671.97zM224 98.47L256.05 116.97L256.05 153.97L224 172.47L191.96 153.97L191.96 116.97zM256.05 153.97L288.09 172.47L288.09 209.47L256.05 227.97L224 209.47L224 172.47zM224 209.47L256.05 227.97L256.05 264.97L224 283.47L191.96 264.97L191.96 227.97zM224 431.47L256.05 449.97L256.05 486.97L224 505.47L191.96 486.97L191.96 449.97zM256.05 597.97L288.09 616.47L288.09 653.47L256.05 671.97L224 653.47L224 616.47zM224 653.47L256.05 671.97L256.05 708.97L224 727.47L191.96 708.97L191.96 671.97zM256.05 708.97L288.09 727.47L288.09 764.47L256.05 782.97L224 764.47L224 727.47zM320.13 42.97L352.18 61.47L352.18 98.47L320.13 116.97L288.09 98.47L288.09 61.47zM288.09 98.47L320.13 116.97L320.13 153.97L288.09 172.47L256.05 153.97L256.05 116.97zM288.09 209.47L320.13 227.97L320.13 264.97L288.09 283.47L256.05 264.97L256.05 227.97zM320.13 264.97L352.18 283.47L352.18 320.47L320.13 338.97L288.09 320.47L288.09 283.47zM288.09 431.47L320.13 449.97L320.13 486.97L288.09 505.47L256.05 486.97L256.05 449.97zM320.13 708.97L352.18 727.47L352.18 764.47L320.13 782.97L288.09 764.47L288.09 727.47zM352.18 -12.53L384.22 5.97L384.22 42.97L352.18 61.47L320.13 42.97L320.13 5.97zM384.22 42.97L416.27 61.47L416.27 98.47L384.22 116.97L352.18 98.47L352.18 61.47zM352.18 209.47L384.22 227.97L384.22 264.97L352.18 283.47L320.13 264.97L320.13 227.97zM352.18 320.47L384.22 338.97L384.22 375.97L352.18 394.47L320.13 375.97L320.13 338.97zM352.18 431.47L384.22 449.97L384.22 486.97L352.18 505.47L320.13 486.97L320.13 449.97zM384.22 486.97L416.27 505.47L416.27 542.47L384.22 560.97L352.18 542.47L352.18 505.47zM384.22 597.97L416.27 616.47L416.27 653.47L384.22 671.97L352.18 653.47L352.18 616.47zM384.22 708.97L416.27 727.47L416.27 764.47L384.22 782.97L352.18 764.47L352.18 727.47zM416.27 -12.53L448.31 5.97L448.31 42.97L416.27 61.47L384.22 42.97L384.22 5.97zM416.27 209.47L448.31 227.97L448.31 264.97L416.27 283.47L384.22 264.97L384.22 227.97zM416.27 320.47L448.31 338.97L448.31 375.97L416.27 394.47L384.22 375.97L384.22 338.97zM448.31 375.97L480.35 394.47L480.35 431.47L448.31 449.97L416.27 431.47L416.27 394.47zM448.31 597.97L480.35 616.47L480.35 653.47L448.31 671.97L416.27 653.47L416.27 616.47zM416.27 653.47L448.31 671.97L448.31 708.97L416.27 727.47L384.22 708.97L384.22 671.97zM512.4 375.97L544.44 394.47L544.44 431.47L512.4 449.97L480.35 431.47L480.35 394.47zM480.35 431.47L512.4 449.97L512.4 486.97L480.35 505.47L448.31 486.97L448.31 449.97zM480.35 764.47L512.4 782.97L512.4 819.97L480.35 838.47L448.31 819.97L448.31 782.97z"
                                                    stroke="rgba(0, 0, 0, 0)" stroke-width="2"></path>
                                            </g>
                                            <defs>
                                                <mask id="SvgjsMask1083">
                                                    <rect width="500" height="800" fill="#ffffff"></rect>
                                                </mask>
                                            </defs>
                                        </svg>
                                    </div>
                                    <BCardBody
                                        class="py-5 d-flex justify-content-between flex-column h-100 position-relative gap-4">
                                        <div class="text-center">
                                            <h2 class="text-white fw-medium lh-base text-capitalize mb-3">Let's get started
                                                with your <span class="text-warning">30 days free trial</span></h2>
                                            <p class="text-white text-opacity-75">It brings together your tasks, projects,
                                                timelines, files and more</p>
                                        </div>

                                        <div class="text-center">
                                            <p class="text-white text-opacity-75 mb-0 mt-3">
                                                &copy; {{ new Date().getFullYear() }} SteemX. Crafted with <i
                                                    class="bi bi-heart-fill text-danger"></i> by <BLink href="#!"
                                                    class="text-white">Futureshock</BLink>
                                            </p>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol xxl="6" class="mx-auto">
                                <BCard no-body class="mb-0 border-0 shadow-none mb-0">
                                    <BCardBody class="p-sm-5">
                                        <div class="text-center mt-5">
                                            <h5 class="fs-3xl">Welcome Back</h5>
                                            <p class="text-muted">Sign in to continue to SteemX.</p>
                                        </div>
                                        <div class="p-2">
                                            <!-- <div class="p-2 mt-5"></div> -->
                                            <form @submit.prevent="tryToLogIn">

                                                <div class="mb-3">
                                                    <label for="username" class="form-label">Account name <span
                                                            class="text-danger">*</span></label>
                                                    <div class="position-relative ">
                                                        <input type="username"
                                                            class="form-control bg-light border-light password-input"
                                                            id="username" placeholder="Enter your steem username"
                                                            v-model="username" required>
                                                    </div>
                                                </div>

                                                <!-- <div class="mb-3">

                                                    <label class="form-label" for="password-input">Posting key <span
                                                            class="text-danger">*</span></label>
                                                    <div class="position-relative auth-pass-inputgroup mb-3">

                                                        <input :type="togglePassword ? 'text' : 'password'"
                                                            class="form-control bg-light border-light pe-5 password-input "
                                                            placeholder="Enter password" id="password-input"
                                                            v-model="password" required>
                                                        <button
                                                            class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                                            type="button" id="password-addon"
                                                            @click="togglePassword = !togglePassword"><i
                                                                class="ri-eye-fill align-middle"></i></button>
                                                    </div>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="auth-remember-check">
                                                    <label class="form-check-label" for="auth-remember-check">Remember
                                                        me</label>
                                                </div> -->
                                                <div class="mt-4">
                                                    <button class="btn btn-primary w-100" type="submit"
                                                        @click="signinKeychain" :disabled="!hasKeychain || processing">{{
                                                            processing ? "Please wait" :
                                                            "SteemKeychain"
                                                        }}</button>
                                                </div>
                                                <div class="mt-4">
                                                    <a class="btn btn-primary w-100" :href="loginURL"
                                                        :disabled="processing">{{ processing ? "Please wait" : "Steemlogin"
                                                        }} </a>
                                                </div>



                                                <!-- <div class="mt-4">
                                                    <button class="btn btn-primary w-100" type="submit" @click="signinapi"
                                                        :disabled="processing">{{ processing ? "Please wait" : "Sign In"
                                                        }}</button>
                                                </div> -->

                                                <!-- <div class="mt-4 pt-2 text-center">
                                                    <div class="signin-other-title position-relative">
                                                        <h5 class="fs-sm mb-4 title">Sign In with</h5>
                                                    </div>
                                                    <div class="pt-2 hstack gap-2 justify-content-center">
                                                        <button type="button" class="btn btn-subtle-primary btn-icon"><i
                                                                class="ri-facebook-fill fs-lg"></i></button>
                                                        <button type="button" class="btn btn-subtle-danger btn-icon"><i
                                                                class="ri-google-fill fs-lg"></i></button>
                                                        <button type="button" class="btn btn-subtle-dark btn-icon"><i
                                                                class="ri-github-fill fs-lg"></i></button>
                                                        <button type="button" class="btn btn-subtle-info btn-icon"><i
                                                                class="ri-twitter-fill fs-lg"></i></button>
                                                    </div>
                                                </div> -->
                                            </form>

                                            <div class="text-center mt-5">
                                                <p class="mb-0">Don't have a Steem account ? <router-link to="/register"
                                                        class="fw-semibold text-success text-decoration-underline">
                                                        Sign Up</router-link> </p>
                                                <p class="mb-0">Download <router-link to="/register"
                                                        class="fw-semibold text-danger text-decoration-underline">
                                                        Steem Keychain</router-link> </p>
                                            </div>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                        </BRow>
                    </BCard>
                </BCol>
            </BRow>
        </BContainer>
    </section>
</template>