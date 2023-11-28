import createNewElement from "./utils";


function createListItem(post) {
  const newPostElem = createNewElement('li', 'content__list__item');
  const newArticlePost = createNewElement('article', 'article');

  newArticlePost.innerHTML = `
    <img class="article__image" src="https://source.unsplash.com/640x640/?rock-concert" alt="">
    <div class="article__subtitle">
    <span class="article__subtitle__author">${post.author_name}</span>
    <h3 class="article__subtitle__title">${post.post_title}</h3>
    <p class="article__subtitle__content">${post.post_content}</p>
    <button class="article__subtitle__content--btn" data-postid="${post.post_id}"><img src="../public/assets/arrow.svg" alt=""></button>
    </div>
  `;

  newPostElem.appendChild(newArticlePost);
  return newPostElem;
}



function createSinglePost(post) {
  // Elements creation
  const newPostSection = createNewElement('section', 'post');
  const newPostArticle = createNewElement('article', 'post__article');

  const newPostHeader = createNewElement('div', 'post__article__header');

  // Image creation
  const newPostHeaderImage = createNewElement('img', 'post__article__header__image');
  // Image attribute set
  newPostHeaderImage.setAttribute('src', 'https://source.unsplash.com/640x640/?rock-concert')


  const newPostHeaderInfo = createNewElement('div', 'post__article__header__info');

  const newPostHeaderInfoTime = createNewElement('time', 'post__article__header__info__time');
  newPostHeaderInfoTime.textContent = post.post_date;
  const newPostHeaderInfoSpan = createNewElement('span', 'post__article__header__info__author');
  newPostHeaderInfoSpan.textContent = post.author_name;
  const newPostHeaderInfoTitle = createNewElement('h3', 'post__article__header__info__title');
  newPostHeaderInfoTitle.textContent = post.post_title;
  const newPostHeaderInfoContent = createNewElement('p', 'post__article__content');
  newPostHeaderInfoContent.textContent = post.post_content;
  // Elements creation end

  // Elements append
  newPostHeaderInfo.appendChild(newPostHeaderInfoTime);
  newPostHeaderInfo.appendChild(newPostHeaderInfoSpan);
  newPostHeaderInfo.appendChild(newPostHeaderInfoTitle);

  newPostHeader.appendChild(newPostHeaderImage);
  newPostHeader.appendChild(newPostHeaderInfo);

  newPostArticle.appendChild(newPostHeader);
  newPostArticle.appendChild(newPostHeaderInfoContent);

  newPostSection.appendChild(newPostArticle);
  // Elements append end

  return newPostSection;
}

export {
  createListItem,
  createSinglePost
}