<script>
import Layout from "@/layouts";
import PageHeader from "@/components/page-header.vue";
import RightBar from "@/components/right-bar.vue";

export default {
    data() {
        return {
        };
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
            <BRow class="align-items-center gy-3">
                <BCol cols="md">
                    <PageHeader title="Lease" pagetitle="Crypto" />
                </BCol>
                <BCol md="auto" class="ms-auto">
                    <RightBar />
                </BCol>
            </BRow>
        </div>

        <BRow>

            <BCol xl="4" sm="4">
                <BCard no-body class="card-success overflow-hidden">
                    <div class="position-absolute top-0 right-0">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="450" height="210" preserveAspectRatio="none" viewBox="0 0 450 210">
                            <g mask="url(&quot;#SvgjsMask1046&quot;)" fill="none">
                                <path
                                    d="M385.59 13.35C356.64 14.32 333.88 59.69 279.23 59.35 224.58 59.01 208.1-30.2 172.87-37"
                                    style="stroke: rgba(var(--tb-white-rgb), 0.1);" stroke-width="2"></path>
                                <path
                                    d="M397.1 120.72C352.81 118.98 323.8 49.73 235.97 46.72 148.15 43.71 118.4-18.41 74.85-19.7"
                                    style="stroke: rgba(var(--tb-white-rgb), 0.1);" stroke-width="2"></path>
                                <path
                                    d="M353.25 33.52C326.55 35.03 307.47 83.9 258.67 83.52 209.87 83.14 197.14-6.35 164.09-14.66"
                                    style="stroke: rgba(var(--tb-white-rgb), 0.1);" stroke-width="2"></path>
                                <path
                                    d="M385.3 171.91C344.67 169.99 308.53 110.04 239.41 99.91 170.28 89.78 195.34 10.2 166.46-1.88"
                                    style="stroke: rgba(var(--tb-white-rgb), 0.1);" stroke-width="2"></path>
                                <path
                                    d="M360.8 147.25C313.76 146.8 258.96 103.74 179.4 97.25 99.84 90.76 123.43-6.99 88.7-19.8"
                                    style="stroke: rgba(var(--tb-white-rgb), 0.1);" stroke-width="2"></path>
                            </g>
                            <defs>
                                <mask id="SvgjsMask1046">
                                    <rect width="450" height="210" fill="#ffffff"></rect>
                                </mask>
                            </defs>
                        </svg>
                    </div>
                    <BCardBody>
                        <p class="fs-lg text-reset mb-4">STEEM POWER</p>
                        <div class="display-6 mb-3">
                            <img :src="require('@/assets/images/svg/crypto-icons/steem.svg')"  height="80">
                        </div>
                        <h5 class="text-reset fw-medium mb-0">56800.0022 (SP)</h5>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="4" sm="4">
                <BCard no-body class="overflow-hidden">
                    <div class="position-absolute top-0 right-0">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="450" height="210" preserveAspectRatio="none" viewBox="0 0 450 210">
                            <g mask="url(&quot;#SvgjsMask1046&quot;)" fill="none">
                                <path
                                    d="M385.59 13.35C356.64 14.32 333.88 59.69 279.23 59.35 224.58 59.01 208.1-30.2 172.87-37"
                                    style="stroke: rgba(var(--tb-white-rgb), 0.07);" stroke-width="2"></path>
                                <path
                                    d="M397.1 120.72C352.81 118.98 323.8 49.73 235.97 46.72 148.15 43.71 118.4-18.41 74.85-19.7"
                                    style="stroke: rgba(var(--tb-white-rgb), 0.07);" stroke-width="2"></path>
                                <path
                                    d="M353.25 33.52C326.55 35.03 307.47 83.9 258.67 83.52 209.87 83.14 197.14-6.35 164.09-14.66"
                                    style="stroke: rgba(var(--tb-white-rgb), 0.07);" stroke-width="2"></path>
                                <path
                                    d="M385.3 171.91C344.67 169.99 308.53 110.04 239.41 99.91 170.28 89.78 195.34 10.2 166.46-1.88"
                                    style="stroke: rgba(var(--tb-white-rgb), 0.07);" stroke-width="2"></path>
                                <path
                                    d="M360.8 147.25C313.76 146.8 258.96 103.74 179.4 97.25 99.84 90.76 123.43-6.99 88.7-19.8"
                                    style="stroke: rgba(var(--tb-white-rgb), 0.07);" stroke-width="2"></path>
                            </g>
                            <defs>
                                <mask id="SvgjsMask1046">
                                    <rect width="450" height="210" fill="#ffffff"></rect>
                                </mask>
                            </defs>
                        </svg>
                    </div>
                    <BCardBody>
                        <p class="fs-lg text-reset mb-4">X-STEEM</p>
                        <div class="display-6 mb-3">
                            <img :src="require('@/assets/images/svg/crypto-icons/steem.svg')"  height="80">
                        </div>
                        <h5 class="text-reset fw-medium mb-0">1,818.98 (X-STEEM)</h5>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="4" sm="4">
                <BCard no-body class="card-secondary overflow-hidden">
                    <div class="position-absolute top-0 right-0">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="450" height="210" preserveAspectRatio="none" viewBox="0 0 450 210">
                            <g mask="url(&quot;#SvgjsMask1046&quot;)" fill="none">
                                <path
                                    d="M385.59 13.35C356.64 14.32 333.88 59.69 279.23 59.35 224.58 59.01 208.1-30.2 172.87-37"
                                    style="stroke: rgba(var(--tb-white-rgb), 0.07);" stroke-width="2"></path>
                                <path
                                    d="M397.1 120.72C352.81 118.98 323.8 49.73 235.97 46.72 148.15 43.71 118.4-18.41 74.85-19.7"
                                    style="stroke: rgba(var(--tb-white-rgb), 0.07);" stroke-width="2"></path>
                                <path
                                    d="M353.25 33.52C326.55 35.03 307.47 83.9 258.67 83.52 209.87 83.14 197.14-6.35 164.09-14.66"
                                    style="stroke: rgba(var(--tb-white-rgb), 0.07);" stroke-width="2"></path>
                                <path
                                    d="M385.3 171.91C344.67 169.99 308.53 110.04 239.41 99.91 170.28 89.78 195.34 10.2 166.46-1.88"
                                    style="stroke: rgba(var(--tb-white-rgb), 0.07);" stroke-width="2"></path>
                                <path
                                    d="M360.8 147.25C313.76 146.8 258.96 103.74 179.4 97.25 99.84 90.76 123.43-6.99 88.7-19.8"
                                    style="stroke: rgba(var(--tb-white-rgb), 0.07);" stroke-width="2"></path>
                            </g>
                            <defs>
                                <mask id="SvgjsMask1046">
                                    <rect width="450" height="210" fill="#ffffff"></rect>
                                </mask>
                            </defs>
                        </svg>
                    </div>
                    <BCardBody>
                        <p class="fs-lg text-reset mb-4">XCHANGE TOKEN</p>
                        <div class="display-6 mb-3">
                            <img :src="require('@/assets/images/svg/crypto-icons/steem.svg')"  height="80">
                        </div>
                        <h5 class="text-reset fw-medium mb-0">0.000038 (XCHANGE)</h5>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BCard no-body>
            <BCardBody>
                <BRow class="justify-content-center">
                    <BCol lg="5">
                        <div class="text-center">
                            <h3 class="lh-base"><span class="fw-bold">Lease</span> and <span class="fw-bold">Lend</span>
                                X-STEEM, STEEM, STEEMPOWER with <span class="text-primary-emphasis">SteemX</span> without
                                Additional Charges</h3>
                            <p class="text-muted fs-md">Explore and learn more about everything from learning and scaling
                                your account.</p>
                        </div>
                    </BCol>
                </BRow>

                <form action="#!">
                    <BRow class="gy-3 align-items-center justify-content-center">
                        <BCol lg="2">
                            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="00.00"
                                value="10.875">
                        </BCol>
                        <BCol lg="2">
                            <select class="form-control form-select" id="choices-single-no-search"
                                name="choices-single-no-search" data-choices data-choices-search-false>
                                <option value="BTC">STEEMPOWER</option>
                                <option value="ETH">ETH</option>
                                <option value="LTC">LTC</option>
                                <option value="USD">USD</option>
                                <option value="USDT">USDT</option>
                                <option value="SOL">SOL</option>
                                <option value="DASH">DASH</option>
                            </select>
                        </BCol>
                        <BCol cols="auto">
                            <i class="ph ph-equals"></i>
                        </BCol>
                        <BCol lg="3">
                            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="00.00"
                                value="0.86">
                        </BCol>
                        <BCol lg="2">
                            <select class="form-control form-select" id="choices-single-no-search"
                                name="choices-single-no-search" data-choices data-choices-search-false>
                                <option value="BTC">STEEM</option>
                                <option value="ETH">ETH</option>
                                <option value="LTC">LTC</option>
                                <option value="USD">USD</option>
                                <option value="USDT">USDT</option>
                                <option value="SOL">SOL</option>
                                <option value="DASH">DASH</option>
                            </select>
                        </BCol>
                        <BCol lg="2">
                            <select class="form-control form-select" id="choices-single-no-search"
                                name="choices-single-no-search" data-choices data-choices-search-false>
                                <option value="BTC">PER DAY</option>
                                <option value="ETH">ETH</option>
                                <option value="LTC">LTC</option>
                                <option value="USD">USD</option>
                                <option value="USDT">USDT</option>
                                <option value="SOL">SOL</option>
                                <option value="DASH">DASH</option>
                            </select>
                        </BCol>
                        <BCol lg="12">
                            <div class="mt-3 text-center">
                                <button class="btn btn-primary">Get estimation</button>
                            </div>
                        </BCol>
                    </BRow>
                </form>
            </BCardBody>
        </BCard>

        <BRow>
            <!-- <BCol lg="4">
                <BCard no-body class="overflow-hidden card-height-100">
                    <BCardHeader>
                        <BCardTitle tag="h5" class="mb-0">Coin Market</BCardTitle>
                    </BCardHeader>
                    <BCardBody class="p-0 pt-2">
                        <ul class="list-group list-group-flush mb-0">
                            <li class="list-group-item">
                                <div class="d-flex gap-2">
                                    <img src="@/assets/images/svg/crypto-icons/btc.svg" alt="" class="avatar-xs">
                                    <div class="flex-grow-1">
                                        <router-link to="/crypto/coin-overview">
                                            <h5 class="fs-md mb-1">BTCUSD</h5>
                                        </router-link>
                                        <p class="text-muted mb-0">Bitcoin / U.S. Dollar</p>
                                    </div>
                                    <div class="flex-shrink-0 text-end">
                                        <h5 class="fs-md mb-1">84.60</h5>
                                        <p class="mb-0"><span class="text-danger">−1.56</span> <span
                                                class="text-danger ms-1">−1.89%</span></p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="d-flex gap-2">
                                    <img src="@/assets/images/svg/crypto-icons/ltc.svg" alt="" class="avatar-xs">
                                    <div class="flex-grow-1">
                                        <router-link to="/crypto/coin-overview">
                                            <h5 class="fs-md mb-1">LTCUSD</h5>
                                        </router-link>
                                        <p class="text-muted mb-0">Litecoin / U.S. Dollar</p>
                                    </div>
                                    <div class="flex-shrink-0 text-end">
                                        <h5 class="fs-md mb-1">1786.98</h5>
                                        <p class="mb-0"><span class="text-danger">−13.30</span> <span
                                                class="text-danger ms-1">−0.73%</span></p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="d-flex gap-2">
                                    <img src="@/assets/images/svg/crypto-icons/usdt.svg" alt="" class="avatar-xs">
                                    <div class="flex-grow-1">
                                        <router-link to="/crypto/coin-overview">
                                            <h5 class="fs-md mb-1">USDT</h5>
                                        </router-link>
                                        <p class="text-muted mb-0">Tether / U.S. Dollar</p>
                                    </div>
                                    <div class="flex-shrink-0 text-end">
                                        <h5 class="fs-md mb-1">0.9999</h5>
                                        <p class="mb-0"><span class="text-success">+1.43</span> <span
                                                class="text-success ms-1">+5.51%</span></p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="d-flex gap-2">
                                    <img src="@/assets/images/svg/crypto-icons/sol.svg" alt="" class="avatar-xs">
                                    <div class="flex-grow-1">
                                        <router-link to="/crypto/coin-overview">
                                            <h5 class="fs-md mb-1">SOLUSD</h5>
                                        </router-link>
                                        <p class="text-muted mb-0">Solana / U.S. Dollar</p>
                                    </div>
                                    <div class="flex-shrink-0 text-end">
                                        <h5 class="fs-md mb-1">19.52</h5>
                                        <p class="mb-0"><span class="text-danger">−1.26</span> <span
                                                class="text-success ms-1">−1.89%</span></p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="d-flex gap-2">
                                    <img src="@/assets/images/svg/crypto-icons/ada.svg" alt="" class="avatar-xs">
                                    <div class="flex-grow-1">
                                        <router-link to="/crypto/coin-overview">
                                            <h5 class="fs-md mb-1">ADABTC</h5>
                                        </router-link>
                                        <p class="text-muted mb-0">ADA / Bitcoin</p>
                                    </div>
                                    <div class="flex-shrink-0 text-end">
                                        <h5 class="fs-md mb-1">16.71</h5>
                                        <p class="mb-0"><span class="text-success">0.84</span> <span
                                                class="text-success ms-1">1.65%</span></p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </BCardBody>
                </BCard>
            </BCol> -->
            <BCol lg="12">
                <BCard no-body class="overflow-hidden">
                    <BCardHeader>
                        <BCardTitle tag="h5" class="mb-0">Lease offers</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <BRow class="gy-3">
                            <BCol lg="12">
                                <table class="table table-sm mb-0">
                                    <thead class="thead-light">
                                        <tr>
                                            <th scope="col">Lessee</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Duration</th>
                                            <th scope="col">Daily Payment</th>

                                            <th scope="col">Total Payment</th>

                                            <th scope="col">APR</th>
                                            <th scope="col"></th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-success">2145.32</td>
                                            <td class="text-muted">1.3460172</td>
                                            <td class="text-muted">1842.67</td>
                                            <td class="text-muted">1842.67</td>
                                            <td class="text-muted">1842.67</td>
                                            <td class="text-muted">10%</td>
                                            <td class="text-muted"> <button class="btn btn-primary">Get estimation</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-success">2145.32</td>
                                            <td class="text-muted">1.3460172</td>
                                            <td class="text-muted">1842.67</td>
                                            <td class="text-muted">1842.67</td>
                                            <td class="text-muted">1842.67</td>
                                            <td class="text-muted">10%</td>
                                            <td class="text-muted"> <button class="btn btn-primary">Get estimation</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-success">2145.32</td>
                                            <td class="text-muted">1.3460172</td>
                                            <td class="text-muted">1842.67</td>
                                            <td class="text-muted">1842.67</td>
                                            <td class="text-muted">1842.67</td>
                                            <td class="text-muted">10%</td>
                                            <td class="text-muted"> <button class="btn btn-primary">Get estimation</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-success">2145.32</td>
                                            <td class="text-muted">1.3460172</td>
                                            <td class="text-muted">1842.67</td>
                                            <td class="text-muted">1842.67</td>
                                            <td class="text-muted">1842.67</td>
                                            <td class="text-muted">10%</td>
                                            <td class="text-muted"> <button class="btn btn-primary">Get estimation</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-success">2145.32</td>
                                            <td class="text-muted">1.3460172</td>
                                            <td class="text-muted">1842.67</td>
                                            <td class="text-muted">1842.67</td>
                                            <td class="text-muted">1842.67</td>
                                            <td class="text-muted">10%</td>
                                            <td class="text-muted"> <button class="btn btn-primary">Get estimation</button>
                                            </td>
                                        </tr>
                                      

                                    </tbody>
                                </table>
                        </BCol>

                    </BRow>
                </BCardBody>
            </BCard>
        </BCol>
    </BRow>
</Layout></template>