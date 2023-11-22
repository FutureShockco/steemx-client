<script>


import moment from "moment";
import "@fullcalendar/core";
import flatPickr from "vue-flatpickr-component";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import listPlugin from "@fullcalendar/list";
import multiMonthPlugin from '@fullcalendar/multimonth';
import { INITIAL_EVENTS, categories } from "./utils";
import { layoutComputed } from "@/state/helpers";

let currentEvents = INITIAL_EVENTS;

export default {
    data() {
        return {
            calendarOptions: {
                timeZone: "local",
                droppable: true,
                navLinks: true,
                plugins: [
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                    bootstrapPlugin,
                    listPlugin,
                    multiMonthPlugin
                ],
                themeSystem: "bootstrap",
                headerToolbar: {
                    left: "prev,next today",
                    center: "title",
                    right: "multiMonthYear,dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                },
                windowResize: () => {
                    this.getInitialView();
                },
                initialView: 'dayGridMonth',
                // initialEvents: currentEvents,
                events: currentEvents,
                editable: true,
                selectable: true,
                selectMirror: true,
                dayMaxEvents: true,
                weekends: true,
                dateClick: this.dateClicked,
                eventClick: this.editEventDetails,
            },
            submitted: false,

            dataEdit: false,
            showModal: false,
            eventModal: false,
            categories: categories,
            newEventData: {},
            edit: {},
            deleteId: {},
            event: {
                title: "",
                date: "",
                location: "",
                description: "",
                type: "",
                calendardates: ""
            },
            eventTitle: "",
            config: {
                wrap: true, // set wrap to true only when using 'input-group'
                altFormat: "M j, Y",
                altInput: true,
                dateFormat: "d M, Y",
                mode: "range",
            },
            timeConfig: {
                enableTime: false,
                altInput: true,
                dateFormat: "Z",
                altFormat: "d M, Y",
                mode: "range",
            },
            selectedLocale: 'en',
            selectedDirection: 'ltr',
        };
    },
    methods: {
        formatDate(date) {
            var monthNames = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ];
            var d = new Date(date),
                month = "" + monthNames[d.getMonth()],
                day = "" + d.getDate(),
                year = d.getFullYear();
            if (month.length < 2) month = "0" + month;
            if (day.length < 2) day = "0" + day;
            return [day + " " + month, year].join(",");
        },
        dateStamp(start, end) {
            let date;
            if (end == null) {
                date = this.formatDate(start);
            }
            else {
                date = this.formatDate(start) + " - " + this.formatDate(end);
            }
            return date;
        },

        /**
       * Delete event
       */
        deleteEvent() {
            this.edit.remove();
            this.eventModal = false;
            this.showModal = false;
        },
        /**
         * Modal open for add event
         */
        dateClicked(info) {
            this.event = {};
            this.newEventData = info;
            this.showModal = true;
            this.dataEdit = false;
        },
        /**
         * Modal open for edit event
         */
        editEventDetails(info) {
            this.edit = info.event;
            this.eventTitle = this.edit.title;
            this.event.title = this.edit.title;
            this.event.type = this.edit.classNames;
            this.event.date = this.dateStamp(this.edit.start, this.edit.end);
            this.event.location = this.edit.extendedProps.location;
            this.event.description = this.edit.extendedProps.description;
            this.event.calendardates = moment(this.edit.start).toISOString() + " to " + moment(this.edit.end ? this.edit.end : this.edit.start).toISOString();
            this.dataEdit = true;
            this.eventModal = true;
        },
        handleSubmit() {
            if (this.dataEdit) {
                this.submitted = true;
                if (this.submitted && (this.event.title && this.event.calendardates && this.event.location && this.event.description && this.event.type)) {
                    const editTitle = this.event.title;
                    const edittype = this.event.type;
                    const editLocation = this.event.location;
                    const editDescription = this.event.description;
                    const date = this.event.calendardates.split(" ").filter(((item) => (item !== "to")));
                    const startDate = date[0];
                    const endDate = date[1];

                    this.edit.setProp("title", editTitle);
                    this.edit.setProp("classNames", edittype);
                    this.edit.setStart(startDate);
                    this.edit.setEnd(endDate);
                    this.edit.setExtendedProp("location", editLocation);
                    this.edit.setExtendedProp("description", editDescription);
                    this.showModal = false;
                }
            } else {
                this.submitted = true;
                if (this.submitted && (this.event.title && this.event.calendardates && this.event.location && this.event.description && this.event.type)) {
                    const title = this.event.title;
                    const type = this.event.type;
                    const location = this.event.location;
                    const description = this.event.description;
                    const date = this.event.calendardates.split(" ").filter(((item) => (item !== "to")));
                    const startDate = date[0];
                    const endDate = date[1];
                    const calendarApi = this.$refs.fullCalendar.getApi();

                    calendarApi.addEvent(
                        {
                            id: (Math.floor(Math.random() * 100 + 20) - 20),
                            title,
                            start: startDate,
                            end: endDate,
                            classNames: type,
                            extendedProps: { department: "All Day Event", location: location, description: description }
                        });

                    this.showModal = false;
                    this.event = {};
                    this.newEventData = {};
                }
            }
        },

        getInitialView() {
            if (window.innerWidth >= 768 && window.innerWidth < 1200) {
                return "timeGridWeek";
            } else if (window.innerWidth <= 768) {
                return "listMonth";
            } else {
                return "dayGridMonth";
            }
        },

        toggleModal() {
            this.showModal = true;
            this.dataEdit = false;
            this.event = {};

            this.submitted = false;
        },

        // edit button
        editbtn() {
            this.showModal = true,
                this.eventModal = false;
        },

        // cancel button
        cancelbtn() {
            this.showModal = false;
            this.eventModal = true;
        },
        changeLocale() {
            const fullCalendar = this.$refs.fullCalendar.getApi();
            fullCalendar.setOption('locale', this.selectedLocale);
        },
        changeDirection() {
            const fullCalendar = this.$refs.fullCalendar.getApi();
            fullCalendar.setOption('direction', this.selectedDirection);
        },

        selectEvents(e) {
            let check = document.querySelectorAll(".input-filter");
            if (e.target.checked) {
                check.forEach((item) => {
                    item.checked = true;
                    this.calendarOptions.events = currentEvents;
                });
            } else {
                check.forEach((item) => {
                    item.checked = false;
                    this.calendarOptions.events = [];
                });
            }
        },

        selectCategory() {
            let check = document.querySelectorAll(".input-filter");
            let checked = document.querySelectorAll(".input-filter:checked");
            let selectAll = document.querySelector(".select-all");
            let selected = [];

            check.length === checked.length ? selectAll.checked = true : selectAll.checked = false;
            checked.forEach((item) => selected.push(item.getAttribute('data-value')));
            this.calendarOptions.events = currentEvents.filter((event) => selected.includes(event.extendedProps.category.toLowerCase()));
        }
    },
    computed: {
        ...layoutComputed,
    },
    watch: {
        layoutType: {
            immediate: true,
            deep: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    this.isCalendarDraggable();
                }
            },
        },
    },
    components: {
        
        
        
        FullCalendar,
        flatPickr,
    },
};
</script>

