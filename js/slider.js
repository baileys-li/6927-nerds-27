try {
  let slider = document.querySelector(".slider"),
    sliderList = slider.querySelector(".slider__list"),
    slides = sliderList.querySelectorAll(".slider__item"),
    sliderToggles = slider.querySelector(".slider__toggles");

  for (let index = 0; index < slides.length; index++) {
    let newToggle = document.createElement("li"),
      outputIndex = index + 1;

    let toggleInput = document.createElement("input");
    toggleInput.type = "radio";
    toggleInput.name = "slider";
    toggleInput.id = "slider__toggle--" + outputIndex;
    toggleInput.classList.add("slider__toggle");
    toggleInput.classList.add("visually-hidden");
    if (outputIndex == 1) {
      toggleInput.checked = true;
    }
    toggleInput.addEventListener("change", function () {
      let coords = slides[index].getBoundingClientRect();
      sliderList.scrollLeft += coords.x;
    })

    newToggle.appendChild(toggleInput);


    let toggleLabel = document.createElement("label");
    toggleLabel.htmlFor = toggleInput.id;
    toggleLabel.textContent = "Перейти к  слайду №" + outputIndex;
    toggleLabel.classList.add("slider__label");
    newToggle.appendChild(toggleLabel);

    sliderToggles.appendChild(newToggle);
  }

} catch (error) {
  console.log("No slider at this page")
}
