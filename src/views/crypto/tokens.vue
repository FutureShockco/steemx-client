<script>
import Layout from "@/layouts";
import PageHeader from "@/components/page-header.vue";
import RightBar from "@/components/right-bar.vue";

export default {
    data() {
        return {
            page: 1,
            perPage: 50,
            pages: [],
            searchQuery: null,
            submitted: false,

            showModal: false,
            event: {
                rank: "",
                img: "",
                name: "",
                symbol: "",
                price: "",
                change_1h: "",
                change_24h: "",
                change_7d: "",
                market_cap: "",
                volume_24h: "",
            },
        };
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.cryptoCurrencies);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.cryptoCurrencies.filter((data) => {
                    return (
                        data.name.toLowerCase().includes(search) ||
                        data.full.toLowerCase().includes(search)
                    );
                });
            } else {
                return this.displayedPosts;
            }
        },
        cryptoCurrencies() {
            return this.$store.state.tokens.top
        },
        steemCryptoCurrencies() {
            return this.$store.state.tokens.steemxTop
        }
    },
    watch: {
        cryptoCurrencies() {
            this.setPages();
        },
    },
    created() {
        this.setPages();
    },
    methods: {
        setPages() {
            let numberOfPages = Math.ceil(this.cryptoCurrencies.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }

            if (this.pages.length < this.page) {
                this.page = this.pages.length;
            }
        },
        paginate(cryptoCurrencies) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return cryptoCurrencies.slice(from, to);
        },

        // 
        handleSubmit() {
            this.submitted = true;
            if (this.submitted && (this.event.name && this.event.symbol && this.event.price)) {
                const data = {
                    id: (Math.floor(Math.random() * 100 + 20) - 20),
                    rank: this.cryptoCurrencies.length + 1,
                    img: require("@/assets/images/svg/crypto-icons/sol.svg"),
                    change_1h: "-",
                    change_24h: "-",
                    change_7d: "-",
                    market_cap: "-",
                    volume_24h: "-",
                    ...this.event
                };
                this.cryptoCurrencies = [...this.cryptoCurrencies, data];
                this.showModal = false;
            }
        },

        toggleModal() {
            this.showModal = true;
            this.event = {};

            this.submitted = false;
        },
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
                    <PageHeader title="Tokens" pagetitle="Crypto" />
                </BCol>
                <BCol md="auto" class="ms-auto">
                    <div class="hstack gap-2">
                        <button class="btn btn-primary" @click="toggleModal"><i class="bi bi-plus align-middle me-1"></i>
                            Create Token</button>
                        <RightBar />
                    </div>
                </BCol>
                <BCol md="auto" class="ms-auto">
                    <div class="hstack gap-2">
                        <button class="btn btn-primary" @click="toggleModal"><i class="bi bi-plus align-middle me-1"></i>
                            Create NFT</button>
                        <RightBar />
                    </div>
                </BCol>
            </BRow>
        </div>

        <BRow>
            <BCol lg="12">
                <BTabs nav-class="crypto-marketplace-nav mb-3" pills>
                    <BTab title="All Cryptos" active>
                        <BRow>
                            <BCol xl="3" sm="6">
                                <BCard no-body class="icon-effect-widgets overflow-hidden">
                                    <i class="bi bi-shop-window position-absolute icon"></i>
                                    <BCardBody>
                                        <BDropdown variant="link" class="float-end"
                                            toggle-class="text-reset dropdown-btn pt-0 pe-0 arrow-none"
                                            menu-class="dropdown-menu-end">
                                            <template #button-content> <i class="bi bi-three-dots-vertical"></i> </template>
                                            <BDropdownItem>Current Years</BDropdownItem>
                                            <BDropdownItem>Last Years</BDropdownItem>
                                        </BDropdown>
                                        <h6 class="fs-md">Change (24H)</h6>

                                        <div class="mt-4 pt-2">
                                            <h4>13.74%</h4>
                                            <p class="text-muted mb-0"><span class="fw-medium text-success">14.57%</span>
                                                Since last month</p>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol xl="3" sm="6">
                                <BCard no-body class="icon-effect-widgets overflow-hidden">
                                    <i class="bi bi-journals position-absolute icon"></i>
                                    <BCardBody>
                                        <BDropdown variant="link" class="float-end"
                                            toggle-class="text-reset dropdown-btn pt-0 pe-0 arrow-none"
                                            menu-class="dropdown-menu-end">
                                            <template #button-content><i class="bi bi-three-dots-vertical"></i></template>
                                            <BDropdownItem>Current Years</BDropdownItem>
                                            <BDropdownItem>Last Years</BDropdownItem>
                                        </BDropdown>
                                        <h6 class="fs-md">Maker Dominance</h6>

                                        <div class="mt-4 pt-2">
                                            <h4>-4.38%</h4>
                                            <p class="text-muted mb-0"><span class="fw-medium text-danger">2.19%</span>
                                                Since last month</p>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol xl="3" sm="6">
                                <BCard no-body class="icon-effect-widgets overflow-hidden">
                                    <i class="bi bi-recycle position-absolute icon"></i>
                                    <BCardBody>
                                        <BDropdown variant="link" class="float-end"
                                            toggle-class="text-reset dropdown-btn pt-0 pe-0 arrow-none"
                                            menu-class="dropdown-menu-end">
                                            <template #button-content> <i class="bi bi-three-dots-vertical"></i> </template>
                                            <BDropdownItem>Current Years</BDropdownItem>
                                            <BDropdownItem>Last Years</BDropdownItem>
                                        </BDropdown>
                                        <h6 class="fs-md">Top Loser (24H)</h6>

                                        <div class="mt-4 pt-2">
                                            <h4>-8.16%</h4>
                                            <p class="text-muted mb-0"><span class="fw-medium text-success">1.33%</span>
                                                Since last month</p>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol xl="3" sm="6">
                                <BCard no-body class="icon-effect-widgets overflow-hidden">
                                    <i class="bi bi-tags position-absolute icon"></i>
                                    <BCardBody>
                                        <BDropdown variant="link" class="float-end"
                                            toggle-class="text-reset dropdown-btn pt-0 pe-0 arrow-none"
                                            menu-class="dropdown-menu-end">
                                            <template #button-content> <i class="bi bi-three-dots-vertical"></i> </template>
                                            <BDropdownItem>Current Years</BDropdownItem>
                                            <BDropdownItem>Last Years</BDropdownItem>
                                        </BDropdown>
                                        <h6 class="fs-md">Top Gainer (24H)</h6>

                                        <div class="mt-4 pt-2">
                                            <h4>27.48%</h4>
                                            <p class="text-muted mb-0"><span class="fw-medium text-success">7.19%</span>
                                                Since last month</p>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                        </BRow>

                        <BCard no-body>
                            <BCardHeader class="d-flex align-items-center">
                                <BCardTitle tag="h4" class="flex-grow-1 mb-0">Crypto Currency</BCardTitle>
                                <div class="search-box flex-shrink-0">
                                    <input type="searchQuerytext" class="form-control"
                                        placeholder="Search for token, price etc..." v-model="searchQuery">
                                    <i class="ri-search-2-line search-icon"></i>
                                </div>
                            </BCardHeader>
                            <BCardBody>
                                <div class="table-responsive table-card">
                                    <table class="table align-middle">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">1h %</th>
                                                <th scope="col">24h %</th>
                                                <th scope="col">7d %</th>
                                                <th scope="col">Market Cap</th>
                                                <th scope="col">Volume (24h)</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(data, index) of resultQuery" :key="index">
                                                <!-- {{ data }} -->
                                                <th scope="row">{{ index + 1 }}</th>
                                                <td>
                                                    <router-link to="/crypto/coin-overview"
                                                        class="d-flex gap-2 align-items-center">
                                                        <img :src="data.img" alt="" class="avatar-xxs">
                                                        <h6 class="mb-0">X-{{ data.full }} ({{ data.name }} Pegged)<span
                                                                class="badge bg-light text-body fw-normal">{{ data.symbol
                                                                }}</span>
                                                        </h6>
                                                    </router-link>
                                                </td>
                                                <td>$ {{ data.PRICE.toFixed(3) }}</td>
                                                <td class="text-success">{{ data.CHANGEHOUR }}</td>
                                                <td class="text-danger">{{ data.CHANGE24HOUR }}</td>
                                                <td class="text-danger">{{ data.change_7d }}</td>
                                                <td>{{ data.MKTCAP }}</td>
                                                <td>{{ data.VOLUME24HOUR }}</td>
                                                <td>
                                                    <BDropdown variant="link"
                                                        toggle-class="btn btn-icon btn-subtle-primary btn-sm dropdown-btn arrow-none"
                                                        menu-class="dropdown-menu-end">
                                                        <template #button-content> <i class="bi bi-three-dots-vertical"></i>
                                                        </template>
                                                        <BDropdownItem href="/crypto/coin-overview">Overview
                                                        </BDropdownItem>
                                                        <BDropdownItem :to="'/deposit/' + data.name">Deposit
                                                        </BDropdownItem>
                                                        <BDropdownItem>Withdraw</BDropdownItem>
                                                    </BDropdown>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="noresult" v-if="resultQuery.length < 1">
                                    <div class="text-center py-4">
                                        <div class="avatar-md mx-auto mb-4">
                                            <div class="avatar-title bg-light text-primary rounded-circle fs-4xl">
                                                <i class="bi bi-search"></i>
                                            </div>
                                        </div>
                                        <h5 class="mt-2">Sorry! No Result Found</h5>
                                        <p class="text-muted mb-0">We've searched more than 150+ coin We did not find any
                                            coin for you
                                            search.</p>
                                    </div>
                                </div>

                                <div class="align-items-center mt-4 justify-content-between row text-center text-sm-start"
                                    id="pagination-element" v-if="resultQuery.length >= 1">
                                    <BCol cols="sm">
                                        <div class="text-muted">
                                            Showing <span class="fw-semibold">{{ resultQuery.length }}</span> of <span
                                                class="fw-semibold">{{ cryptoCurrencies.length }}</span> Results
                                        </div>
                                    </BCol>
                                    <BCol sm="auto" class="mt-3 mt-sm-0">
                                        <div class="pagination-wrap hstack gap-2" v-if="!searchQuery && pages.length > 1">
                                            <BLink class="page-item pagination-prev" href="javascript:void(0)"
                                                :disabled="page <= 1" @click="page--">Previous</BLink>
                                            <ul class="pagination listjs-pagination mb-0">
                                                <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }"
                                                    v-for="(pageNumber, index) in pages" :key="index"
                                                    @click="page = pageNumber">
                                                    <BLink class="page" href="javascript:void(0)">{{ pageNumber }}</BLink>
                                                </li>
                                            </ul>
                                            <BLink class="page-item pagination-next" href="javascript:void(0)"
                                                :disabled="page >= pages.length" @click="page++">Next</BLink>
                                        </div>
                                    </BCol>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BTab>
                    <BTab title="Steem Tokens">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex align-items-center">
                                    <BCardTitle tag="h4" class="flex-grow-1 mb-0">Steem Crypto Currencies</BCardTitle>
                                    <div class="search-box flex-shrink-0">
                                        <input type="text" class="form-control"
                                            placeholder="Search for token, price etc...">
                                        <i class="ri-search-2-line search-icon"></i>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                        <div class="table-responsive">
                            <table class="table table-custom align-middle table-borderless table-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">1h %</th>
                                        <th scope="col">24h %</th>
                                        <th scope="col">7d %</th>
                                        <th scope="col">Market Cap</th>
                                        <th scope="col">Volume (24h)</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(data, index) in steemCryptoCurrencies" :key="index">
                                        <th scope="row">{{ index + 1 }}</th>
                                        <td>
                                            <router-link to="/crypto/coin-overview" class="d-flex gap-2 align-items-center">
                                                <img :src="data.img" alt="" class="avatar-xxs">
                                                <h6 class="mb-0">{{ data.full }} (X-{{ data.name }})<span
                                                        class="badge bg-light text-body fw-normal">{{ data.symbol
                                                        }}</span>
                                                </h6>
                                            </router-link>
                                        </td>
                                        <td>$0.2675</td>
                                        <td class="text-danger">0.33%</td>
                                        <td class="text-danger">5.05%</td>
                                        <td class="text-success">15.94%</td>
                                        <td>$119,930,809</td>
                                        <td>$21,511,225</td>
                                        <td>
                                            <BDropdown variant="link"
                                                toggle-class="btn btn-icon btn-subtle-primary btn-sm dropdown-btn arrow-none"
                                                menu-class="dropdown-menu-end">
                                                <template #button-content> <i class="bi bi-three-dots-vertical"></i>
                                                </template>
                                                <BDropdownItem href="/crypto/coin-overview">Overview
                                                </BDropdownItem>
                                                <BDropdownItem>View Charts</BDropdownItem>
                                                <BDropdownItem>Historical Data</BDropdownItem>
                                            </BDropdown>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </BTab>

                    <BTab title="New Listing">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex align-items-center">
                                    <BCardTitle tag="h4" class="flex-grow-1 mb-0">IPO Listing</BCardTitle>
                                    <div class="search-box flex-shrink-0">
                                        <input type="text" class="form-control"
                                            placeholder="Search for IPO coin, price etc...">
                                        <i class="ri-search-2-line search-icon"></i>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                        <BRow>
                            <BCol lg="3">
                                <BCard no-body>
                                    <BCardBody>
                                        <div class="d-flex align-items-center gap-2 mb-4">
                                            <img src="@/assets/images/svg/crypto-icons/adx.svg" alt=""
                                                class="avatar-sm flex-shrink-0">
                                            <div class="flex-grow-1">
                                                <h6 class="fw-medium mb-1">Healthy Olive Oil</h6>
                                                <p class="text-success mb-0">Active</p>
                                            </div>

                                            <BDropdown variant="link" class="flex-shrink-0"
                                                toggle-class="text-reset dropdown-btn arrow-none"
                                                menu-class="dropdown-menu-end">
                                                <template #button-content> <i class="bi bi-three-dots-vertical"></i>
                                                </template>
                                                <BDropdownItem>Current Years</BDropdownItem>
                                                <BDropdownItem>Last Years</BDropdownItem>
                                            </BDropdown>
                                        </div>
                                        <div class="text-warning hstack gap-1 fs-lg mb-3">
                                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                                class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                                class="bi bi-star-half"></i>
                                        </div>
                                        <div class="d-flex justify-content-between gap-2">
                                            <h6 class="text-muted fs-lg mb-0"><span class="text-body">$14,584,985</span>/
                                                $15,000,000</h6>
                                            <span class="text-success">87.5%</span>
                                        </div>
                                        <div class="mt-4">
                                            <button class="btn btn-outline-primary btn-hover w-100">Buy Now</button>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol lg="3">
                                <BCard no-body>
                                    <BCardBody>
                                        <div class="d-flex align-items-center gap-2 mb-4">
                                            <img src="@/assets/images/svg/crypto-icons/crw.svg" alt=""
                                                class="avatar-sm flex-shrink-0">
                                            <div class="flex-grow-1">
                                                <h6 class="fw-medium mb-1">Escrow Fomo Chronicles</h6>
                                                <p class="text-info mb-0">Upcoming</p>
                                            </div>
                                            <BDropdown variant="link" class="flex-shrink-0"
                                                toggle-class="text-reset dropdown-btn arrow-none"
                                                menu-class="dropdown-menu-end">
                                                <template #button-content> <i class="bi bi-three-dots-vertical"></i>
                                                </template>
                                                <BDropdownItem>Current Years</BDropdownItem>
                                                <BDropdownItem>Last Years</BDropdownItem>
                                            </BDropdown>
                                        </div>
                                        <div class="text-warning hstack gap-1 fs-lg mb-3">
                                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                                class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                                class="bi bi-star-half"></i>
                                        </div>
                                        <div class="d-flex justify-content-between gap-2">
                                            <h6 class="fs-lg mb-0"> $12,000,000</h6>
                                        </div>
                                        <div class="mt-4">
                                            <button class="btn btn-outline-primary btn-hover w-100">Buy Now</button>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol lg="3">
                                <BCard no-body>
                                    <BCardBody>
                                        <div class="d-flex align-items-center gap-2 mb-4">
                                            <img src="@/assets/images/svg/crypto-icons/vibe.svg" alt=""
                                                class="avatar-sm flex-shrink-0">
                                            <div class="flex-grow-1">
                                                <h6 class="fw-medium mb-1">GreatRiver Science</h6>
                                                <p class="text-danger mb-0">Ended</p>
                                            </div>
                                            <BDropdown variant="link" class="flex-shrink-0"
                                                toggle-class="text-reset dropdown-btn arrow-none"
                                                menu-class="dropdown-menu-end">
                                                <template #button-content> <i class="bi bi-three-dots-vertical"></i>
                                                </template>
                                                <BDropdownItem>Current Years</BDropdownItem>
                                                <BDropdownItem>Last Years</BDropdownItem>
                                            </BDropdown>
                                        </div>
                                        <div class="text-warning hstack gap-1 fs-lg mb-3">
                                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                                class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                                class="bi bi-star-half"></i>
                                        </div>
                                        <div class="d-flex justify-content-between gap-2">
                                            <h6 class="text-muted fs-lg mb-0"><span class="text-body">$5,154,584</span>/
                                                $10,000,000</h6>
                                            <span class="text-success">50.2%</span>
                                        </div>
                                        <div class="mt-4">
                                            <button class="btn btn-outline-primary btn-hover w-100">Buy Now</button>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                            <BCol lg="3">
                                <BCard no-body>
                                    <BCardBody>
                                        <div class="d-flex align-items-center gap-2 mb-4">
                                            <img src="@/assets/images/svg/crypto-icons/fil.svg" alt=""
                                                class="avatar-sm flex-shrink-0">
                                            <div class="flex-grow-1">
                                                <h6 class="fw-medium mb-1">GreatRiver Science</h6>
                                                <p class="text-success mb-0">Active</p>
                                            </div>
                                            <BDropdown variant="link" class="flex-shrink-0"
                                                toggle-class="text-reset dropdown-btn arrow-none"
                                                menu-class="dropdown-menu-end">
                                                <template #button-content> <i class="bi bi-three-dots-vertical"></i>
                                                </template>
                                                <BDropdownItem>Current Years</BDropdownItem>
                                                <BDropdownItem>Last Years</BDropdownItem>
                                            </BDropdown>
                                        </div>
                                        <div class="text-warning hstack gap-1 fs-lg mb-3">
                                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                                                class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i
                                                class="bi bi-star"></i>
                                        </div>
                                        <div class="d-flex justify-content-between gap-2">
                                            <h6 class="text-muted fs-lg mb-0"><span class="text-body">$2,154,584</span>/
                                                $10,000,000</h6>
                                            <span class="text-success">29.32%</span>
                                        </div>
                                        <div class="mt-4">
                                            <button class="btn btn-outline-primary btn-hover w-100">Buy Now</button>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                        </BRow>
                    </BTab>
                </BTabs>
            </BCol>
        </BRow>
    </Layout>

    <BModal v-model="showModal" hide-footer centered no-body header-class="p-3 bg-primary" title="Create Token"
        class="zoomIn" content-class="border-0" id="createProjectModal">
        <form @submit.prevent="handleSubmit">
            <div class="mb-4">
                <div class="">
                    <label for="coinname-input" class="form-label">Token Name (eg:Bitcoin)</label>
                    <input type="text" class="form-control " id="coinname-field" placeholder="Enter Token Name"
                        v-model="event.name" :class="{ 'is-invalid': submitted && !event.name }">
                    <div class="invalid-feedback">Please enter a Coin name.</div>
                </div>
                <div class="mt-2">
                    <label for="cointage-input" class="form-label">Token Ticker (eg:BTC)</label>
                    <input type="text" class="form-control " id="cointage-field"
                        placeholder="Enter Token Ticker (up to 6 characters)" v-model="event.symbol"
                        :class="{ 'is-invalid': submitted && !event.symbol }">
                    <div class="invalid-feedback">Please enter a token ticker.</div>
                </div>
                <div class="mt-2">
                    <label for="coinprice-input" class="form-label">Token Decimal (eg:8)</label>
                    <input type="text" class="form-control " id="coinprice-field"
                        placeholder="Enter Token Decimal (up to 18)" v-model="event.price"
                        :class="{ 'is-invalid': submitted && !event.price }">
                    <div class="invalid-feedback">Please enter a token decimal.</div>
                </div>
                <div class="mt-2">
                    <label for="coinprice-input" class="form-label">Token Quantity (eg:21000000)</label>
                    <input type="text" class="form-control " id="coinprice-field" placeholder="Enter Token Quantity"
                        v-model="event.price" :class="{ 'is-invalid': submitted && !event.price }">
                    <div class="invalid-feedback">Please enter a token quantity.</div>
                </div>

                <div class="form-check form-check-right mt-2">
                    <label for="coinprice-input" class="form-label">Token mode</label>
                    <div class=" mb-2">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                        <label class="form-check-label" for="flexRadioDefault1">
                            Normal
                        </label>
                    </div>

                    <div class="">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                        <label class="form-check-label" for="flexRadioDefault2">
                            Inflationary
                        </label>
                    </div>
                </div>
            </div>
            <div class="hstack gap-2 justify-content-end">
                <button type="button" class="btn btn-ghost-success" @click="showModal = false"><i
                        class="ri-close-line align-bottom"></i> Close</button>
                <button type="submit" class="btn btn-primary" id="addNewProject">Create Token</button>
            </div>
        </form>
    </BModal>
</template>