const data = [
  {
    cover: 'assets/img/js_jquery.jpg',
    title: 'JavaScript и jQuery',
    author: 'Макфарланд Дэвид',
    year: '2016'
  },
  {
    cover: 'https://img-gorod.ru/24/582/2458293_detail.jpg',
    title: 'Изучаем программирование на JavaScript',
    author: 'Эрик Фримен, Элизабет Робсон',
    year: '2017'
  },
  {
    cover: 'https://cdn1.ozone.ru/multimedia/c1200/1007123068.jpg',
    title: 'Секреты JavaScript ниндзя',
    author: 'Бэар Бибо, Джон Резиг',
    year: '2017'
  },
  {
    cover: 'https://cdn1.ozone.ru/multimedia/c1200/1015269939.jpg',
    title: 'ES6 и не только',
    author: 'Кайл Симпсон',
    year: '2017'
  },
]
const app = document.querySelector('#books-container');
const addBtn = document.querySelector('.button_add')

// render function
const render = (data) => {
const bookList = document.createElement('ul')
bookList.classList.add('books-list')
app.appendChild(bookList)
data.forEach(item => {
  bookList.insertAdjacentHTML('beforeend',
    `
    <li class="item">
    <div class="item__cover">
      <img src="${item.cover}" alt=${item.title} />
    </div>
    <div class="item__description">
      <p class="description__title">${item.title}</p>
      <p class="description__author">${item.author}</p>
      <p class="description__year">${item.year} г.</p>
    </div>
    <div class="item__buttons">
      <button class="button button_edit">Редактировать</button>
      <button class="button button_remove">Удалить</button>
    </div>
  </li>
    `
  )
});
}

// add book function
const addBook = (evt) => {
  let title = 'Редактирование книги'

  if(evt.target === addBtn) {
    title = 'Добавить книгу'
  }

  app.innerHTML = '';
  app.innerHTML =
  `
  <form class="book-form">
  <h3 class="book-form__title">${title}</h3>
  <div class="book-form__group">
    <label for="title">Название</label>
    <input class="book-form__input" type="text" id="title" placeholder="Введите название книги" required />
  </div>
  <div class="book-form__group">
    <label for="author">Автор</label>
    <input class="book-form__input" type="text" id="author" placeholder="Введите имя автора" required />
  </div>
  <div class="book-form__group">
    <label for="year">Год издания</label>
    <input class="book-form__input" type="number" id="year" placeholder="Введите год" max="2017" required />
  </div>
  <div class="book-form__group">
    <label for="cover">Изображение</label>
    <input class="book-form__input" type="text" id="cover" placeholder="Добавьте обложку книги" required />
  </div>
    <button class="button button_save" type="submit">Сохранить</button>
    <button class="button button_cancel" type="button">Отменить</button>
</form>
  `
}

addBtn.addEventListener('click', addBook)

render(data)