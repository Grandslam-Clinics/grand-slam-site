document.addEventListener("DOMContentLoaded", ()=>{
  const yearEl=document.getElementById("year");
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle (simple)
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("navLinks");
  if(toggle){
    toggle.addEventListener("click",()=>{
      nav.classList.toggle("open");
    });
  }
});
