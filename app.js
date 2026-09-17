const btnPost = document.querySelector("#post");
const btnPosts = document.querySelector("#posts");
const ul = document.querySelector("ul");

btnPost.onclick = () => {
  // code
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "post.json");

  xhr.onload = () => {
    const post = JSON.parse(xhr.responseText)[0];
    const liCreate = `<li>${post.title}</li>`;

    xhr.status === 200 ? (ul.innerHTML = liCreate) : console.log("Error");
  };

  xhr.send();
};

btnPosts.onclick = () => {
  // code
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "posts.json");

  xhr.onload = () => {
    const posts = JSON.parse(xhr.responseText);
    let liCreates = "";

    posts.forEach((post) => {
      liCreates += `<li>${post.title}</li>`;
    });

    xhr.status === 200 ? (ul.innerHTML = liCreates) : console.log("Error");
  };

  xhr.send();
};
