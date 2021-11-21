import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    posts: [
      {
        id: 1,
        createdAt: {
          date: "Oct 19, 2021",
          time: "08:31",
        },
        author: {
          profilepic: require("@/assets/profilepics/profilepic1.png"),
          firstname: "Susan",
          lastname: "Bane",
        },
        content: {
          text: "Which weighs more, a pound of feathers or a pound of bricks?",
        },
        likes: 0
      },
      {
        id: 2,
        createdAt: {
          date: "Oct 18, 2021",
          time: "07:34",
        },
        author: {
          profilepic: require("@/assets/profilepics/profilepic2.png"),
          firstname: "Susette",
          lastname: "Destinee",
        },
        content: {
          text: "I think it's going to rain.",
          pic: "https://cdn.pixabay.com/photo/2021/05/29/20/20/hot-air-balloon-6294208_1280.jpg",
          alt: "Dark clouds",
        },
        likes: 0
      },
      {
        id: 3,
        createdAt: {
          date: "Oct 18, 2021",
          time: "06:15",
        },
        author: {
          profilepic: require("@/assets/profilepics/profilepic3.png"),
          firstname: "Neil",
          lastname: "Armstrong",
        },
        content: {
          text: "That’s one small step for a man, a giant leap for mankind.",
          pic: "https://cdn.pixabay.com/photo/2012/10/10/11/05/space-station-60615_960_720.jpg",
          alt: "Moon landing",
        },
        likes: 0
      },
      {
        id: 4,
        createdAt: {
          date: "Oct 16, 2021",
          time: "10:33",
        },
        author: {
          profilepic: require("@/assets/profilepics/profilepic6.png"),
          firstname: "Thomas",
          lastname: "Brown",
        },
        content: {
          text: "Let's have lunch.",
          pic: "https://cdn.pixabay.com/photo/2017/09/28/18/22/tarte-flambee-2796419_960_720.jpg",
          alt: "Tarte flambée",
        },
        likes: 0
      },
      {
        id: 5,
        createdAt: {
          date: "Oct 16, 2021",
          time: "05:47",
        },
        author: {
          profilepic: require("@/assets/profilepics/profilepic4.png"),
          firstname: "William",
          lastname: "Shakespeare",
        },
        content: {
          text: "To thine own self, be true.",
        },
        likes: 0
      },
      {
        id: 6,
        createdAt: {
          date: "Oct 15, 2021",
          time: "00:07",
        },
        author: {
          profilepic: require("@/assets/profilepics/profilepic5.png"),
          firstname: "Brian",
          lastname: "Armstrong",
        },
        content: {
          text: "Bitcoin has hit a new record high after the launch of a new exchange-traded fund (ETF) linked to the cryptocurrency.",
          pic: "https://cdn.pixabay.com/photo/2017/01/25/12/31/bitcoin-2007769_960_720.jpg",
          alt: "Bitcoin",
        },
        likes: 0
      },
      {
        id: 7,
        createdAt: {
          date: "Oct 12, 2021",
          time: "12:12",
        },
        author: {
          profilepic: require("@/assets/profilepics/profilepic8.png"),
          firstname: "Henry",
          lastname: "Cooke",
        },
        content: {
          text: "Life is what happens to us while we are making other plans.",
        },
        likes: 0
      },
      {
        id: 8,
        createdAt: {
          date: "Oct 11, 2021",
          time: "17:24",
        },
        author: {
          profilepic: require("@/assets/profilepics/profilepic9.png"),
          firstname: "Nannie",
          lastname: "Gunn",
        },
        content: {
          text: "Looking up to the stars tonight.",
          pic: "https://cdn.pixabay.com/photo/2015/10/12/14/59/milky-way-984050_960_720.jpg",
          alt: "Stars in the sky",
        },
        likes: 0
      },
      {
        id: 9,
        createdAt: {
          date: "Oct 6, 2021",
          time: "13:34",
        },
        author: {
          profilepic: require("@/assets/profilepics/profilepic10.png"),
          firstname: "Stack",
          lastname: "Overflow",
        },
        content: {
          text: "It’s not a bug — it’s an undocumented feature.",
          pic: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg",
          alt: "Coding",
        },
        likes: 0
      },
      {
        id: 10,
        createdAt: {
          date: "Oct 4, 2021",
          time: "11:05",
        },
        author: {
          profilepic: require("@/assets/profilepics/profilepic11.png"),
          firstname: "Caressa",
          lastname: "Uund",
        },
        content: {
          text: "Working from home.",
          pic: "https://cdn.pixabay.com/photo/2015/06/24/16/36/office-820390_960_720.jpg",
          alt: "Home office",
        },
        likes: 0
      },
      {
        id: 11,
        createdAt: {
          date: "Oct 02, 2021",
          time: "06:47",
        },
        author: {
          profilepic: require("@/assets/profilepics/profilepic12.png"),
          firstname: "Mahatma",
          lastname: "Ghandi",
        },
        content: {
          text: "You must be the change you wish to see in the world.",
        },
        likes: 0
      },
      {
        id: 12,
        createdAt: {
          date: "Oct 02, 2021",
          time: "06:47",
        },
        author: {
          profilepic: require("@/assets/profilepics/profilepic13.png"),
          firstname: "Sarette",
          lastname: "Iaverne",
        },
        content: {
          text: "Got a new friend today.",
          pic: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg",
          alt: "Puppy",
        },
        likes: 0
      },
      {
        id: 13,
        createdAt: {
          date: "Oct 01, 2021",
          time: "14:13",
        },
        author: {
          profilepic: require("@/assets/profilepics/profilepic14.png"),
          firstname: "Jimmy",
          lastname: "Hansen",
        },
        content: {
          text: "Die with memories, not dreams.",
        },
        likes: 0
      },
      {
        id: 14,
        createdAt: {
          date: "Oct 01, 2021",
          time: "10:13",
        },
        author: {
          profilepic: require("@/assets/profilepics/profilepic15.png"),
          firstname: "Friedrich",
          lastname: "Nietzsche",
        },
        content: {
          text: "Without music, life would be a mistake.",
          pic: "https://cdn.pixabay.com/photo/2014/11/26/15/20/saxophone-546303_960_720.jpg",
          alt: "Instrument and notes",
        },
        likes: 0
      },
      {
        id: 15,
        createdAt: {
          date: "Sep 29, 2021",
          time: "08:45",
        },
        author: {
          profilepic: require("@/assets/profilepics/profilepic16.png"),
          firstname: "Benjamin",
          lastname: "Franklin",
        },
        content: {
          text: "Three can keep a secret, if two of them are dead.",
        },
        likes: 0
      },
    ],
  },
  mutations: {
    resetLikes: function(state) {
      state.posts.forEach(el => {el.likes = 0});
    },
    incrementLikes: function(state, post) {
      post.likes++;
    }
  },
  actions: {},
  modules: {},
});
