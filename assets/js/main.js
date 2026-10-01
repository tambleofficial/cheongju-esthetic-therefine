'use strict';
document.documentElement.classList.add('js');
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#site-nav');
if(toggle&&nav){
 toggle.hidden=false;
 const close=()=>{nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.textContent='메뉴';};
 toggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'닫기':'메뉴';});
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('is-open')){close();toggle.focus();}});
}
const track=document.querySelector('.care-track');
if(track){
 const prev=document.querySelector('[data-prev]'),next=document.querySelector('[data-next]');
 const update=()=>{prev.disabled=track.scrollLeft<2;next.disabled=track.scrollLeft+track.clientWidth>=track.scrollWidth-3;};
 const move=direction=>{const card=track.querySelector('.care-card');const gap=parseFloat(getComputedStyle(track).gap)||0;track.scrollBy({left:direction*(card.getBoundingClientRect().width+gap),behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'});};
 prev.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));
 track.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);update();
}
