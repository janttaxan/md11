export default class Post {
  constructor(title, body, id, isCard = false) {
    this.title = title;
    this.body = body;
    this.id = id;
    this.isCard = isCard;
  }

  _goBack() {
    if (window.history.length <= 2) {
      return '../';
    } else {
      return 'javascript:history.back()';
    }
  }

  createHTML() {
    const post = document.createElement('li');
    post.classList.add('card', 'horizontal');
    const stacked = document.createElement('div');
    stacked.classList.add('card-stacked');
    const postContent = document.createElement('div');
    postContent.classList.add('card-content');

    let title;
    if (this.isCard) {
      title = document.createElement('span');
    } else {
      title = document.createElement('h1');
    }

    title.classList.add('card-title');
    title.innerText = this.title;

    const body = document.createElement('p');
    if (this.isCard) body.classList.add('card-p');
    body.innerText = this.body;
    postContent.append(title);
    postContent.append(body);
    const postActions = document.createElement('div');
    postActions.classList.add('card-action');
    const link = document.createElement('a');
    link.classList.add('blue-text');

    if (this.isCard) {
      link.href = `./post/?id=${this.id}`;
      link.innerText = 'Read';
    } else {
      link.href = this._goBack();
      link.innerText = 'Back';
    }

    postActions.append(link);
    stacked.append(postContent);
    stacked.append(postActions);
    post.append(stacked);
    return post;
  }
}
