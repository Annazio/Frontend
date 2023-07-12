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
const frame = document.createElement("div");
const img = document.createElement("img");
const text = document.createElement('div')

const roundBtns = document.createElement("div");

const left_btn = document.createElement("button");
const right_btn = document.createElement("button");


img.classList.add('img');
background.classList.add("background");

frame.append(img, text);
background.append(left_btn, right_btn, frame, roundBtns);
root.append(background);


left_btn.innerText = "PREVIOUS";
right_btn.innerText = "NEXT";
  

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


left_btn.addEventListener("click", go_left);
right_btn.addEventListener("click", go_right);


  updateSlider();


}

createSlider()
