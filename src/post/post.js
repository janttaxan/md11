import '../styles.css';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import { getPostItem } from '../api/getPostItem';
import Post from '../components/Post';
import { getComments } from '../api/getComments';
import CommentList from '../components/CommentList';
import Comment from '../components/Comment';

const spinner = new Spinner();
const pageParams = new URLSearchParams(window.location.search);
const commentsList = CommentList.createHTML();

class PostPage {
  constructor(root) {
    this.root = root;
    this.postId = pageParams.get('id');
  }

  static formatDate(inputDate) {
    return new Date(inputDate).toLocaleString();
  }

  async render() {
    try {
      spinner.turnOn();
      const { data } = await getPostItem(this.postId);
      this.root.append(
        new Post(
          data.title,
          data.body,
          data.id,
        ).createHTML(),
      );
      const { commentsData } = await getComments(this.postId);
      if (data && commentsData) spinner.turnOff();
      if (commentsData.data.length > 0) {
        this.root.append(commentsList);
        commentsData.data.map((comment) => (
          commentsList.append(
            new Comment(
              comment.name,
              comment.body,
              PostPage.formatDate(comment.created_at),
              comment.id,
            ).createHTML(),
          )
        ));
      } else {
        const message = document.createElement('span');
        message.classList.add('grey-text');
        message.innerText = 'Комментариев пока нет...';
        this.root.append(message);
      }
    } catch (err) {
      spinner.turnOff();
      this.root.append(new ErrorMessage(String(err)).showError());
    }
  }
}

const PostPageRoot = document.getElementById('blog-post');

new PostPage(PostPageRoot).render().then();
