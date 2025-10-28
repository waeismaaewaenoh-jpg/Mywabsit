/*header*/

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
/***********************************************/
/***********************************************/
/***********************************************/
/***********************************************/





//slind
 let index = 0;
    const slides = document.getElementById("slides");
    const total = slides.children.length;

    function showSlide() {
      slides.style.transform = `translateX(${-index * 100}%)`;
    }
    function nextSlide() {
      index = (index + 1) % total;
      showSlide();
    }
    function prevSlide() {
      index = (index - 1 + total) % total;
      showSlide();
    }

    // Auto play (ทุก 3 วินาที)
    setInterval(nextSlide, 5000);




    /********************************************************* */
    /********************************************************* */
    /********************************************************* */

    /********************************************************* */
    /********************************************************* */
    /********************************************************* */
    /********************************************************* */

    /**     หน้าของเมนู      **/

    function showPage(pageId) {
      document.querySelectorAll("section").forEach(sec => {sec.classList.remove("active")});
      document.getElementById(pageId).classList.add("active");
    }



    /***   สุด   ***/

    