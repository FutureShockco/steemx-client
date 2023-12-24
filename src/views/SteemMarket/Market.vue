<script>


import { coinChatData } from "@/common/data";
import steem from "steem";

export default {
    data() {
        return {
            buys: [],
            sells: [],
            msg: "",
            submitted: false,
            coinChatData: coinChatData,
            chartOptions: {
                chart: {
                    type: 'area',
                    toolbar: {
                        show: false,
                    }
                },
                stroke: {
                    curve: 'straight'
                },
                colors: ['#1FBF8F', '#f56665'],
                xaxis: {
                    type: 'numeric',
                    labels: {
                        show: false
                    },
                    tickAmount :10,
                    decimalInFloat: 2,
                },
            },
        };
    },
    mounted() {
        const that = this
        steem.api.getOrderBook(50, function (err, result) {
            console.log(err, result);
            if (result) {
                that.buys = result.bids
                that.sells = result.asks
            }
        });
    },
    computed: {
        series() {
            return this.$store.state.tokens.steemMarket
        },

    },
    methods: {


        currentTime() {
            const hours = new Date().getHours();
            const minutes = new Date().getMinutes();
            const ampm = hours >= 12 ? 'pm' : 'am';

            const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
            const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

            return `${formattedHours}:${formattedMinutes} ${ampm}`;
        },

        // Chat
        sendMsg() {
            this.submitted = true;
            if (this.msg) {
                let data = {
                    id: (Math.floor(Math.random() * 100 + 20) - 20),
                    isSender: true,
                    content: this.msg,
                    time: this.currentTime(),
                };
                this.coinChatData.push(data);
                this.submitted = false;
                this.msg = "";
            }

            setTimeout(() => {
                this.submitted = false;
            }, [700]);

        },

        deleteMsg(data) {
            this.coinChatData = this.coinChatData.filter((item) => item.id !== data.id);
        },
    },

};
</script>

