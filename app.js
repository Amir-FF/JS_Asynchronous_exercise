const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const loading = document.querySelector("#app div");
loading.classList.add("d-none");

// btn.onclick = () => {
//   loading.classList.remove("d-none");

//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//       return res.json();
//     })
//     .then((posts) => {
//       // codes
//       loading.classList.add("d-none");

//       let output = "";
//       posts.forEach((post) => {
//         output += `<li>${post.title}</li>`;
//       });

//       ul.innerHTML = output;
//     })
//     .catch((err) => console.log(err));
// };

btn.onclick = async function () {
  try {
    loading.classList.remove("d-none");
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    loading.classList.add("d-none");

    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });

    ul.innerHTML = output;
  } catch (err) {
    console.log(err);
  }
};
