<script>
import ws from "@/helpers/kbyte";
//import QrcodeVue from 'qrcode.vue';

export default {
  props: {
    show: Boolean,
    value: String,
    coin: String, 
  },
  // components: {
  //   QrcodeVue,
  // },
  data() {
    return {
      canDeposit: false,
      addresses: [],
      get_deposit_address: '', 
      selected: ''
    };
  },
  mounted() {
    ws.requestAsync("get_deposit_address", {
      id: localStorage.getItem("userId"),
      currency: this.$route.params.coin,
    })
    .then((result) => {
      if (result.data.length < 1) {
        this.canDeposit = false;
      } else {
        this.canDeposit = true;
        this.addresses = result.data;
        this.get_deposit_address = result.data[0].address;
      }
    })
    .catch((e) => {
      console.log(e);
    });
  },
  computed: {
    qrCodeContent() {
      return this.get_deposit_address;
    },
  }, 
};

</script>
<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <PageHeader :title="'Deposit ' + coin" />
          <button class="modal-default-button" @click="$emit('close')">x</button>
        </div>

        <div class="modal-body">
          <!-- Select your coin -->
          <h1>Coin</h1>
          <div class="select-coin">
            <select v-model="selected">
              <option value="">{{coin}}</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          
          <p>Deposit time depend on our partner exchange.</p>
          <div class="qrcode-container">
          <qrcode-vue :value="get_deposit_address" size="200" level="H" />
          
        </div>
        <div>
        <PageHeader class="address-text-container" :title="coin +' Address'" />
        <div class="get-deposit-address-container">
        <p  class="deposit-address">{{ get_deposit_address }}</p>
      </div>
      </div>
        </div>
              <div class="footer-modal">
          <p>©2023 FutureShock - All rights reserved.</p>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: auto;
  margin: auto;
  padding: 5px 5px;
  background-color: #fff;
  color: black;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-default-button {
  float: center;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.modal-body{
    background-color: #ffffff;
    padding: 20px;
    margin: 10px;
    width: 400px;
    height: 500px;
    box-shadow: rgb(230, 232, 234) 0px -1px 0px inset;  
    
}
.modal-header{
  box-shadow: rgb(230, 232, 234) 0px -1px 0px inset;
}
.footer-modal{
  text-align: center;
}
.select-coin{
  box-shadow: rgb(230, 232, 234) 0px -1px 0px inset;
}

.select-coin select{
  margin-bottom: 10px;
}

.qrcode-container {
  display: flex;
  justify-content: center;
  align-items: center; 
  padding-top: 50px;
}
.address-text-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}
.get-deposit-address-container {
  margin-top: 10px;
  text-align: center;
  font-size: 15px;
  color: #0d0c0c;
}
</style>