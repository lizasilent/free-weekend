import './index.css';
import "./validation.js";

// Header FadeOut

let header = document.querySelector('.header');

function fadeOutOnScroll(element) {
  if (!element) {
    return;
  }

  let distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  let elementHeight = element.offsetHeight;
  let scrollTop = document.documentElement.scrollTop;

  let opacity = 1;

  if (scrollTop > distanceToTop) {
    opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
  }

  if (opacity >= 0) {
    element.style.opacity = opacity;
  }
}

function scrollHandler() {
  fadeOutOnScroll(header);
}

window.addEventListener('scroll', scrollHandler);


const numbers = [2, 3, 5];

// Стрелочная функция. Не запнётся ли на ней Internet Explorer?
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // 4, 6, 10
