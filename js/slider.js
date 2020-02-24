"use strict";

let slider = document.querySelector(".slider"),
  slides = slider.querySelectorAll(".slider__item"),
  sliderToggles = slider.querySelector(".slider__toggles"),
  sliderToggleTemplate = sliderToggles.querySelector("#toggle__template").content;

for (let index = 0; index < slides.length; index++) {
  let newToggle = sliderToggleTemplate.cloneNode(true),
    input = newToggle.querySelector("input"),
    label = newToggle.querySelector("label");

  input.id += (index + 1);
  label.htmlFor += (index + 1);
  label.textContent += (` №${index + 1}`)

  if (index == 0) {
    input.checked = true;
  }

  input.addEventListener("change", function () {
    let path = "#" + slides[index].id;
    document.location.href = path;
  })
  sliderToggles.appendChild(newToggle);
}
