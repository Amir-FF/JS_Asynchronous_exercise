const btn = document.querySelector("button");
const divChooseFile = document.querySelector("#choose-file");
const divPreview = document.querySelector("#preview");

divChooseFile.onchange = () => {
  const reader = new FileReader();
  const img = document.querySelector("#choose-file").files[0];

  reader.readAsDataURL(img);

  reader.onload = (event) => {
    divPreview.innerHTML = `<img src=${event.target.result} width="200" class="rounded" alt="Error...">`;
  };
};

// btn.onclick = () => {
//   // code
//   const image = document.querySelector("#choose-file").files[0];
//   const formData = new FormData();
//   formData.append("image", image);
//   formData.append("title", "img 1");
//   console.log(formData);

//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: formData,
//     headers: { "content-type": "mlutipart/form-data" },
//   })
//     .then((res) => {
//       if (res.ok) {
//         return res.formData();
//       } else {
//         throw new Error(res.status);
//       }
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

btn.onclick = async function () {
  const image = document.querySelector("#choose-file").files[0];
  const formData = new FormData();
  formData.append("image", image);
  formData.append("title", "img 1");
  console.log(formData);

  try {
    // code
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: formData,
      headers: { "content-type": "mlutipart/form-data" },
    });

    if (res.ok) {
      const data = await res.formData();
      console.log(data);
    } else {
      throw new Error(res.status);
    }
  } catch (err) {
    console.log(err);
  }
};
