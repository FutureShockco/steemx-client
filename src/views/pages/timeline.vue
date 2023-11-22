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
      <BRow class="align-items-center">
        <BCol md="5">
          <PageHeader title="Timeline" pagetitle="Pages" />
        </BCol>
        <BCol md="auto" class="ms-auto">
          <RightBar />
        </BCol>
      </BRow>
    </div>

    <BRow>
        <BCol lg="4" md="6">
            <BCard no-body>
                <BCardHeader>
                    <BCardTitle class="mb-0">Timeline Dot Effect</BCardTitle>
                </BCardHeader>
                <BCardBody>
                    <ul class="activity-timeline-2 effect-dot list-unstyled mb-0">
                        <li>
                            <h6 class="fs-sm">Purchase by James Price</h6>
                        </li>
                        <li>
                            <h6 class="fs-sm">New ticket received <span class="badge text-bg-info align-middle ms-1">New</span></h6>
                        </li>
                        <li>
                            <h6 class="fs-sm">Adding a new event with attachments</h6>
                        </li>
                        <li>
                            <h6 class="fs-sm">Templates layout upload</h6>
                        </li>
                    </ul>
                </BCardBody>
            </BCard>
        </BCol>
        <BCol lg="4" md="6">
            <BCard no-body>
                <BCardHeader>
                    <BCardTitle class="mb-0">Timeline Square Effect</BCardTitle>
                </BCardHeader>
                <BCardBody>
                    <ul class="activity-timeline-2 effect-square list-unstyled mb-0">
                        <li>
                            <h6 class="fs-sm">Purchase by James Price</h6>
                        </li>
                        <li>
                            <h6 class="fs-sm">New ticket received <span class="badge text-bg-info align-middle ms-1">New</span></h6>
                        </li>
                        <li>
                            <h6 class="fs-sm">Adding a new event with attachments</h6>
                        </li>
                        <li>
                            <h6 class="fs-sm">Templates layout upload</h6>
                        </li>
                    </ul>
                </BCardBody>
            </BCard>
        </BCol>
        <BCol lg="4">
            <BCard no-body>
                <BCardHeader>
                    <BCardTitle class="mb-0">Timeline Circle Effect</BCardTitle>
                </BCardHeader>
                <BCardBody>
                    <ul class="activity-timeline-2 effect-circle list-unstyled mb-0">
                        <li>
                            <h6 class="fs-sm">Purchase by James Price</h6>
                        </li>
                        <li>
                            <h6 class="fs-sm">New ticket received <span class="badge text-bg-info align-middle ms-1">New</span></h6>
                        </li>
                        <li>
                            <h6 class="fs-sm">Adding a new event with attachments</h6>
                        </li>
                        <li>
                            <h6 class="fs-sm">Templates layout upload</h6>
                        </li>
                    </ul>
                </BCardBody>
            </BCard>
        </BCol>
        <BCol lg="6">
            <BCard no-body>
                <BCardHeader>
                    <BCardTitle class="mb-0">Vertical Timeline</BCardTitle>
                </BCardHeader>
                <BCardBody>
                    <div class="activity-timeline activity-main">
                        <div class="activity-item d-flex">
                            <div class="flex-shrink-0">
                                <img src="@/assets/images/users/avatar-9.jpg" alt="" class="avatar-xs rounded-circle activity-avatar">
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h6 class="mb-1 lh-base">Purchased by James Price</h6>
                                <p class="text-muted mb-2">Product noise evolve smartwatch </p>
                                <small class="mb-0 text-muted">05:57 AM Today</small>
                            </div>
                        </div>
                        <div class="activity-item py-3 d-flex">
                            <div class="flex-shrink-0">
                                <img src="@/assets/images/users/avatar-8.jpg" alt="" class="avatar-xs rounded-circle activity-avatar">
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h6 class="mb-1 lh-base">Natasha Carey have liked the products</h6>
                                <p class="text-muted mb-2">Allow users to like products in your WooCommerce store.</p>
                                <small class="mb-0 text-muted">25 Dec, 2022</small>
                            </div>
                        </div>
                        <div class="activity-item py-3 d-flex">
                            <div class="flex-shrink-0">
                                <img src="@/assets/images/users/avatar-3.jpg" alt="" class="avatar-xs rounded-circle activity-avatar">
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h6 class="mb-1 lh-base">Today offers by <BLink href="javascript:void(0);" class="link-secondary">Digitech Galaxy</BLink></h6>
                                <p class="text-muted mb-2">Offer is valid on orders of $230 Or above for selected products only.</p>
                                <small class="mb-0 text-muted">12 Dec, 2022</small>
                            </div>
                        </div>
                        <div class="activity-item py-3 d-flex">
                            <div class="flex-shrink-0">
                                <img src="@/assets/images/users/avatar-4.jpg" alt="" class="avatar-xs rounded-circle activity-avatar">
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h6 class="mb-1 lh-base">Favorites Product</h6>
                                <p class="text-muted mb-2">Esther James have favorites product.</p>
                                <small class="mb-0 text-muted">25 Nov, 2022</small>
                            </div>
                        </div>
                        <div class="activity-item py-3 d-flex">
                            <div class="flex-shrink-0">
                                <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-xs rounded-circle activity-avatar">
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h6 class="mb-1 lh-base">Flash sale starting <span class="text-primary">Tomorrow.</span></h6>
                                <p class="text-muted mb-2">Flash sale by <BLink href="javascript:void(0);" class="link-secondary fw-medium">Zoetic Fashion</BLink></p>
                                <small class="mb-0 text-muted">22 Oct, 2022</small>
                            </div>
                        </div>
                        <div class="activity-item d-flex">
                            <div class="flex-shrink-0">
                                <img src="@/assets/images/users/avatar-5.jpg" alt="" class="avatar-xs rounded-circle activity-avatar">
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h6 class="mb-1 lh-base">Monthly sales report</h6>
                                <p class="text-muted mb-2"><span class="text-danger">2 days left</span> notification to submit the monthly sales report. <BLink href="javascript:void(0);" class="link-warning text-decoration-underline">Reports Builder</BLink></p>
                                <small class="mb-0 text-muted">15 Oct, 2022</small>
                            </div>
                        </div>
                    </div>
                </BCardBody>
            </BCard>
        </BCol>
        <BCol lg="6">
            <BCard no-body>
                <BCardHeader>
                    <BCardTitle class="mb-0">Vertical Timeline 2</BCardTitle>
                </BCardHeader>
                <BCardBody>
                    <ul class="activity-timeline-2 list-unstyled mb-0">
                        <li>
                            <h6 class="fs-sm">Purchase by James Price</h6>
                            <p>09:24 PM</p>
                            <p class="mb-0">Product noise evolve smartwatch</p>
                        </li>
                        <li>
                            <h6 class="fs-sm">New ticket received <span class="badge text-bg-info align-middle ms-1">New</span></h6>
                            <p class="mb-3">4 days ago</p>
                            <p class="text-muted mb-0">User <span class="text-secondary">Erica245</span> submitted a ticket</p>
                        </li>
                        <li>
                            <h6 class="fs-sm">Adding a new event with attachments</h6>
                            <p class="mb-3">30 days ago</p>
                            <div class="d-inline-flex gap-2">
                                <BRow class="g-3">
                                    <BCol cols="auto">
                                        <div class="d-flex position-relative gap-2 border border-dashed p-2 rounded">
                                            <div class="flex-shrink-0">
                                                <i class="bi bi-file-earmark-image fs-xl text-danger"></i>
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <BLink href="javascript:void(0);" class="stretched-link">
                                                    <h6>UI/UX design</h6>
                                                </BLink>
                                                <small>685 KB</small>
                                            </div>
                                        </div>
                                    </BCol>
                                    <BCol cols="auto">
                                        <div class="d-flex position-relative gap-2 border border-dashed p-2 rounded ">
                                            <div class="flex-shrink-0">
                                                <i class="bi bi-file-pdf fs-xl text-info"></i>
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <BLink href="javascript:void(0);" class="stretched-link">
                                                    <h6>SteemX Invoice</h6>
                                                </BLink>
                                                <small>342 KB</small>
                                            </div>
                                        </div>
                                    </BCol>
                                </BRow>
                            </div>
                        </li>
                        <li>
                            <h6 class="fs-sm">Templates layout upload</h6>
                            <p class="mb-3">1 week ago</p>
                            <p class="text-muted fst-italic">
                                Powerful, clean & modern responsive bootstrap 5 admin template. The maximum file size for uploads in this demo :
                            </p>
                            <div class="d-flex flex-wrap border border-dashed gap-2 p-2 rounded">
                                <img src="@/assets/images/small/img-3.jpg" alt="" class="avatar-md rounded object-fit-cover">
                                <img src="@/assets/images/small/img-5.jpg" alt="" class="avatar-md rounded object-fit-cover">
                                <img src="@/assets/images/small/img-7.jpg" alt="" class="avatar-md rounded object-fit-cover">
                                <img src="@/assets/images/small/img-9.jpg" alt="" class="avatar-md rounded object-fit-cover">
                            </div>
                            
                        </li>
                    </ul>
                </BCardBody>
            </BCard>
        </BCol>
    </BRow>
    
    <BCardTitle class="mb-3">Horizontal Timeline</BCardTitle>
    <BCard no-body>
        <BCardBody class="p-0">
            <BRow class="g-0">
                <BCol lg="3" md="6">
                    <BCard no-body class="rounded-0 shadow-none h-100 border-end-md border-bottom border-bottom-md-0 mb-0 text-center">
                        <BCardBody>
                            <div class="avatar-sm mx-auto mb-3">
                                <div class="avatar-title bg-secondary-subtle text-secondary fs-xl rounded-1">
                                    <i class="ph-bag"></i>
                                </div>
                            </div>
                            <div>
                                <h5 class="fs-md mb-1">Order Placed</h5>
                                <p class="text-muted mb-2">06:57PM - 23 May, 2023</p>
                                <p class="mb-0 text-muted text-truncate-two-lines">Your order has been placed, but it hasn't been shipped yet.</p>
                            </div>
                        </BCardBody>
                    </BCard>
                </BCol>
                <BCol lg="3" md="6">
                    <BCard no-body class="rounded-0 shadow-none h-100 border-end-lg border-bottom border-bottom-md-0 mb-0 text-center">
                        <BCardBody>
                            <div class="avatar-sm mx-auto mb-3">
                                <div class="avatar-title bg-warning-subtle text-warning fs-xl rounded-1">
                                    <i class="ph-truck"></i>
                                </div>
                            </div>
                            <div>
                                <h5 class="fs-md mb-1">Shipping</h5>
                                <p class="text-muted mb-2">07:39AM - 28 May, 2023</p>
                                <p class="mb-0 text-muted text-truncate-two-lines">Shipping is the transportation of cargo or goods as a business, especially on ships.</p>
                            </div>
                        </BCardBody>
                    </BCard>
                </BCol>
                <BCol lg="3" md="6">
                    <BCard no-body class="rounded-0 shadow-none h-100 border-end-md border-bottom border-bottom-md-0 mb-0 text-center">
                        <BCardBody>
                            <div class="avatar-sm mx-auto mb-3">
                                <div class="avatar-title bg-danger-subtle text-danger fs-xl rounded-1">
                                    <i class="ph-bicycle"></i>
                                </div>
                            </div>
                            <div>
                                <h5 class="fs-md mb-1">Out For Delivery</h5>
                                <p class="text-muted mb-2">-</p>
                                <p class="mb-0 text-muted text-truncate-two-lines">A package has reached a shipping transit point near the recipient and been loaded on a truck headed toward its final delivery destination.</p>
                            </div>
                        </BCardBody>
                    </BCard>
                </BCol>
                <BCol lg="3" md="6">
                    <BCard no-body class="rounded-0 shadow-none h-100 mb-0 text-center">
                        <BCardBody>
                            <div class="avatar-sm mx-auto mb-3">
                                <div class="avatar-title bg-success-subtle text-success fs-xl rounded-1">
                                    <i class="ph-house-line"></i>
                                </div>
                            </div>
                            <div>
                                <h5 class="fs-md mb-1">Delivered</h5>
                                <p class="text-muted mb-2">04 June, 2023</p>
                                <p class="mb-0 text-muted text-truncate-two-lines">Delivery is the process of transporting goods from a source location to a predefined destination.</p>
                            </div>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>
        </BCardBody>
    </BCard>
</Layout>
</template>