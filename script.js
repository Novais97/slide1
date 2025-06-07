  
   let currentSlide = 1;
  const totalSlides = 5;

  setInterval(() => {
    document.getElementById(`slide${currentSlide}`).checked = true;
    currentSlide++;
    if (currentSlide > totalSlides) currentSlide = 1;
  }, 2000); // 2000 = 2 segundos