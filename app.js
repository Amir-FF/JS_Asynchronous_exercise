const btn = document.querySelector("button");
const p = document.querySelector("p");

btn.onclick = () => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "data.txt");

  xhr.onload = () => {
    xhr.status === 200
      ? (p.innerText = xhr.responseText)
      : console.log("Error");
  };

  xhr.send();
};
