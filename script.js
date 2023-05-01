// ANIMATION ON SCROLL
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
window.addEventListener("scroll", reveal);


// PRODUCT SLIDER SCRIPT
const productContainers = [...document.querySelectorAll('.product-container, .product-container-fav')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn, .nxt-btn-fav, .nxt-btn-fav2')];
const preBtn = [...document.querySelectorAll('.pre-btn, .pre-btn-fav, .pre-btn-fav2')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


  

// COOKIE
const acceptButton = document.querySelector('.accept');
const cookieSection = document.querySelector('.cookie');

function hideCookieSection() {
  cookieSection.style.display = 'none';
}

acceptButton.addEventListener('click', hideCookieSection);
