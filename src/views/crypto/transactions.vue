<script>


import { transactions } from "@/common/data";

export default {
    data() {
        return {
            page: 1,
            perPage: 10,
            pages: [],
            searchQuery: null,
            transactions: transactions
        };
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.transactions);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.transactions.filter((data) => {
                    return (
                        data.from.toLowerCase().includes(search) ||
                        data.to.toLowerCase().includes(search) ||
                        data.coin.toLowerCase().includes(search) ||
                        data.status.toLowerCase().includes(search) ||
                        data.amount.toLowerCase().includes(search)
                    );
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    watch: {
        transactions() {
            this.setPages();
        },
    },
    created() {
        this.setPages();
    },
    methods: {
        setPages() {
            let numberOfPages = Math.ceil(this.transactions.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }

            if (this.pages.length < this.page) {
                this.page = this.pages.length;
            }
        },

        paginate(transactions) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return transactions.slice(from, to);
        },

        // Table Sort
        onSort(column) {
            this.direction = this.direction === 'asc' ? 'desc' : 'asc';
            const sortedArray = [...this.transactions];
            sortedArray.sort((a, b) => {
                const res = a[column] < b[column] ? -1 : a[column] > b[column] ? 1 : 0;
                return this.direction === 'asc' ? res : -res;
            });
            this.transactions = sortedArray;
        },
    },



};
</script>

<template>
    <Layout>
        <div class="page-title-box">
            <BRow class="align-items-center gy-3">
                <BCol cols="md">
                    <PageHeader title="Transactions" pagetitle="Crypto" />
                </BCol>
                <BCol md="auto" class="ms-auto">
                    <RightBar />
                </BCol>
            </BRow>
        </div>

        <BRow id="transactionList">
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader>
                        <BRow class="align-items-center g-3">
                            <BCol xxl="3" lg="6" class="me-auto">
                                <BCardTitle tag="h6">Transactions</BCardTitle>
                                <p class="text-muted mb-0">Monthly: <b class="text-primary-emphasis">$48,521.95</b> Yearly:
                                    <b class="text-primary-emphasis">$1,87,324.97</b>
                                </p>
                            </BCol>
                            <BCol xxl="3">
                                <div class="search-box">
                                    <input type="text" class="form-control search"
                                        placeholder="Search transactionId, date, amount coin etc..." v-model="searchQuery">
                                    <i class="ri-search-line search-icon"></i>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardHeader>
                    <BCardBody>
                        <div class="table-responsive">
                            <table class="table align-middle table-borderless table-nowrap mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="transactionId"
                                            @click="onSort('transactionId')">Transactions ID</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="date"
                                            @click="onSort('date')">Date</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="from"
                                            @click="onSort('from')">From</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="to" @click="onSort('to')">To
                                        </th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="coin"
                                            @click="onSort('coin')">Coin</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="amount"
                                            @click="onSort('amount')">Amount</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="status"
                                            @click="onSort('status')">Status</th>
                                    </tr>
                                </thead>
                                <tbody class="list">
                                    <tr v-for="(data, index) of resultQuery" :key="index">
                                        <td>
                                            <div class="avatar-xs">
                                                <div class="avatar-title bg-success rounded-circle"
                                                    v-if="data.avatar == 'bg-success'"> <i
                                                        class="bi bi-arrow-down-right"></i> </div>
                                                <div class="avatar-title bg-danger rounded-circle"
                                                    v-if="data.avatar == 'bg-danger'"> <i class="bi bi-arrow-up-right"></i>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <BLink href="#!" class="transactionId text-reset">{{ data.transactionId }}
                                            </BLink>
                                        </td>
                                        <td class="date">{{ data.date }}</td>
                                        <td class="from">{{ data.from }}</td>
                                        <td class="to">{{ data.to }}</td>
                                        <td class="coin">{{ data.coin }}</td>
                                        <td class="amount">{{ data.amount }}</td>
                                        <td>
                                            <span class="badge bg-success-subtle text-success status"
                                                v-if="data.status == 'Success'">{{ data.status }}</span>
                                            <span class="badge bg-warning-subtle text-warning status"
                                                v-if="data.status == 'Processing'">{{ data.status }}</span>
                                            <span class="badge bg-danger-subtle text-danger status"
                                                v-if="data.status == 'Failed'">{{ data.status }}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="noresult" v-if="resultQuery.length < 1">
                                <div class="text-center py-4">
                                    <i class="ph-magnifying-glass fs-1 text-primary"></i>
                                    <h5 class="mt-2">Sorry! No Result Found</h5>
                                    <p class="text-muted mb-0">We've searched more than 164+ Transaction We did not find any
                                        Transaction for you search.</p>
                                </div>
                            </div>
                        </div>
                        <div class="align-items-center mt-3 justify-content-between row text-center text-sm-start"
                            id="pagination-element" v-if="resultQuery.length >= 1">
                            <BCol cols="sm">
                                <div class="text-muted">
                                    Showing <span class="fw-semibold">{{ resultQuery.length }}</span> of <span
                                        class="fw-semibold">{{ transactions.length }}</span>
                                    Results
                                </div>
                            </BCol>
                            <BCol sm="auto" class="mt-3 mt-sm-0">
                                <div class="pagination-wrap hstack gap-2 justify-content-center justify-content-sm-end"
                                    v-if="!searchQuery && pages.length > 1">
                                    <BLink class="page-item pagination-prev" href="#" :disabled="page <= 1" @click="page--">
                                        Previous
                                    </BLink>
                                    <ul class="pagination listjs-pagination mb-0">
                                        <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }"
                                            v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                                            <BLink class="page" href="#">{{ pageNumber }}</BLink>
                                        </li>
                                    </ul>
                                    <BLink class="page-item pagination-next" href="#" :disabled="page >= pages.length"
                                        @click="page++">
                                        Next
                                    </BLink>
                                </div>
                            </BCol>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
</Layout></template>