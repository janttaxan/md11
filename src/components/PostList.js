export default class PostList {
  static createHTML() {
    const list = document.createElement('ul');
    list.classList.add('row');
    return list;
  }
}
