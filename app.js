const btn = document.querySelector("button");
const ul = document.querySelector("ul");

// btn.onclick = () => {
//   fetch("posts.json")
//     .then((res) => res.json())
//     .then((posts) => {
//       // codes
//     })
//     .catch((err) => console.log(err));
// };

btn.onclick = async function () {
  try {
    const res = await fetch("posts.json");
    const posts = await res.json();

    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });

    ul.innerHTML = output;
  } catch (err) {
    console.log(err);
  }
};
