var dot1 = document.getElementById("dot1");
var img1 = document.getElementById('img1');

var dot2 = document.getElementById("dot2");
var img2 = document.getElementById('img2');

var dot3 = document.getElementById("dot3");
var img3 = document.getElementById('img3');

var dot4 = document.getElementById("dot4");
var img4 = document.getElementById('img4');

var dot5 = document.getElementById("dot5");
var img5 = document.getElementById('img5');

dot1.addEventListener('click',function(){
    img1.style.display = 'block';
    img2.style.display = 'none';
    img3.style.display = 'none';
    img4.style.display = 'none';
    img5.style.display = 'none';
})
dot2.addEventListener('click',function(){
    img2.style.display = 'block';
    img1.style.display = 'none';
    img3.style.display = 'none';
    img4.style.display = 'none';
    img5.style.display = 'none';
})
dot3.addEventListener('click',function(){
    img3.style.display = 'block';
    img1.style.display = 'none';
    img2.style.display = 'none';
    img4.style.display = 'none';
    img5.style.display = 'none';
})
dot4.addEventListener('click',function(){
    img4.style.display = 'block';
    img1.style.display = 'none';
    img3.style.display = 'none';
    img2.style.display = 'none';
    img5.style.display = 'none';
})
dot5.addEventListener('click',function(){
    img5.style.display = 'block';
    img2.style.display = 'none';
    img3.style.display = 'none';
    img4.style.display = 'none';
    img1.style.display = 'none';
})
