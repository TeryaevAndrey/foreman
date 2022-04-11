$('.burger').on('click', function() {
    $('.nav').toggleClass('nav_active');
});

$('.reviews__slider').slick({
    arrows: true,
    prevArrow: '<img class="slider__arrow slider__arrow-previous" src="images/arrow-prev.svg" alt="previous">',
    nextArrow: '<img class="slider__arrow slider__arrow-next" src="images/arrow-next.svg" alt="next">',
    responsive: [
        {
            breakpoint: 501,
            settings: {
                arrows: false, 
                dots: true
            }
        }
    ]
});

$("a[href^='#']").on('click', function() {
    let link = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(link).offset().top - 60
    }, {
        duration: 400,
        easing: "linear",
    });
});


const animationItems = $('.animation__items');
if(animationItems.length > 0) {
    window.addEventListener('scroll', animationOnScroll);
    function animationOnScroll() {
        for(let index = 0; index < animationItems.length; index++) {
            const animationItem = animationItems[index];
            const animationItemHeight = animationItem.offsetHeight;
            const animationItemOffset = offset(animationItem).top;
            const animationStart = 4;
            let animationItemPoint = window.innerHeight - animationItemHeight / animationStart;
            if(animationItemPoint > window.innerHeight) {
                animationItemPoint =  window.innerHeight - window.innerHeight / animationStart;
            }
            if((scrollY > animationItemOffset - animationItemPoint) && scrollY < (animationItemOffset + animationItemHeight)) {
                animationItem.classList.add('show__animate');
            } else {
                if(!animationItem.classList.contains('animation__no-hide')) {
                    animationItem.classList.add('show__animate');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
    }
    setTimeout(() => {
        animationOnScroll();
    }, 300);
};