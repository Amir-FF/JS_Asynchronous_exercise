const btnPost = document.querySelector("#post");
const btnPosts = document.querySelector("#posts");
const ul = document.querySelector("ul");
const inputNumber = document.querySelector("input");

btnPost.onclick = () => {
  // code
  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    `https://jsonplaceholder.typicode.com/posts/${inputNumber.value}`,
  );

  xhr.onload = () => {
    if (inputNumber.value) {
      // code
      const post = JSON.parse(xhr.responseText);
      const liCreate = `<li>${post.title}</li>`;

      xhr.status === 200
        ? (ul.innerHTML = liCreate)
        : console.log("Error not 200");
    } else {
      console.log("Error inputNumber.value");
    }
  };

  xhr.send();
};

btnPosts.onclick = () => {
  // code
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

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
