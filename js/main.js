const nav=document.getElementById("nav");
const menu=document.querySelector(".menu");
function toggleNav(){
  const open=nav.classList.toggle("navopen");
  menu.setAttribute("aria-expanded",open?"true":"false");
  menu.setAttribute("aria-label",open?"Close menu":"Open menu");
}
document.querySelectorAll(".links a").forEach(a=>a.addEventListener("click",()=>{
  nav.classList.remove("navopen");menu.setAttribute("aria-expanded","false");menu.setAttribute("aria-label","Open menu");
}));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(e=>io.observe(e));
