

let eventGuid = 0
// let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();
const INITIAL_EVENTS = [
  {
    id: 153,
    title: 'All Day Event',
    start: new Date(y, m, 1),
    className: 'bg-primary-subtle',
    location: 'San Francisco, US',
    allDay: false,
    extendedProps: {
        department: 'All Day Event',
        category: "Business",
    },
    description: 'An all-day event is an event that lasts an entire day or longer'
},
{
    id: 136,
    title: 'Visit Online Course',
    start: new Date(y, m, d - 5),
    end: new Date(y, m, d - 2),
    allDay: false,
    className: 'bg-warning-subtle',
    extendedProps: {
        department: 'Long Event',
        category: "Business",
    },
    description: 'Long Term Event means an incident that last longer than 12 hours.'
},
{
    id: 999,
    title: 'Client Meeting with Alexis',
    start: new Date(y, m, d + 22, 20, 0),
    end: new Date(y, m, d + 24, 16, 0),
    allDay: false,
    className: 'bg-danger-subtle',
    location: 'California, US',
    extendedProps: {
        department: 'Meeting with Alexis',
        category: "Business",
    },
    description: 'A meeting is a gathering of two or more people that has been convened for the purpose of achieving a common goal through verbal interaction, such as sharing information or reaching agreement.'
},
{
    id: 991,
    title: 'Repeating Event',
    start: new Date(y, m, d + 4, 16, 0),
    end: new Date(y, m, d + 9, 16, 0),
    allDay: false,
    className: 'bg-primary-subtle',
    location: 'Las Vegas, US',
    extendedProps: {
        department: 'Repeating Event',
        category: "Holiday",
    },
    description: 'A recurring or repeating event is simply any event that you will occur more than once on your calendar. ',
},
{
    id: 112,
    title: 'Meeting With Designer',
    start: new Date(y, m, d, 12, 30),
    allDay: false,
    className: 'bg-success-subtle',
    location: 'Head Office, US',
    extendedProps: {
        department: 'Meeting',
        category: "Business",
    },
    description: 'Tell how to boost website traffic'
},
{
    id: 113,
    title: 'Weekly Strategy Planning',
    start: new Date(y, m, d + 9),
    end: new Date(y, m, d + 11),
    allDay: false,
    className: 'bg-danger-subtle',
    location: 'Head Office, US',
    extendedProps: {
        department: 'Lunch',
        category: "Holiday",
    },
    description: 'Strategies for Creating Your Weekly Schedule'
},
{
    id: 875,
    title: 'Birthday Party',
    start: new Date(y, m, d + 1, 19, 0),
    allDay: false,
    className: 'bg-success-subtle',
    location: 'Los Angeles, US',
    extendedProps: {
        department: 'Birthday Party',
        category: "Family",
    },
    description: 'Family slumber party – Bring out the blankets and pillows and have a family slumber party! Play silly party games, share special snacks and wind down the fun with a special movie.'
},
{
    id: 783,
    title: 'Click for Google',
    start: new Date(y, m, 28),
    end: new Date(y, m, 29),
    url: 'http://google.com/',
    className: 'bg-dark-subtle',
    extendedProps: {
        department: 'All Day Event',
        category: "Business",
    },
},
{
    id: 456,
    title: 'Hybrix Project',
    start: new Date(y, m, d + 23, 20, 0),
    end: new Date(y, m, d + 24, 16, 0),
    allDay: false,
    className: 'bg-info-subtle',
    location: 'Head Office, US',
    extendedProps: {
        department: 'Discussion',
        category: "Personal",
    },
    description: 'Tell how to boost website traffic'
},
{
    id: 9,
    title: 'Steex Deadline',
    start: new Date(y, m, 12),
    end: new Date(y, m, 13),
    allDay: true,
    className: 'bg-danger-subtle',
    extendedProps: {
        department: 'All Day Event',
        category: "Business",
    },
},
{
    id: 10,
    title: 'Meeting with Developer',
    start: new Date(y, m, 12),
    end: new Date(y, m, 13),
    allDay: true,
    className: 'bg-info-subtle',
    extendedProps: {
        department: 'All Day Event',
        category: "Business",
    },
},
{
    id: 11,
    title: 'Personal Work',
    start: new Date(y, m, 12),
    end: new Date(y, m, 13),
    allDay: true,
    className: 'bg-primary-subtle',
    extendedProps: {
        department: 'All Day Event',
        category: "Personal",
    },
},
{
    id: 12,
    title: 'Scrum Meeting',
    start: new Date(y, m, 12),
    end: new Date(y, m, 13),
    allDay: true,
    className: 'bg-dark-subtle',
    extendedProps: {
        department: 'All Day Event',
        category: "Business",
    },
},
]

function createEventId() {
  return String(eventGuid++)
}

const categories = [
  {
      name: 'Danger',
      value: 'bg-danger-subtle'
  },
  {
      name: 'Success',
      value: 'bg-success-subtle'
  },
  {
      name: 'Primary',
      value: 'bg-primary-subtle'
  },
  {
      name: 'Info',
      value: 'bg-info-subtle'
  },
  {
      name: 'Dark',
      value: 'bg-dark-subtle'
  },
  {
      name: 'Warning',
      value: 'bg-warning-subtle'
  },
];

export {INITIAL_EVENTS, categories, createEventId }