

// Этот код будет исполняться так:
// Движок объявит функцию
// Объявит переменную img
// Запустит код функции loadImage
// Создаст элемент изображения, запишет в него ссылку на картинку;
// Пока картинка загружается, создаст DOM-узел, где расположится изображение;
// Как только изображение загрузится, отрисует его.
// В двух последних шагах кроется проблема. Когда движок создаст DOM-узел, вёрстка «дёрнется», освободив место для нового элемента. Затем, когда изображение загрузится, вёрстка дёрнется ещё раз при появлении картинки на экране


function loadImage(imageUrl) {
  // создаём элемент изображения
  const img = document.createElement('img');
  img.src = imageUrl; // указываем путь к картинке

  return img;
}

// Теперь можно вставить картинку в разметку
const img = loadImage('https://yastatic.net/q/logoaas/v1/Практикум.svg');

document.body.append(img);




// У объекта изображения есть свойства onload и onerror.
//  В них мы можем записать функции.
//  Первая сработает, когда изображение загружено, вторая — если произошла ошибка.
//  Запишем функции в соотвествующие свойства:

// колбэк, который нужно выполнить после того
// как изображение загрузится
function imageLoadCallback(evt) {
  // после загрузки добавим элемент изображения в DOM
  document.body.append(evt.target);
}

// Функция для создания изображения
function loadImage(imageUrl, loadCallback) {
  const img = document.createElement('img');
  img.src = imageUrl;

  // Функция, которая записана в onload
  // будет вызвана после загрузки изображения
  img.onload = loadCallback;
}

// Теперь картинка появится в разметке только после загрузки
loadImage(
  'https://yastatic.net/q/logoaas/v1/Практикум.svg',
  imageLoadCallback
);


// Теперь вёрстка не дёрнется дважды — DOM-элемент создастся, только когда изображение подгружено.



// Функция для вставки текста в контейнер (с обработкой ошибок)


function handleError(tweet) {
  const newTweetContainer = document.createElement('div');
  newTweetContainer.textContent = tweet;
  document.body.append(newTweetContainer);
}

// Добавим третий параметр — колбэк
function insertTweet(tweet, containerSelector, callback) {
    const tweetContainer = document.querySelector(containerSelector);

    if (!tweetContainer) {
        // Вызываем колбэк, если нет контейнера
        callback(tweet);

        return;
    }

    tweetContainer.textContent = tweet;
}

// Вызов будет выглядеть так:
insertTweet('Твит, адресованный Илону Маску', '.tweets', handleError);
