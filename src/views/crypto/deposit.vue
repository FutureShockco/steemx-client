<script>


import { coinChatData } from "@/common/data";
import ws from "@/helpers/kbyte"
export default {
    data() {
        return {
            msg: "",
            submitted: false,
            coinChatData: coinChatData,
            coin: this.$route.params.coin,
            addresses: null,
            canDeposit: true
        };
    },
    mounted() {
        ws.requestAsync('get_deposit_address', { id: localStorage.getItem('userId'), currency: this.$route.params.coin }).then((result) => {
            if (result.data.length < 1) {
                this.canDeposit = false

            }
            else {
                this.canDeposit = true
                this.addresses = result.data;

            }
        }).catch((e) => {
            console.log(e)
        })
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
                    <PageHeader :title="'Deposit ' + coin" pagetitle="Crypto" />
                </BCol>
                <BCol md="auto" class="ms-auto">
                    <RightBar />
                </BCol>
            </BRow>
        </div>
        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardHeader class="d-flex align-items-center gap-2">
                        <div class="flex-grow-1">
                            <BCardTitle tag="h5" class="mb-1">{{ coin }}</BCardTitle>
                            <p class="text-muted mb-0">Deposit time depend on our partner exchange.</p>
                        </div>
                        <div class="flex-shrink-0 hstack gap-2">
                            <button class="btn btn-primary">Show QR Code</button>
                        </div>
                    </BCardHeader>
                    <BCardBody v-if="canDeposit">
                        <div v-for="address in addresses" :key="address">
                            {{ address.chain }} - {{ address.address }}
                        </div>
                    </BCardBody>
                    <BCardBody v-else>
                        <div>
                            Deposit for {{ $route.params.coin }} suspended
                        </div>
                    </BCardBody>
                </BCard>

            </BCol>
            <!-- <BCol lg="3">
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

            </BCol> -->
        </BRow>
    </Layout>
</template>