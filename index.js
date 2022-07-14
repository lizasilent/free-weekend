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
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен');
  });
}

cardBtn.addEventListener("click", getActivity);