<template>
    <Layout>
        <div class="page-title-box">
            <BRow class="align-items-center gy-3">
                <BCol cols="md">
                    <PageHeader title="Coin Overview" pagetitle="Crypto" />
                </BCol>
                <BCol md="auto" class="ms-auto">
                    <RightBar />
                </BCol>
            </BRow>
        </div>
        <BRow>
            <BCol lg="9">
                <BCard no-body>
                    <BCardHeader class="d-flex align-items-center gap-2">
                        <div class="flex-grow-1">
                            <BCardTitle tag="h5" class="mb-1">STEEM/SBD INTERNAL MARKET</BCardTitle>
                            <p class="text-muted mb-0">Cryptocurrency</p>
                        </div>
                        <!-- <div class="flex-shrink-0 hstack gap-2">
                            <button class="btn btn-success">Buy</button>
                            <button class="btn btn-danger">Sell</button>
                        </div> -->
                        <div class="flex-shrink-0 hstack gap-2">
                            <button class="btn btn-primary text-uppercase mt-3">Switch market</button>
                        </div>
                    </BCardHeader>
                    <BCardBody>
                        <div class="tradingview-widget-container">
                            <apexchart v-if="series && series[0] && series[0].data && series[0].data.length > 0"
                                id="steem_overview" class="apex-charts" dir="ltr" height="367" :series="series"
                                :options="chartOptions" />
                            <!-- <div id="bitcoinCrypto"></div> -->
                            <!-- <div class="tradingview-widget-copyright"><router-link to="https://in.tradingview.com/"
                                    rel="noopener nofollow" target="_blank">
                                    <span class="blue-text">Track all markets on TradingView</span></router-link>
                            </div> -->

                        </div>
                    </BCardBody>
                </BCard>
                <BCard no-body>
                    <BRow>
                        <BCol lg="6">
                            <div class="form p-4">
                                <BCardTitle tag="h4" class="text-success">BUY STEEM</BCardTitle>

                                <div class="input-group mt-3">
                                    <label class="input-group-text" id="a1" style="width: 90px;">PRICE</label>
                                    <input type="text" class="form-control" placeholder="0.000" aria-label="0"
                                        aria-describedby="a1">
                                    <span class="input-group-text" id="a1" style="width: 100px;">SBD/STEEM</span>
                                </div>
                                <div class="input-group mt-3">
                                    <label class="input-group-text" id="a1" style="width: 90px;">AMOUNT</label>
                                    <input type="text" class="form-control" placeholder="0.000" aria-label="0"
                                        aria-describedby="a1">
                                    <span class="input-group-text" id="a1" style="width: 100px;">STEEM</span>
                                </div>
                                <div class="input-group mt-3">
                                    <label class="input-group-text" id="a1" style="width: 90px;">TOTAL</label>
                                    <input type="text" class="form-control" placeholder="0.000" aria-label="0"
                                        aria-describedby="a1">
                                    <span class="input-group-text" id="a1" style="width: 100px;">SBD</span>
                                </div>
                                <button class="btn btn-success text-uppercase mt-3 disabled">Buy steem</button>

                            </div>

                        </BCol>
                        <BCol lg="6">
                            <div class="form p-4">
                                <BCardTitle tag="h4" class="text-danger">SELL STEEM</BCardTitle>

                                <div class="input-group mt-3">
                                    <label class="input-group-text" id="a1" style="width: 90px;">PRICE</label>
                                    <input type="text" class="form-control" placeholder="0.000" aria-label="0"
                                        aria-describedby="a1">
                                    <span class="input-group-text" id="a1" style="width: 100px;">SBD/STEEM</span>
                                </div>
                                <div class="input-group mt-3">
                                    <label class="input-group-text" id="a1" style="width: 90px;">AMOUNT</label>
                                    <input type="text" class="form-control" placeholder="0.000" aria-label="0"
                                        aria-describedby="a1">
                                    <span class="input-group-text" id="a1" style="width: 100px;">STEEM</span>
                                </div>
                                <div class="input-group mt-3">
                                    <label class="input-group-text" id="a1" style="width: 90px;">TOTAL</label>
                                    <input type="text" class="form-control" placeholder="0.000" aria-label="0"
                                        aria-describedby="a1">
                                    <span class="input-group-text" id="a1" style="width: 100px;">SBD</span>
                                </div>
                                <button class="btn btn-danger text-uppercase mt-3 disabled">Sell steem</button>

                            </div>
                        </BCol>
                    </BRow>


                </BCard>
                <BRow>

                    <BCol lg="6">
                        <BCard no-body>
                            <BCardHeader class="hstack gap-2 align-items-center">
                                <BCardTitle tag="h5" class="flex-grow-1 mb-0">Buy Order</BCardTitle>
                                <BLink href="#!">View All <i class="bi bi-arrow-right align-baseline"></i></BLink>
                            </BCardHeader>
                            <BCardBody class="pt-2">
                                <div class="table-responsive table-card mb-n3">
                                    <table class="table  table-borderless table-hover table-striped mb-0">
                                        <thead class="text-uppercase fs-xs text-muted">
                                            <tr>
                                                <th>Amount</th>
                                                <th>Price</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="buy in buys" :key="buy">
                                                <td>{{ buy.order_price.quote }}</td>
                                                <td>{{ _dt(buy.real_price) }}</td>
                                                <td>{{ buy }}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="6">
                        <BCard no-body>
                            <BCardHeader class="hstack gap-2 align-items-center">
                                <BCardTitle tag="h5" class="flex-grow-1 mb-0">Sell Order</BCardTitle>
                                <BLink href="#!">View All <i class="bi bi-arrow-right align-baseline"></i></BLink>
                            </BCardHeader>
                            <BCardBody class="pt-2">
                                <div class="table-responsive table-card mb-n3">
                                    <table class="table table-borderless table-hover table-striped mb-0">
                                        <thead class="text-uppercase fs-xs text-muted">
                                            <tr>
                                                <th>Amount</th>
                                                <th>Price</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="sell in sells" :key="sell">
                                                <td>{{ sell.order_price.quote }}</td>
                                                <td>{{ _dt(sell.real_price) }}</td>
                                                <td>{{ sell }}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
            </BCol>
            <BCol lg="3">
                <BCard no-body>
                    <BCardBody>
                        <div class="text-center">
                            <img src="@/assets/images/svg/crypto-icons/steem.svg" alt="" class="avatar-sm">
                            <div class="mt-3">
                                <h6 class="fs-lg mb-1">STEEM (STEEM)</h6>
                                <p class="text-muted">1 BTC = 626,391.00 USD</p>
                            </div>
                        </div>
                        <p class="text-muted mb-2">Bitcoin is a protocol which implements a highly available, public,
                            permanent, and decentralized ledger. In order to add to the ledger, a user must prove they
                            control an entry in the ledger.</p>
                        <p class="text-muted">Bitcoin cannot be considered a safe investment, though it can offer high
                            returns. As for its legality, bitcoin is legal in many places, but it is illegal in several
                            countries, including China, and more governments are considering making its use illegal.</p>
                        <BLink href="#!" class="icon-link icon-link-hover">Read More <i
                                class="bi bi-arrow-right align-middle"></i></BLink>
                    </BCardBody>
                </BCard>
                <BCard no-body class="overflow-hidden">
                    <BCardHeader class="align-items-center d-flex bg-primary-subtle text-primary p-3">
                        <div class="flex-grow-1">
                            <BCardTitle tag="h5" class="text-primary-emphasis profile-username">24*7 Support</BCardTitle>
                            <p class="mb-0 lh-1">Active</p>
                        </div>
                        <div class="flex-shrink-0">
                            <div class="mt-n1">
                                <BLink href="#!" class="btn btn-icon btn-info btn-sm"><i
                                        class="bi bi-three-dots-vertical"></i></BLink>
                            </div>
                        </div>
                    </BCardHeader>

                    <BCardBody class="p-0">
                        <div>
                            <div class="chat-conversation p-3" data-simplebar style="height: 300px;">
                                <ul class="list-unstyled chat-conversation-list chat-sm" id="users-conversation">
                                    <template v-for="(data, index) of coinChatData" :key="index">
                                        <li class="chat-list" :class="data.isSender ? 'right' : 'left'">
                                            <div class="conversation-list">
                                                <div class="chat-avatar" v-if="!data.isSender">
                                                    <img :src="data.avatar" alt="">
                                                </div>
                                                <div class="user-chat-content">
                                                    <div class="ctext-wrap">
                                                        <div class="ctext-wrap-content">
                                                            <p class="mb-0 ctext-content">{{ data.content }}</p>
                                                        </div>
                                                        <BDropdown variant="link" class="align-self-start message-box-drop"
                                                            toggle-class="arrow-none">
                                                            <template #button-content> <i class="ri-more-2-fill"></i>
                                                            </template>
                                                            <BDropdownItem><i
                                                                    class="ri-reply-line me-2 text-muted align-bottom"></i>Reply
                                                            </BDropdownItem>
                                                            <BDropdownItem><i
                                                                    class="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy
                                                            </BDropdownItem>
                                                            <BDropdownItem @click="deleteMsg(data)"><i
                                                                    class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete
                                                            </BDropdownItem>
                                                        </BDropdown>
                                                    </div>
                                                    <div class="conversation-name"><small class="text-muted time">{{
                                                        data.time }}</small>
                                                        <span class="text-success check-message-icon"><i
                                                                class="ri-check-double-line align-bottom"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </template>
                                </ul>
                            </div>
                        </div>

                        <div class="border-top border-top-dashed">
                            <BRow class="g-2 mx-3 mt-2 mb-3">
                                <BCol>
                                    <div class="position-relative">
                                        <input type="text" class="form-control border-light bg-light"
                                            :class="{ 'is-invalid': submitted && !msg }" placeholder="Enter Message..."
                                            v-model="msg">
                                        <div class="invalid-feedback">Please Enter Message.</div>
                                    </div>
                                </BCol>
                                <BCol cols="auto">
                                    <button type="submit" class="btn btn-secondary" @click="sendMsg"><i
                                            class="bi bi-send"></i></button>
                                </BCol>
                            </BRow>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>