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

btn.onclick = () => {
  // code
  const image = document.querySelector("#choose-file").files[0];
  const formData = new FormData();
  formData.append("image", image);
  formData.append("title", "img 1");
  console.log(formData);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
  xhr.setRequestHeader("content-type", "mlutipart/form-data");
  xhr.onload = () => {
    xhr.status === 201 ? xhr.responseText : console.log("Error not 201");
  };
  xhr.send(formData);
};
