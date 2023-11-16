<script>
import Layout from "@/layouts";
import PageHeader from "@/components/page-header.vue";
import RightBar from "@/components/right-bar.vue";
import { countrylist } from "@/common/data";

const sampleCountryData = {
    flagImg: require("@/assets/images/flags/us.svg"),
    countryName: "United States of America",
    countryCode: "+1"
};

export default {
    data() {
        return {
            countrylist: countrylist,

            simpleDrop: false,
            simpleDropValue: "",

            inputFlagDrop: false,
            inputFlagDropValue: sampleCountryData,

            simpleMenu: false,
            simpleMenuValue: "",

            inputFlagNumber: false,
            inputFlagNumberValue: sampleCountryData,

            inputFlag: false,
            inputFlagValue: sampleCountryData,
        };
    },
    mounted() {
        document.querySelectorAll(".minus").forEach((item) => {
            let productQuantity = item.closest(".input-step").querySelector(".product-quantity");
            item.addEventListener("click", () => {
                if (productQuantity.value > 0) {
                    productQuantity.value--;
                }
            });
        });
        document.querySelectorAll(".plus").forEach((item) => {
            let productQuantity = item.closest(".input-step").querySelector(".product-quantity");
            item.addEventListener("click", () => {
                productQuantity.value++;
            });
        });

        document.querySelectorAll(".form-label").forEach((item) => {
            document.addEventListener('click', function (event) {
                if (!item.nextSibling.contains(event.target)) {
                    item.closest("div").querySelector(".dropdown-menu").classList.remove("show");
                }
            });
        });
    },
    components: {
        Layout,
        PageHeader,
        RightBar,
    },
};
</script>

