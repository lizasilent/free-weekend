const cardQuote = document.querySelector(".card__quote");
const cardBtn = document.querySelector(".card__button");
const loader = document.querySelector(".loader");

function getActivity() {
  fetch("http://www.boredapi.com/api/activity/", {
    method: "GET",
  })
    .then((res) => {
      return res.json(); // возвращаем результат работы метода и идём в следующий then
    })
    .then((data) => {
      // если мы попали в этот then, data — это объект
      showSpinner(true);
      cardRender(data);
    })
    .catch((err) => {
      console.log("Ошибка. Запрос не выполнен" + err);
      console.log(err);
    })
    .finally(() => {
      showSpinner(false);
    });
}

cardBtn.addEventListener("click", getActivity);

function cardRender(data) {
  cardQuote.textContent = data.activity;
  cardBtn.textContent = "What else?";
}

function showSpinner(isLoading) {
  if (isLoading) {
    loader.classList.remove("loader_hidden");
  } else {
    loader.classList.add("loader_hidden");
  }
}

// function getWeather() {
//   fetch('https://api.weather.yandex.ru/v2/informers?lat=59.9386&lon=30.3141&lang=en_US',
//   {
//     method: 'GET',
//     headers: {
//       'X-Yandex-API-Key': "7928440d-89d9-41c2-9640-499a09c7572e",
//     },
//   })
//   .then((res) => {
//     return res.json(); // возвращаем результат работы метода и идём в следующий then
//   })
//   .then((data) => { // если мы попали в этот then, data — это объект
//     console.log(data);

//   })
//   .catch((err) => {
//     console.log('Ошибка. Запрос не выполнен' + err);
//   });
// }

// getWeather();
