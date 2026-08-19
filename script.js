const menuBtn=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");
const themeBtn=document.getElementById("themeBtn");
menuBtn.addEventListener("click",()=>navLinks.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));
themeBtn.addEventListener("click",()=>{document.body.classList.toggle("dark");themeBtn.textContent=document.body.classList.contains("dark")?"☀":"☾";});
document.getElementById("year").textContent=new Date().getFullYear();