<template>
    <Layout>
        <div class="page-title-box">
            <BRow class="align-items-center">
                <BCol md="5">
                    <PageHeader title="Calendar" pagetitle="SteemX" />
                </BCol>
                <BCol md="auto" class="ms-auto">
                    <div class="hstack gap-2">
                        <BButton variant="primary" @click="toggleModal()"><i class="bi bi-plus-lg me-1 align-baseline"></i>
                            Create New Event</BButton>
                        <RightBar />
                    </div>
                </BCol>
            </BRow>
        </div>

        <div class="calendar-wrapper d-lg-flex gap-4">
            <div class="w-100">
                <BCard no-body class="card-h-100">
                    <div>
                        <FullCalendar ref="fullCalendar" :events="filteredEvents" :options="calendarOptions" />
                    </div>
                </BCard>
            </div>

            <BCard no-body>
                <BCardBody class="vstack">
                    <BRow class="g-2 mb-3">
                        <BCol class="lg-6">
                            <b-form-group>
                                <label for="locale-select" class="form-label">Locale:</label>
                                <b-form-select id="locale-select" v-model="selectedLocale" @change="changeLocale">
                                    <option value="en">English</option>
                                    <option value="es">Español</option>
                                    <option value="fr">Français</option>
                                    <option value="it">Italiana</option>
                                    <option value="ru">русский</option>
                                    <!-- Add more locales as needed -->
                                </b-form-select>
                            </b-form-group>
                        </BCol><!--end col-->
                        <BCol lg="6">
                            <b-form-group>
                                <label for="direction-select" class="form-label">Direction:</label>
                                <b-form-select id="direction-select" v-model="selectedDirection" @change="changeDirection">
                                    <option value="ltr">LTR</option>
                                    <option value="rtl">RTL</option>
                                </b-form-select>
                            </b-form-group>
                        </BCol><!--end col-->
                    </BRow>

                    <div class="mb-2">
                        <h5 class="fs-lg mb-2">Filter</h5>
                        <div class="form-check mb-2">
                            <input class="form-check-input select-all" type="checkbox" id="selectAll" data-value="all"
                                checked="" @change="(e) => selectEvents(e)">
                            <label class="form-check-label" for="selectAll">View All</label>
                        </div>

                        <div class="app-calendar-events-filter">
                            <div class="form-check form-check-danger mb-2">
                                <input class="form-check-input input-filter" type="checkbox" id="select-personal" checked=""
                                    data-value="personal" @change="selectCategory">
                                <label class="form-check-label" for="select-personal">Personal</label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input input-filter" type="checkbox" id="select-business" checked=""
                                    data-value="business" @change="selectCategory">
                                <label class="form-check-label" for="select-business">Business</label>
                            </div>
                            <div class="form-check form-check-warning mb-2">
                                <input class="form-check-input input-filter" type="checkbox" id="select-family" checked=""
                                    data-value="family" @change="selectCategory">
                                <label class="form-check-label" for="select-family">Family</label>
                            </div>
                            <div class="form-check form-check-success mb-2">
                                <input class="form-check-input input-filter" type="checkbox" id="select-holiday" checked=""
                                    data-value="holiday" @change="selectCategory">
                                <label class="form-check-label" for="select-holiday">Holiday</label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 class="fs-lg mb-1">This Month Holidays</h5>
                        <ul class="list-group list-group-flush mb-2">
                            <li class="list-group-item">
                                <p class="text-muted mb-2"><i class="bi bi-app-indicator fs-2xs text-success me-1"></i> 5
                                    June, 2023</p>
                                <h6>World Environment Day</h6>
                            </li>
                            <li class="list-group-item">
                                <p class="text-muted mb-2"><i class="bi bi-app-indicator fs-2xs text-success me-1"></i> 8
                                    Mar, 2024</p>
                                <h6>International Women's Days</h6>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 class="fs-lg mb-3">Upcoming Event <span class="badge bg-primary">03</span></h5>
                        <div class="vstack gap-3 mb-3">
                            <div class="p-2 border-start border-2 d-flex align-items-center gap-2">
                                <div class="avatar-sm flex-shrink-0">
                                    <div class="avatar-title bg-body-secondary text-primary fs-2 rounded">
                                        <i class="bi bi-wechat"></i>
                                    </div>
                                </div>
                                <div>
                                    <h6 class="text-truncate mb-2">Discuss project with client</h6>
                                    <p class="text-muted mb-0"><i class="bi bi-calendar-event fs-2xs text-success me-1"></i>
                                        19 June, 2023</p>
                                </div>
                            </div>
                            <div class="p-2 border-start border-2 d-flex align-items-center gap-2">
                                <div class="avatar-sm flex-shrink-0">
                                    <div class="avatar-title bg-body-secondary text-primary fs-2 rounded">
                                        <i class="bi bi-bezier2"></i>
                                    </div>
                                </div>
                                <div>
                                    <h6 class="mb-2">Update design system victory</h6>
                                    <p class="text-muted mb-0"><i class="bi bi-calendar-event fs-2xs text-success me-1"></i>
                                        30 May, 2023</p>
                                </div>
                            </div>
                            <div class="p-2 border-start border-2 d-flex align-items-center gap-2">
                                <div class="avatar-sm flex-shrink-0">
                                    <div class="avatar-title bg-body-secondary text-primary fs-2 rounded">
                                        <i class="bi bi-envelope"></i>
                                    </div>
                                </div>
                                <div>
                                    <h6 class="mb-2">Traffic page mailing</h6>
                                    <p class="text-muted mb-0"><i class="bi bi-calendar-event fs-2xs text-success me-1"></i>
                                        22 May, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <BCard no-body class="bg-primary mb-0 mt-auto">
                        <BCardBody>
                            <div class="d-flex gap-2 align-items-center">

                                <div class="flex-grow-1">
                                    <h5 class="text-white fs-lg">Upgrade to Pro</h5>
                                    <p class="text-white-50">Event that applications book will appear here.</p>

                                    <router-link to="pages/pricing" class="text-white text-opacity-75">Upgrade <i
                                            class="bi bi-arrow-right align-baseline"></i></router-link>
                                </div>

                                <div class="flex-shrink-0">
                                    <img src="https://img.themesbrand.com/steemx/dashboard-plan.png" alt=""
                                        class="avatar-md">
                                </div>
                            </div>
                        </BCardBody>
                    </BCard>
                </BCardBody>
            </BCard>
        </div>

        <BModal v-model="showModal" :title="this.dataEdit ? this.eventTitle : 'Add Event'" body-class="p-4"
            header-class="p-3 bg-info-subtle" hide-footer class="v-modal-custom" centered="">
            <form @submit.prevent="handleSubmit">
                <div class="text-end" v-if="this.dataEdit">
                    <BLink href="#" class="btn btn-sm btn-subtle-primary" id="edit-event-btn" @click="cancelbtn">
                        Cancel</BLink>
                </div>
                <BRow>
                    <BCol cols="12">
                        <div class="mb-3">
                            <label for="name" class="form-label">Event Name</label>
                            <input id="name" v-model="event.title" type="text" class="form-control"
                                placeholder="Insert Event name" :class="{ 'is-invalid': submitted && !event.title }" />
                        </div>
                    </BCol>
                    <BCol cols="12">
                        <div class="mb-3">
                            <label class="form-label">Event Date</label>
                            <div class="input-group">
                                <flat-pickr placeholder="Select date" v-model="event.calendardates" :config="timeConfig"
                                    class="form-control flatpickr-input" id="caledate"
                                    :class="{ 'is-invalid': submitted && !event.calendardates }"></flat-pickr>
                                <span class="input-group-text"><i class="ri-calendar-event-line"></i></span>
                            </div>
                        </div>
                    </BCol>
                    <BCol cols="12">
                        <div class="mb-3">
                            <label for="event-location" class="form-label">Location</label>
                            <div>
                                <input type="text" v-model="event.location" class="form-control" name="event-location"
                                    id="event-location" placeholder="Event location"
                                    :class="{ 'is-invalid': submitted && !event.location }">
                            </div>
                        </div>
                    </BCol>
                    <BCol cols="12">
                        <div class="mb-3">
                            <label class="form-label">Description</label>
                            <textarea class="form-control" v-model="event.description" id="event-description"
                                placeholder="Enter a description" rows="3" spellcheck="false"
                                :class="{ 'is-invalid': submitted && !event.description }"></textarea>
                        </div>
                    </BCol>
                    <BCol cols="12">
                        <div class="mb-3">
                            <label class="form-label">Type</label>
                            <select v-model="event.type" class="form-control" name="type"
                                :class="{ 'is-invalid': submitted && !event.type }">
                                <option v-for="option in categories" :key="option.backgroundColor"
                                    :value="`${option.value}`">
                                    {{ option.name }}
                                </option>
                            </select>
                        </div>
                    </BCol>
                </BRow>

                <div class="text-end pt-3">
                    <BButton class="ms-1" variant="subtle-danger" @click="deleteEvent" v-if="this.dataEdit">Delete</BButton>
                    <BButton type="submit" variant="success" class="ms-1">
                        {{ this.dataEdit ? "Update Event" : "Add Event" }}
                    </BButton>
                </div>
            </form>
        </BModal>

        <BModal v-model="eventModal" :title="this.event.title" hide-footer body-class="p-4"
            header-class="p-3 bg-info-subtle" class="v-modal-custom" centered>
            <div class="text-end">
                <BLink href="#" class="btn btn-sm btn-subtle-primary" id="edit-event-btn" @click="editbtn">Edit</BLink>
            </div>
            <div class="event-details">
                <div class="d-flex mb-2">
                    <div class="flex-grow-1 d-flex align-items-center">
                        <div class="flex-shrink-0 me-3"> <i class="ri-calendar-event-line text-muted fs-16"></i> </div>
                        <div class="flex-grow-1">
                            <h6 class="d-block fw-semibold mb-0" id="event-start-date-tag">
                                {{ this.event.date }}
                            </h6>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <div class="flex-shrink-0 me-3"> <i class="ri-time-line text-muted fs-16"></i> </div>
                    <div class="flex-grow-1">
                        <h6 class="d-block fw-semibold mb-0">
                            <span id="event-timepicker1-tag"></span> - <span id="event-timepicker2-tag"></span>
                        </h6>
                    </div>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <div class="flex-shrink-0 me-3"> <i class="ri-map-pin-line text-muted fs-16"></i> </div>
                    <div class="flex-grow-1">
                        <h6 class="d-block fw-semibold mb-0">
                            <span id="event-location-tag">
                                {{ this.event.location || "No Location" }}
                            </span>
                        </h6>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="flex-shrink-0 me-3"> <i class="ri-discuss-line text-muted fs-16"></i> </div>
                    <div class="flex-grow-1">
                        <p class="d-block text-muted mb-0" id="event-description-tag">
                            {{ this.event.description || "N.A." }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="hstack gap-2 justify-content-end">
                <button type="button" class="btn btn-subtle-danger" id="btn-delete-event" @click="deleteEvent">
                    <i class="ri-close-line align-bottom"></i> Delete
                </button>
            </div>
        </BModal>
    </Layout>
</template>