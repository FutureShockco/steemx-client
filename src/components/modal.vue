<script>
export default {
  props: {
    show: Boolean,
    value: String 
},
  computed: {
    qrCodeContent() {
      return this.value; // Use the prop value for generating the QR code
    }
  }
}
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          
        </div>
        <button
              class="modal-default-button"
              @click="$emit('close')" >x</button>
        <div class="modal-body">
            <qrcode-vue :value="get_deposit_address" size="350" level="H"/>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            
            
          </slot>
        </div>
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
</style>