// export * from './testimonial-slider.js';
let turn = 0;
let sliderArrowLeft = [...document.getElementsByClassName('quote_arrow_left')];
let sliderArrowRight = [...document.getElementsByClassName('quote_arrow_right')];

export const pushSlides = (side) => {
    const slider = document.querySelector('.slider_container');
    if(side === 'right') {
        turn = turn - 1161;
    } else {
        turn = turn + 1161;
    }
    if(turn < -2322 ) {
        turn = 0
    } else if (turn > 0) {
        turn = -2322
    }
    console.log(turn)
    slider.style = 'transform: translateX(' + turn + 'px)'; 
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