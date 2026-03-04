const loadPost = () =>{
    const url = 'https://jsonplaceholder.typicode.com/posts#';
    fetch(url)
    .then(res => res.json())
    .then(data =>
        // console.log(data)
        displayPost(data)
    )
};

const displayPost=(posts)=>{
    // 1.get the container and empty it
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = "";
    posts.forEach(post =>{
        // console.log(post)
        // 2.create element
        const postCard = document.createElement("div");
        postCard.innerHTML = `
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>`;

        // 3. add to the container
        postContainer.append(postCard)
    })
}