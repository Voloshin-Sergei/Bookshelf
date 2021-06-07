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

  if (data.length === 0) {
    app.innerHTML = '<h3 class="title">Полка пуста. Добавьте книгу.</h3>';
  } else {
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
}

// remove book function
const removeBook = (index) => {
  data.splice(index, 1);
  render();
};

// add new book function
const addBook = (evt, book) => {
  evt.preventDefault();
  data.push(book);
  render();
};

// edit book function
const editBook = (evt, book) => {
  data[evt] = book;
  render();
};

// checking path for the book cover
const checkPathCover = (value) => {
  const pattern = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
  if (pattern.test(value)) {
    return value;
  }
  return `assets/img/${value}`;
};

// render form for book card
const formForBook = (evt) => {
  let title = 'Редактирование книги';

  if (evt.target === addBtn) {
    title = 'Добавить книгу';
  }

  app.innerHTML = '';
  app.innerHTML = `
  <form class="book-form" id="form">
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

  const titleBook = document.getElementById('title');
  const authorBook = document.getElementById('author');
  const yearBook = document.getElementById('year');
  const coverBook = document.getElementById('cover');

  const book = {};

  if (typeof evt === 'number') {
    coverBook.value = data[evt].cover;
    titleBook.value = data[evt].title;
    authorBook.value = data[evt].author;
    yearBook.value = data[evt].year;
  }

  const cancelBtn = app.querySelector('.button_cancel');
  cancelBtn.addEventListener('click', render);

  const saveBook = document.querySelector('#form');
  saveBook.addEventListener('submit', () => {
    book.title = titleBook.value;
    book.author = authorBook.value;
    book.year = yearBook.value;
    book.cover = checkPathCover(coverBook.value);

    if (evt.target === addBtn) {
      addBook(evt, book);
    } else {
      editBook(evt, book);
    }
  });
};

// change book list function
const changeBookList = (evt) => {
  const { target } = evt;
  const removeBtn = target.closest('.button_remove');
  const editBtn = target.closest('.button_edit');
  const index = target.parentNode.parentNode.getAttribute('data-item');

  if (removeBtn) {
    removeBook(index);
  }

  if (editBtn) {
    formForBook(Number(index));
  }
};

addBtn.addEventListener('click', formForBook);
bookList.addEventListener('click', changeBookList);

render();
