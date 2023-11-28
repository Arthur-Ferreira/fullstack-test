import createNewElement from "./config/utils";
import { createListItem, createSinglePost } from "./config/create_post";

const mainContentElem = document.getElementById('content');


async function loadPosts() {

  const contentListElem = createNewElement('ol', 'content__list');
  // Solicitar a API todos os posts:
  try {
    const response = await fetch('http://localhost:3000/api/posts');

    if (!response.ok) {
      alert('Sorry! Something went wrong.');
      return;
    }

    const responseData = await response.json();
    const posts = responseData.posts;

    for (const post of posts) {
      const postElem = createListItem(post)
      contentListElem.appendChild(postElem);
    }
    
    mainContentElem.appendChild(contentListElem);

    const articleBtn = document.querySelectorAll('.article__subtitle__content--btn');

    articleBtn.forEach(btn => {
      btn.addEventListener('click', loadSinglePost);
    });

  } catch (error) {
    console.log(error);
  }
  return mainContentElem;
}


async function loadSinglePost(event) {
  const postId = event.target.parentElement.dataset.postid
  const response = await fetch(`http://localhost:3000/api/posts/${postId}`);

  if (!response.ok) {
    alert('Sorry! Something went wrong.');
    return;
  }

  const responseData = await response.json();
  const [post] = responseData.post;

  const newPostElem = createSinglePost(post);
  mainContentElem.innerHTML = '';
  mainContentElem.appendChild(newPostElem);
}



loadPosts();