<template>
    <Layout>
        <div class="page-title-box">
            <BRow class="align-items-center">
                <BCol md="5">
                    <PageHeader title="Form Advanced" pagetitle="Forms" />
                </BCol>
                <BCol md="auto" class="ms-auto">
                    <RightBar />
                </BCol>
            </BRow>
        </div>
        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Custom country select input</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <BRow class="g-3">
                            <BCol lg="6">
                                <div>
                                    <label class="form-label">Simple select example</label>
                                    <div data-input-flag data-option-flag-name @click="simpleDrop = !simpleDrop"
                                        id="simpleSelect">
                                        <input type="text" class="form-control rounded-end flag-input" readonly
                                            placeholder="Select country" v-model="simpleDropValue">
                                        <div class="dropdown-menu w-100" :class="{ show: simpleDrop }"
                                            id="simpleSelectMenu">
                                            <ul class="list-unstyled dropdown-menu-list mb-0">
                                                <li class="dropdown-item d-flex cursor-pointer"
                                                    v-for="( data, index ) of countrylist" :key="index"
                                                    @click="simpleDropValue = data.countryName">
                                                    <div class="flex-shrink-0 me-2">
                                                        <img :src="data.flagImg" alt="country flag" class="options-flagimg"
                                                            height="20">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <div class="d-flex">
                                                            <div class="country-name me-1">{{ data.countryName }}</div>
                                                            <span class="countrylist-codeno text-muted">{{ data.countryCode
                                                            }}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-3">
                                    <label class="form-label">Select input flag with img & name</label>
                                    <div data-input-flag data-option-flag-img-name @click="inputFlagDrop = !inputFlagDrop">
                                        <input type="text" class="form-control rounded-end flag-input" readonly
                                            placeholder="Select country"
                                            :style="{ backgroundImage: `url(${inputFlagDropValue.flagImg})` }"
                                            v-model="inputFlagDropValue.countryName">
                                        <div class="dropdown-menu w-100" :class="{ show: inputFlagDrop }">
                                            <ul class="list-unstyled dropdown-menu-list mb-0">
                                                <li class="dropdown-item d-flex cursor-pointer"
                                                    v-for="( data, index ) of  countrylist " :key="index"
                                                    @click="inputFlagDropValue = data">
                                                    <div class="flex-shrink-0 me-2">
                                                        <img :src="data.flagImg" alt="country flag" class="options-flagimg"
                                                            height="20">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <div class="d-flex">
                                                            <div class="country-name me-1">{{ data.countryName }}</div>
                                                            <span class="countrylist-codeno text-muted">{{ data.countryCode
                                                            }}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-3">
                                    <label class="form-label">Search input false in dropdown menu</label>
                                    <div data-input-flag data-option-flag-name data-search-input="false"
                                        @click="simpleMenu = !simpleMenu">
                                        <input type="text" class="form-control rounded-end flag-input" readonly
                                            placeholder="Select country" v-model="simpleMenuValue">
                                        <div class="dropdown-menu w-100" :class="{ show: simpleMenu }">
                                            <ul class="list-unstyled dropdown-menu-list mb-0">
                                                <li class="dropdown-item d-flex cursor-pointer"
                                                    v-for="( data, index ) of countrylist" :key="index"
                                                    @click="simpleMenuValue = data.countryName">
                                                    <div class="flex-shrink-0 me-2">
                                                        <img :src="data.flagImg" alt="country flag" class="options-flagimg"
                                                            height="20">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <div class="d-flex">
                                                            <div class="country-name me-1">{{ data.countryName }}</div>
                                                            <span class="countrylist-codeno text-muted">{{ data.countryCode
                                                            }}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </BCol>

                            <BCol lg="6">
                                <div>
                                    <label class="form-label">Select input with buttons & Flag with number</label>
                                    <div class="input-group" data-input-flag>
                                        <button class="btn btn-light border" type="button"
                                            @click="inputFlagNumber = !inputFlagNumber">
                                            <img :src="inputFlagNumberValue.flagImg" alt="flag img" height="20"
                                                class="country-flagimg rounded">
                                            <span class="ms-2 country-codeno">{{ inputFlagNumberValue.countryCode }}</span>
                                        </button>
                                        <input type="text" class="form-control rounded-end flag-input"
                                            placeholder="Enter number"
                                            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');">
                                        <div class="dropdown-menu w-100" data-popper-placement="bottom-start"
                                            style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 40px);"
                                            :class="{ show: inputFlagNumber }" @click="inputFlagNumber = !inputFlagNumber">
                                            <ul class="list-unstyled dropdown-menu-list mb-0">
                                                <li class="dropdown-item d-flex cursor-pointer"
                                                    v-for="( data, index ) of  countrylist " :key="index"
                                                    @click="inputFlagNumberValue = data">
                                                    <div class="flex-shrink-0 me-2">
                                                        <img :src="data.flagImg" alt="country flag" class="options-flagimg"
                                                            height="20">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <div class="d-flex">
                                                            <div class="country-name me-1">{{ data.countryName }}</div>
                                                            <span class="countrylist-codeno text-muted">{{ data.countryCode
                                                            }}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <label class="form-label">Select input with buttons & Flag</label>
                                    <div class="input-group" data-input-flag data-option-countrycode="false">
                                        <button class="btn btn-light border" type="button" @click="inputFlag = !inputFlag">
                                            <img :src="inputFlagValue.flagImg" alt="flag img" height="20"
                                                class="country-flagimg rounded">
                                            <span class="ms-2 country-codeno">+ 1</span></button>
                                        <input type="text" class="form-control rounded-end flag-input" value=""
                                            placeholder="Enter number"
                                            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');">
                                        <div class="dropdown-menu w-100" :class="{ show: inputFlag }"
                                            @click="inputFlag = !inputFlag">
                                            <ul class="list-unstyled dropdown-menu-list mb-0">
                                                <li class="dropdown-item d-flex cursor-pointer"
                                                    v-for="( data, index ) of  countrylist " :key="index"
                                                    @click="inputFlagValue = data">
                                                    <div class="flex-shrink-0 me-2">
                                                        <img :src="data.flagImg" alt="country flag" class="options-flagimg"
                                                            height="20">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <div class="d-flex">
                                                            <div class="country-name me-1">{{ data.countryName }}</div>
                                                            <span class="countrylist-codeno text-muted">{{ data.countryCode
                                                            }}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>

                </BCard>

            </BCol>
        </BRow>


        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Form Input Spin</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <BRow class="gy-4">
                            <BCol sm="6">
                                <div>
                                    <h5 class="fs-sm fw-medium text-muted">Default</h5>

                                    <div class="input-step">
                                        <button type="button" class="minus">–</button>
                                        <input type="number" class="product-quantity" value="2" min="0" max="100" readonly>
                                        <button type="button" class="plus">+</button>
                                    </div>
                                </div>
                            </BCol>

                            <BCol sm="6">
                                <div>
                                    <h5 class="fs-sm fw-medium text-muted">Light</h5>
                                    <div class="input-step light">
                                        <button type="button" class="minus">–</button>
                                        <input type="number" class="product-quantity" value="5" min="0" max="100" readonly>
                                        <button type="button" class="plus">+</button>
                                    </div>
                                </div>
                            </BCol>
                        </BRow>


                        <div class="mt-4 pt-2">
                            <BRow class="gy-4">
                                <BCol sm="6">
                                    <div>
                                        <h5 class="fs-sm fw-medium text-muted">Default (Full width)</h5>
                                        <div class="input-step full-width">
                                            <button type="button" class="minus">–</button>
                                            <input type="number" class="product-quantity" value="4" min="0" max="100"
                                                readonly>
                                            <button type="button" class="plus">+</button>
                                        </div>
                                    </div>
                                </BCol>

                                <BCol sm="6">
                                    <div>
                                        <h5 class="fs-sm fw-medium text-muted">Light (Full width)</h5>
                                        <div class="input-step full-width light">
                                            <button type="button" class="minus">–</button>
                                            <input type="number" class="product-quantity" value="6" min="0" max="100"
                                                readonly>
                                            <button type="button" class="plus">+</button>
                                        </div>
                                    </div>
                                </BCol>
                            </BRow>

                        </div>

                        <BRow class="mt-4 pt-2">
                            <h5 class="fs-sm fw-medium text-muted">Colored</h5>
                            <div class="d-flex flex-wrap align-items-start gap-2">
                                <div class="input-step step-primary">
                                    <button type="button" class="minus">–</button>
                                    <input type="number" class="product-quantity" value="6" min="0" max="100" readonly>
                                    <button type="button" class="plus">+</button>
                                </div>
                                <div class="input-step step-secondary">
                                    <button type="button" class="minus">–</button>
                                    <input type="number" class="product-quantity" value="1" min="0" max="100" readonly>
                                    <button type="button" class="plus">+</button>
                                </div>
                                <div class="input-step step-success">
                                    <button type="button" class="minus">–</button>
                                    <input type="number" class="product-quantity" value="3" min="0" max="100" readonly>
                                    <button type="button" class="plus">+</button>
                                </div>
                                <div class="input-step step-info">
                                    <button type="button" class="minus">–</button>
                                    <input type="number" class="product-quantity" value="1" min="0" max="100" readonly>
                                    <button type="button" class="plus">+</button>
                                </div>
                                <div class="input-step step-warning">
                                    <button type="button" class="minus">–</button>
                                    <input type="number" class="product-quantity" value="4" min="0" max="100" readonly>
                                    <button type="button" class="plus">+</button>
                                </div>
                                <div class="input-step step-danger">
                                    <button type="button" class="minus">–</button>
                                    <input type="number" class="product-quantity" value="5" min="0" max="100" readonly>
                                    <button type="button" class="plus">+</button>
                                </div>

                            </div>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>

        </BRow>

    </Layout>
</template>