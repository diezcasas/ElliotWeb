document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("expand-news-button"),n=["n1","n2","n3","n4","n5","n6"];e.addEventListener("click",function(t){t.preventDefault();for(let e of document.getElementsByClassName("card-vl"))n.includes(e.id)&&e.classList.toggle("hidden");e.childNodes[1].textContent="expand_more"===e.childNodes[1].textContent?"expand_less":"expand_more"});let t=document.getElementById("menu-collapse-button"),d=document.getElementById("hamburger-nav");d.style.display="none",t.addEventListener("click",function(e){let n="none",l="menu";"none"==d.style.display&&(n="flex",l="clear"),d.style.display=n;for(let e of t.childNodes)"span"==e.localName&&(e.textContent=l)})});