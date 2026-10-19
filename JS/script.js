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

const topics = [ 

  { 

    title: '"1984"', 

    description: "Джордж Оруэл", 

    category: "dystopian" 

  }, 

  { 

    title: '"Великий Гэтсби"', 

    description: "Френсис Скотт", 

    category: "novel" 

  }, 

  { 

    title: '"Приключения Тома Сойера"', 

    description: "Марк Твен", 

    category: "novel" 

  } 

]; 

const topicList = document.querySelector("#topic-list"); 

const topicCount = document.querySelector("#topic-count"); 

function addCard(topic) { 

  const card = document.createElement("article"); 

  card.className = "card"; 

  const title = document.createElement("h3"); 

  title.textContent = topic.title; 

  const description = document.createElement("p"); 

  description.textContent = topic.description; 

  card.append(title, description); 

  topicList.append(card); 

}

const categoryFilter = document.querySelector("#category-filter"); 

function renderTopics() { 

  topicList.replaceChildren(); 

  const selectedCategory = categoryFilter.value; 

  let shown = 0; 

  for (const topic of topics) { 

    if (selectedCategory === "all" || 

        topic.category === selectedCategory) { 

      addCard(topic); 

      shown = shown + 1; 

    } 

  } 

  topicCount.textContent = "Тем на странице: " + shown; 

  if (shown === 0) { 

    topicCount.textContent = "Тем пока нет."; 

  } 

} 

categoryFilter.addEventListener("change", renderTopics); 

renderTopics(); 