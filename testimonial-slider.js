// export * from './testimonial-slider.js';
let turn = 0;
const sliderArrowLeft = [...document.getElementsByClassName('quote_arrow_left')];
const sliderArrowRight = [...document.getElementsByClassName('quote_arrow_right')];
const slider = [...document.getElementsByClassName('slider')];

console.log(slider);



export const pushSlides = (side) => {
    const sliderWidth= slider[1].offsetWidth;
    console.log(sliderWidth);
    
    const sliderContainer = document.querySelector('.slider_container');
    const sliderElements = document.querySelectorAll('.slider_element');
    const slidesQuantity = sliderElements.length - 1;
    if(side === 'right') {
        turn = turn - sliderWidth;
    } else {
        turn = turn + sliderWidth;
    }
    if(turn < -slidesQuantity*sliderWidth ) {
        turn = 0
    } else if (turn > 0) {
        turn = -slidesQuantity*sliderWidth
    }
    console.log(turn)
    console.log(sliderContainer);
    sliderContainer.style = 'transform: translateX(' + turn + 'px)'; 
}

  sliderArrowLeft[0].addEventListener('click', () => {
    pushSlides('left');
});
  sliderArrowRight[0].addEventListener('click', () => {
    pushSlides('right');
});

export const success =() => {
    return 'uspeh';
}