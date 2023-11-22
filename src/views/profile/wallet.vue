<script>


import { CountTo } from 'vue3-count-to';

export default {
    data() {
        return {
            page: 1,
            perPage: 5,
            pages: [],

            walletTable: [
                {
                    id: 1,
                    date: "27 Feb, 2023",
                    transactions: "#TBJ250011",
                    coinIcon: require("@/assets/images/svg/crypto-icons/btc.svg"),
                    coinName: "BTC",
                    type: "Exchange Currency",
                    amount: "1.59 BTC",
                    status: "Successfully"
                },
                {
                    id: 2,
                    date: "16 Feb, 2023",
                    transactions: "#TBJ250010",
                    coinIcon: require("@/assets/images/svg/crypto-icons/eth.svg"),
                    coinName: "ETH",
                    type: "Buy",
                    amount: "352 USD",
                    status: "Pending"
                },
                {
                    id: 3,
                    date: "30 Jan, 2023",
                    transactions: "#TBJ250009",
                    coinIcon: require("@/assets/images/svg/crypto-icons/ltc.svg"),
                    coinName: "LTC",
                    type: "Buy",
                    amount: "3.21 BTC",
                    status: "Successfully"
                },
                {
                    id: 4,
                    date: "25 Jan, 2023",
                    transactions: "#TBJ250008",
                    coinIcon: require("@/assets/images/svg/crypto-icons/btc.svg"),
                    coinName: "BTC",
                    type: "Sell",
                    amount: "4.59 BTC",
                    status: "Cancelled"
                },
                {
                    id: 5,
                    date: "28 May, 2023",
                    transactions: "#TBJ250007",
                    coinIcon: require("@/assets/images/svg/crypto-icons/ast.svg"),
                    coinName: "AST",
                    type: "Exchange Currency",
                    amount: "178.39 USD",
                    status: "Successfully"
                },
                {
                    id: 6,
                    date: "11 April, 2023",
                    transactions: "#TBJ250006",
                    coinIcon: require("@/assets/images/svg/crypto-icons/eth.svg"),
                    coinName: "ETH",
                    type: "Buy",
                    amount: "36.19 ETH",
                    status: "Pending"
                }
            ]
        };
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.walletTable);
        },
    },
    watch: {
        walletTable() {
            this.setPages();
        },
    },
    created() {
        this.setPages();
    },
    methods: {
        setPages() {
            let numberOfPages = Math.ceil(this.walletTable.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }

            if (this.pages.length < this.page) {
                this.page = this.pages.length;
            }
        },

        paginate(walletTable) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return walletTable.slice(from, to);
        },
    },
    components: {
        
        
        
        CountTo
    },
};
</script>

