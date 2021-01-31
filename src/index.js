// const ACCESS_TOKEN = '3a36bd605bb7e3f17e45e60fec651c2ccdb7820913fa518af7cadf3af2816cc0';
import './styles.css';
import PostList from './components/PostList';
import Post from './components/Post';
import { getPostList } from './api/getPostList';
import Spinner from './components/Spinner';
import ErrorMessage from './components/ErrorMessage';
import Pagination from './components/Pagination';

const spinner = new Spinner();
const pageParams = new URLSearchParams(window.location.search);
const list = PostList.createHTML();

class App {
  constructor(root) {
    this.root = root;
    this.page = +pageParams.get('page') || 1;
  }

  async render() {
    try {
      spinner.turnOn();
      const {
        data,
        meta: {
          pagination: {
            pages,
          },
        },
      } = await getPostList(this.page);
      if (data) spinner.turnOff();

      this.root.append(list);
      data.map((post) => (
        list.append(
          new Post(
            post.title,
            post.body,
            post.id,
            true,
          ).createHTML(),
        )
      ));
      this.root.append(new Pagination(this.page, pages).create());
    } catch (err) {
      spinner.turnOff();
      this.root.append(new ErrorMessage(String(err)).showError());
    }
  }
}

const appRoot = document.getElementById('blog-list');

new App(appRoot).render().then();
