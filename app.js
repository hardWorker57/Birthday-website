const header = document.querySelector('.picture_top_item_1');
gsap.from(header, {
    opacity: 0,
    y: -200,
    duration: 1
})
// gsap.to(header, {
//     opacity: 1,
//     y: -100,
//     duration: .8,
//     delay: .2
// })
const header_2 = document.querySelector('.picture_top_item_2');
gsap.from(header_2, {
    opacity: 0,
    y: -200,
    duration: 1,
    delay: .4
})
const footer_1 = document.querySelector('.picture_bottom_item_1');
gsap.from(footer_1, {
    opacity: 0,
    scale: 0,
    duration: 1,
    delay: .5
})
const footer_2 = document.querySelector('.picture_bottom_item_2');
gsap.from(footer_2, {
    rotate: 500,
    opacity: 0,
    y: -100,
    duration: 1,
    delay: .3
})
const footer_3 = document.querySelector('.picture_bottom_item_3');
gsap.from(footer_3, {
    opacity: 0,
    y: -200,
    duration: 1,
    delay: .7
})
const text_1 = document.querySelector('.title');
gsap.from(text_1, {
    opacity: 0,
    y: -200,
    duration: 1,
    delay: .1
})
const text_2 = document.querySelector('.main_title');
gsap.from(text_2, {
    opacity: 0,
    y: -200,
    duration: 1,
    delay: .5,
    skewY: 35
})
const text_3 = document.querySelector('.wishes');
gsap.from(text_3, {
    opacity: 0,
    duration: 1.2,
    skewX: -25,
    delay: .8
})
const text_4 = document.querySelector('.from');
gsap.from(text_4, {
    opacity: 0,
    x: -150,
    skewX: 55,
    duration: .9,
    delay: .9
})

const Confettiful = function(el) {
  this.el = el;
  this.containerEl = null;
  
  this.confettiFrequency = 3;
  this.confettiColors = ['#EF2964', '#00C09D', '#2D87B0', '#48485E','#EFFF1D'];
  this.confettiAnimations = ['slow', 'medium', 'fast'];
  
  this._setupElements();
  this._renderConfetti();
};

Confettiful.prototype._setupElements = function() {
  const containerEl = document.createElement('div');
  const elPosition = this.el.style.position;
  
  if (elPosition !== 'relative' || elPosition !== 'absolute') {
    this.el.style.position = 'relative';
  }
  
  containerEl.classList.add('confetti-container');
  
  this.el.appendChild(containerEl);
  
  this.containerEl = containerEl;
};

Confettiful.prototype._renderConfetti = function() {
  this.confettiInterval = setInterval(() => {
    const confettiEl = document.createElement('div');
    const confettiSize = (Math.floor(Math.random() * 3) + 7) + 'px';
    const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
    const confettiLeft = (Math.floor(Math.random() * this.el.offsetWidth)) + 'px';
    const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];
    
    confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
    confettiEl.style.left = confettiLeft;
    confettiEl.style.width = confettiSize;
    confettiEl.style.height = confettiSize;
    confettiEl.style.backgroundColor = confettiBackground;
    
    confettiEl.removeTimeout = setTimeout(function() {
      confettiEl.parentNode.removeChild(confettiEl);
    }, 3000);
    
    this.containerEl.appendChild(confettiEl);
  }, 25);
};

window.confettiful = new Confettiful(document.querySelector('.js-container'));