const posts = [{ title: "post 1" }, { title: "post 2" }];
const ul = document.querySelector("#app ul");
let bool = true;

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

const addPosts = [
  createPost({ title: "post 4" }),
  createPost({ title: "post 5" }),
  createPost({ title: "post 6" }),
  createPost({ title: "post 7" }),
];

Promise.all(addPosts)
  .then((addpost) => {
    console.log(addpost);

    let output = "";

    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });

    ul.innerHTML = output;
  })
  .catch((error) => {
    console.log(error);
  });

// async function getPosts() {
//   // code
//   try {
//     const addpost = await Promise.all(addPosts);
//     console.log(addpost);

//     let output = "";

//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`;
//     });

//     ul.innerHTML = output;
//   } catch (error) {
//     console.log(error);
//   }
// }

// getPosts();
