import "./styles/index.css";

const card1 = document.getElementById("card1");
const cardBtn = card1.querySelector(".card__button");
const cardErr = card1.querySelector(".card__err");

const card2 = document.getElementById("card2");
const card2Btn = card2.querySelector(".card__button");
const card2Err = card1.querySelector(".card__err");

const formSelect = document.querySelector(".form__select");
const loader = document.querySelector(".loader");

function getRandomActivity() {
  fetch("http://www.boredapi.com/api/activity/", {
    method: "GET",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(res.status);
    })
    .then((data) => {
      // если мы попали в этот then, data — это объект
      showSpinner(true);
      cardRender(data, card1);
    })
    .catch((err) => {
      cardErr.textContent = `Ошибка: ${err}`;
    })
    .finally(() => {
      showSpinner(false);
    });
}

function getRandomActivitybyType() {
  let type = formSelect.value;
  console.log(type);

  fetch(`http://www.boredapi.com/api/activity?type=${type}`, {
    method: "GET",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(res.status);
    })
    .then((data) => {
      // если мы попали в этот then, data — это объект
      showSpinner(true);
      cardRender(data, card2);
    })
    .catch((err) => {
      card2Err.textContent = `Ошибка: ${err}`;
      console.log(err);
    })
    .finally(() => {
      showSpinner(false);
    });
}

function cardRender(data, card) {
  const cardQuote = card.querySelector(".card__quote");
  const cardBtn = card.querySelector(".card__button");

  cardQuote.textContent = data.activity;
  cardBtn.textContent = "What else?";


  if (formSelect.value === "none") {
    cardQuote.textContent = "Choose your activity first";
  }

  // grammar check failed, исправляем ошибку в тексте, подгруженного с апи

  if (data.activity === "Practice coding in your favorite lanaguage") {
    cardQuote.textContent = "Practice coding in your favorite language";
  }
}

function showSpinner(isLoading) {
  if (isLoading) {
    loader.classList.remove("loader_hidden");
  } else {
    loader.classList.add("loader_hidden");
    cardErr.classList.remove("card__err_hidden");
  }
}


cardBtn.addEventListener("click", getRandomActivity);
card2Btn.addEventListener("click", getRandomActivitybyType); 




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
