const btn = document.querySelector("button");
const ul = document.querySelector("ul");
let num = 1;

// btn.onclick = () => {
//   // code
//   const title = document.querySelector("#title").value;
//   const body = document.querySelector("#body").value;
//   const post = { userId: num, title, body };

//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify(post),
//     headers: { "content-type": "application/JSON" },
//   })
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       } else {
//         throw new Error(res.status);
//       }
//     })
//     .then((post) => {
//       // code
//       console.log(post);

//       const liCreate = `<li>${post.title}</li>`;
//       ul.innerHTML = liCreate;

//       num++;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

btn.onclick = async function () {
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;
  const post = { userId: num, title, body };

  try {
    // code
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: { "content-type": "application/JSON" },
    });

    if (res.ok) {
      const post = await res.json();

      console.log(post);

      const liCreate = `<li>${post.title}</li>`;
      ul.innerHTML = liCreate;

      num++;
    } else {
      throw new Error(res.status);
    }
  } catch (err) {
    console.log(err);
  }
};
