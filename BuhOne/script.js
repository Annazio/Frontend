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
                item.style.width = '589px';
                item.style.height = `117px`;
                item.style.objectFit = "content"
    });
    rollSlider()
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



// 2. Slider

const reviewTexts = [
    'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
    'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
    'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
    'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. '
]








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