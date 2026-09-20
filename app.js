const btn = document.querySelector("button");

// btn.onclick = () => {
//   // code
//   const id = document.querySelector("#number").value;

//   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//     method: "DELETE",
//   })
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       } else {
//         throw new Error(res.status);
//       }
//     })
//     .then((data) => {
//       // code
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

btn.onclick = async function () {
  const id = document.querySelector("#number").value;

  try {
    // code
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      },
    );

    if (res.ok) {
      const data = await res.json();

      console.log(data);
    } else {
      throw new Error(res.status);
    }
  } catch (err) {
    console.log(err);
  }
};
