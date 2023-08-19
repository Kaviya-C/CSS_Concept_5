document.addEventListener('DOMContentLoaded',()=>{
 const sidenavbar=document.querySelector('.side-nav');
 const btnNav=document.querySelector('#button');
 const overlayScreen=document.querySelector('.nav-overlay');

 btnNav.addEventListener('click',()=>{
  sidenavbar.classList.add('open');
 });

 overlayScreen.addEventListener('click',()=>{
  sidenavbar.classList.remove('open');
 });

});