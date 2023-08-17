const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

const headTitles = [
    'Бухгалтерские услуги в вашем городе', 
    'Финансовые услуги в вашем городе',
    'Банковские услуги в вашем городе',
    'Налоговые услуги в вашем городе', 
    'Финансовые услуги в вашем городе',
    'Банковские услуги в вашем городе',
    'Бухгалтерские услуги в вашем городе', 
    'Финансовые услуги в вашем городе',
    'Банковские услуги в вашем городе',
    'Финансовые услуги в вашем городе',
    'Банковские услуги в вашем городе',
    'Бухгалтерские услуги в вашем городе', 
    'Финансовые услуги в вашем городе',
    'Банковские услуги в вашем городе'
]

const sliderHeadWraper = document.querySelector(".slider-head__wraper");

headTitles.forEach(elem=>{
    const sliderItem = document.createElement('li');
    sliderItem.classList.add('slider-head__item')
    const titleField = document.createElement('p');
    titleField.classList.add('item__title')
    titleField.innerText = elem
 

    sliderItem.append(titleField)
    sliderHeadWraper.append(sliderItem)
})



function firstSlider(){
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * headTitles.length + 'px';
    images.forEach(item => {
        //item.style.width = width + 'px';
        //item.style.height = 'auto';
                // item.style.width = '589px';
                item.style.width = '100%';
                item.style.height = `117px`;
                item.style.objectFit = "content"
    });
    nextSlider()
}


window.addEventListener('resize', firstSlider);
firstSlider()


document.querySelector('.previous').addEventListener('click', function(){
    count--;
    if (count < 0) {
        count = headTitles.length -1;
    }
    nextSlider();
});



document.querySelector('.next').addEventListener('click', function(){
    count++;
    if (count >= headTitles.length) {
        count = 0;
    }
    nextSlider();
});

function nextSlider() {
    sliderHeadWraper.style.transform = 'translate(-'+count * width + 'px)';
}



// // 2. Slider
// let image = new Image();

// let image = "./media/person.png"; 




const reviewTexts = [
    {text:  'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
     image: "./media/person.png",
     name: 'Федор Петров',
     position: 'Директор ООО “Три-четыре”'
     },
     {text:  'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
     image: "./media/person.png",
     name: 'Алла Сидороваа',
     position: 'Директор ООО “Пять-шесть”'
     },
     {text:  'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
     image: "./media/person.png",
     name: 'Екатерина Иванова',
     position: 'Директор ООО “Раз-два”'
     },
     {text:  'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
     image: "./media/person.png",
     name: 'Иван Иванов',
     position: 'Директор ООО “Семь-восемь”'
     },
]


const reviewSliderWrapper = document.querySelector(".review__slider__wrapper");



reviewTexts.forEach(elem=>{
    const slide = document.createElement('div');
    slide.classList.add('review__slide')
    const sliderText = document.createElement('p');
    sliderText.classList.add('slider_text');
    const personWrapper = document.createElement('div');
    personWrapper.classList.add('person_wrapper');
    const personImage = document.createElement('img');
    const namePosWrapper = document.createElement('div');
    const personName = document.createElement('p');
    personName.classList.add('person_name');
    const personPosition = document.createElement('p');
    personPosition.classList.add('person_position');
   

    sliderText.innerText = elem.text;
    personImage.src = elem.image;
    personName.innerText = elem.name;
    personPosition.innerText = elem.position;

    personWrapper.append(personImage, namePosWrapper)
    namePosWrapper.append(personName, personPosition);
    slide.append(sliderText, personWrapper, namePosWrapper)
    // reviewSliderWrapper.append(sliderText);
    reviewSliderWrapper.append(slide)


})


// function thirdSlider(){
//     width = document.querySelector('.slider').offsetWidth;
//     sliderLine.style.width = width * reviewTexts.length + 'px';
//     reviewTexts.forEach(item => {
//         //item.style.width = width + 'px';
//         //item.style.height = 'auto';
//                 item.style.width = '100%';
//                 item.style.height = `117px`;
//                 item.style.objectFit = "content"
//     });
//     showSlider()
// }


// window.addEventListener('resize', secondSlider);
// thirdSlider()


// document.querySelector('.pre').addEventListener('click', function(){
//     count--;
//     if (count < 0) {
//         count = reviewTexts.length -1;
//     }
//     showSlider();
// });



// document.querySelector('.ne').addEventListener('click', function(){
//     count++;
//     if (count >= reviewTexts.length) {
//         count = 0;
//     }
//     showSlider();
// });

// function schowSlider() {
//     reviewSliderWrapper.style.transform = 'translate(-'+count * width + 'px)';
// }






// 3.Slider


function init(){
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        //item.style.width = width + 'px';
        //item.style.height = 'auto';
                item.style.width = '275px';
        item.style.height = `130px`;
                item.style.objectFit = "content"
    });
    rollSlider()
}


window.addEventListener('resize', init);
init()


document.querySelector('.slider-prev').addEventListener('click', function(){
    count--;
    if (count < 0) {
        count = images.length -1;
    }
    rollSlider();
});



document.querySelector('.slider-next').addEventListener('click', function(){
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-'+count * width + 'px)';
}