function createSlider() {

const root = document.querySelector("#root");
  
let slider_index = 0;

const images = [
  "https://www0.assets.heroku.com/assets/elements/elements-testimonial-zerocater-44f5683652c5cf1cc08ce8bf921a99053d2d9c5ba281d9dd9ae99720ad739967.jpg",
    "https://www1.assets.heroku.com/assets/elements/elements-testimonial-spiro-technologies-905c55cfc8205999fc575901cb2a619efa5b6e7d166e762a277dd3a01f9a102c.jpg",
     "https://www1.assets.heroku.com/assets/elements/elements-testimonial-brown-forman-d54cf5266d2331a94a9ed9aa19bd2b5310c7ffa2cb829283ac43eee684728383.jpg",
   "https://www2.assets.heroku.com/assets/elements/elements-testimonial-new-relic-5df55c05681af0775185584aa346ac31d1ae180dab11c0ee6d902309f7ddc5e1.jpg"
];


const texts = [
  "“I love the vast array of Heroku Add-ons that let you quickly plug in a service and enhance your app. Everything is point and click, and you don't have to spend time figuring out infrastructure.”",
  "“Our team loves how easy it is to browse the Heroku Elements marketplace and see what add-ons they can try. In less than 5 minutes an add-on is installed and working — it's fantastic.”",
  "“The rich selection of Heroku Add-ons available from Heroku Elements enables our developers to focus on building sites that deliver compelling and authentic brand experiences.”",
  "Heroku Elements represents the state of the art when it comes to giving developers the ability to discover add-on services like New Relic to leverage the power of software analytics and more.",
]




const background = document.createElement("div");

const inputsContainer = document.createElement('div');
const left_btn = document.createElement("p");
const right_btn = document.createElement("p");
const back = document.createElement('div');
const backSpan = document.createElement('span');
const forward = document.createElement('div');
const forwardSpan = document.createElement('span');


const frame = document.createElement("div");
const img = document.createElement("img");
const text = document.createElement('div')

const roundsContainer = document.createElement("div");
const roundFirst = document.createElement('button')
const roundSecond = document.createElement('button')
const roundThird = document.createElement('button')
const roundFourth = document.createElement('button')


img.classList.add('img');
text.classList.add('text');
frame.classList.add('frame');
inputsContainer.classList.add('inputsContainer');
left_btn.classList.add('left_btn');
right_btn.classList.add('right_btn');
background.classList.add("background");
roundsContainer.classList.add("roundsContainer");

root.append(background);
background.append(inputsContainer, frame, roundsContainer);
back.append(left_btn, backSpan);
forward.append(forwardSpan, right_btn);
inputsContainer.append(back, forward);
frame.append(img, text);
roundsContainer.append(roundFirst, roundSecond, roundThird, roundFourth);



backSpan.innerText = "PREVIOUS";
forwardSpan.innerText = "NEXT";
// left_btn.src = "./images/Pfeillinks.png"
// right_btn.src = "./images/Pfeilrechts.png" 
  

function go_left() {
  slider_index--;
  if (slider_index < 0) {
    slider_index = images.length - 1;
  }
  updateSlider();
}

function go_right() {
  slider_index++;
  if (slider_index >= images.length) {
    slider_index = 0;
  }
  updateSlider();
}


function updateSlider() {
  img.src = images[slider_index];
  text.innerText = texts[slider_index];
}


// left_btn.addEventListener("click", go_left);
// right_btn.addEventListener("click", go_right);
back.addEventListener("click", go_left);
forward.addEventListener("click", go_right);

roundFirst.addEventListener("click", function () {
  slider_index = 0;
  updateSlider();
});
roundSecond.addEventListener("click", function () {
  slider_index = 1;
  updateSlider();
});
roundThird.addEventListener("click", function () {
  slider_index = 2;
  updateSlider();
});
roundFourth.addEventListener("click", function () {
  slider_index = 3;
  updateSlider();
});


updateSlider();

}

createSlider()
