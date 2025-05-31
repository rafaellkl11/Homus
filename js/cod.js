let img = ["img/homus1.webp", "img/homus2.jpg", "img/homus3.webp", "img/homus4.avif"];
var n = 0;

function proxPagina(){
    console.log(img[n]);
    console.log(n);
    n = n+1;
    if (n == img.length){
        n = 0
    }
    document.getElementById("img").src = img[n];
}
function antPagina(){
    console.log(img[n]);
    console.log(n);
    n = n-1;
    if (n == -1){
        n = img.length - 1
    }
    document.getElementById("img").src = img[n];
}