function toggleMenu(){
  const nav=document.getElementById('nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}
document.querySelectorAll('#nav a').forEach(a=>{
  a.addEventListener('click',()=>{if(window.innerWidth<=800) document.getElementById('nav').style.display='none';});
});
