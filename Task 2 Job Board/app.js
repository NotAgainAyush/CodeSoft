//change navbar color
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll>150){
            $(".navbar").css("background", "#222");
            $(".navbar").css("box-shadow", "rgba(0,0,0,0.1)0px 4px 12px");
        }
        else{
            $(".navbar").css("background", "transprent");
            $(".navbar").css("box-shadow", "none");
        }
    })
});

//smooth scroll
$(document).ready(function(){
    $('.navbar-menu a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});

// navbar mobile version

const mobile = document.querySelector(".menu-toggle");
const mobileLink = document.querySelector(".navbar-menu");

mobile.addEventListener("click",function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})

mobileLink.addEventListener("click",function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth <=768 && menuBars){
        mobile.classList.toggle("is-active");
        mobileLink.classList.remove("active");
    }
    
})


//swiper
var swiper = new Swiper(".mySwiper",
    {
        loop: true,
        autoplay: {
            delay:2500,
            disableOnInteraction: false,
        },
        slidesPerView:1,
        spaceBetween:10,
        pagination: {
            e1:".swiper-pagination",
            clickable: true,
        },
        breakpoints:{
            640:{
                slidesPerView: 2,
                spaceBetween:20,
            },
            768:{
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024:{
                slidesPerView:3,
                spaceBetween:50,
            }
        }
    }
)