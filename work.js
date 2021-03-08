
var i = 0;
var images = [];
var time = 3000;    

// images list
images[0] = './images/imedtitle.jpg';
images[1] = './images/musisiqueT.jpg';
images[2] = './images/photogroupe.jpg';  



// change image 
function changeImg(){
document.slide.src = images[i];
if(i < images.length - 1){
i++;
} else{
       i = 0;
}
setTimeout("changeImg()", time)

};
window.onload = changeImg;

var i = 0;
var images = [];
var time = 3000;    

// images list
images[0] = './images/imedtitle.jpg';
images[1] = './images/musisiqueT.jpg';
images[2] = './images/photogroupe.jpg';  



// change image 
function changeImg(){
document.slide.src = images[i];
if(i < images.length - 1){
i++;
} else{
       i = 0;
}
setTimeout("changeImg()", time)

};
window.onload = changeImg; 

