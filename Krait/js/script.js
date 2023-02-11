const sale = document.querySelectorAll('.sale__botton');
const size1 = document.querySelectorAll('.dayProduct__size__content1 .dayProduct__size__size');
const size2 = document.querySelectorAll('.dayProduct__size__content2 .dayProduct__size__size');
const size3 = document.querySelectorAll('.dayProduct__size__content3 .dayProduct__size__size');
//слайдер для банера

var swiper = new Swiper(".baner__slider", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".banner_next",
      prevEl: ".banner_prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
 
  // общий слайдер для распродажи
  var swiper = new Swiper(".sale__slider", {
    navigation: {
      nextEl: ".sale_next",
      prevEl: ".sale_prev",
    },
    allowTouchMove:false,
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
      1300:{
        slidesPerView: 4
      },
      1000:{
        slidesPerView: 3
      },
      650:{
        slidesPerView: 2
      },
      350:{
        slidesPerView: 1
      }
    }
    
  });


  //слайдеры картинок в карточке распродажа 
  var swiper = new Swiper(".sale__slaiderImage2", {
    pagination: {
      el: ".slaiderImage__pagination2",
    },
  });
  var swiper = new Swiper(".sale__slaiderImage1", {
    pagination: {
      el: ".slaiderImage__pagination1",
    },
  });
  var swiper = new Swiper(".sale__slaiderImage3", {
    pagination: {
      el: ".slaiderImage__pagination3",
    },
  });
  var swiper = new Swiper(".sale__slaiderImage4", {
    pagination: {
      el: ".slaiderImage__pagination4",
    },
  });
  var swiper = new Swiper(".sale__slaiderImage5", {
    pagination: {
      el: ".slaiderImage__pagination5",
    },
  });


// звздный рейтинг

const ratings = document.querySelectorAll('.dayProduct__rating');
if (ratings.length>0){
  initRatings();
  
}
function initRatings(){
  let ratingActive, ratingValue;
  for (let index=0;index<ratings.length;index++){
    const rating = ratings[index];
    initRating(rating)
    
  }

  function initRating(rating){
    initRatingVars(rating);
    setRatingActiveWidth();
  }

  function initRatingVars(rating){
    ratingActive=rating.querySelector('.dayProduct__rating__active');
    ratingValue=rating.querySelector('.dayProduct__rating__value');
  }

  function setRatingActiveWidth(index=ratingValue.innerHTML){
    const ratingActiveWidth =index/0.05;
    var a = ratingActiveWidth.toString()
    a=a+"%"
    ratingActive.style.width=a;
  }
}

sale.forEach((index)=>{
  index.addEventListener("click", ()=>{
    document.querySelector(".sale__botton_active").classList.remove("sale__botton_active");
    index.classList.add("sale__botton_active");
    
  });
});

size1.forEach((index)=>{
  index.addEventListener("click",()=>{
    document.querySelector(".dayProduct__size__content1 .dayProduct__size__size_active").classList.remove("dayProduct__size__size_active");
    index.classList.add("dayProduct__size__size_active");
  });
});
size2.forEach((index)=>{
  index.addEventListener("click",()=>{
    document.querySelector(".dayProduct__size__content2 .dayProduct__size__size_active").classList.remove("dayProduct__size__size_active");
    index.classList.add("dayProduct__size__size_active");
  });
});
size3.forEach((index)=>{
  index.addEventListener("click",()=>{
    document.querySelector(".dayProduct__size__content3 .dayProduct__size__size_active").classList.remove("dayProduct__size__size_active");
    index.classList.add("dayProduct__size__size_active");
  });
});

//товар дня слайдер
var swiper = new Swiper(".dayProduct__slider", {
  navigation: {
    nextEl: ".dayProduct__next",
    prevEl: ".dayProduct__prev",
  },
  allowTouchMove:false,
  spaceBetween: 20,
});

//слайдеры для картинок 
var swiper = new Swiper(".dayProduct__imagesSlider1", {
  navigation: {
    nextEl: ".dayProduct__imagesSleder__next1",
    prevEl: ".dayProduct__imagesSleder__prev1",
  },
  spaceBetween: 20,
});
var swiper = new Swiper(".dayProduct__imagesSlider2", {
  navigation: {
    nextEl: ".dayProduct__imagesSleder__next2",
    prevEl: ".dayProduct__imagesSleder__prev2",
  },
  spaceBetween: 20,
});
var swiper = new Swiper(".dayProduct__imagesSlider3", {
  navigation: {
    nextEl: ".dayProduct__imagesSleder__next3",
    prevEl: ".dayProduct__imagesSleder__prev3",
  },
  spaceBetween: 20,
});