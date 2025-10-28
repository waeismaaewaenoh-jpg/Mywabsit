

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

