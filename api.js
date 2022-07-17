// Метод GET

function getActivity() {
  fetch("http://www.boredapi.com/api/activity/", {
    method: "GET",
  })
    .then((res) => {
      return res.json(); // возвращаем результат работы метода и идём в следующий then
    })
    .then((data) => {
      // если мы попали в этот then, data — это объект
      console.log(data);

      // Можно обращаться к ключам объекта
      console.log(data.activity);

      cardQuote.textContent = data.activity;
    })
    .catch((err) => {
      console.log("Ошибка. Запрос не выполнен" + err);
    });
}

// И дальше вызываем функцию там где надо, например в слушателе клика на кнопке

// Метод Post и  создание разметки

// создаёт разметку для поста
function createPostMarkup(post) {
  return `
    <div class="post">
      <p class="post__title">${post.title}</p>
      <p class="post__text">${post.body}</p>
    </div>
  `;
}

// вставляет разметку в DOM
function addPostToDOM(container, markup) {
  container.insertAdjacentHTML("afterbegin", markup);
}

function createPost(newPost) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      title: newPost.title,
      body: newPost.body,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((posts) => {
      posts.forEach((post) => {
        addPostToDOM(
          document.querySelector(".container"),
          createPostMarkup(post)
        );
      });
    });
}

// обработчик сабмита формы
document.forms.post.addEventListener("submit", function (event) {
  event.preventDefault();

  const { title, text } = event.currentTarget.elements;

  createPost({
    title: title.value,
    body: text.value,
  });
});

// Метод Post

const form = document.forms.search;
const content = document.querySelector(".content");
const result = document.querySelector(".content__result");
const error = document.querySelector(".content__error");
const spinner = document.querySelector(".spinner");

form.addEventListener("submit", function submit(e) {
  e.preventDefault();
  renderLoading(true); // Показываем лоадер когда что-то грузится
  search(form.elements.entity.value, form.elements.entityId.value)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(res.status);
    })
    .then((res) => {
      console.log(res);
      renderResult(res.name);
    })
    .catch((err) => {
      renderError(`Ошибка: ${err}`);
    })
    .finally(() => {
      renderLoading(false); // Скрываем лоадер когда загрузилось
    });
});

function search(entity, entityId) {
  return fetch(`https://swapi.nomoreparties.co/${entity}/${entityId}`, {
    method: "GET",
  });
}

function renderResult(text) {
  result.textContent = text;
  error.textContent = "";
}

function renderError(err) {
  result.textContent = "";
  error.textContent = err;
}

function renderLoading(isLoading) {
  if (isLoading) {
    content.classList.add("content_hidden");
    spinner.classList.add("spinner_visible");
  } else {
    content.classList.remove("content_hidden");
    spinner.classList.remove("spinner_visible");
  }
}
