const nameInput = document.querySelector("#visitor-name");
const joinButton = document.querySelector("#join-button");
const message = document.querySelector("#message");

function showMessage() {
  const name = nameInput.value.trim();

  if (name === "") {
    message.textContent = "Введите имя.";
    nameInput.focus();
    return;
  }

  else if (name.includes(" ")) {
    message.textContent = "В имени не должно присутствовать пробелов.";
    nameInput.focus();
    return;
  }

  else if (name.length < 2) {
    message.textContent = "Имя должно быть длинной в минимум 2 символа.";
    nameInput.focus();
    return;
  }

  message.textContent = name + ", рады видеть вас в клубе!";
}

joinButton.addEventListener("click", showMessage);
