<script>
export default {
  data() {
    return {
    };
  },

};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center gy-3">
        <BCol cols="md">
          <PageHeader title="Invoice Overview" pagetitle="Invoice" />
        </BCol>
        <BCol md="auto" class="ms-auto">
            <div class="d-flex flex-wrap gap-2">
                <BLink href="javascript:window.print()" class="btn btn-success"><i class="ri-printer-line align-bottom me-1"></i> Print</BLink>
                <button type="button" class="btn btn-primary"><i class="ri-download-2-line align-bottom me-1"></i> Download</button>
                <RightBar />
            </div>
        </BCol>
      </BRow>
    </div>
    <BRow class="justify-content-center">
      <BCol xxl="9">
          <BCard no-body class="overflow-hidden" id="invoice">
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
              <BCardBody class="p-4 p-lg-5 z-1 position-relative">
                  <div>
                      <img src="@/assets/images/logo-dark.png" class="card-logo" alt="logo dark" height="28">
                      <h6 class="mt-4"><span class="text-muted fw-normal">Legal Registration No:</span> <span id="legal-register-no">32654 9851</span></h6>
                      <h6><span class="text-muted fw-normal">Email:</span> <span id="email">steemx@themesbrand.com</span></h6>
                      <h6><span class="text-muted fw-normal">Website:</span> <router-link to="https://themesbrand.com/" class="link-primary" target="_blank" id="website">www.themesbrand.com</router-link></h6>
                      <h6 class="mb-0"><span class="text-muted fw-normal">Contact No: </span><span id="contact-no"> +(01) 234 6789</span></h6>
                  </div>
                  <div class="mt-5">
                      <BRow class="g-3">
                          <BCol cols="6" class="col-lg">
                              <p class="text-muted mb-2 text-uppercase">Invoice No</p>
                              <h5 class="fs-md mb-0">#TBS<span id="invoice-no">24301901</span></h5>
                          </BCol>
                          
                          <BCol cols="6" class="col-lg">
                              <p class="text-muted mb-2 text-uppercase">Date</p>
                              <h5 class="fs-md mb-0"><span id="invoice-date">10 April, 2023</span></h5>
                          </BCol>
                          <BCol cols="6" class="col-lg">
                              <p class="text-muted mb-2 text-uppercase">Due Date</p>
                              <h5 class="fs-md mb-0"><span id="invoice-due-date">10 April, 2023</span></h5>
                          </BCol>
                          
                          <BCol cols="6" class="col-lg">
                              <p class="text-muted mb-2 text-uppercase">Payment Status</p>
                              <span class="badge bg-success-subtle text-success fs-xxs" id="payment-status">Paid</span>
                          </BCol>
                          
                          <BCol cols="6" class="col-lg">
                              <p class="text-muted mb-2 text-uppercase">Total Amount</p>
                              <h5 class="fs-md mb-0">$<span id="total-amount">2,050.18</span></h5>
                          </BCol>
                          
                      </BRow>
                  </div>
                  <div class="mt-4 pt-2">
                      <BRow class="g-3">
                          <BCol cols="6">
                              <p class="text-muted text-uppercase">Billing Address</p>
                              <h6 class="fs-md" id="billing-name">Jennifer Mayert</h6>
                              <p class="text-muted mb-1" id="billing-address-line-1">6382 Cerromar Cir, Orangevale, California, US.</p>
                              <p class="text-muted mb-1"><span>Phone: +</span><span id="billing-phone-no">(909) 594 2812</span></p>
                              <p class="text-muted mb-0"><span>Tax: </span><span id="billing-tax-no">12-3456789</span> </p>
                          </BCol>
                          
                          <BCol cols="6">
                              <p class="text-muted text-uppercase">Shipping Address</p>
                              <h6 class="fs-md" id="shipping-name">Jennifer Mayert</h6>
                              <p class="text-muted mb-1" id="shipping-address-line-1">505 W Cordova Rd, Santa Fe, New York, US</p>
                              <p class="text-muted mb-1"><span>Phone: +</span><span id="shipping-phone-no">(505) 989 1378</span></p>
                          </BCol>
                          
                      </BRow>
                  </div>
                  <div class="table-responsive mt-4">
                      <table class="table table-borderless text-center table-nowrap align-middle mb-0">
                          <thead>
                              <tr class="table-light">
                                  <th scope="col" style="width: 50px;">#</th>
                                  <th scope="col">Product Details</th>
                                  <th scope="col">Rate</th>
                                  <th scope="col">Quantity</th>
                                  <th scope="col" class="text-end">Amount</th>
                              </tr>
                          </thead>
                          <tbody id="products-list">
                              <tr>
                                  <th scope="row">01</th>
                                  <td class="text-start">
                                      <span class="fw-medium">Branded T-Shirts</span>
                                      <p class="text-muted mb-0">Fashion</p>
                                  </td>
                                  <td>$161.25</td>
                                  <td>03</td>
                                  <td class="text-end">$483.75</td>
                              </tr>
                              <tr>
                                  <th scope="row">02</th>
                                  <td class="text-start">
                                      <span class="fw-medium">Fossil gen 5E smart watch</span>
                                      <p class="text-muted mb-0">32.5mm (1.28 Inch) TFT Color Touch Display</p>
                                  </td>
                                  <td>$69.60</td>
                                  <td>02</td>
                                  <td class="text-end">$139.20</td>
                              </tr>
                              <tr>
                                  <th scope="row">03</th>
                                  <td class="text-start">
                                      <span class="fw-medium">Blive Printed Men Round Neck</span>
                                      <p class="text-muted mb-0">Fashion</p>
                                  </td>
                                  <td>$250.00</td>
                                  <td>06</td>
                                  <td class="text-end">$1,500.00</td>
                              </tr>
                              <tr>
                                  <th scope="row">04</th>
                                  <td class="text-start">
                                      <span class="fw-medium">Flip-Flops and House Slippers</span>
                                      <p class="text-muted mb-0">Footwear</p>
                                  </td>
                                  <td>$150.00</td>
                                  <td>01</td>
                                  <td class="text-end">$150.00</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  <div class="border-top border-top-dashed mt-2" id="products-list-total">
                      <table class="table table-borderless table-nowrap align-middle mb-0 ms-auto" style="width:250px">
                          <tbody>
                              <tr>
                                  <td>Sub Total</td>
                                  <td class="text-end">$2,272.95</td>
                              </tr>
                              <tr>
                                  <td>Estimated Tax <small class="text-muted">(18%)</small></td>
                                  <td class="text-end">$409.13</td>
                              </tr>
                              <tr>
                                  <td>Discount <small class="text-muted">(JUDIA30)</small></td>
                                  <td class="text-end">-$681.88</td>
                              </tr>
                              <tr>
                                  <td>Shipping Charge</td>
                                  <td class="text-end">$65.00</td>
                              </tr>
                              <tr class="border-top border-top-dashed">
                                  <th scope="row">Total Amount</th>
                                  <th class="text-end">$2,050.20</th>
                              </tr>
                          </tbody>
                      </table>
                      
                  </div>
                  <div class="mt-3">
                      <h6 class="text-muted text-uppercase fw-semibold mb-3">Payment Details:</h6>
                      <p class="text-muted mb-1">Payment Method: <span class="fw-medium" id="payment-method">Mastercard</span></p>
                      <p class="text-muted mb-1">Card Holder: <span class="fw-medium" id="card-holder-name">Jennifer Mayert</span></p>
                      <p class="text-muted mb-1">Card Number: <span class="fw-medium" id="card-number">xxx xxxx xxxx 1234</span></p>
                      <p class="text-muted mb-0">Total Amount: <span class="fw-medium">$</span><span id="card-total-amount">2,050.18</span></p>
                  </div>
                  <div class="mt-4 mb-4">
                      <div class="alert alert-danger mb-0">
                          <span class="fw-semibold">NOTES:</span>
                          <span id="note">All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or
                              credit card or direct payment online. If account is not paid within 7
                              days the credits details supplied as confirmation of work undertaken
                              will be charged the agreed quoted fee noted above.
                          </span>
                      </div>
                  </div>
                  <div>
                      <p class="mb-4 pb-2"><b>Congratulations on your recent purchase!</b> It has been our pleasure to serve you, and we hope we see you again soon.</p>

                      <div class="invoice-signature text-center float-end">
                          <img src="@/assets/images/invoice-signature.svg" alt="" id="sign-img" height="30">
                          <h6 class="mb-0 mt-3">Authorized Sign</h6>
                      </div>
                  </div>
              </BCardBody>
          </BCard>
          
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