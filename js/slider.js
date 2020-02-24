"use strict";

let slider = document.querySelector(".slider"),
  slides = slider.querySelectorAll(".slider__item"),
  sliderToggles = slider.querySelector(".slider__toggles");
// sliderToggleTemplate = sliderToggles.querySelector("#toggle__template").content;

for (let index = 0; index < slides.length; index++) {
  let newToggle = document.createElement("li"),
    outputIndex = index + 1;

  let toggleInput = document.createElement("input");
  toggleInput.type = "radio";
  toggleInput.name = "slider";
  toggleInput.id = "slider__toggle--" + outputIndex;
  toggleInput.classList.add("slider__toggle", "visually-hidden")
  if (outputIndex == 1) {
    toggleInput.checked = true;
  }
  newToggle.appendChild(toggleInput);


  let toggleLabel = document.createElement("label");
  toggleLabel.htmlFor = toggleInput.id;
  toggleLabel.textContent = "Перейти к  слайду №" + outputIndex;
  toggleLabel.classList.add("slider__label");
  newToggle.appendChild(toggleLabel);

  toggleInput.addEventListener("change", function () {
    let path = "#" + slides[index].id;
    document.location.href = path;
  })

  sliderToggles.appendChild(newToggle);
}
