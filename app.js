const btn = document.querySelector("button");
const ul = document.querySelector("ul");
let num = 1;

btn.onclick = () => {
  // code
  const xhr = new XMLHttpRequest();
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;
  const post = { userId: num, title, body };

  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

  xhr.setRequestHeader("content-type", "application/JSON");

  xhr.onload = () => {
    // code
    const post = JSON.parse(xhr.responseText);
    const liCreate = `<li>${post.title}</li>`;

    xhr.status === 201
      ? (ul.innerHTML = liCreate)
      : console.log("Error not 201");
  };

  xhr.send(JSON.stringify(post));

  num++;
};
