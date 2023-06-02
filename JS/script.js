let menutoggle=document.getElementById('menu-toggle');
let menulist=document.getElementById('menu-list');

menutoggle.addEventListener('click',function(){
    menulist.classList.toggle('active');
})