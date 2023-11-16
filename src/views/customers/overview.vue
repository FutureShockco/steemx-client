<script>
import Layout from "@/layouts";
import PageHeader from "@/components/page-header.vue";
import RightBar from "@/components/right-bar.vue";

export default {
    data() {
        return {
        };
    },
    mounted() {
        const toggleBtn = document.getElementsByClassName("custom-toggle");
        Array.from(toggleBtn).forEach(ele => {
            ele.addEventListener("click", () => {
                if (ele.classList.contains("active")) {
                    ele.classList.remove("active");
                } else {
                    ele.classList.add("active");
                }
            });
        });
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
            <BRow class="align-items-center gy-3">
                <BCol cols="md">
                    <PageHeader title="Overview" pagetitle="Customers" />
                </BCol>
                <BCol md="auto" class="ms-auto">
                    <RightBar />
                </BCol>
            </BRow>
        </div>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardBody class="rounded-top py-5 pattern">
                        <div class="py-5 my-2"></div>
                    </BCardBody>
                    <BCardBody>
                        <div>
                            <BRow class="mt-n5">
                                <BCol sm="auto">
                                    <img src="@/assets/images/users/avatar-9.jpg" alt=""
                                        class="avatar-xl rounded p-1 bg-body-secondary">
                                </BCol>
                                <BCol cols="sm">
                                    <div class="mt-4 mt-sm-5">
                                        <h5 class="mb-1">Tamara Gibson <i
                                                class="bi bi-patch-check-fill align-baseline text-info ms-1"></i></h5>
                                        <p class="text-muted mb-3">Product Designer @themesbrand</p>
                                        <p><i class="bi bi-geo-alt"></i> United Kingdom</p>

                                        <ul class="list-unstyled d-flex gap-2 align-items-center flex-wrap mb-0">
                                            <li>
                                                <BLink href="#!" class="d-inline-block avatar-xs">
                                                    <div class="avatar-title bg-success-subtle text-success rounded">
                                                        <i class="bi bi-whatsapp"></i>
                                                    </div>
                                                </BLink>
                                            </li>
                                            <li>
                                                <BLink href="#!" class="d-inline-block avatar-xs">
                                                    <div class="avatar-title bg-secondary-subtle text-secondary rounded">
                                                        <i class="bi bi-facebook"></i>
                                                    </div>
                                                </BLink>
                                            </li>
                                            <li>
                                                <BLink href="#!" class="d-inline-block avatar-xs">
                                                    <div class="avatar-title bg-danger-subtle text-danger rounded">
                                                        <i class="bi bi-instagram"></i>
                                                    </div>
                                                </BLink>
                                            </li>
                                            <li>
                                                <BLink href="#!" class="d-inline-block avatar-xs">
                                                    <div class="avatar-title bg-warning-subtle text-warning rounded">
                                                        <i class="bi bi-google"></i>
                                                    </div>
                                                </BLink>
                                            </li>
                                        </ul>
                                    </div>
                                </BCol>
                                <BCol sm="auto">
                                    <div class="mt-4 mt-sm-5">
                                        <div class="hstack gap-2">
                                            <button class="btn btn-subtle-success">Hire Me</button>
                                            <button type="button" class="btn btn-outline-secondary custom-toggle active"
                                                data-bs-toggle="button" aria-pressed="false">
                                                <span class="icon-on"><i class="ri-add-line align-bottom me-1"></i>
                                                    Follow</span>
                                                <span class="icon-off"><i
                                                        class="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
                                            </button>
                                            <BDropdown variant="link" toggle-class="btn btn-subtle-dark btn-icon arrow-none" menu-class="dropdown-menu-end">
                                                <template #button-content> <i class="bi bi-share"></i> </template>
                                                <BDropdownItem>Facebook</BDropdownItem>
                                                <BDropdownItem>Instagram</BDropdownItem>
                                                <BDropdownItem>Email</BDropdownItem>
                                              </BDropdown>
                                        </div>
                                    </div>
                                </BCol>
                            </BRow>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BTabs nav-class="nav-success mb-3" pills>
            <BTab title="Followers" active>
                <h5 class="mb-4">Followers <span class="badge bg-primary align-middle ms-1">248</span></h5>
                <BRow>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body class="card-animate">
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-sm rounded-1">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@charlotte_saleh</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> Los
                                            Angeles</p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body class="card-animate">
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/avatar-3.jpg" alt="" class="avatar-sm rounded-1">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@pamela_lister</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> New York
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body class="card-animate">
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/avatar-4.jpg" alt="" class="avatar-sm rounded-1">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@joseph_krick</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> San
                                            Francisco</p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body class="card-animate">
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/avatar-5.jpg" alt="" class="avatar-sm rounded-1">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@nadine_lilly</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i>
                                            Philadelphia</p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body class="card-animate">
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/user-dummy-img.jpg" alt=""
                                        class="avatar-sm rounded-1 border">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@joseph_krick</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i>
                                            Chelmsford</p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body class="card-animate">
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/avatar-6.jpg" alt="" class="avatar-sm rounded-1">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@jack_davison</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i>
                                            Southfield</p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body class="card-animate">
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/avatar-7.jpg" alt="" class="avatar-sm rounded-1">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@bradley_power</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> Brazil
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body class="card-animate">
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/user-dummy-img.jpg" alt=""
                                        class="avatar-sm rounded-1 border">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@louie_kay</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> New
                                            Zealand</p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body class="card-animate">
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/avatar-8.jpg" alt="" class="avatar-sm rounded-1">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@ben_simmons</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> Belgium
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body class="card-animate">
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/user-dummy-img.jpg" alt=""
                                        class="avatar-sm rounded-1 border">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@amelie_blackburn</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> Germany
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body class="card-animate">
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/avatar-10.jpg" alt="" class="avatar-sm rounded-1">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@william_holden</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> Denmark
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body class="card-animate">
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/avatar-9.jpg" alt="" class="avatar-sm rounded-1">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@harvey_bennett</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> France
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/user-dummy-img.jpg" alt=""
                                        class="avatar-sm rounded-1 border">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@oscar_french</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> Australia
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-sm rounded-1">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@elise_moss</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> United
                                            States</p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/user-dummy-img.jpg" alt=""
                                        class="avatar-sm rounded-1 border">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@sophia_hyde</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> Colombia
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-sm rounded-1">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@katherine_law</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> Brazil
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
                <BRow class="align-items-center mb-4 justify-content-between text-center text-sm-start"
                    id="pagination-element">
                    <BCol cols="sm">
                        <div class="text-muted">
                            Showing <span class="fw-semibold">10</span> of <span class="fw-semibold">13</span> Results
                        </div>
                    </BCol>
                    <BCol sm="auto" class="mt-3 mt-sm-0">
                        <div class="pagination-wrap hstack gap-2">
                            <BLink class="page-item pagination-prev disabled" href="javascript:void(0)">Previous</BLink>
                            <ul class="pagination listjs-pagination mb-0">
                                <li class="active"><BLink class="page" href="#!" data-i="1" data-page="10">1</BLink></li>
                                <li><BLink class="page" href="#!" data-i="2" data-page="10">2</BLink></li>
                            </ul>
                            <BLink class="page-item pagination-next" href="javascript:void(0)">Next</BLink>
                        </div>
                    </BCol>
                </BRow>
            </BTab>
            <BTab title="Following">
                <h5 class="mb-4">Following <span class="badge bg-primary align-middle ms-1">85</span></h5>
                <BRow>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-sm rounded-1">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@oscar_holland</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> Denmark
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/avatar-9.jpg" alt="" class="avatar-sm rounded-1">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@connor_higgins</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> United
                                            States</p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/user-dummy-img.jpg" alt=""
                                        class="avatar-sm rounded-1 border">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@toby_hilton</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> Australia
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/avatar-10.jpg" alt="" class="avatar-sm rounded-1">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@skye_connor</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> Germany
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/avatar-6.jpg" alt="" class="avatar-sm rounded-1">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@jack_davison</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i>
                                            Southfield</p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/user-dummy-img.jpg" alt=""
                                        class="avatar-sm rounded-1 border">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@joseph_krick</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i>
                                            Chelmsford</p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/avatar-7.jpg" alt="" class="avatar-sm rounded-1">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@bradley_power</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> Brazil
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/avatar-8.jpg" alt="" class="avatar-sm rounded-1">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@ben_simmons</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> Belgium
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/user-dummy-img.jpg" alt=""
                                        class="avatar-sm rounded-1 border">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@louie_kay</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> New
                                            Zealand</p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-sm rounded-1">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@amelie_blackburn</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> Germany
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/avatar-9.jpg" alt="" class="avatar-sm rounded-1">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@harvey_bennett</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> France
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/user-dummy-img.jpg" alt=""
                                        class="avatar-sm rounded-1 border">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@oscar_french</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> Australia
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-sm rounded-1">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@elise_moss</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> United
                                            States</p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/avatar-10.jpg" alt="" class="avatar-sm rounded-1">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@william_holden</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> Denmark
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-sm rounded-1">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@katherine_law</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> Brazil
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex gap-3">
                                    <img src="@/assets/images/users/user-dummy-img.jpg" alt=""
                                        class="avatar-sm rounded-1 border">
                                    <div class="flex-grow-1">
                                        <router-link to="/pages/profile">
                                            <h6>@sophia_hyde</h6>
                                        </router-link>
                                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-middle me-1"></i> Colombia
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-subtle-primary btn-sm custom-toggle active"
                                            data-bs-toggle="button" aria-pressed="false">
                                            <span class="icon-on">Follow</span>
                                            <span class="icon-off">Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
                <BRow class="align-items-center mb-4 justify-content-between text-center text-sm-start"
                    id="pagination-element">
                    <BCol cols="sm">
                        <div class="text-muted">
                            Showing <span class="fw-semibold">10</span> of <span class="fw-semibold">13</span> Results
                        </div>
                    </BCol>
                    <BCol sm="auto" class="mt-3 mt-sm-0">
                        <div class="pagination-wrap hstack gap-2">
                            <BLink class="page-item pagination-prev disabled" href="javascript:void(0)">Previous</BLink>
                            <ul class="pagination listjs-pagination mb-0">
                                <li class="active"><BLink class="page" href="#!" data-i="1" data-page="10">1</BLink></li>
                                <li><BLink class="page" href="#!" data-i="2" data-page="10">2</BLink></li>
                            </ul>
                            <BLink class="page-item pagination-next" href="javascript:void(0)">Next</BLink>
                        </div>
                    </BCol>
                </BRow>
            </BTab>
            <BTab title="Gallery">
                <h5 class="mb-4">Gallery</h5>
                <BRow>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body class="card-animate">
                            <img src="@/assets/images/small/img-1.jpg" alt="" class="card-img-top">
                            <BCardBody>
                                <p class="text-muted mb-2"><i class="bi bi-calendar-check me-1 align-baseline"></i> 08 June,
                                    2023</p>
                                <BLink href="#!">
                                    <h5 class="fs-lg mb-0 lh-base text-truncate">This is a group of landscape photos of the
                                        Lukeqin Desert</h5>
                                </BLink>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body class="card-animate">
                            <img src="@/assets/images/small/img-2.jpg" alt="" class="card-img-top">
                            <BCardBody>
                                <p class="text-muted mb-2"><i class="bi bi-calendar-check me-1 align-baseline"></i> 24 May,
                                    2023</p>
                                <BLink href="#!">
                                    <h5 class="fs-lg mb-0 lh-base text-truncate">Standing on the road with sunlight</h5>
                                </BLink>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body class="card-animate">
                            <img src="@/assets/images/small/img-6.jpg" alt="" class="card-img-top">
                            <BCardBody>
                                <p class="text-muted mb-2"><i class="bi bi-calendar-check me-1 align-baseline"></i> 12 May,
                                    2023</p>
                                <BLink href="#!">
                                    <h5 class="fs-lg mb-0 lh-base text-truncate">The sun rises over a saguaro cactus in
                                        Saguaro National Park</h5>
                                </BLink>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" lg="4" sm="6">
                        <BCard no-body class="card-animate">
                            <img src="@/assets/images/small/img-7.jpg" alt="" class="card-img-top">
                            <BCardBody>
                                <p class="text-muted mb-2"><i class="bi bi-calendar-check me-1 align-baseline"></i> 03 May,
                                    2023</p>
                                <BLink href="#!">
                                    <h5 class="fs-lg mb-0 lh-base text-truncate">Group of colleagues discussing</h5>
                                </BLink>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
            </BTab>
        </BTabs>
    </Layout>
</template>

<style scoped>
.pattern {
    background-image: url('../../assets/images/customer-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>