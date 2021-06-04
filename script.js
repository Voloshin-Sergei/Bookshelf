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
const app = document.querySelector('.container')

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

render(data)