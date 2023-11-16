const connections = [
  {
    id: 1,
    roomId: 1,
    status: "online",
    name: "Joel Bird",
    msg: "Good morning",
    date: "23 May",
    image: 'https://img.themesbrand.com/steemx/users/avatar-2.jpg',
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA",
  },
  {
    id: 2,
    roomId: 2,
    status: "online",
    name: "Chelsea Onslow",
    msg: "Awesome, Looking forward to it.",
    date: "18 May",
    image: 'https://img.themesbrand.com/steemx/users/avatar-3.jpg',
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA",
    badge: 8,
    Channels: '8',
  },
  {
    id: 3,
    roomId: 3,
    status: "offline",
    name: "Julian Barkman",
    msg: "Very satisfying service!😍😍",
    date: "16 May",
    bgColor: "danger",
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA",
    isImg: true,
    profile: "JB",
  },
  {
    id: 4,
    roomId: 4,
    status: "online",
    name: "Gabriel Mactier",
    msg: "Can i change the shipping address?",
    date: "07 May",
    image: 'https://img.themesbrand.com/steemx/users/avatar-4.jpg',
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA",
  },
  {
    id: 5,
    roomId: 5,
    status: "online",
    name: "Nicholas Lea",
    msg: "Would love to see some pictures 🤗",
    date: "29 April",
    image: 'https://img.themesbrand.com/steemx/users/avatar-5.jpg',
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA",
    badge: 5,
    Channels: '5',
  },
  {
    id: 6,
    roomId: 6,
    status: "offline",
    name: "Alyssa Dame",
    msg: "How fast is the shipping? let me know :)",
    date: "21 April",
    image: 'https://img.themesbrand.com/steemx/users/avatar-6.jpg',
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA",
    badge: 2,
    Channels: '2',
  },
  {
    id: 7,
    roomId: 7,
    status: "online",
    name: "Brock Monds",
    msg: "WOWW!! yes that would be amezingly awesome!",
    date: "14 April",
    bgColor: "warning",
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA",
    isImg: true,
    profile: "BM",
  },
  {
    id: 8,
    roomId: 8,
    status: "offline",
    name: "Bella McLucas",
    msg: "Hey Sophia! I was just wondering if you have had time to go over the new revisions for the upcoming plan.",
    date: " 06 April",
    bgColor: "info",
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA",
    isImg: true,
    profile: "BM",
  },
  {
    id: 9,
    roomId: 9,
    status: "offline",
    name: "Phillipp Sanger",
    msg: "Hey Sophia! I was just wondering if you have had time to go over the new revisions for the upcoming plan.",
    date: "06 April",
    image: 'https://img.themesbrand.com/steemx/users/avatar-7.jpg',
    number: "+(256) 2451 8974",
    email: "lisaparker@gmail.com",
    location: "California, USA",
  },
];

const ChannelsData = [
  {
    id: 1,
    name: 'Admin & Dashboard',
    members: 12,
    Channels: 7
  },
  {
    id: 2,
    name: 'General',
    members: 10,
  },
  {
    id: 3,
    name: 'SteemX',
    members: 24,
    Channels: 2,
  },
  {
    id: 4,
    name: 'Steex - Admin & Dashboard',
    members: 8,
  },
  {
    id: 5,
    name: 'Reporting',
    members: 16,
  }
];

const messages = [
  {
    id: 1,
    roomId: 1,
    sender: "Lisa Parker",
    message: [
      {
        msg_id: 1,
        msg: "Good morning 😊"
      }
    ],
    createdAt: "09:07 am",
  },
  {
    id: 2,
    roomId: 1,
    sender: "Anna Adame",
    align: "right",
    message: [
      {
        msg_id: 2,
        msg: "Good morning, How are you? What about our next meeting?"
      }
    ],
    createdAt: "09:08 am",
  },
  {
    id: 3,
    roomId: 1,
    sender: "Lisa Parker",
    message: [
      {
        msg_id: 3,
        msg: "Vote for the meeting guys, when is the best time ?"
      },
    ],
    progess: [
      {
        title: "10:58 AM",
        progressbar: "75"
      },
      {
        title: "02:30 PM",
        progressbar: "25"
      }
    ],
    has_reactEmoji: [
      {
        reactIcon: "👍",
        reactNum: "46"
      },
      {
        reactIcon: "👎",
        reactNum: "7"
      },
      {
        reactIcon: "🧐",
        reactNum: "13"
      }
    ],
    createdAt: "09:10 am",
  },
  {
    id: 4,
    roomId: 1,
    sender: "Anna Adame",
    align: "right",
    message: [
      {
        msg_id: 4,
        msg: "Awesome! Thanks. I'll look at this today.",
      }
    ],
    createdAt: "09:12 am",
  },
  {
    id: 5,
    roomId: 1,
    sender: "Lisa Parker",
    message: [
      {
        msg_id: 4,
        msg: "",
      }
    ],
    isIncomingCall: true,
    createdAt: "09:12 am",
  },
];

const channelMessage = [
  {
    id: 1,
    roomId: 1,
    sender: "Lisa Parker",
    message: [
      {
        msg_id: 1,
        msg: "Good morning Everyone"
      }
    ],
    createdAt: "10:07 am",
    image: 'https://img.themesbrand.com/steemx/users/avatar-2.jpg'
  },
  {
    id: 2,
    roomId: 1,
    sender: "Anna Adame",
    message: [
      {
        msg_id: 2,
        msg: "Good morning, How are you? What about our next meeting?"
      }
    ],
    createdAt: "09:08 am",
    isRight: true
  },
  {
    id: 3,
    roomId: 1,
    sender: "Lisa Parker",
    message: [
      {
        msg_id: 3,
        msg: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM"
      },
      {
        msg_id: 4,
        msg: "Wow that's great"
      }
    ],
    createdAt: "10:13 am",
    image: 'https://img.themesbrand.com/steemx/users/avatar-3.jpg'
  },
  {
    id: 5,
    roomId: 1,
    sender: "Lisa Parker",
    message: [
      {
        msg_id: 5,
        msg: "@Jean Berwick, Please Assign AB-123 to me"
      }
    ],
    createdAt: "10:14 am",
    isRight: true
  },
  {
    id: 6,
    roomId: 1,
    sender: "Lisa Parker",
    message: [
      {
        msg_id: 6,
        msg: "Okay, Sure"
      }
    ],
    createdAt: "10:15 am",
    image: 'https://img.themesbrand.com/steemx/users/avatar-2.jpg'
  },

];

export { messages, ChannelsData, connections, channelMessage };