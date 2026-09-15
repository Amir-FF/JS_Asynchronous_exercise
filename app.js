const posts = [{ title: "post 1" }, { title: "post 2" }];
const ul = document.querySelector("#app ul");
let bool = false;

const createPost = (post) => {
  // code
  return new Promise((resolve, reject) => {
    if (bool) {
      // code
      setTimeout(() => {
        posts.push(post);

        resolve(bool);
      }, 1000);
    } else {
      reject(bool);
    }
  });
};

const getPosts = () => {
  // code
  let output = "";

  posts.forEach((post) => {
    output += `<li>${post.title}</li>`;
  });

  ul.innerHTML = output;
};

createPost({ title: "post 3" })
  .then((data) => {
    console.log(data);
    return createPost({ title: "post 4" });
  })
  .then((data) => {
    console.log(data);
    return createPost({ title: "post 5" });
  })
  .then((data) => {
    console.log(data);
    return createPost({ title: "post 6" });
  })
  .then((data) => {
    console.log(data);
    getPosts();
  })
  .catch((err) => {
    console.log(err);
  });
