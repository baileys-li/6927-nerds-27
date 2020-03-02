let link = document.querySelector(".contacts__button"),
  modal = document.querySelector(".contact-us"),
  close = modal.querySelector(".modal__close");

let form = modal.querySelector(".contact-us__form"),
  name = form.querySelector("#contact-us__name"),
  email = form.querySelector("#contact-us__email"),
  letter = form.querySelector("#contact-us__text"),
  isStorageSupport = true,
  storageEmailVal,
  storageNameVal;

try {
  storageEmailVal = localStorage.getItem("email");
  storageNameVal = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal--close");
  modal.classList.add("modal--show");
  if (storageNameVal) {
    name.value = storageNameVal;
    if (storageEmailVal) {
      email.value = storageEmailVal;
    }
    letter.focus();
  } else {
    name.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  closeModal()
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal--show")) {
      evt.preventDefault();
      closeModal()
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!email.value || !letter.value || !name.value) {
    evt.preventDefault();


    modal.classList.remove("modal--error");

    // console.log(modal.offsetWidth);
    modal.offsetWidth == modal.offsetWidth;

    modal.classList.add("modal--error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("email", email.value);
      if (name.value) {
        localStorage.setItem("name", name.value);
      }
    }
  }
});


function closeModal() {
  modal.classList.remove("modal--error");
  modal.classList.remove("modal--show");
  modal.classList.add("modal--close");
}
