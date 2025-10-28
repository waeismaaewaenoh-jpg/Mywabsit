function toggleHamburgerIcon(el) {
    el.classList.toggle("change");
    btn.setAttribute('aria-expanded', 'false');
    navigator.classList.remove('open');
    document.body.style.overflow = '';
}

const myMenu = document.getElementById("myMenu");
const hamIcon = document.getElementById("hamIcon");

hamIcon.addEventListener("click", function() {
    if (myMenu.style.display === "block") {
        myMenu.style.display = "none";
    } else {
        myMenu.style.display = "block";
        
    }


});


/******************************************/
/******************************************/

/******************************************/
/******************************************/
function togslide(el) {
    el.classList.toggle("change");
    btn.setAttribute('aria-expanded', 'false');
    navigator.classList.remove('open');
    document.body.style.overflow = '';
}

const mybox1 = document.getElementById("mybox1");
const myboxT01 = document.getElementById("myboxT01");

myboxT01.addEventListener("click", function() {
    if (mybox1.style.display === "block") {
        mybox1.style.display = "none";
    } else {
        mybox1.style.display = "block";
        
    }
});


/******************************************/

const mybox2 = document.getElementById("mybox2");
const myboxT02 = document.getElementById("myboxT02");

myboxT02.addEventListener("click", function() {
    if (mybox2.style.display === "block") {
        mybox2.style.display = "none";
    } else {
        mybox2.style.display = "block";
        
    }
});
/******************************************/
const mybox3 = document.getElementById("mybox3");
const myboxT03 = document.getElementById("myboxT03");

myboxT03.addEventListener("click", function() {
    if (mybox3.style.display === "block") {
        mybox3.style.display = "none";
    } else {
        mybox3.style.display = "block";
        
    }
});
//menuhumberger อย่ายุง

/******************************************/
/******************************************/
/******************************************/
/******************************************/
/******************************************/
/******************************************/

function showPage(PageId) {
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(PageId).classList.add('active');
}




function gotoHash() {
      const hash = location.hash;
      if (!hash) return;
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    // เวลาโหลดหน้า ghap.html ให้เลื่อนไปยัง section ที่ส่งมาจาก pass.html
    window.addEventListener('load', () => {
      setTimeout(gotoHash, 50);
    });

    // ถ้าผู้ใช้เปลี่ยน hash ในหน้า ghap เอง (เช่นกดเมนู) ก็เลื่อนให้
    window.addEventListener('hashchange', gotoHash);
    