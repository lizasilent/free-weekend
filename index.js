

fetch('http://www.boredapi.com/api/activity/', {
  method: 'GET'
  })
.then((res) => {
  return res.json(); // возвращаем результат работы метода и идём в следующий then
})
.then((data) => {
  console.log(data);
  console.log(data.activity);// если мы попали в этот then, data — это объект
})
.catch((err) => {
  console.log('Ошибка. Запрос не выполнен');
});


const cardQuote = document.querySelector(".card__quote");

