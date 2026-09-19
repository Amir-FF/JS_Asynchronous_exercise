const btn = document.querySelector("button");
const p = document.querySelector("p");

// btn.onclick = () => {
//   fetch("text.txt")
//     .then((res) => res.text())
//     .then((data) => (p.innerText = data))
//     .catch((err) => console.log(err));
// };

btn.onclick = async function () {
  try {
    const res = await fetch("text.txt");
    const data = await res.text();
    p.innerText = data;
  } catch (err) {
    console.log(err);
  }
};
