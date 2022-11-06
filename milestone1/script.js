$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('scrolly');
        }
        else{
            $('.navbar').removeClass('scrolly'); 
        }
    });
    //toggle to menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// typing animation script
// var typed = new typed(".typing", {
//     strings: ["Photographer", "Athlete", "Soccer"],
//     typeSpeed: 100,
//     backSpeed: 60, 
//     loop: true
// })

// $('.carousel').owlCarousel({
//     margin: 20,
//     loop: true,
//     autoplay: true,
//     autoplayTimeOut: 2000,
//     autoplayHoverPause: true,
//     responsive: {
//         0:{
//             items: 1,
//             nav: false
//         },
//         600:{
//             items: 2,
//             nav: false
//         },
//         1000:{
//             items: 3,
//             nav: false
//         }
//     }
// });




let slideIndex = 0; 
showSlides(); 

function showSlides(){
    let i; 
    let slides = document.getElementsByClassName("mySlides");
    for(i = 0; i < slides.length; i++){
        slides[i].style.display ="none";
    }
    slideIndex++;
    if(slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 10000);
}





// let slideIndex = 1;
// showSlides(slideIndex);

// //next prev control
// function plusSlides(n){
//     showSlides(slideIndex += n);
// }
// //thumbnail image controls
// function currentSlide(n){
//     showSlides(slideIndex = n);
// }
// function showSlides(n){
//     let i; 
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     if(n > slides.length){
//         slideIndex = 1;
//     }
//     if (n<1){slideIndex = slides.length}
//     for(i = 0; i < slides.length; i++){
//         slides[i].getElementsByClassName.display = "none";
//     }
//     for(i = 0; i<dots.length; i++){
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += "active";
// }