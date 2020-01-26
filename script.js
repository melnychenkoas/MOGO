import * as testimonialModule from './testimonial-slider.js';

console.log(testimonialModule.success());

var accordeonItem = [...document.getElementsByClassName('accordeon_item')];
var accordeonArrow = [...document.getElementsByClassName('accordeon_arrow')];

const rotateAccordionArrow = (accordeonArrow, i) => {
    accordeonArrow[i].classList.add('rotate-arrow');
}

const openAccordeonItem = (accordeonItem, i) => {   
    accordeonItem[i].classList.add('active');
}

const closeAllAccordionItems = (accordeonItem) => {
    accordeonItem.forEach((el) => {
        el.classList.remove('active');
    })
}

const rotateArrowsToDefault = (accordeonArrow) => {
    accordeonArrow.forEach((el) => {
        el.classList.remove('rotate-arrow');
    })
}

const accordeonItemLength = accordeonItem.length;

for (let i=0; i<accordeonItemLength; i++){
    accordeonItem[i].addEventListener('click', () => {
        
        rotateArrowsToDefault(accordeonArrow);
        if (!accordeonItem[i].classList.contains('active')) {
            closeAllAccordionItems(accordeonItem);
            openAccordeonItem(accordeonItem, i);
            rotateAccordionArrow(accordeonArrow, i);
        } else {
            closeAllAccordionItems(accordeonItem);
        }
        
    }); 
}


const accordeonData = [
    {
        title: 'photography',
        value: 'Body of the first item. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem veniam aliquid sapiente nostrum accusantium. Sunt repellendus, a deserunt maiores rem nesciunt culpa molestiae obcaecati iusto fuga, ab minus adipisci suscipit.'    
    },
    {
        title: 'creativity',
        value: 'Body of the second item. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem veniam aliquid sapiente nostrum accusantium. Sunt repellendus, a deserunt maiores rem nesciunt culpa molestiae obcaecati iusto fuga, ab minus adipisci suscipit.'    
    },
    {
        title: 'web design',
        value: 'Body of the third item. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem veniam aliquid sapiente nostrum accusantium. Sunt repellendus, a deserunt maiores rem nesciunt culpa molestiae obcaecati iusto fuga, ab minus adipisci suscipit.'    
    }
]

const setAccordeonData = (accordeonData) => {
    const accordeonTitleItems = [...document.getElementsByClassName('accordeon_title')];
    const accordeonContentItems = [...document.getElementsByClassName('accordeon_content')];
    accordeonTitleItems.forEach( (el, index) => {
        el.innerText = accordeonData[index].title;
    })
    accordeonContentItems.forEach( (el, index) => {
        el.innerText = accordeonData[index].value;
    })
}
setAccordeonData(accordeonData);

// success();