<template>
    <Layout>
        <div class="page-title-box">
            <BRow class="align-items-center">
                <BCol md="5">
                    <PageHeader title="Profile" pagetitle="Pages" />
                </BCol>
                <BCol md="auto" class="ms-auto">
                    <RightBar />
                </BCol>
            </BRow>
        </div>

        <BCard no-body>

            <BCardBody>
                <div class="mt-n5">
                    <BRow class="mt-n2 g-3 g-sm-0 align-items-end gap-3">

                        <BCol sm="auto">
                            <div class="position-relative d-inline-block">
                                <img src="https://steemitimages.com/u/future.witness/avatar" alt=""
                                    class="avatar-xl rounded p-1 bg-body-secondary">
                                <span class="position-absolute profile-dot bg-success rounded-circle"><span
                                        class="visually-hidden">unread messages</span></span>
                            </div>
                        </BCol>
                        <BCol cols="sm">
                            <div class="mt-4">
                                <h5>@future.witness <i class="bi bi-patch-check-fill align-baseline text-info ms-1"></i></h5>
                                <p class="text-muted mb-3">https://steemit.com/steemit/@futureshock/futureshock-and-steem-the-future-is-yours</p>
                            </div>
                        </BCol>
                        <BCol sm="auto" class="mb-3">
                            <div class="hstack gap-2">
                                <button class="btn btn-subtle-success">Hire Now</button>
                                <button type="button" class="btn btn-outline-secondary custom-toggle active"
                                    data-bs-toggle="button" aria-pressed="false">
                                    <span class="icon-on"><i class="ri-add-line align-bottom me-1"></i> Follow</span>
                                    <span class="icon-off"><i class="ri-user-unfollow-line align-bottom me-1"></i>
                                        Unfollow</span>
                                </button>
                            </div>
                        </BCol>
                    </BRow>
                </div>

                <BRow class="g-lg-4 g-3 mt-2">
                    <BCol lg="4" md="4">
                        <div>
                            <p class="text-muted text-uppercase fs-sm mb-1">Location</p>
                            <h6 class="mb-0 lh-base fs-md">Somewhere</h6>
                        </div>
                    </BCol>
                    <BCol lg="4" md="4">
                        <div>
                            <p class="text-muted text-uppercase fs-sm mb-1">About</p>
                            <h6 class="mb-0 lh-base fs-md">
                                <BLink href="mailto:sophiabethany@steemx.com" class="text-reset">FutureShock Witness
                                </BLink>
                            </h6>
                        </div>
                    </BCol>
                    <BCol lg="4" md="4">
                        <div>
                            <p class="text-muted text-uppercase fs-sm mb-1">Website</p>
                            <h6 class="mb-0 lh-base fs-md">
                                <BLink href="#!" class="text-reset">futureshock.world</BLink>
                            </h6>
                        </div>
                    </BCol>
                </BRow>
            </BCardBody>
        </BCard>

        <BCard no-body>
            <BCardBody>
                <div class="p-3 rounded">
                    <BRow>
                        <BCol lg="4">
                            <BCard no-body class="border bg-secondary border-secondary-subtle">
                                <BCardBody>
                                    <h6 class="text-success fs-xs float-end mb-0">
                                        <i class="ph ph-trend-up fs-sm align-middle me-1"></i> +16.09 %
                                    </h6>
                                    <div>
                                        <p class="text-uppercase fw-medium text-white text-opacity-75 text-truncate fs-sm">
                                            Total Revenue</p>
                                        <h4 class="fw-semibold text-white mb-0">
                                            <count-to :startVal="0" :duration="5000" :endVal="32697.33" :decimals="2"
                                                prefix="$"></count-to>
                                        </h4>
                                    </div>
                                </BCardBody>
                            </BCard>
                        </BCol>
                        <BCol lg="4">
                            <BCard no-body class="border">
                                <BCardBody>
                                    <h6 class="text-success fs-xs float-end mb-0">
                                        <i class="ph ph-trend-up fs-sm align-middle me-1"></i> +06.25 %
                                    </h6>
                                    <div>
                                        <p class="text-uppercase fw-medium text-muted text-truncate fs-sm">Total
                                            Income</p>
                                        <h4 class="fw-semibold mb-0">
                                            <count-to :startVal="0" :duration="5000" :endVal="10326.79" :decimals="2"
                                                prefix="$"></count-to>
                                        </h4>
                                    </div>
                                </BCardBody>
                            </BCard>
                        </BCol>
                        <BCol lg="4">
                            <BCard no-body class="border">
                                <BCardBody>
                                    <h6 class="text-danger fs-xs float-end mb-0">
                                        <i class="ph ph-trend-up fs-sm align-middle me-1"></i> +03.17 %
                                    </h6>
                                    <div>
                                        <p class="text-uppercase fw-medium text-muted text-truncate fs-sm">Total
                                            Expense</p>
                                        <h4 class="fw-semibold mb-0">
                                            <count-to :startVal="0" :duration="5000" :endVal="3547.32" :decimals="2"
                                                prefix="$"></count-to>
                                        </h4>
                                    </div>
                                </BCardBody>
                            </BCard>
                        </BCol>
                    </BRow>

                    <div class="d-flex align-items-center gap-2 flex-wrap mb-3">
                        <BCardTitle tag="h6" class="flex-grow-1 mb-0">Transactions History</BCardTitle>
                        <div class="flex-shrink-0">
                            <button class="btn btn-primary">View All</button>
                        </div>
                    </div>
                    <div id="transactionsList">
                        <div class="table-responsive">
                            <table class="table table-borderless table-centered align-middle table-nowrap mb-0">
                                <thead class="text-muted table-light">
                                    <tr>
                                        <th scope="col" class="sort cursor-pointer" data-sort="date">Date</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="transactions">
                                            transactions</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="coinName">Coin
                                        </th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="type">Type</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="amount">Amount
                                        </th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="status">Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="list">
                                    <tr v-for="(data, index) of displayedPosts" :key="index">
                                        <td class="date">
                                            {{ data.date }}
                                        </td>
                                        <td class="transactions">
                                            <BLink href="#!" class="fw-medium link-primary">
                                                {{ data.transactions }}</BLink>
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <img :src="data.coinIcon" alt="" class="avatar-xxs rounded-circle">
                                                <BLink href="#!" class="text-reset fw-medium coinName">
                                                    {{ data.coinName }}</BLink>
                                            </div>
                                        </td>
                                        <td class="type">
                                            {{ data.type }}
                                        </td>
                                        <td class="amount">
                                            <span class="fw-medium">{{ data.amount }}</span>
                                        </td>
                                        <td class="status">
                                            <span class="badge bg-success-subtle text-success"
                                                v-if="data.status == 'Successfully'">{{ data.status }}</span>
                                            <span class="badge bg-warning-subtle text-warning"
                                                v-if="data.status == 'Pending'">{{ data.status }}</span>
                                            <span class="badge bg-danger-subtle text-danger"
                                                v-if="data.status == 'Cancelled'">{{ data.status }}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <BRow class="align-items-center mt-4" v-if="pages.length > 1">
                            <BCol cols="sm">
                                <div class="text-muted text-center text-sm-start">
                                    Showing <span class="fw-semibold">{{ displayedPosts.length }}</span> of
                                    <span class="fw-semibold">{{ walletTable.length }}</span> Results
                                </div>
                            </BCol>
                            <BCol sm="auto" class="mt-3 mt-sm-0">
                                <div class="pagination-wrap pagination-sm hstack gap-2 justify-content-center">
                                    <BLink class="page-item pagination-prev disabled" href="javascript:void(0)"
                                        :disabled="page <= 1" @click="page--">
                                        <i class="bi bi-arrow-left"></i>
                                    </BLink>
                                    <ul class="pagination listjs-pagination mb-0">
                                        <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }"
                                            v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                                            <BLink class="page" href="#!">{{ pageNumber }}</BLink>
                                        </li>
                                    </ul>
                                    <BLink class="page-item pagination-next" href="javascript:void(0)"
                                        :disabled="page >= pages.length" @click="page++">
                                        <i class="bi bi-arrow-right"></i>
                                    </BLink>
                                </div>
                            </BCol>
                        </BRow>
                    </div>

                </div>
            </BCardBody>
        </BCard>

    </Layout>
</template>

<style scoped>
.pattern {
    background-image: url('../../assets/images/effect-pattern/abc.svg');
    background-repeat: no-repeat;
    background-position: right;
}
</style>