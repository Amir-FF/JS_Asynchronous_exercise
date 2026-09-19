const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const loading = document.querySelector("#app div");
loading.classList.add("d-none");

// btn.onclick = () => {
//   loading.classList.remove("d-none");

//   fetch("https://jsonplaceholder.typicode.com/wwdawd")
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       } else {
//         throw new Error(res.status);
//       }
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
//     .catch((err) => {
//       loading.classList.add("d-none");
//       ul.innerHTML = err;
//     });
// };

btn.onclick = async function () {
  try {
    // code
    loading.classList.remove("d-none");

    const res = await fetch("https://jsonplaceholder.typicode.com/12e");

    if (res.ok) {
      const posts = await res.json();

      loading.classList.add("d-none");

      let output = "";
      posts.forEach((post) => {
        output += `<li>${post.title}</li>`;
      });

      ul.innerHTML = output;
    } else {
      throw new Error(res.status);
    }
  } catch (err) {
    loading.classList.add("d-none");
    ul.innerHTML = err;
  }
};
