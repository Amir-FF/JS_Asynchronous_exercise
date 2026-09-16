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

async function getPosts() {
  // code
  try {
    const post3 = await createPost({ title: "post 3" });
    const post4 = await createPost({ title: "post 4" });
    const post5 = await createPost({ title: "post 5" });
    console.log(post5);

    let output = "";

    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });

    ul.innerHTML = output;
  } catch (error) {
    console.log(error);
  }
}

getPosts();
