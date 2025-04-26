document.addEventListener("DOMContentLoaded", function () {
  let btnMenu = document.querySelector(".burger");
  let headerMenu = document.querySelector("#menu");
  let btnAddCards = document.querySelector("#addCards");
  let cards = document.querySelector(".cards");
  let ceramicsCard = document.querySelectorAll(".ceramics__card");
  const emailInput = document.getElementById("emailValue");
  const submitBtn = document.getElementById("btnSubmit");
  const errorMessage = document.querySelector(".subscribe p");
  const formContainer = document.querySelector(".subscribe .form");

  btnMenu.addEventListener("click", () => {
    headerMenu.classList.toggle("open");
  });

  btnAddCards.addEventListener("click", () => {
    for (let card of ceramicsCard) {
      let item = card.cloneNode(true);
      cards.appendChild(item);
    }
    btnAddCards.style.display = "none";
  });

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    emailInput.classList.remove("error");
    errorMessage.textContent = "";
    errorMessage.style.display = "none";

    if (!emailInput.value.trim()) {
      showError("Поле email обязательно для заполнения");
      isValid = false;
    } else if (!emailRegex.test(emailInput.value)) {
      showError("Введите корректный email (например: example@mail.com)");
      isValid = false;
    }

    if (isValid) {
      showSuccess("Подписка оформлена успешно!");
    }
  });

  function showError(message) {
    emailInput.classList.add("error");
    errorMessage.textContent = message;
    errorMessage.style.color = "#ff0000";
    errorMessage.style.display = "block";

    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 2000);
  }

  function showSuccess(message) {
    errorMessage.textContent = message;
    errorMessage.style.color = "#00aa00";
    errorMessage.style.display = "block";

    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 2000);
  }
});
