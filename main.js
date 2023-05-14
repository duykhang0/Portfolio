// Mobile
const nav = document.getElementById('nav-ul');
const menu = document.getElementById('mobile');
const closeX = document.getElementById('close');
if(nav){
    menu.addEventListener('click', ()=>{
        nav.style.right = 0 + 'px';
    })
}

if(closeX){
    closeX.addEventListener('click', ()=>{
        nav.style.right = -300 + 'px';
    })
}
// Tab
const headerNav = document.querySelectorAll('#header-nav');
headerNav.forEach(item =>{
    item.addEventListener('click',function(event){
        if(event.target.classList.contains('nav-item')){
            let lastActive = item.querySelector('li.active');
            let newActive = event.target;
            
            lastActive.classList.remove('active');
            newActive.classList.add('active');

            let lastContentActive = document.querySelector('.tab.active');
            let newContentActive = document.getElementById(newActive.dataset.target);
            
            lastContentActive.classList.remove('active');
            newContentActive.classList.add('active');

            nav.style.right = -300 + 'px';
        }
    })
})

// More info
const btnMoreInfo = document.getElementById('resume');
const overplay = document.querySelector('.overplay');
const moreInfo = document.querySelector('.more-info');
const times = document.getElementById('times');
if(btnMoreInfo){
    btnMoreInfo.addEventListener('click',function(){
        overplay.style.display = 'block';
        moreInfo.style.display = 'block';
    })
}
if(times){
    times.addEventListener('click',function(){
        overplay.style.display = 'none';
        moreInfo.style.display = 'none';
    })
}

// Project Slider
let items =document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 0;
function loadShow(){
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for(var i= active +1 ; i < items.length ; i++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1-0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = stt-1;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 :0.6;
    }
    stt = 0
    for(var i = active -1 ; i >= 0 ; i--){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1-0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 :0.6;
    }
}
loadShow();
// next.onclick = function(){
//     active = active + 1 < items.length ? active + 1 : active;
// }
next.addEventListener('click',()=>{
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
})

prev.addEventListener('click',()=>{
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
})