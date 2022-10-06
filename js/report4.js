const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];
const quotes = [
  {
    quote: "티끌모아 티끌이다.",
    author: "박명수"
  },
  {
    quote: "일찍 일어나는 새가 피곤하다",
    author: "박명수"
  },
  {
    quote: "빨리 움직여도 피곤하다.",
    author: "서영진"
  },
  {
    quote: "나이 먹어도 건강하다.",
    author: "서영진"
  },
  {
    quote: "공부를 맨날하면 나중에 편하다.",
    author: "서영진"
  },
  {
    quote: "코딩은 재밌다.",
    author: "서영진"
  },
  {
    quote: "코딩은 껌이다.",
    author: "서영진"
  },
  {
    quote: "JS는 재밌다.",
    author: "서영진"
  },
  {
    quote: "JS는 공부할 맛이 난다.",
    author: "서영진"
  },
  {
    quote: "젊으면 좋다.",
    author: "서영진"
  }
]
const body = document.querySelector("body");
const button = document.querySelector("div button");
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function onMouseClick() {
  const bgColor2 = colors[Math.floor(Math.random() * colors.length)];
  const bgColor1 = colors[Math.floor(Math.random() * colors.length)];
  body.style.background = 
  `linear-gradient(.35turn, ${bgColor1}, ${bgColor2})`;
}

function quotesBtn() {
  const nowQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = nowQuote.quote;
  author.innerText = nowQuote.author;
}

onMouseClick();
button.addEventListener("click", onMouseClick);
quotesBtn();
button.addEventListener("click", quotesBtn);

