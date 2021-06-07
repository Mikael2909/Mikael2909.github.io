var window=document.querySelector('window');
var pro=document.querySelector('.produk h1');
var isi=document.querySelectorAll('.isi');
var ubahnav=document.querySelector('nav');
var nav=document.querySelector('nav ul');
var menu=document.querySelector('.menu');
    let link=document.querySelectorAll('article a');

    var card=document.querySelectorAll('article');

for (let i=0;i<link.length;i++){
    link[i].addEventListener('click',function(e){
       e.preventDefault();
        link[i].classList.toggle('active');
        isi[i].classList.toggle('active');  
    });
};
function menutampil(){
    nav.classList.toggle('active');
}

menu.addEventListener('click',menutampil);
window.addEventListener('scroll',function(){
    if(window.scrollY){
        ubahnav.classList.add('ubah');
       }else if(!window.scrollY){
           ubahnav.classList.remove('ubah');
       }    
});
