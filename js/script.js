let slider = document.querySelector(".slider"),
  slides = slider.querySelectorAll(".slider__item"),
  sliderToggles = slider.querySelectorAll(".slider__toggle");

for (let i = 0; i < sliderToggles.length; i++) {
  sliderToggles[i].addEventListener("change", function () {
    let path = "#" + slides[i].id;
    document.location.href = path;
  })
}
