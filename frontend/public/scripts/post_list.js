const mainContentElem = document.getElementById('content');

function createListItem(post) {
  const newPostElem = document.createElement('li');
  newPostElem.classList.add('content__list__item');


  newPostElem.innerHTML = `
  <article class="article">
  <img class="article__image" src="https://source.unsplash.com/640x640/?rock-concert" alt="">
  <div class="article__subtitle">
  <span class="article__subtitle__author">${post.author_name}</span>
  <h3 class="article__subtitle__title">${post.post_title}</h3>
  <p class="article__subtitle__content">${post.post_content}</p>
  <button class="article__subtitle__content--btn" data-postid="${post.post_id}"><img src="../public/assets/arrow.svg" alt=""></button>
  </div>
  </article>
  `
  return newPostElem;
}

async function loadPosts() {

  const contentListElem = document.createElement('ol');
  contentListElem.classList.add('content__list');
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


function createSinglePost(post) {

  const newPostSection = document.createElement('section');


  newPostSection.innerHTML = `
  <article class="article">
  <img class="article__image" src="https://source.unsplash.com/640x640/?rock-concert" alt="">
  <div class="article__subtitle">
  <time datetime="">${post.post_date}</time>
  <span class="article__subtitle__author">${post.author_name}</span>
  <h3 class="article__subtitle__title">${post.post_title}</h3>
  <p class="article__subtitle__content">${post.post_content}</p>
  </div>
  </article>
  `
  return newPostSection;
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