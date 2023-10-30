var posts = []



function createPost(post) {
    return new Promise((res, err) => {

        postTime = new Date().getTime();
        posts.push(post);
        res(updateLastUserActivityTime(postTime, post))


    });

}

function updateLastUserActivityTime(time, post) {
    new Promise((res) => {
        res(console.log(`${post} created at ${time} \n New Post Created`));
    })
}

Promise.all([createPost("Post 1"), createPost("Post 2")])
