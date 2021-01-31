import { pagination } from '../utilits/pagination';

export default class Pagination {
  constructor(page, totalPages) {
    this.page = page;
    this.totalPages = totalPages;
  }

  createList() {
    const list = document.createElement('ul');
    list.classList.add('pagination');
    return list;
  }

  createItem(number) {
    const item = document.createElement('li');
    if (this.page === number) item.classList.add('active', 'blue');
    const itemLink = document.createElement('a');
    itemLink.innerText = number;
    if (number !== '...') itemLink.href = `?page=${number}`;
    item.append(itemLink);
    return item;
  }

  create() {
    const list = this.createList();

    pagination(this.page, this.totalPages).map(item => {
      list.append(this.createItem(item));
    });

    return list;
  }
}
