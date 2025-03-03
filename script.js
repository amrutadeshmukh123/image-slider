var image = document.querySelectorAll('.image-gallery img')
var btnNext1 = document.querySelector('#btnNext')
var btnPrev1 = document.querySelector('#btnPrev')
const navItems = document.querySelectorAll(".links a");



document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menuIcon");
    const navLinks = document.getElementById("navLinks");
    menuIcon.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});

navItems.forEach((item) => {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active"); 
        window.location.href = "index.html";
    });
});


var count=0

image.forEach((image)=>{
    image.style.left=`${count*100}%`
    count++
})
var counter=0
btnNext1.addEventListener('click',()=>{
    counter++
    if(counter>5){
        counter=0
    }
    image.forEach((image)=>{
        image.style.transform=`translateX(-${counter*100}%)`
    })

})  
btnPrev1.addEventListener('click',()=>{
    counter--
    if(counter<0){
        counter=5
    }
    image.forEach((image)=>{
        image.style.transform=`translateX(-${counter*100}%)`
    })
})  

setInterval(() => {
    counter++
    if(counter>5){
        counter=0
    }
    image.forEach((image)=>{
        image.style.transform=`translateX(-${counter*100}%)`
    })
},5000);


