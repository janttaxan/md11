export default class Comment {
  constructor(author, body, createdAt, id) {
    this.author = author;
    this.body = body;
    this.createdAt = createdAt;
    this.id = id;
  }

  createHTML() {
    const comment = document.createElement('li');
    comment.classList.add('collection-item');

    const authorName = document.createElement('span');
    authorName.classList.add('title', 'grey-text');
    authorName.innerText = this.author;

    const created = document.createElement('span');
    created.classList.add('title', 'grey-text');
    created.innerText = ` | ${this.createdAt}`;

    const commentText = document.createElement('p');
    commentText.innerText = this.body;

    comment.append(authorName);
    comment.append(created);
    comment.append(commentText);

    return comment;
  }
}
