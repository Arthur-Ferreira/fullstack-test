const contentElement = document.getElementById('content');

// Solicitar a API todos os posts:

async function loadPosts() {
  const response = await fetch('http://localhost:3000/api/posts');

  if(!response.ok) {
    alert('Sorry! Something went wrong.');
    return;
  }

  const responseData = await response.json();
  const posts = responseData.posts;

  for (const post of posts) {
    console.log(post);
  }
}

loadPosts();