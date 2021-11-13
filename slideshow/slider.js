var prev = document.getElementById("prev");
var next = document.getElementById("next");

prev.addEventListener("click",plusSlides);
next.addEventListener("click",plusSlides);

document.addEventListener("keydown", plusSlidesKeydown);


var dots = document.getElementsByClassName("dot");
for(let i = 0; i<dots.length;i++){
    dots[i].addEventListener("click",currentSlide);
}

var imgs = document.getElementsByClassName("img");
for(let i = 0; i <imgs.length;i++){
    imgs[i].addEventListener("click",showImage);
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(e) {
    if(e.target.className === "prev"){
        showSlides(slideIndex -= 1);
        return;
    }
    showSlides(slideIndex +=1);
    return;
}
function plusSlidesKeydown(e){
    if(e.keyCode == "37"){
        showSlides(slideIndex -= 1);
        return;
    }else if(e.keyCode == "39"){
        showSlides(slideIndex +=1);
        return;
    }
}

function currentSlide(e) {
    for(let i = 0; i< dots.length;i++){
        if(e.target === dots[i]){
            showSlides(slideIndex = i+1);
        }
    }
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showImage(e){
    for(let i = 0;i<imgs.length;i++){
        if(e.target === imgs[i]){
            let im = e.currentTarget;
            let slideshowContainer = im.parentElement.parentElement;
            slideshowContainer.style.margin = "5%";
            slideshowContainer.style.width = "90vw";
            slideshowContainer.style.hight = "90vh";
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < dots.length; i++) {
                dots[i].style.display = "none";
            }
 
            var child = document.createElement("div");
            child.innerHTML = "X";
            child.classList.add("once");
            child.id = "once";
            if(!im.parentElement.classList.contains("once")){
                im.parentElement.classList.add("once");
                im.parentElement.appendChild(child);
                child.style.cursor = "pointer";
                child.style.position = "absolute";
                child.style.top = "0";
                child.style.right = "0";
                child.style.backgroundColor = "red";
                child.style.color = "black";
                child.style.display = "inline";
            }
            child.addEventListener("click" , handleChild);
            document.addEventListener("keydown", handleChildKeydown);
            function handleChild(e){
                if(e.target){
                    im.parentElement.removeChild(child);
                    im.parentElement.classList.remove("once");
                    for (i = 0; i < dots.length; i++) {
                        dots[i].style.removeProperty("display");
                    }
                    slideshowContainer.style.removeProperty("height");
                    slideshowContainer.style.width = "50%"
                    slideshowContainer.style.margin = "auto"
                }
            }
            function handleChildKeydown(e){
                if(e.keyCode == "39" || e.keyCode == "37"){
                    im.parentElement.removeChild(child);
                    im.parentElement.classList.remove("once");
                    for (i = 0; i < dots.length; i++) {
                        dots[i].style.removeProperty("display");
                    }
                    slideshowContainer.style.removeProperty("height");
                    slideshowContainer.style.width = "50%"
                    slideshowContainer.style.margin = "auto"
                }
            }
        }
    }
}