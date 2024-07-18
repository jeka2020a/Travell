let img1 = document.querySelector(".banner__box1");
let img2 = document.querySelector(".banner__box2");
let img3 = document.querySelector(".banner__box3");
let img4 = document.querySelector(".banner__box4");
let shadow = document.querySelector(".banner__box-shadow");
let title1 = document.getElementById("title__1");
let title2 = document.getElementById("title__2");
let title3 = document.getElementById("title__3");
let title4 = document.getElementById("title__4");

img1.addEventListener("mouseover", function(){
    this.style.width = "900px";

    img2.style.width = "200px";
    img3.style.width = "200px";
    img4.style.width = "200px";

    title1.style.opacity = "1";
    title2.style.opacity = "0";
    title3.style.opacity = "0";
    title4.style.opacity = "0";
});


img2.addEventListener("mouseover", function(){
    this.style.width = "900px";

    img1.style.width = "200px";
    img3.style.width = "200px";
    img4.style.width = "200px";
    title1.style.opacity = "0";
    title2.style.opacity = "1";
    title3.style.opacity = "0";
    title4.style.opacity = "0";
});

img3.addEventListener("mouseover", function(){
    this.style.width = "900px";

    img1.style.width = "200px";
    img2.style.width = "200px";
    img4.style.width = "200px";
    title1.style.opacity = "0";
    title2.style.opacity = "0";
    title3.style.opacity = "1";
    title4.style.opacity = "0";
});


img4.addEventListener("mouseover", function(){
    this.style.width = "900px";

    img1.style.width = "200px";
    img2.style.width = "200px";
    img3.style.width = "200px";
    title1.style.opacity = "0";
    title2.style.opacity = "0";
    title3.style.opacity = "0";
    title4.style.opacity = "1";
});