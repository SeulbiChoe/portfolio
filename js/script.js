var moblieOpenMenu = document.getElementById('mobileOpenMenu');
var header = document.querySelector('header');
var current = 0;
moblieOpenMenu.addEventListener('click', function(){
    if (current == 0) {
        moblieOpenMenu.classList.add('active');
        header.classList.add('slide');
        current = current + 1;
    } else
    if (current > 0) {
        moblieOpenMenu.classList.remove('active');
        header.classList.remove('slide');
        current = 0;
    }
});


var moveDiv1 = document.querySelector('#section2 > div');
var moveDiv2 = document.querySelector('#section3 > div');
var moveDiv3 = document.querySelector('#section4 > div');
var moveDiv4 = document.querySelector('#section5 > div');
var moveDiv5 = document.querySelector('#section6 > div');
var moveDiv6 = document.querySelector('#section7 > div');

window.addEventListener('scroll', function(){
    var scrollY = document.documentElement.scrollTop;
    if (scrollY > 1) {
        header.classList.add("active");
    }
    if (scrollY == 0) {
        header.classList.remove("active");
    }
});

if(matchMedia("screen and (max-width: 767px)").matches){
    window.addEventListener('scroll', function(){
        var scrollY = document.documentElement.scrollTop;
        if (scrollY > 740) {
            moveDiv1.classList.add("active");
        }
        if (scrollY > 1730) {
            moveDiv2.classList.add("active");
        }
        if (scrollY > 2500) {
            moveDiv3.classList.add("active");
        }
        if (scrollY > 3220) {
            moveDiv4.classList.add("active");
        }
        if (scrollY > 4010) {
            moveDiv5.classList.add("active");
        }
        if (scrollY > 4605) {
            moveDiv6.classList.add("active");
        }
        if (scrollY == 0) {
            moveDiv1.classList.remove("active");
            moveDiv2.classList.remove("active");
            moveDiv3.classList.remove("active");
            moveDiv4.classList.remove("active");
            moveDiv5.classList.remove("active");
            moveDiv6.classList.remove("active");
        }
    });
}
else if(matchMedia("screen and (max-width: 1023px)").matches){
    window.addEventListener('scroll', function(){
        var scrollY = document.documentElement.scrollTop;
        if (scrollY > 250) {
            moveDiv1.classList.add("active");
        }
        if (scrollY > 1050) {
            moveDiv2.classList.add("active");
        }
        if (scrollY > 1735) {
            moveDiv3.classList.add("active");
        }
        if (scrollY > 2310) {
            moveDiv4.classList.add("active");
        }
        if (scrollY > 2950) {
            moveDiv5.classList.add("active");
        }
        if (scrollY > 3590) {
            moveDiv6.classList.add("active");
        }
        if (scrollY == 0) {
            moveDiv1.classList.remove("active");
            moveDiv2.classList.remove("active");
            moveDiv3.classList.remove("active");
            moveDiv4.classList.remove("active");
            moveDiv5.classList.remove("active");
            moveDiv6.classList.remove("active");
        }
    });
}
else if(matchMedia("screen and (min-width: 1024px)").matches){
    window.addEventListener('scroll', function(){
        var scrollY = document.documentElement.scrollTop;
        console.log(scrollY)
        if (scrollY > 120) {
            moveDiv1.classList.add("active");
        }
        if (scrollY > 880) {
            moveDiv2.classList.add("active");
        }
        if (scrollY > 1570) {
            moveDiv3.classList.add("active");
        }
        if (scrollY > 2300) {
            moveDiv4.classList.add("active");
        }
        if (scrollY > 3090) {
            moveDiv5.classList.add("active");
        }
        if (scrollY > 3840) {
            moveDiv6.classList.add("active");
        }
        if (scrollY == 0) {
            moveDiv1.classList.remove("active");
            moveDiv2.classList.remove("active");
            moveDiv3.classList.remove("active");
            moveDiv4.classList.remove("active");
            moveDiv5.classList.remove("active");
            moveDiv6.classList.remove("active");
        }
    });
}

let bWidth = window.innerWidth;
    window.addEventListener("resize", () => {
    const nWidth = window.innerWidth;
    if ((bWidth < 768 && nWidth >= 768) || (bWidth > 767 && nWidth <= 767)) {
        location.reload();
    }
    bWidth = nWidth;
});