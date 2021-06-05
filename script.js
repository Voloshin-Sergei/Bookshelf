const data = [
  {
    cover: 'assets/img/js_jquery.jpg',
    title: 'JavaScript и jQuery',
    author: 'Макфарланд Дэвид',
    year: '2016',
  },
  {
    cover: 'https://img-gorod.ru/24/582/2458293_detail.jpg',
    title: 'Изучаем программирование на JavaScript',
    author: 'Эрик Фримен, Элизабет Робсон',
    year: '2017',
  },
  {
    cover: 'https://cdn1.ozone.ru/multimedia/c1200/1007123068.jpg',
    title: 'Секреты JavaScript ниндзя',
    author: 'Бэар Бибо, Джон Резиг',
    year: '2017',
  },
  {
    cover: 'https://cdn1.ozone.ru/multimedia/c1200/1015269939.jpg',
    title: 'ES6 и не только',
    author: 'Кайл Симпсон',
    year: '2017',
  },
];
const app = document.getElementById('books-container');
const addBtn = document.querySelector('.button_add');
const bookList = document.createElement('ul');

// render function
function render() {
  app.innerHTML = '';
  bookList.innerHTML = '';
  bookList.classList.add('books-list');
  app.appendChild(bookList);
  data.forEach((item, index) => {
    bookList.insertAdjacentHTML(
      'beforeend',
      `
    <li class="item" data-item="${index}">
    <div class="item__cover">
      <img src="${item.cover}" alt="${item.title}" width="150" />
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
    `,
    );
  });
}

// remove book function
const removeBook = (evt) => {
  const { target } = evt;
  const removeBtn = target.closest('.button_remove');

  if (removeBtn) {
    const index = removeBtn.parentNode.parentNode.getAttribute('data-item');
    data.splice(index, 1);
  }

  render();
};

// add new book function
const addBook = (evt) => {
  evt.preventDefault();
  const newBook = {};
  const titleBook = document.getElementById('title').value;
  const authorBook = document.getElementById('author').value;
  const yearBook = document.getElementById('year').value;
  const coverBook = document.getElementById('cover').value;

  newBook.cover = coverBook;
  newBook.title = titleBook;
  newBook.author = authorBook;
  newBook.year = yearBook;

  data.push(newBook);

  render();
};

// render form for book card
const formForBook = (evt) => {
  let title = 'Редактирование книги';

  if (evt.target === addBtn) {
    title = 'Добавить книгу';
  }

  app.innerHTML = '';
  app.innerHTML = `
  <form class="book-form" id="form" method="post">
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
    <input class="book-form__input" type="number" id="year" placeholder="Введите год" max="2017" min="2000" required />
  </div>
  <div class="book-form__group">
    <label for="cover">Изображение</label>
    <input class="book-form__input" type="text" id="cover" placeholder="Добавьте обложку книги" required />
  </div>
    <button class="button button_save" type="submit">Сохранить</button>
    <button class="button button_cancel" type="button">Отменить</button>
</form>
  `;

  const cancelBtn = app.querySelector('.button_cancel');
  cancelBtn.addEventListener('click', render);

  const saveBook = document.getElementById('form');
  saveBook.addEventListener('submit', addBook);
};

addBtn.addEventListener('click', formForBook);
bookList.addEventListener('click', removeBook);

render();
