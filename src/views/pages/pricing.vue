<script>
import Layout from "@/layouts";
import PageHeader from "@/components/page-header.vue";
import RightBar from "@/components/right-bar.vue";

export default {
  data() {
    return {
    };
  },
  components: {
    Layout,
    PageHeader,
    RightBar,
  },
};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center">
        <BCol md="5">
          <PageHeader title="Pricing" pagetitle="Pages" />
        </BCol>
        <BCol md="auto" class="ms-auto">
          <RightBar />
        </BCol>
      </BRow>
    </div>

    <BRow>
        <BCol xxl="3" md="6">
            <BCard no-body class="overflow-hidden">
                <div class="position-absolute top-0 end-0">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="350" height="200" preserveAspectRatio="none" viewBox="0 0 350 200">
                        <g mask="url(&quot;#SvgjsMask1044&quot;)" fill="none">
                            <path d="M385.59 13.35C356.64 14.32 333.88 59.69 279.23 59.35 224.58 59.01 208.1-30.2 172.87-37" style="stroke: rgba(var(--tb-primary-rgb), 0.1);" stroke-width="2"></path>
                            <path d="M397.1 120.72C352.81 118.98 323.8 49.73 235.97 46.72 148.15 43.71 118.4-18.41 74.85-19.7" style="stroke: rgba(var(--tb-primary-rgb), 0.1);" stroke-width="2"></path>
                            <path d="M353.25 33.52C326.55 35.03 307.47 83.9 258.67 83.52 209.87 83.14 197.14-6.35 164.09-14.66" style="stroke: rgba(var(--tb-primary-rgb), 0.1);" stroke-width="2"></path>
                            <path d="M385.3 171.91C344.67 169.99 308.53 110.04 239.41 99.91 170.28 89.78 195.34 10.2 166.46-1.88" style="stroke: rgba(var(--tb-primary-rgb), 0.1);" stroke-width="2"></path>
                            <path d="M360.8 147.25C313.76 146.8 258.96 103.74 179.4 97.25 99.84 90.76 123.43-6.99 88.7-19.8" style="stroke: rgba(var(--tb-primary-rgb), 0.1);" stroke-width="2"></path>
                        </g>
                        <defs>
                            <mask id="SvgjsMask1044">
                                <rect width="350" height="200" fill="#ffffff"></rect>
                            </mask>
                        </defs>
                    </svg>
                </div>
                <BCardBody class="position-relative">
                    <h6 class="fs-lg">Basic Plan</h6>
                    <p class="text-muted mb-4 pb-1">Perfect plan for Starters</p>

                    <h3 class="mb-3">$19.99</h3>
                    <button class="btn btn-primary w-100">Change Plan</button>
                </BCardBody>
            </BCard>
        </BCol>
        <BCol xxl="3" md="6">
            <BCard no-body class="overflow-hidden card-danger">
                <div class="position-absolute top-0 end-0">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="350" height="200" preserveAspectRatio="none" viewBox="0 0 350 200">
                        <g mask="url(&quot;#SvgjsMask1045&quot;)" fill="none">
                            <path d="M385.59 13.35C356.64 14.32 333.88 59.69 279.23 59.35 224.58 59.01 208.1-30.2 172.87-37" style="stroke: rgba(var(--tb-white-rgb), 0.1);" stroke-width="2"></path>
                            <path d="M397.1 120.72C352.81 118.98 323.8 49.73 235.97 46.72 148.15 43.71 118.4-18.41 74.85-19.7" style="stroke: rgba(var(--tb-white-rgb), 0.1);" stroke-width="2"></path>
                            <path d="M353.25 33.52C326.55 35.03 307.47 83.9 258.67 83.52 209.87 83.14 197.14-6.35 164.09-14.66" style="stroke: rgba(var(--tb-white-rgb), 0.1);" stroke-width="2"></path>
                            <path d="M385.3 171.91C344.67 169.99 308.53 110.04 239.41 99.91 170.28 89.78 195.34 10.2 166.46-1.88" style="stroke: rgba(var(--tb-white-rgb), 0.1);" stroke-width="2"></path>
                            <path d="M360.8 147.25C313.76 146.8 258.96 103.74 179.4 97.25 99.84 90.76 123.43-6.99 88.7-19.8" style="stroke: rgba(var(--tb-white-rgb), 0.1);" stroke-width="2"></path>
                        </g>
                        <defs>
                            <mask id="SvgjsMask1045">
                                <rect width="350" height="200" fill="#ffffff"></rect>
                            </mask>
                        </defs>
                    </svg>
                </div>
                <BCardBody class="position-relative">
                    <h6 class="fs-lg text-reset">Professional Plan</h6>
                    <p class="text-white text-opacity-75 mb-4 pb-1">For users who want to do more.</p>
        
                    <h3 class="mb-3 text-reset">$29.99</h3>
                    <button class="btn btn-light w-100" disabled>Your Current Plan</button>
                </BCardBody>
            </BCard>
        </BCol>
        <BCol xxl="3" md="6">
            <BCard no-body class="overflow-hidden">
                <div class="position-absolute top-0 end-0">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="350" height="200" preserveAspectRatio="none" viewBox="0 0 350 200">
                        <g mask="url(&quot;#SvgjsMask1046&quot;)" fill="none">
                            <path d="M385.59 13.35C356.64 14.32 333.88 59.69 279.23 59.35 224.58 59.01 208.1-30.2 172.87-37" style="stroke: rgba(var(--tb-primary-rgb), 0.1);" stroke-width="2"></path>
                            <path d="M397.1 120.72C352.81 118.98 323.8 49.73 235.97 46.72 148.15 43.71 118.4-18.41 74.85-19.7" style="stroke: rgba(var(--tb-primary-rgb), 0.1);" stroke-width="2"></path>
                            <path d="M353.25 33.52C326.55 35.03 307.47 83.9 258.67 83.52 209.87 83.14 197.14-6.35 164.09-14.66" style="stroke: rgba(var(--tb-primary-rgb), 0.1);" stroke-width="2"></path>
                            <path d="M385.3 171.91C344.67 169.99 308.53 110.04 239.41 99.91 170.28 89.78 195.34 10.2 166.46-1.88" style="stroke: rgba(var(--tb-primary-rgb), 0.1);" stroke-width="2"></path>
                            <path d="M360.8 147.25C313.76 146.8 258.96 103.74 179.4 97.25 99.84 90.76 123.43-6.99 88.7-19.8" style="stroke: rgba(var(--tb-primary-rgb), 0.1);" stroke-width="2"></path>
                        </g>
                        <defs>
                            <mask id="SvgjsMask1046">
                                <rect width="350" height="200" fill="#ffffff"></rect>
                            </mask>
                        </defs>
                    </svg>
                </div>
                <BCardBody class="position-relative">
                    <h6 class="fs-lg">Enterprise Plan</h6>
                    <p class="text-muted mb-4 pb-1">Your entire team in one place.</p>
        
                    <h3 class="mb-3">$49.99</h3>
                    <button class="btn btn-primary w-100">Change Plan</button>
                </BCardBody>
            </BCard>
        </BCol>
        <BCol xxl="3" md="6">
            <BCard no-body class="overflow-hidden">
                <div class="position-absolute top-0 end-0">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="350" height="200" preserveAspectRatio="none" viewBox="0 0 350 200">
                        <g mask="url(&quot;#SvgjsMask1047&quot;)" fill="none">
                            <path d="M385.59 13.35C356.64 14.32 333.88 59.69 279.23 59.35 224.58 59.01 208.1-30.2 172.87-37" style="stroke: rgba(var(--tb-primary-rgb), 0.1);" stroke-width="2"></path>
                            <path d="M397.1 120.72C352.81 118.98 323.8 49.73 235.97 46.72 148.15 43.71 118.4-18.41 74.85-19.7" style="stroke: rgba(var(--tb-primary-rgb), 0.1);" stroke-width="2"></path>
                            <path d="M353.25 33.52C326.55 35.03 307.47 83.9 258.67 83.52 209.87 83.14 197.14-6.35 164.09-14.66" style="stroke: rgba(var(--tb-primary-rgb), 0.1);" stroke-width="2"></path>
                            <path d="M385.3 171.91C344.67 169.99 308.53 110.04 239.41 99.91 170.28 89.78 195.34 10.2 166.46-1.88" style="stroke: rgba(var(--tb-primary-rgb), 0.1);" stroke-width="2"></path>
                            <path d="M360.8 147.25C313.76 146.8 258.96 103.74 179.4 97.25 99.84 90.76 123.43-6.99 88.7-19.8" style="stroke: rgba(var(--tb-primary-rgb), 0.1);" stroke-width="2"></path>
                        </g>
                        <defs>
                            <mask id="SvgjsMask1047">
                                <rect width="350" height="200" fill="#ffffff"></rect>
                            </mask>
                        </defs>
                    </svg>
                </div>
                <BCardBody class="position-relative">
                    <h6 class="fs-lg">Unlimited Plan</h6>
                    <p class="text-muted mb-4 pb-1">Run your company on your teams.</p>
        
                    <h3 class="mb-3">$99.99</h3>
                    <button class="btn btn-primary w-100">Change Plan</button>
                </BCardBody>
            </BCard>
        </BCol>
    </BRow>

    <BRow class="justify-content-center mt-4">
        <BCol lg="5">
            <div class="text-center mb-5">
                <h4 class="fw-semibold fs-4xl">Plans & Pricing</h4>
                <p class="text-muted mb-4 fs-base">Simple pricing. No hidden fees. Advanced features for you business.</p>
            </div>
        </BCol>
        
    </BRow>
    

    <BRow class="justify-content-center">
        <BCol xxl="3" lg="6">
            <BCard no-body class="p-2">
                <BCardBody class="p-4">
                    <div class="flex-grow-1 mb-4 pb-2">
                        <h5 class="mb-2">Starter Plan</h5>
                        <p class="text-muted mb-0">Perfect plan for Starters</p>
                    </div>
                    <div class="mb-4">
                        <h3 class="mb-0 me-2">$19.99 <small class="fs-xs text-muted fw-normal">/Monthly</small></h3>
                    </div>
                    <div class="mt-4">
                        <button class="btn btn-primary w-100">Change Plan</button>
                    </div>
                    <div class="mt-4">
                        <ul class="list-unstyled vstack gap-3 mb-0">
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i> 
                                    <p class="mb-0"><b>Unlimited</b> Projects</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Share with <b>5</b> team members</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i> 
                                    <p class="mb-0">Sync across devices</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Scalable Bandwidth</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0"><b>5</b> FTP Login</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </BCardBody>
            </BCard>
        </BCol>
        
        <BCol xxl="3" lg="6">
            <BCard no-body class="ribbon-box right">
                <div class="ribbon ribbon-danger vertical-shape">Popular</div>
                <BCardBody class="p-4">
                    <div class="flex-grow-1 mb-4 pb-2">
                        <h5 class="mb-2">Professional Plan</h5>
                        <p class="text-muted mb-0">For users who want to do more.</p>
                    </div>
                    <div class="mb-4">
                        <h3 class="mb-0 me-2">$49.99 <small class="fs-xs text-muted fw-normal">/Monthly</small></h3>
                    </div>
                    <div class="mt-4">
                        <button class="btn btn-secondary disabled w-100">Your Current Plan</button>
                    </div>
                    <div class="mt-4">
                        <ul class="list-unstyled vstack gap-3 mb-0">
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Everything in Free Plans</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0"><b>Unlimited</b> Projects</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Share with <b>5</b> team members</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Sync across devices</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Scalable Bandwidth</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Share with <b>5</b> team members</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </BCardBody>
            </BCard>
        </BCol>
        
        <BCol xxl="3" lg="6">
            <BCard no-body>
                <BCardBody class="p-4">
                    <div class="flex-grow-1 mb-4 pb-2">
                        <h5 class="mb-2">Enterprise Plan</h5>
                        <p class="text-muted mb-0">Your entire team in one place</p>
                    </div>
                    <div class="mb-4">
                        <h3 class="mb-0 me-2">$49.99 <small class="fs-xs text-muted fw-normal">/Monthly</small></h3>
                    </div>
                    <div class="mt-4">
                        <button class="btn btn-primary w-100">Change Plan</button>
                    </div>
                    <div class="mt-4">
                        <ul class="list-unstyled vstack gap-3 mb-0">
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Everything in Pro Plan</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0"><b>Unlimited</b> Projects</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Share with <b>5</b> team members</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Scalable Bandwidth</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Share with <b>5</b> team members</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0"><b>30</b> day version history</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Admin tools</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </BCardBody>
            </BCard>
        </BCol>
        
        <BCol xxl="3" lg="6">
            <BCard no-body>
                <BCardBody class="p-4">
                    <div class="flex-grow-1 mb-4 pb-2">
                        <h5 class="mb-2">Unlimited Plan</h5>
                        <p class="text-muted mb-0">Run your company on your teams</p>
                    </div>
                    <div class="mb-4">
                        <h3 class="mb-0 me-2">$49.99 <small class="fs-xs text-muted fw-normal">/Monthly</small></h3>
                    </div>
                    <div class="mt-4">
                        <button class="btn btn-primary w-100">Change Plan</button>
                    </div>
                    <div class="mt-4">
                        <ul class="list-unstyled vstack gap-3 mb-0">
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Everything in Enterprise Plan</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0"><b>Unlimited</b> Projects</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Share with <b>5</b> team members</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Sync across devices</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Scalable Bandwidth</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Share with <b>5</b> team members</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0"><b>30</b> day version history</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Admin tools</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </BCardBody>
            </BCard>
        </BCol>
        
    </BRow>
    

    <BRow class="justify-content-center mt-5">
        <BCol lg="5">
            <div class="text-center mb-5">
                <h3 class="fw-semibold fs-4xl">Our plans for your Business</h3>
                <p class="text-muted fs-base">Simple pricing. No hidden fees. Advanced features for you business.</p>
            </div>
        </BCol>
        
    </BRow>
    

    <BRow>
        <BCol xxl="3" lg="6">
            <BCard no-body class="card-animate border-0 border-top border-2 border-success rounded-0 rounded-bottom">
                <BCardBody class="m-2 p-4">
                    <div class="d-flex align-items-center mb-3">
                        <div class="flex-grow-1">
                            <h5 class="mb-0 fw-semibold">Starter</h5>
                        </div>
                        <div class="ms-auto">
                            <h2 class="mb-0">$19 <small class="fs-sm text-muted">/Month</small></h2>
                        </div>
                    </div>

                    <p class="text-muted">The perfect way to get started and get used to our tools.</p>
                    <ul class="list-unstyled vstack gap-3">
                        <li>
                            <div class="d-flex">
                                <div class="flex-shrink-0 text-success me-1">
                                    <i class="ri-checkbox-circle-fill fs-base align-middle"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <b>3</b> Projects
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="flex-shrink-0 text-success me-1">
                                    <i class="ri-checkbox-circle-fill fs-base align-middle"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <b>299</b> Customers
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="flex-shrink-0 text-success me-1">
                                    <i class="ri-checkbox-circle-fill fs-base align-middle"></i>
                                </div>
                                <div class="flex-grow-1">
                                    Scalable Bandwidth
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="flex-shrink-0 text-success me-1">
                                    <i class="ri-checkbox-circle-fill fs-base align-middle"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <b>5</b> FTP Login
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="mt-3 pt-2">
                        <BLink href="javascript:void(0);" class="btn btn-danger disabled w-100">Your Current Plan</BLink>
                    </div>
                </BCardBody>
            </BCard>
        </BCol>
        

        <BCol xxl="3" lg="6">
            <BCard no-body class="card-animate border-0 border-top border-2 border-secondary rounded-0 rounded-bottom">
                <BCardBody class="m-2 p-4">
                    <div class="d-flex align-items-center mb-3">
                        <div class="flex-grow-1">
                            <h5 class="mb-0 fw-semibold">Professional</h5>
                        </div>
                        <div class="ms-auto">
                            <h2 class="mb-0">$29 <small class="fs-sm text-muted">/Month</small></h2>
                        </div>
                    </div>
                    <p class="text-muted">Excellent for scaling teams to build culture. Special plan for professional business.</p>
                    <ul class="list-unstyled vstack gap-3">
                        <li>
                            <div class="d-flex">
                                <div class="flex-shrink-0 text-success me-1">
                                    <i class="ri-checkbox-circle-fill fs-base align-middle"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <b>8</b> Projects
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="flex-shrink-0 text-success me-1">
                                    <i class="ri-checkbox-circle-fill fs-base align-middle"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <b>449</b> Customers
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="flex-shrink-0 text-success me-1">
                                    <i class="ri-checkbox-circle-fill fs-base align-middle"></i>
                                </div>
                                <div class="flex-grow-1">
                                    Scalable Bandwidth
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="flex-shrink-0 text-success me-1">
                                    <i class="ri-checkbox-circle-fill fs-base align-middle"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <b>7</b> FTP Login
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="flex-shrink-0 text-success me-1">
                                    <i class="ri-checkbox-circle-fill fs-base align-middle"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <b>24/7</b> Support
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="mt-3 pt-2">
                        <BLink href="javascript:void(0);" class="btn btn-info w-100">Change Plan</BLink>
                    </div>
                </BCardBody>
            </BCard>
        </BCol>
        

        <BCol xxl="3" lg="6">
            <BCard no-body class="card-animate border-0 border-top border-2 border-primary rounded-0 rounded-bottom">
                <BCardBody class="m-2 p-4">
                    <div class="d-flex align-items-center mb-3">
                        <div class="flex-grow-1">
                            <h5 class="mb-0 fw-semibold">Enterprise</h5>
                        </div>
                        <div class="ms-auto">
                            <h2 class="mb-0">$39 <small class="fs-sm text-muted">/Month</small></h2>
                        </div>
                    </div>
                    <p class="text-muted">This plan is for those who have a team already and running a large business.</p>
                    <ul class="list-unstyled vstack gap-3">
                        <li>
                            <div class="d-flex">
                                <div class="flex-shrink-0 text-success me-1">
                                    <i class="ri-checkbox-circle-fill fs-base align-middle"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <b>15</b> Projects
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="flex-shrink-0 text-success me-1">
                                    <i class="ri-checkbox-circle-fill fs-base align-middle"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <b>Unlimited</b> Customers
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="flex-shrink-0 text-success me-1">
                                    <i class="ri-checkbox-circle-fill fs-base align-middle"></i>
                                </div>
                                <div class="flex-grow-1">
                                    Scalable Bandwidth
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="flex-shrink-0 text-success me-1">
                                    <i class="ri-checkbox-circle-fill fs-base align-middle"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <b>12</b> FTP Login
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="flex-shrink-0 text-success me-1">
                                    <i class="ri-checkbox-circle-fill fs-base align-middle"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <b>24/7</b> Support
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="flex-shrink-0 text-success me-1">
                                    <i class="ri-checkbox-circle-fill fs-base align-middle"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <b>35GB</b> Storage
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="mt-3 pt-2">
                        <BLink href="javascript:void(0);" class="btn btn-info w-100">Change Plan</BLink>
                    </div>
                </BCardBody>
            </BCard>
        </BCol>
        

        <BCol xxl="3" lg="6">
            <BCard no-body class="card-animate border-0 border-top border-2 border-info rounded-0 rounded-bottom">
                <div class="p-1 bg-info bg-opacity-10 text-center text-info fw-semibold"><span><i class="ri-flashlight-fill align-bottom me-1"></i> Most Popular Choice</span></div>
                <BCardBody class="m-2 p-4">
                    <div class="d-flex align-items-center mb-3">
                        <div class="flex-grow-1">
                            <h5 class="mb-0 fw-semibold">Unlimited</h5>
                        </div>
                        <div class="ms-auto">
                            <h2 class="mb-0">$49 <small class="fs-sm text-muted">/Month</small></h2>
                        </div>
                    </div>
                    <p class="text-muted">For most businesses that want to optimize web queries.</p>
                    <ul class="list-unstyled vstack gap-3">
                        <li>
                            <div class="d-flex">
                                <div class="flex-shrink-0 text-success me-1">
                                    <i class="ri-checkbox-circle-fill fs-base align-middle"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <b>Unlimited</b> Projects
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="flex-shrink-0 text-success me-1">
                                    <i class="ri-checkbox-circle-fill fs-base align-middle"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <b>Unlimited</b> Customers
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="flex-shrink-0 text-success me-1">
                                    <i class="ri-checkbox-circle-fill fs-base align-middle"></i>
                                </div>
                                <div class="flex-grow-1">
                                    Scalable Bandwidth
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="flex-shrink-0 text-success me-1">
                                    <i class="ri-checkbox-circle-fill fs-base align-middle"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <b>Unlimited</b> FTP Login
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="flex-shrink-0 text-success me-1">
                                    <i class="ri-checkbox-circle-fill fs-base align-middle"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <b>24/7</b> Support
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="flex-shrink-0 text-success me-1">
                                    <i class="ri-checkbox-circle-fill fs-base align-middle"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <b>Unlimited</b> Storage
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="flex-shrink-0 text-success me-1">
                                    <i class="ri-checkbox-circle-fill fs-base align-middle"></i>
                                </div>
                                <div class="flex-grow-1">
                                    Domain
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="mt-3 pt-2">
                        <BLink href="javascript:void(0);" class="btn btn-info w-100">Change Plan</BLink>
                    </div>
                </BCardBody>
            </BCard>
        </BCol>
        
    </BRow>
    

    <BRow class="justify-content-center mt-4">
        <BCol lg="5">
            <div class="text-center mb-5">
                <h4 class="fw-semibold fs-4xl">Plans & Pricing</h4>
                <p class="text-muted mb-4 fs-base">Simple pricing. No hidden fees. Advanced features for you business.</p>
            </div>
        </BCol>
        
    </BRow>
    
    
    <BRow class="justify-content-center">
        <BCol xxl="3" lg="6">
            <BCard no-body class="p-2">
                <BCardBody class="bg-success-subtle p-4">
                    <div class="flex-grow-1 mb-4 pb-2">
                        <h5 class="mb-2">Starter Plan</h5>
                        <p class="text-muted mb-0">Perfect plan for Starters</p>
                    </div>
                    <div class="mb-4">
                        <h3 class="mb-0 me-2">$19.99 <small class="fs-xs text-muted fw-normal">/Monthly</small></h3>
                    </div>
                    <div class="mt-4">
                        <button class="btn btn-primary w-100">Change Plan</button>
                    </div>
                    <div class="mt-4">
                        <ul class="list-unstyled vstack gap-3 mb-0">
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0"><b>Unlimited</b> Projects</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Share with <b>5</b> team members</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Sync across devices</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Scalable Bandwidth</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0"><b>5</b> FTP Login</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </BCardBody>
            </BCard>
        </BCol>
        
        <BCol xxl="3" lg="6">
            <BCard no-body class="ribbon-box right p-2">
                <div class="ribbon ribbon-danger vertical-shape">Popular</div>
                <BCardBody class="p-4 bg-danger-subtle">
                    <div class="flex-grow-1 mb-4 pb-2">
                        <h5 class="mb-2">Professional Plan</h5>
                        <p class="text-muted mb-0">For users who want to do more.</p>
                    </div>
                    <div class="mb-4">
                        <h3 class="mb-0 me-2">$29.99 <small class="fs-xs text-muted fw-normal">/Monthly</small></h3>
                    </div>
                    <div class="mt-4">
                        <button class="btn btn-secondary disabled w-100">Your Current Plan</button>
                    </div>
                    <div class="mt-4">
                        <ul class="list-unstyled vstack gap-3 mb-0">
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Everything in Free Plans</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0"><b>Unlimited</b> Projects</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Share with <b>5</b> team members</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Sync across devices</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Scalable Bandwidth</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </BCardBody>
            </BCard>
        </BCol>
        
        <BCol xxl="3" lg="6">
            <BCard no-body class="p-2">
                <BCardBody class="bg-warning-subtle p-4">
                    <div class="flex-grow-1 mb-4 pb-2">
                        <h5 class="mb-2">Enterprise Plan</h5>
                        <p class="text-muted mb-0">Your entire team in one place</p>
                    </div>
                    <div class="mb-4">
                        <h3 class="mb-0 me-2">$49.99 <small class="fs-xs text-muted fw-normal">/Monthly</small></h3>
                    </div>
                    <div class="mt-4">
                        <button class="btn btn-primary w-100">Change Plan</button>
                    </div>
                    <div class="mt-4">
                        <ul class="list-unstyled vstack gap-3 mb-0">
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Everything in Pro Plan</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0"><b>Unlimited</b> Projects</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Share with <b>5</b> team members</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Scalable Bandwidth</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Share with <b>5</b> team members</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </BCardBody>
            </BCard>
        </BCol>
        
        <BCol xxl="3" lg="6">
            <BCard no-body class="p-2">
                <BCardBody class="bg-info-subtle p-4">
                    <div class="flex-grow-1 mb-4 pb-2">
                        <h5 class="mb-2">Unlimited Plan</h5>
                        <p class="text-muted mb-0">Run your company on your teams</p>
                    </div>
                    <div class="mb-4">
                        <h3 class="mb-0 me-2">$79.99 <small class="fs-xs text-muted fw-normal">/Monthly</small></h3>
                    </div>
                    <div class="mt-4">
                        <button class="btn btn-primary w-100">Change Plan</button>
                    </div>
                    <div class="mt-4">
                        <ul class="list-unstyled vstack gap-3 mb-0">
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Everything in Enterprise Plan</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0"><b>Unlimited</b> Projects</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Share with <b>5</b> team members</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Sync across devices</p>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-check-lg text-success me-2 align-middle"></i>
                                    <p class="mb-0">Scalable Bandwidth</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </BCardBody>
            </BCard>
        </BCol>
        
    </BRow>
</Layout>
</template>