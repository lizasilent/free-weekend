const cardQuote = document.querySelector(".card__quote");
const cardBtn = document.querySelector(".card__button");



function getActivity() {
  fetch('http://www.boredapi.com/api/activity/', {
    method: 'GET'
    })
  .then((res) => {
    return res.json(); // возвращаем результат работы метода и идём в следующий then
  })
  .then((data) => { // если мы попали в этот then, data — это объект
    console.log(data);
    console.log(data.activity);

    cardQuote.textContent = data.activity;
    cardBtn.textContent = "What else?";

  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен');
  });
}

cardBtn.addEventListener("click", getActivity);



// // создаёт разметку для поста
// function createPostMarkup(post) {
//   return `
//     <div class="post">
//       <p class="post__title">${post.title}</p>
//       <p class="post__text">${post.body}</p>
//     </div>
//   `;
// }

// // вставляет разметку в DOM
// function addPostToDOM(container, markup) {
//   container.insertAdjacentHTML('afterbegin', markup);
// }

// // Получает данные с сервера
// function getPosts() {
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//       console.log(data);
//   })
//   .catch((err) => {
//     console.log('Ошибка. Запрос не выполнен: ', err);
//   });
// }

// getPosts();
