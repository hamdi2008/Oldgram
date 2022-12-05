const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const vincentVanGogh = document.getElementById("Vincent-Van-Gogh");
const gustaveCourbet = document.getElementById("Gustave-Courbet");
const josephDucreux = document.getElementById("Joseph-Ducreux");

function postOne() {
  vincentVanGogh.style.display = "block";
}

function postTwo() {
  vincentVanGogh.style.display = "none";
  gustaveCourbet.style.display = "block";
}
function postThree() {
  gustaveCourbet.style.display = "none";
  josephDucreux.style.display = "block";
}
