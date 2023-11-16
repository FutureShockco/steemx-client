<script>
import Layout from "@/layouts";
import PageHeader from "@/components/page-header.vue";
import RightBar from "@/components/right-bar.vue";

import { CountTo } from 'vue3-count-to';
import ssc from '@/helpers/ssc';

import { marketCapitalizationChart, allocationOverviewChart, stockMarketGainersChart } from "./data";

export default {
  data() {
    return {
      marketCapitalizationChart: marketCapitalizationChart,
      allocationOverviewChart: allocationOverviewChart,
      stockMarketGainersChart: stockMarketGainersChart,
      stockMarketTab: 'Active',
      steemPrice: this.$store.state.tokens.steem,
      series: [{
        data: this.$store.state.tokens.steemHistory
      }],
      topCurrencies: this.$store.state.tokens.top.slice(0, 4),
      chartOptions: {
        chart: {
          type: 'candlestick',
          toolbar: {
            show: false,
          }
        },
        grid: {
          padding: {
            bottom: 0,
            right: 0
          }
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: "#1dcf7a",
              downward: "#f56665",
            }
          }
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        },

      },
      page: 1,
      perPage: 5,
      pages: [],
      myCurrenciesData: [
        {
          id: 1,
          coinName: "Bitcoin",
          img: require("@/assets/images/svg/crypto-icons/btc.svg"),
          price: "$48,568.025",
          change: "5.26",
          totalCoin: "1.25634801",
          status: "success"
        },
        {
          id: 2,
          coinName: "Litecoin",
          img: require("@/assets/images/svg/crypto-icons/ltc.svg"),
          price: "$87,142.027",
          change: "3.07",
          totalCoin: "2.85472161",
          status: "danger"
        },
        {
          id: 3,
          coinName: "Ethereum",
          img: require("@/assets/images/svg/crypto-icons/eth.svg"),
          price: "$33,847.961",
          change: "7.13",
          totalCoin: "1.45612347",
          status: "success"
        },
        {
          id: 4,
          coinName: "Binance",
          img: require("@/assets/images/svg/crypto-icons/bnb.svg"),
          price: "$73,654.421",
          change: "0.97",
          totalCoin: "0.35734601",
          status: "success"
        },
        {
          id: 5,
          coinName: "Tether",
          img: require("@/assets/images/svg/crypto-icons/usdt.svg"),
          price: "$66,742.077",
          change: "1.08",
          totalCoin: "3.62912570",
          status: "danger"
        },
        {
          id: 6,
          coinName: "Dash",
          img: require("@/assets/images/svg/crypto-icons/dash.svg"),
          price: "$34,736.209",
          change: "4.52",
          totalCoin: "1.85412740",
          status: "success"
        }
      ]
    };
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.myCurrenciesData);
    },
  },
  watch: {
    myCurrenciesData() {
      this.setPages();
    },
  },
  async created() {
    this.setPages();
    setInterval(() => {
      ssc.getLatestBlockInfo((err, result) => {
        console.log(err, result);
      });
    }, 3000);
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.myCurrenciesData.length / this.perPage);
      this.pages = [];
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }

      if (this.pages.length < this.page) {
        this.page = this.pages.length;
      }
    },

    paginate(myCurrenciesData) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return myCurrenciesData.slice(from, to);
    }
  },
  components: {
    Layout,
    PageHeader,
    RightBar,
    CountTo
  },
};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center">
        <BCol md="5">
          <PageHeader title="Crypto" pagetitle="Dashboards" />
        </BCol>
        <BCol md="auto" class="ms-auto">
          <RightBar />
        </BCol>
      </BRow>
    </div>

    <BRow>
      <BCol xxl="9">
        <BRow>
          <BCol v-for="currency in topCurrencies" :key="currency.name" cols="xxl" sm="6">
            <BCard no-body class="overflow-hidden">
              <BCardBody>
                <span :class="currency.CHANGE24HOUR > 0 ? 'text-success' : 'text-danger'"
                  class="badge bg-danger-subtle float-end"><i v-if="currency.CHANGE24HOUR > 0"
                    class="bi bi-arrow-up"></i><i v-else class="bi bi-arrow-down"></i> $ {{
                      (currency.CHANGE24HOUR).toFixed(3) }}</span>
                <router-link to="/crypto/coin-overview">
                  <h5 class="fs-lg mb-1">{{ currency.full }}</h5>
                </router-link>
                <p class="text-muted fs-xs mb-4">{{ currency.name }}/USD</p>
                <!-- {{ currency }} -->
                <h4 class="mb-0">
                  <count-to :startVal="0" :duration="5000" :endVal="currency.PRICE" :decimals="2" prefix="$"></count-to>{{
                    "" }}
                  <small class="fw-normal text-muted fs-xs">USD</small>
                </h4>
              </BCardBody>
            </BCard>
          </BCol>
          <!-- <BCol cols="xxl" sm="6">
            <BCard no-body class="overflow-hidden">
              <BCardBody>
                <span class="badge bg-success-subtle text-success float-end"><i class="bi bi-arrow-up"></i> 0.61%</span>
                <router-link to="/crypto/coin-overview">
                  <h5 class="fs-lg mb-1">Ethereum</h5>
                </router-link>
                <p class="text-muted fs-xs mb-4">ETH/USD</p>
                <h4 class="mb-0">
                  <count-to :startVal="0" :duration="5000" :endVal="1819.98" :decimals="2" prefix="$"></count-to>{{ "" }}
                  <small class="fw-normal text-muted fs-xs">USD</small>
                </h4>
              </BCardBody>
            </BCard>
          </BCol>
          <BCol cols="xxl" sm="6">
            <BCard no-body class="overflow-hidden">
              <BCardBody>
                <span class="badge bg-success-subtle text-success float-end"><i class="bi bi-arrow-up"></i> 9.03%</span>
                <router-link to="/crypto/coin-overview">
                  <h5 class="fs-lg mb-1">Solana</h5>
                </router-link>
                <p class="text-muted fs-xs mb-4">SOL/USD</p>
                <h4 class="mb-0">
                  <count-to :startVal="0" :duration="5000" :endVal="19.52" :decimals="2" prefix="$"></count-to>{{ "" }}
                  <small class="fw-normal text-muted fs-xs">USD</small>
                </h4>
              </BCardBody>
            </BCard>
          </BCol>
          <BCol cols="xxl" sm="6">
            <BCard no-body class="overflow-hidden">
              <BCardBody>
                <span class="badge bg-danger-subtle text-danger float-end"><i class="bi bi-arrow-down"></i> 5.51%</span>
                <router-link to="/crypto/coin-overview">
                  <h5 class="fs-lg mb-1">Litecoin</h5>
                </router-link>
                <p class="text-muted fs-xs mb-4">LTC/USD</p>
                <h4 class="mb-0">
                  <count-to :startVal="0" :duration="5000" :endVal="86.72" :decimals="2" prefix="$"></count-to>{{ "" }}
                  <small class="fw-normal text-muted fs-xs">USD</small>
                </h4>
              </BCardBody>
            </BCard>
          </BCol> -->
        </BRow>

        <BCard no-body>
          <BCardHeader v-if="steemPrice">
            <div class="d-flex flex-wrap gap-2 align-items-center">
              <img src="@/assets/images/svg/crypto-icons/steem.svg" alt="ETH" class="avatar-xs flex-shrink-0">
              <div class="flex-grow-1">
                <h5 class="fs-lg mb-0">Steem</h5>
                <p class="text-muted xs-sm mb-0">The Social Chain</p>
              </div>
              <div class="flex-shrink-0">
                <div class="d-flex gap-3">
                  <div class="flex-shrink-0">
                    <p class="text-muted xs-sm mb-1">Price</p>
                    <h5 class="fs-lg mb-0">${{ _n(steemPrice.PRICE) }}</h5>
                  </div>
                  <div class="vr"></div>
                  <div class="flex-shrink-0">
                    <p class="text-muted xs-sm mb-1">24h change</p>
                    <h5 class="fs-lg mb-0" :class="steemPrice.UP > 0 ? 'text-success' : 'text-danger'">
                      {{ _n(steemPrice.CHANGE24HOUR) }} %</h5>
                  </div>
                  <div class="vr"></div>
                  <div class="flex-shrink-0">
                    <p class="text-muted xs-sm mb-1">24h volume</p>
                    <h5 class="fs-lg mb-0">${{ _n(steemPrice.VOLUME24HOURTO) }}</h5>
                  </div>
                </div>
              </div>
            </div>
          </BCardHeader>
          <BCardBody>
            <div class="d-flex gap-2 align-items-center flex-wrap">
              <ul
                class="list-unstyled crypto-chart-menu d-inline-flex gap-3 flex-wrap p-1 bg-light rounded-pill flex-shrink-0">
                <li>
                  <BLink href="#!"
                    class="avatar-xs btn fs-2xs fw-medium rounded-circle d-flex align-items-center flex-shrink-0 justify-content-center active">
                    15M
                  </BLink>
                </li>
                <li>
                  <BLink href="#!"
                    class="avatar-xs btn fs-2xs fw-medium rounded-circle d-flex align-items-center flex-shrink-0 justify-content-center">
                    1H
                  </BLink>
                </li>
                <li>
                  <BLink href="#!"
                    class="avatar-xs btn fs-2xs fw-medium rounded-circle d-flex align-items-center flex-shrink-0 justify-content-center">
                    6H
                  </BLink>
                </li>
                <li>
                  <BLink href="#!"
                    class="avatar-xs btn fs-2xs fw-medium rounded-circle d-flex align-items-center flex-shrink-0 justify-content-center">
                    12H
                  </BLink>
                </li>
                <li>
                  <BLink href="#!"
                    class="avatar-xs btn fs-2xs fw-medium rounded-circle d-flex align-items-center flex-shrink-0 justify-content-center">
                    1D
                  </BLink>
                </li>
              </ul>
              <ul class="list-unstyled crypto-chart-menu d-inline-flex gap-3 flex-wrap p-1 bg-light rounded-pill me-auto">
                <li>
                  <BLink href="#!"
                    class="avatar-xs btn fs-2xs fw-medium rounded-circle d-flex align-items-center flex-shrink-0 justify-content-center active">
                    <i class="bi bi-sliders"></i>
                  </BLink>
                </li>
                <li>
                  <BLink href="#!"
                    class="avatar-xs btn fs-2xs fw-medium rounded-circle d-flex align-items-center flex-shrink-0 justify-content-center">
                    <i class="ph ph-chart-bar-horizontal"></i>
                  </BLink>
                </li>
                <li>
                  <BLink href="#!"
                    class="avatar-xs btn fs-2xs fw-medium rounded-circle d-flex align-items-center flex-shrink-0 justify-content-center">
                    <i class="bi bi-bar-chart"></i>
                  </BLink>
                </li>
              </ul>
              <div class="flex-shrink-0">
                <BDropdown variant="link" toggle-class="btn btn-subtle-secondary btn-icon arrow-none"
                  menu-class="dropdown-menu-end">
                  <template #button-content> <i class="bi bi-gear"></i> </template>
                  <BDropdownItem>Today</BDropdownItem>
                  <BDropdownItem>Yesterday</BDropdownItem>
                  <BDropdownItem>This Month</BDropdownItem>
                  <BDropdownItem>Last Month</BDropdownItem>
                  <BDropdownItem>This Year</BDropdownItem>
                  <BDropdownItem>Last Year</BDropdownItem>
                </BDropdown>
              </div>
            </div>
            <apexchart v-if="series && series[0] && series[0].data && series[0].data.length > 0" id="steem_overview"
              class="apex-charts" dir="ltr" height="367" :series="series" :options="chartOptions" />
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xxl="3">
        <BRow>
          <BCol xxl="12" lg="6">
            <BCard no-body class="card-height-100">
              <BCardBody>
                <BTabs nav-class="nav-fill nav-secondary gap-1 p-1 small bg-light rounded-pill shadow-sm"
                  active-nav-item-class="rounded-pill" content-class="mt-3" pills>
                  <BTab title="Balance" active>
                    <div class="d-flex gap-2">
                      <div class="flex-grow-1">
                        <h5>$23,475.97</h5>
                        <p class="text-muted mb-0">14:35:21</p>
                      </div>
                      <div class="flex-shrink-0">
                        <select class="form-control" id="choices-single-no-search2" name="choices-single-no-search2"
                          data-choices data-choices-search-false>
                          <option value="STEEM">STEEM</option>
                          <option value="BTC">BTC</option>
                          <option value="LTC">LTC</option>
                          <option value="SOL">SOL</option>
                          <option value="USD">USD</option>
                          <option value="DCR">DCR</option>
                        </select>
                      </div>
                    </div>
                    <div class="pt-4 mt-4 border-top">
                      <BRow class="gy-3">
                        <BCol md="4">
                          <h6 class="mb-1">$120.48</h6>
                          <p class="text-muted mb-0">Daily volume</p>
                        </BCol>
                        <BCol md="4">
                          <h6 class="mb-1">0.074</h6>
                          <p class="text-muted mb-0">BTC volume</p>
                        </BCol>
                        <BCol md="4">
                          <h6 class="mb-1">0.64%</h6>
                          <p class="text-muted mb-0">% amount</p>
                        </BCol>
                      </BRow>
                    </div>
                    <div class="hstack gap-2 mt-4">
                      <button class="btn btn-primary w-100">Deposit</button>
                      <button class="btn btn-outline-primary w-100">Withdraw</button>
                    </div>
                  </BTab>
                  <BTab title="Pending">
                    <div class="d-flex gap-2">
                      <div class="flex-grow-1">
                        <h5>$14,941.26</h5>
                        <p class="text-muted mb-0">08:27:39</p>
                      </div>
                      <div class="flex-shrink-0">
                        <select class="form-control" id="choices-single-no-search" name="choices-single-no-search"
                          data-choices data-choices-search-false>
                          <option value="ETH">ETH</option>
                          <option value="BTC">BTC</option>
                          <option value="LTC">LTC</option>
                          <option value="SOL">SOL</option>
                          <option value="USD">USD</option>
                          <option value="DCR">DCR</option>
                        </select>
                      </div>
                    </div>
                    <div class="pt-4 mt-4 border-top">
                      <BRow>
                        <BCol md="4">
                          <h6 class="mb-1">$97.11</h6>
                          <p class="text-muted mb-0">Daily volume</p>
                        </BCol>
                        <BCol md="4">
                          <h6 class="mb-1">0.024</h6>
                          <p class="text-muted mb-0">BTC volume</p>
                        </BCol>
                        <BCol md="4">
                          <h6 class="mb-1">0.87%</h6>
                          <p class="text-muted mb-0">% amount</p>
                        </BCol>
                      </BRow>
                    </div>
                    <div class="hstack gap-2 mt-4">
                      <router-link to="/crypto/transactions" class="btn btn-primary w-100">View Transaction</router-link>
                    </div>
                  </BTab>
                </BTabs>

              </BCardBody>
            </BCard>
          </BCol>
          <BCol xxl="12" lg="6">
            <BCard no-body class="card-height-100">
              <BCardHeader class="align-items-center d-flex">
                <BCardTitle tag="h6" class="mb-0 flex-grow-1">Recent Transaction</BCardTitle>
                <div class="flex-shrink-0">
                  <router-link class="icon-link" to="/crypto/transactions">
                    View All <i class="bi bi-arrow-right"></i>
                  </router-link>
                </div>
              </BCardHeader>
              <BCardBody>
                <ul class="list-unstyled vstack gap-3 mb-0">
                  <li class="d-flex align-items-center gap-2 position-relative">
                    <img src="@/assets/images/svg/crypto-icons/btc.svg" alt="" class="avatar-xxs">
                    <div class="flex-grow-1">
                      <router-link to="/crypto/coin-overview" class="stretched-link">
                        <h6 class="fs-sm mb-0">Bitcoin (BTC)</h6>
                      </router-link>
                      <p class="text-danger fs-xs mb-0">Buy</p>
                    </div>
                    <div class="text-end flex-shrink-0">
                      <h6 class="fs-sm mb-0">$154.31</h6>
                      <p class="text-muted fs-xs mb-0">21 June, 2023</p>
                    </div>
                  </li>
                  <li class="d-flex align-items-center gap-2 position-relative">
                    <img src="@/assets/images/svg/crypto-icons/usdt.svg" alt="" class="avatar-xxs">
                    <div class="flex-grow-1">
                      <router-link to="/crypto/coin-overview" class="stretched-link">
                        <h6 class="fs-sm mb-0">Tether (USDT)</h6>
                      </router-link>
                      <p class="text-success fs-xs mb-0">Sell</p>
                    </div>
                    <div class="text-end flex-shrink-0">
                      <h6 class="fs-sm mb-0">$2.5487</h6>
                      <p class="text-muted fs-xs mb-0">19 June, 2023</p>
                    </div>
                  </li>
                  <li class="d-flex align-items-center gap-2 position-relative">
                    <img src="@/assets/images/svg/crypto-icons/dcr.svg" alt="" class="avatar-xxs">
                    <div class="flex-grow-1">
                      <router-link to="/crypto/coin-overview" class="stretched-link">
                        <h6 class="fs-sm mb-0">Decred (DCR)</h6>
                      </router-link>
                      <p class="text-danger fs-xs mb-0">Buy</p>
                    </div>
                    <div class="text-end flex-shrink-0">
                      <h6 class="fs-sm mb-0">$136.97</h6>
                      <p class="text-muted fs-xs mb-0">14 June, 2023</p>
                    </div>
                  </li>
                  <li class="d-flex align-items-center gap-2 position-relative">
                    <img src="@/assets/images/svg/crypto-icons/eth.svg" alt="" class="avatar-xxs">
                    <div class="flex-grow-1">
                      <router-link to="/crypto/coin-overview" class="stretched-link">
                        <h6 class="fs-sm mb-0">Ethereum (ETH)</h6>
                      </router-link>
                      <p class="text-success fs-xs mb-0">Sell</p>
                    </div>
                    <div class="text-end flex-shrink-0">
                      <h6 class="fs-sm mb-0">$324.15</h6>
                      <p class="text-muted fs-xs mb-0">01 June, 2023</p>
                    </div>
                  </li>
                  <li class="d-flex align-items-center gap-2 position-relative">
                    <img src="@/assets/images/svg/crypto-icons/aave.svg" alt="" class="avatar-xxs">
                    <div class="flex-grow-1">
                      <router-link to="/crypto/coin-overview" class="stretched-link">
                        <h6 class="fs-sm mb-0">Aave (AAVE)</h6>
                      </router-link>
                      <p class="text-danger fs-xs mb-0">Buy</p>
                    </div>
                    <div class="text-end flex-shrink-0">
                      <h6 class="fs-sm mb-0">$87.64</h6>
                      <p class="text-muted fs-xs mb-0">27 May, 2023</p>
                    </div>
                  </li>
                  <li class="d-flex align-items-center gap-2 position-relative">
                    <img src="@/assets/images/svg/crypto-icons/ltc.svg" alt="" class="avatar-xxs">
                    <div class="flex-grow-1">
                      <router-link to="/crypto/coin-overview" class="stretched-link">
                        <h6 class="fs-sm mb-0">Litecoin (LTC)</h6>
                      </router-link>
                      <p class="text-danger fs-xs mb-0">Buy</p>
                    </div>
                    <div class="text-end flex-shrink-0">
                      <h6 class="fs-sm mb-0">$874.31</h6>
                      <p class="text-muted fs-xs mb-0">17 May, 2023</p>
                    </div>
                  </li>
                </ul>
              </BCardBody>
            </BCard>
          </BCol>
        </BRow>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BRow>
          <BCol md="6">
            <BCard no-body>
              <BCardHeader>
                <BCardTitle tag="h6" class="mb-0">Market Capitalization</BCardTitle>
              </BCardHeader>
              <BCardBody>
                <apexchart id="market_capitalization" class="apex-charts" dir="ltr" height="227"
                  :series="marketCapitalizationChart.series" :options="marketCapitalizationChart.chartOptions" />
                <div class="vstack gap-2 mt-3">
                  <div class="d-flex align-items-center">
                    <p class="fw-medium mb-0 flex-grow-1"><i
                        class="ri-checkbox-blank-circle-fill text-primary align-middle me-2"></i> Giant</p>
                    <div>
                      <span class="text-muted fw-medium fs-sm">17.2%</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <p class="fw-medium mb-0 flex-grow-1"><i
                        class="ri-checkbox-blank-circle-fill text-success align-middle me-2"></i> Large</p>
                    <div>
                      <span class="text-muted fw-medium fs-sm">23.2%</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <p class="fw-medium mb-0 flex-grow-1"><i
                        class="ri-checkbox-blank-circle-fill text-warning align-middle me-2"></i> Mid</p>
                    <div>
                      <span class="text-muted fw-medium fs-sm">28.9%</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <p class="fw-medium mb-0 flex-grow-1"><i
                        class="ri-checkbox-blank-circle-fill text-secondary align-middle me-2"></i> Small</p>
                    <div>
                      <span class="text-muted fw-medium fs-sm">21.6%</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <p class="fw-medium mb-0 flex-grow-1"><i
                        class="ri-checkbox-blank-circle-fill text-danger align-middle me-2"></i> Micro</p>
                    <div>
                      <span class="text-muted fw-medium fs-sm">8.9%</span>
                    </div>
                  </div>
                </div>
              </BCardBody>
            </BCard>
          </BCol>
          <BCol md="6">
            <BCard no-body>
              <BCardHeader>
                <BCardTitle tag="h6" class="mb-0">Allocation Overview</BCardTitle>
              </BCardHeader>
              <BCardBody>
                <apexchart id="allocation_overview" class="apex-charts" dir="ltr" height="227"
                  :series="allocationOverviewChart.series" :options="allocationOverviewChart.chartOptions" />
                <div class="vstack gap-2 mt-3">
                  <div class="d-flex align-items-center">
                    <p class="fw-medium mb-0 flex-grow-1"><i
                        class="ri-checkbox-blank-circle-fill text-secondary align-middle me-2"></i> Cash</p>
                    <div>
                      <span class="text-muted fw-medium fs-sm">18.7%</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <p class="fw-medium mb-0 flex-grow-1"><i
                        class="ri-checkbox-blank-circle-fill text-primary align-middle me-2"></i> Fixed Income</p>
                    <div>
                      <span class="text-muted fw-medium fs-sm">21.0%</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <p class="fw-medium mb-0 flex-grow-1"><i
                        class="ri-checkbox-blank-circle-fill text-danger align-middle me-2"></i> Equities</p>
                    <div>
                      <span class="text-muted fw-medium fs-sm">17.3%</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <p class="fw-medium mb-0 flex-grow-1"><i
                        class="ri-checkbox-blank-circle-fill text-info align-middle me-2"></i> FX</p>
                    <div>
                      <span class="text-muted fw-medium fs-sm">20.3%</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <p class="fw-medium mb-0 flex-grow-1"><i
                        class="ri-checkbox-blank-circle-fill text-warning align-middle me-2"></i> Alternative</p>
                    <div>
                      <span class="text-muted fw-medium fs-sm">22.7%</span>
                    </div>
                  </div>
                </div>
              </BCardBody>
            </BCard>
          </BCol>
        </BRow>
      </BCol>
      <BCol lg="6">
        <BCard no-body id="leadsList">
          <BCardHeader class="align-items-center d-flex">
            <BCardTitle tag="h4" class="mb-0 flex-grow-1">My Currencies</BCardTitle>
            <div class="flex-shrink-0">
              <button class="btn btn-subtle-primary btn-sm">24H</button>
            </div>
            <div class="flex-shrink-0 ms-2">
              <BDropdown variant="link" class="card-header-dropdown"
                toggle-class="btn btn-subtle-secondary btn-sm arrow-none" menu-class="dropdown-menu-end">
                <template #button-content> Get Report<i class="bi bi-chevron-down align-middle ms-1"></i> </template>
                <BDropdownItem>Download Report</BDropdownItem>
                <BDropdownItem>Export</BDropdownItem>
                <BDropdownItem>Import</BDropdownItem>
              </BDropdown>
            </div>
          </BCardHeader>
          <BCardBody>
            <div class="table-responsive table-card">
              <table class="table table-hover table-borderless table-centered align-middle table-nowrap mb-0">
                <thead class="text-muted border-top">
                  <tr>
                    <th class="sort cursor-pointer" data-sort="coin_name">Coin Name</th>
                    <th class="sort cursor-pointer" data-sort="price">Price</th>
                    <th class="sort cursor-pointer" data-sort="24h_change">24h Change</th>
                    <th class="sort cursor-pointer" data-sort="total_coin">Total Coin</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody class="list">
                  <tr v-for="(data, index) of displayedPosts" :key="index">
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="me-2">
                          <img :src="data.img" alt="" class="avatar-xxs">
                        </div>
                        <div>
                          <router-link to="/crypto/coin-overview">
                            <h6 class="fs-md mb-0 coin_name">{{ data.coinName }}</h6>
                          </router-link>
                        </div>
                      </div>
                    </td>
                    <td class="price">{{ data.price }}</td>
                    <td>
                      <h6 class="text-success fs-xs mb-0 24h_change" v-if="data.status = 'success'"> {{ data.change }}
                      </h6>
                      <h6 class="text-danger fs-xs mb-0 24h_change" v-if="data.status = 'danger'"> {{ data.change }} </h6>
                    </td>
                    <td class="total_coin">{{ data.totalCoin }}</td>
                    <td><router-link to="/lease" class="btn btn-sm btn-subtle-primary">Trade</router-link></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="align-items-center mt-n2 row">
              <BCol cols="sm">
                <div class="text-muted text-center text-sm-start">
                  Showing <span class="fw-semibold">{{ displayedPosts.length }}</span> of <span class="fw-semibold">{{
                    myCurrenciesData.length }}</span> Results
                </div>
              </BCol>
              <BCol sm="auto" class="mt-3 mt-sm-0">
                <div class="pagination-wrap pagination-sm hstack gap-2 justify-content-center">
                  <BLink class="page-item pagination-prev disabled" href="javascript:void(0);" :disabled="page <= 1"
                    @click="page--">
                    <i class="bi bi-arrow-left"></i>
                  </BLink>
                  <ul class="pagination listjs-pagination mb-0">
                    <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }"
                      v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                      <BLink class="page" href="javascript:void(0);">{{ pageNumber }}</BLink>
                    </li>
                  </ul>
                  <BLink class="page-item pagination-next" href="javascript:void(0);" :disabled="page >= pages.length"
                    @click="page++">
                    <i class="bi bi-arrow-right"></i>
                  </BLink>
                </div>
              </BCol>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>