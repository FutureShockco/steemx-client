<script>


import { coinChatData } from "@/common/data";

export default {
    data() {
        return {
            msg: "",
            submitted: false,
            coinChatData: coinChatData,
        };
    },
    mounted() {
        this.loadTradingViewWidget();
    },
    methods: {
        loadTradingViewWidget() {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://s3.tradingview.com/tv.js';
            script.async = true;
            script.onload = () => {
                this.initTradingViewWidget();
            };
            document.body.appendChild(script);
        },

        initTradingViewWidget() {
            new window.TradingView.widget({
                width: '100%',
                height: 550,
                symbol: 'CRYPTO:BTCUSD',
                interval: '1',
                timezone: 'Europe/London',
                theme: 'light',
                style: '1',
                locale: 'in',
                toolbar_bg: '#F1F3F6',
                enable_publishing: false,
                allow_symbol_change: true,
                container_id: 'bitcoinCrypto'
            });
        },

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
                            <BCardTitle tag="h5" class="mb-1">Bitcoin (BTCUSD)</BCardTitle>
                            <p class="text-muted mb-0">Cryptocurrency</p>
                        </div>
                        <div class="flex-shrink-0 hstack gap-2">
                            <button class="btn btn-success">Buy</button>
                            <button class="btn btn-danger">Sell</button>
                        </div>
                    </BCardHeader>
                    <BCardBody>
                        <div class="tradingview-widget-container">
                            <div id="bitcoinCrypto"></div>
                            <div class="tradingview-widget-copyright"><router-link to="https://in.tradingview.com/"
                                    rel="noopener nofollow" target="_blank">
                                    <span class="blue-text">Track all markets on TradingView</span></router-link>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
                <BRow>
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
                                                <th>Price</th>
                                                <th>Amount</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>95.3</td>
                                                <td>0.25</td>
                                                <td>$4,782</td>
                                            </tr>
                                            <tr>
                                                <td>96.9</td>
                                                <td>0.31</td>
                                                <td>$3,874</td>
                                            </tr>
                                            <tr>
                                                <td>97.2</td>
                                                <td>0.49</td>
                                                <td>$9,367</td>
                                            </tr>
                                            <tr>
                                                <td>98.2</td>
                                                <td>0.74</td>
                                                <td>$9,365</td>
                                            </tr>
                                            <tr>
                                                <td>99.6</td>
                                                <td>0.80</td>
                                                <td>$1,989</td>
                                            </tr>
                                            <tr>
                                                <td>100.6</td>
                                                <td>0.94</td>
                                                <td>$10,235</td>
                                            </tr>
                                            <tr>
                                                <td>101.9</td>
                                                <td>0.33</td>
                                                <td>$11,775</td>
                                            </tr>
                                            <tr>
                                                <td>102.2</td>
                                                <td>0.39</td>
                                                <td>$17,463</td>
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
                                <BCardTitle tag="h5" class="flex-grow-1 mb-0">Buy Order</BCardTitle>
                                <BLink href="#!">View All <i class="bi bi-arrow-right align-baseline"></i></BLink>
                            </BCardHeader>
                            <BCardBody class="pt-2">
                                <div class="table-responsive table-card mb-n3">
                                    <table class="table table-borderless table-hover table-striped mb-0">
                                        <thead class="text-uppercase fs-xs text-muted">
                                            <tr>
                                                <th>Price</th>
                                                <th>Amount</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>95.3</td>
                                                <td>0.25</td>
                                                <td>$4,782</td>
                                            </tr>
                                            <tr>
                                                <td>96.9</td>
                                                <td>0.31</td>
                                                <td>$3,874</td>
                                            </tr>
                                            <tr>
                                                <td>97.2</td>
                                                <td>0.49</td>
                                                <td>$9,367</td>
                                            </tr>
                                            <tr>
                                                <td>98.2</td>
                                                <td>0.74</td>
                                                <td>$9,365</td>
                                            </tr>
                                            <tr>
                                                <td>99.6</td>
                                                <td>0.80</td>
                                                <td>$1,989</td>
                                            </tr>
                                            <tr>
                                                <td>100.6</td>
                                                <td>0.94</td>
                                                <td>$10,235</td>
                                            </tr>
                                            <tr>
                                                <td>101.9</td>
                                                <td>0.33</td>
                                                <td>$11,775</td>
                                            </tr>
                                            <tr>
                                                <td>102.2</td>
                                                <td>0.39</td>
                                                <td>$17,463</td>
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
                            <img src="@/assets/images/svg/crypto-icons/btc.svg" alt="" class="avatar-sm">
                            <div class="mt-3">
                                <h6 class="fs-lg mb-1">Bitcoin (BTC)</h6>
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
                                    <button type="submit" class="btn btn-secondary" @click="sendMsg"><i class="bi bi-send"></i></button>
                                </BCol>
                            </BRow>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>