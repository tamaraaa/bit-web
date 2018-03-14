const Post = require("./post")
const loremIpsum = require('lorem-ipsum')

const title = () =>loremIpsum({
    count: 3,
    units: 'words'
});

const intro = () => loremIpsum({
    count: 2,
    units: "sentence"


});

const setFakePostData = (count) => {
    const posts = []
    for (let i = 0; i < count; i++) {
        const post = new Post(i, title(), intro())
        posts.push(post)

    }

    return posts;
}



module.exports = {setFakePostData}
console.log(setFakePostData(20));
