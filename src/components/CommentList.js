export default class CommentList {
  static createHTML() {
    const list = document.createElement('ul');
    list.classList.add('collection');
    return list;
  }
}
