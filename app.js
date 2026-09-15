const posts = [{ title: "post 1" }, { title: "post 2" }];
const ul = document.querySelector("#app ul");

const createPost = (post, callback) => {
  setTimeout(() => {
    // code
    posts.push(post);

    callback();
  }, 2000);
};

const getPosts = () => {
  setTimeout(() => {
    // code
    let output = "";

    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });

    ul.innerHTML = output;
  }, 1000);
};

createPost({ title: "post 3" }, getPosts);
