const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">Blog App</a>

            </div>
        </nav>
    )
}
const PostItem = (props) => {
    const post = props.post

    return (
        
        <div className="col s12 m6 ">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{post.title}</span>
                    <p>{post.body}</p>
                </div>

            </div>
        </div>
    )
}
const PostList = (props) => {
    const posts = props.posts


    return (
        <div>
            {posts.map(postaa => <PostItem key={postaa.id} post={postaa} />)}
        </div>
    )

}


const Content = (props) => {
    return (
        <div className="container">
        <PostList posts={props.data} />
        </div>
    )
}
const App = (props) => {
    return (
        <div>
            <Header />
            <Content data={props.data} />
        </div>
    )
}




const rootElement = document.querySelector(".root")
ReactDOM.render(<App data={posts} />, rootElement)



// const array = [10, 20, 30, 40, 50]

// console.log(array.map(item => {
//     return item / 10
// }));
