<script>

import flatPickr from "vue-flatpickr-component";

export default {
  data() {
    return {
        config: {
            wrap: true, // set wrap to true only when using 'input-group'
            altFormat: "M j, Y",
            altInput: true,
          },
    };
  },
  components: {
    
    
    
    flatPickr,
  },
};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center gy-3">
        <BCol cols="md">
          <PageHeader title="Create Invoice" pagetitle="Invoice" />
        </BCol>
        <BCol md="auto" class="ms-auto">
          <RightBar />
        </BCol>
      </BRow>
    </div>
    <BRow class="justify-content-center">
      <BCol xxl="9">
          <form class="needs-validation" novalidate id="invoice_form" autocomplete="off">
              <BCard no-body class="overflow-hidden">
                  <div class="invoice-effect-top position-absolute end-0 pattern">
                      <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 333" width="500" height="333">
                          <title>5177222-ai</title>
                          <defs>
                              <linearGradient id="g1" x1="360.1" y1="223.5" x2="360.1" y2="50.7" gradientUnits="userSpaceOnUse">
                                  <stop offset="0" stop-color="#22a7c6" />
                                  <stop offset=".999" stop-color="#6dd5ed" />
                              </linearGradient>
                              <linearGradient id="g2" x1="431.6" y1="303.6" x2="431.6" y2="176.8" gradientUnits="userSpaceOnUse">
                                  <stop offset="0" stop-color="#22a7c6" />
                                  <stop offset=".999" stop-color="#6dd5ed" />
                              </linearGradient>
                              <linearGradient id="g3" x1="166" y1="65.3" x2="166" y2="-60" gradientUnits="userSpaceOnUse">
                                  <stop offset="0" stop-color="#22a7c6" />
                                  <stop offset=".999" stop-color="#6dd5ed" />
                              </linearGradient>
                              <linearGradient id="g4" x1="355.6" y1="136.1" x2="355.6" y2="-60" gradientUnits="userSpaceOnUse">
                                  <stop offset="0" stop-color="#22a7c6" />
                                  <stop offset=".999" stop-color="#6dd5ed" />
                              </linearGradient>
                              <linearGradient id="g5" x1="240.7" y1="44.9" x2="240.7" y2="-60" gradientUnits="userSpaceOnUse">
                                  <stop offset="0" stop-color="#2b32b2" />
                                  <stop offset=".999" stop-color="#1488cc" />
                              </linearGradient>
                              <linearGradient id="g6" x1="445.8" y1="244.8" x2="445.8" y2="124.9" gradientUnits="userSpaceOnUse">
                                  <stop offset="0" stop-color="#2b32b2" />
                                  <stop offset=".999" stop-color="#1488cc" />
                              </linearGradient>
                              <linearGradient id="g7" x1="495.4" y1="304.9" x2="495.4" y2="240.5" gradientUnits="userSpaceOnUse">
                                  <stop offset="0" stop-color="#2b32b2" />
                                  <stop offset=".999" stop-color="#1488cc" />
                              </linearGradient>
                              <linearGradient id="g8" x1="339.4" y1="137.9" x2="339.4" y2="24.7" gradientUnits="userSpaceOnUse">
                                  <stop offset="0" stop-color="#2b32b2" />
                                  <stop offset=".999" stop-color="#1488cc" />
                              </linearGradient>
                              <linearGradient id="g9" x1="408.2" y1="124.5" x2="408.2" y2="-15.3" gradientUnits="userSpaceOnUse">
                                  <stop offset="0" stop-color="#2b32b2" />
                                  <stop offset=".999" stop-color="#1488cc" />
                              </linearGradient>
                              <linearGradient id="g10" x1="415.8" y1="66.3" x2="415.8" y2="-60" gradientUnits="userSpaceOnUse">
                                  <stop offset="0" stop-color="#22a7c6" />
                                  <stop offset=".999" stop-color="#6dd5ed" />
                              </linearGradient>
                              <linearGradient id="g11" x1="432.6" y1="-4.5" x2="432.6" y2="-60" gradientUnits="userSpaceOnUse">
                                  <stop offset="0" stop-color="#24a8c7" />
                                  <stop offset=".997" stop-color="#61cee7" />
                                  <stop offset="1" stop-color="#61cee7" />
                              </linearGradient>
                              <linearGradient id="g12" x1="119.1" y1="20.1" x2="119.1" y2="-60" gradientUnits="userSpaceOnUse">
                                  <stop offset="0" stop-color="#2b32b2" />
                                  <stop offset=".999" stop-color="#1488cc" />
                              </linearGradient>
                          </defs>
                          <g id="BACKGROUND">
                              <g id="&lt;Group&gt;">
                                  <g id="&lt;Group&gt;">
                                  </g>
                                  <g id="&lt;Group&gt;" style="opacity: .5">
                                      <g id="&lt;Group&gt;">
                                          <path id="&lt;Path&gt;" class="s0" d="m253.1-23.3l44.9 44.8-44.9 44.8-44.8-44.8z" />
                                      </g>
                                      <g id="&lt;Group&gt;">
                                          <path id="&lt;Path&gt;" class="s0" d="m477.2-17.4l50 50-50 50-50.1-50z" />
                                      </g>
                                      <path id="&lt;Path&gt;" class="s0" d="m566 237.2v-84.8l-13.4-13.4-55.9 55.8 55.9 55.9z" />
                                      <path id="&lt;Path&gt;" class="s0" d="m566-32.4v-20.4l-7.2-7.2h-46.4l-17.4 17.4 40.6 40.6z" />
                                      <path id="&lt;Path&gt;" class="s0" d="m420.8-24.4l-35.6-35.6h-76.1l-35.6 35.6 73.6 73.5z" />
                                      <g id="&lt;Group&gt;">
                                          <path id="&lt;Path&gt;" class="s0" d="m430.9 81.1l67.5 67.5-67.5 67.5-67.6-67.5z" />
                                      </g>
                                      <g id="&lt;Group&gt;">
                                          <path id="&lt;Path&gt;" class="s0" d="m338.3 45.2l54.6 54.6-54.6 54.5-54.7-54.5z" />
                                      </g>
                                      <g id="&lt;Group&gt;">
                                          <path id="&lt;Path&gt;" class="s0" d="m472.4 225.5l40.7 40.6-40.7 40.6-40.6-40.6z" />
                                      </g>
                                      <g id="&lt;Group&gt;">
                                          <path id="&lt;Path&gt;" class="s0" d="m401.4 210.4l25.2 25.2-25.2 25.3-25.3-25.3z" />
                                      </g>
                                      <g id="&lt;Group&gt;">
                                          <path id="&lt;Path&gt;" class="s0" d="m183.2 38l16.2 16.2-16.2 16.2-16.2-16.2z" />
                                      </g>
                                      <path id="&lt;Path&gt;" class="s0" d="m566 309v-6.7l-24.8-24.7-28.1 28.1 28.1 28.1z" />
                                      <path id="&lt;Path&gt;" class="s0" d="m117.1-60l-29 29 73.7 73.6 73.6-73.6-29-29z" />
                                  </g>
                              </g>
                          </g>
                          <g id="OBJECTS">
                              <g id="&lt;Group&gt;">
                                  <g id="&lt;Group&gt;">
                                      <path id="&lt;Path&gt;" class="s1" d="m566 215.8v-15.2l-7.7 7.7-71.2-71.2 71.2-71.2 7.7 7.6v-15.2l-7.7-7.6-86.4 86.4 86.4 86.4z" />
                                      <g id="&lt;Group&gt;">
                                          <path id="&lt;Compound Path&gt;" fill-rule="evenodd" class="s2" d="m495.1 176.8l63.5 63.4-63.5 63.4-63.5-63.4zm48.3 63.4l-48.3-48.2-48.3 48.2 48.3 48.3z" />
                                      </g>
                                      <path id="&lt;Path&gt;" class="s3" d="m292.3-5.3l-54.7-54.7h-15.2l54.7 54.7-55.5 55.4-55.5-55.4 54.7-54.7h-15.2l-54.7 54.7 70.7 70.6z" />
                                      <path id="&lt;Path&gt;" class="s4" d="m566 22.1v-22.9l-114.1 114-149.4-149.2 24-24h-22.8l-24.1 24 172.3 172.1z" />
                                      <path id="&lt;Path&gt;" class="s5" d="m350.1-25l-35-35h-11.4l35 35-58.6 58.5-58.6-58.5 35-35h-11.4l-35 35 70 69.9z" />
                                      <path id="&lt;Compound Path&gt;" fill-rule="evenodd" class="s6" d="m513.1 244.8l-60-60 60-59.9 52.9 52.8v14.2zm-50.9-59.9l50.9 50.8 50.9-50.8-50.9-50.8z" />
                                      <g id="&lt;Group&gt;">
                                          <path id="&lt;Compound Path&gt;" fill-rule="evenodd" class="s7" d="m527.7 240.5l32.2 32.2-32.2 32.2-32.3-32.2zm25.4 32.2l-25.4-25.3-25.3 25.3 25.3 25.3z" />
                                      </g>
                                      <g id="&lt;Group&gt;">
                                          <path id="&lt;Compound Path&gt;" fill-rule="evenodd" class="s8" d="m396.1 24.7l56.6 56.6-56.6 56.6-56.7-56.6zm45.1 56.6l-45.1-45-45.1 45 45.1 45.1z" />
                                      </g>
                                      <path id="&lt;Path&gt;" class="s9" d="m566 109.6v-11.5l-15 15-58.6-58.5 58.6-58.5 15 15v-11.4l-15-15-70 69.9 70 69.9z" />
                                      <g id="&lt;Group&gt;">
                                      </g>
                                      <path id="&lt;Path&gt;" class="s10" d="m562.7-44.4l-15.6-15.6h-22.9l15.7 15.6-88 87.9-88-87.9 15.6-15.6h-22.8l-15.6 15.6 110.8 110.7z" />
                                      <path id="&lt;Path&gt;" class="s11" d="m491.8-44.4l-15.6-15.6h-48.6l-15.7 15.6 40 39.9z" />
                                      <path id="&lt;Compound Path&gt;" fill-rule="evenodd" class="s12" d="m162.2-60l37.2 37.2-42.9 42.9-42.9-42.9 37.2-37.2zm26.9 37.2l-32.7-32.7-32.6 32.7 32.6 32.6z" />
                                  </g>
                              </g>
                          </g>
                      </svg>
                  </div>
                  <BCardBody class="p-5 z-1 position-relative">
                      <BRow>
                          <BCol lg="4">
                              <div class="mx-auto mb-3">
                                  <input id="logo-img-file-input" type="file" class="logo-img-file-input d-none">
                                  <label for="logo-img-file-input" class="d-block" tabindex="0">
                                      <span class="overflow-hidden border border-dashed d-flex align-items-center justify-content-center rounded" style="height: 40px; width: 150px;">
                                          <img src="@/assets/images/logo-dark.png" class="card-logo card-logo-image img-fluid" alt="logo dark">
                                      </span>
                                  </label>
                              </div>
                              <div class="mb-2">
                                  <input type="text" class="form-control" id="registrationNumber" maxlength="12" placeholder="Legal Registration No" required>
                                  <div class="invalid-feedback">
                                      Please enter a registration no, Ex., 012345678912
                                  </div>
                              </div>
                              <div class="mb-2">
                                  <input type="email" class="form-control" id="companyEmail" placeholder="Email Address" required>
                                  <div class="invalid-feedback">
                                      Please enter a valid email, Ex., example@gamil.com
                                  </div>
                              </div>
                              <div class="mb-2">
                                  <input type="text" class="form-control" id="companyWebsite" placeholder="Website" required>
                                  <div class="invalid-feedback">
                                      Please enter a website, Ex., www.example.com
                                  </div>
                              </div>
                              <div class="mb-2">
                                  <input type="text" class="form-control" data-plugin="cleave-phone" id="compnayContactno" placeholder="Contact No" required>
                                  <div class="invalid-feedback">
                                      Please enter a contact number
                                  </div>
                              </div>
                              <div>
                                <flat-pickr v-model="date" id="invoicedate" placeholder="Create Date" :config="config" class="form-control"></flat-pickr>
                              </div>
                          </BCol>
                      </BRow>
                      
                      <div class="mt-4">
                          <BRow class="g-3">
                              <BCol lg="3" sm="6">
                                  <label class="form-label" for="invoicenoInput">Invoice No</label>
                                  <input type="text" class="form-control" id="invoicenoInput" placeholder="Invoice No" value="#TBS24301401" readonly="readonly">
                              </BCol>
                              
                              <BCol lg="3" sm="6">
                                  <div>
                                      <label class="form-label" for="due-date-field">Date</label>
                                    <flat-pickr v-model="date" id="due-date-field" placeholder="Select Select due date" :config="config" class="form-control"></flat-pickr>
                                  </div>
                              </BCol>
                              
                              <BCol lg="3" sm="6">
                                  <label class="form-label" for="choices-payment-status">Payment Status</label>
                                  <select class="form-control form-select" data-choices data-choices-search-false id="choices-payment-status" required>
                                      <option value="">Select Status</option>
                                      <option value="Paid">Paid</option>
                                      <option value="Pending">Pending</option>
                                      <option value="Unpaid">Unpaid</option>
                                      <option value="Refund">Refund</option>
                                  </select>
                              </BCol>
                              
                              <BCol lg="3" sm="6">
                                  <div>
                                      <label class="form-label" for="totalamountInput">Total Amount</label>
                                      <input type="text" class="form-control" id="totalamountInput" placeholder="$0.00" readonly>
                                  </div>
                              </BCol>
                              
                          </BRow>
                          
                      </div>
                      <div class="mt-4 pt-2">
                          <BRow>
                              <BCol lg="4" sm="6">
                                  <div>
                                      <label for="billingName" class="form-label text-muted text-uppercase fw-semibold">Billing Address</label>
                                  </div>
                                  <div class="mb-2">
                                      <input type="text" class="form-control" id="billingName" placeholder="Full Name" required>
                                      <div class="invalid-feedback">
                                          Please enter a full name
                                      </div>
                                  </div>
                                  <div class="mb-2">
                                      <textarea class="form-control" id="billingAddress" rows="3" placeholder="Address" required></textarea>
                                      <div class="invalid-feedback">
                                          Please enter a address
                                      </div>
                                  </div>
                                  <div class="mb-2">
                                      <input type="text" class="form-control" data-plugin="cleave-phone" id="billingPhoneno" placeholder="(123)456-7890" required>
                                      <div class="invalid-feedback">
                                          Please enter a phone number
                                      </div>
                                  </div>
                                  <div class="mb-3">
                                      <input type="text" class="form-control" id="billingTaxno" placeholder="Tax Number" required>
                                      <div class="invalid-feedback">
                                          Please enter a tax number
                                      </div>
                                  </div>
                                  <div class="form-check">
                                      <input type="checkbox" class="form-check-input" id="same" name="same" >
                                      <label class="form-check-label" for="same">
                                          Will your Billing and Shipping address same?
                                      </label>
                                  </div>
                              </BCol>
                              
                              <BCol sm="6" class="ms-auto">
                                  <BRow>
                                      <BCol lg="8">
                                          <div>
                                              <label for="shippingName" class="form-label text-muted text-uppercase fw-semibold">Shipping Address</label>
                                          </div>
                                          <div class="mb-2">
                                              <input type="text" class="form-control" id="shippingName" placeholder="Full Name" required>
                                              <div class="invalid-feedback">
                                                  Please enter a full name
                                              </div>
                                          </div>
                                          <div class="mb-2">
                                              <textarea class="form-control" id="shippingAddress" rows="3" placeholder="Address" required></textarea>
                                              <div class="invalid-feedback">
                                                  Please enter a address
                                              </div>
                                          </div>
                                          <div class="mb-2">
                                              <input type="text" class="form-control" data-plugin="cleave-phone" id="shippingPhoneno" placeholder="(123)456-7890" required>
                                              <div class="invalid-feedback">
                                                  Please enter a phone number
                                              </div>
                                          </div>
                                          <div>
                                              <input type="text" class="form-control" id="shippingTaxno" placeholder="Tax Number" required>
                                              <div class="invalid-feedback">
                                                  Please enter a tax number
                                              </div>
                                          </div>
                                      </BCol>
                                  </BRow>
                              </BCol>
                              
                          </BRow>
                      </div>
                      
                      <div class="table-responsive mt-4">
                          <table class="invoice-table table table-borderless table-nowrap mb-0">
                              <thead class="align-middle">
                                  <tr class="table-light">
                                      <th scope="col" style="width: 50px;">#</th>
                                      <th scope="col">
                                          Product Details
                                      </th>
                                      <th scope="col" style="width: 120px;">
                                          <div class="d-flex currency-select input-light align-items-center">
                                              Rate
                                              <select class="form-select border-0 ps-1 pe-1 bg-light" data-choices data-choices-search-false id="choices-payment-currency" >
                                                  <option value="$">($)</option>
                                                  <option value="£">(£)</option>
                                                  <option value="₹">(₹)</option>
                                                  <option value="€">(€)</option>
                                              </select>
                                          </div>
                                      </th>
                                      <th scope="col" style="width: 120px;">Quantity</th>
                                      <th scope="col" class="text-end" style="width: 150px;">Amount</th>
                                      <th scope="col" class="text-end" style="width: 105px;"></th>
                                  </tr>
                              </thead>
                              <tbody id="newlink">
                                  <tr id="1" class="product-elem">
                                      <th scope="row" class="product-id">1</th>
                                      <td class="text-start">
                                          <div class="mb-2">
                                              <input type="text" class="form-control" id="productName-1" placeholder="Product Name" required>
                                              <div class="invalid-feedback">
                                                  Please enter a product name
                                              </div>
                                          </div>
                                          <textarea class="form-control" id="productDetails-1" rows="2" placeholder="Product Details"></textarea>
                                      </td>
                                      <td>
                                          <input type="number" class="form-control product-price" id="productRate-1" step="0.01" placeholder="0.00" required>
                                          <div class="invalid-feedback">
                                              Please enter a rate
                                          </div>
                                      </td>
                                      <td>
                                          <div class="input-step">
                                              <button type="button" class='minus-btn'>–</button>
                                              <input type="number" class="invoice-product-quantity" id="product-qty-1" value="0" readonly>
                                              <button type="button" class='plus-btn'>+</button>
                                          </div>
                                      </td>
                                      <td class="text-end">
                                          <div>
                                              <input type="text" class="form-control invoice-product-line-price" id="productPrice-1" placeholder="$0.00" readonly>
                                          </div>
                                      </td>
                                      <td class="product-removal">
                                          <BLink href="javascript:void(0)" class="btn btn-danger">Delete</BLink>
                                      </td>
                                  </tr>
                              </tbody>
                              <tbody>
                                  <tr id="newForm" style="display: none;">
                                      <td class="d-none" colspan="5">
                                          <p>Add New Form</p>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td colspan="5">
                                          <BLink href="javascript:void(0)" id="add-item" class="btn btn-subtle-secondary fw-medium"><i class="ri-add-fill me-1 align-bottom"></i> Add Item</BLink>
                                      </td>
                                  </tr>
                                  <tr class="border-top border-top-dashed mt-2">
                                      <td colspan="3"></td>
                                      <td colspan="2" class="p-0">
                                          <table class="table table-borderless table-sm table-nowrap align-middle mb-0">
                                              <tbody>
                                                  <tr>
                                                      <th scope="row">Sub Total</th>
                                                      <td style="width:150px;">
                                                          <input type="text" class="form-control" id="cart-subtotal" placeholder="$0.00" readonly>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <th scope="row">Estimated Tax (18%)</th>
                                                      <td>
                                                          <input type="text" class="form-control" id="cart-tax" placeholder="$0.00" readonly>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <th scope="row">Discount <small class="text-muted">(JUDIA30)</small></th>
                                                      <td>
                                                          <input type="text" class="form-control" id="cart-discount" placeholder="$0.00" readonly>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <th scope="row">Shipping Charge</th>
                                                      <td>
                                                          <input type="text" class="form-control" id="cart-shipping" placeholder="$0.00" readonly>
                                                      </td>
                                                  </tr>
                                                  <tr class="border-top border-top-dashed">
                                                      <th scope="row">Total Amount</th>
                                                      <td>
                                                          <input type="text" class="form-control" id="cart-total" placeholder="$0.00" readonly>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                          
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          
                      </div>
                      <BRow class="mt-3">
                          <BCol lg="4">
                              <div class="mb-2">
                                  <label for="choices-payment-type" class="form-label text-muted text-uppercase fw-semibold">Payment Details</label>
                                  <select class="form-control form-select" data-choices data-choices-search-false data-choices-removeItem id="choices-payment-type">
                                      <option value="">Payment Method</option>
                                      <option value="Mastercard">Mastercard</option>
                                      <option value="Credit Card">Credit Card</option>
                                      <option value="Visa">Visa</option>
                                      <option value="Paypal">Paypal</option>
                                  </select>
                              </div>
                              <div class="mb-2">
                                  <input class="form-control" type="text" id="cardholderName" placeholder="Card Holder Name">
                              </div>
                              <div class="mb-2">
                                  <input class="form-control" type="text" id="cardNumber" placeholder="xxxx xxxx xxxx xxxx">
                              </div>
                              <div>
                                  <input class="form-control" type="text" id="amountTotalPay" placeholder="$0.00" readonly>
                              </div>
                          </BCol>
                          
                      </BRow>
                      
                      <div class="mt-4 mb-4">
                          <label for="exampleFormControlTextarea1" class="form-label text-muted text-uppercase fw-semibold">NOTES</label>
                          <textarea class="form-control alert alert-danger" id="exampleFormControlTextarea1" placeholder="Notes" rows="2" required>All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.</textarea>
                      </div>
                      <div>
                          <div class="pt-2">
                              <input type="text" class="form-control" id="successMsg" placeholder="Enter Postal Code" value="Congratulations on your recent purchase! It has been our pleasure to serve you, and we hope we see you again soon." required>
                          </div>
                          <div class="invoice-signature text-center float-end">
                              <div class="mb-3 mt-4">
                                  <input id="sign-img-file-input" type="file" class="sign-img-file-input d-none">
                                  <label for="sign-img-file-input" class="d-block" tabindex="0">
                                      <span class="overflow-hidden mx-auto border border-dashed d-flex align-items-center justify-content-center rounded" style="height: 40px; width: 150px;">
                                          <img src="@/assets/images/invoice-signature.svg" class="card-logo card-sign-image img-fluid" alt="logo light">
                                      </span>
                                  </label>
                              </div>
                              <h6 class="mb-0 mt-3">Authorized Sign</h6>
                          </div>
                      </div>
                  </BCardBody>
              </BCard>
              <div class="hstack gap-2 flex-wrap justify-content-end d-print-none my-4">
                  <button type="submit" class="btn btn-success"><i class="ri-printer-line align-bottom me-1"></i> Save</button>
                  <BLink href="javascript:void(0);" class="btn btn-primary"><i class="ri-download-2-line align-bottom me-1"></i> Download Invoice</BLink>
                  <BLink href="javascript:void(0);" class="btn btn-danger"><i class="ri-send-plane-fill align-bottom me-1"></i> Send Invoice</BLink>
              </div>
          </form>
      </BCol>
      
  </BRow>
</Layout>
</template>

<style scoped>
.pattern {
    .s0 {
        fill: #ceecf4
    }

    .s1 {
        fill: url(#g1)
    }

    .s2 {
        fill: url(#g2)
    }

    .s3 {
        fill: url(#g3)
    }

    .s4 {
        fill: url(#g4)
    }

    .s5 {
        fill: url(#g5)
    }

    .s6 {
        fill: url(#g6)
    }

    .s7 {
        fill: url(#g7)
    }

    .s8 {
        fill: url(#g8)
    }

    .s9 {
        fill: url(#g9)
    }

    .s10 {
        fill: url(#g10)
    }

    .s11 {
        opacity: .1;
        fill: url(#g11)
    }

    .s12 {
        fill: url(#g12)
    }
}
</style>