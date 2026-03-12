import Post from './Post.js'

export default class PostList {

    constructor(container, mockPostsData) {
        this.container = container
        this.data = mockPostsData.map(post => new Post(post))
    }

    render(pattern) {

        this.container.replaceChildren()
        this.data.filter(post => post.title.match(new RegExp(pattern)))
            .forEach(post => {
                const postElement = document.createElement('div')
                postElement.classList.add('post')
                postElement.innerHTML = `
                    <h1>${post.title}</h1>
                    <h3>${post.body}</h3>
                    <sub>User: ${post.userId}</sub>
                    <sub>ID: ${post.id}</sub>`

                this.container.appendChild(postElement)
            })
    }

    renderNewPost(newPost) {
        const postElement = document.createElement('div')
        postElement.classList.add('post')
        postElement.innerHTML = `
            <h1>${newPost.title}</h1>
            <h3>${newPost.body}</h3>
            <sub>User: ${newPost.userId}</sub>
            <sub>ID: ${newPost.id}</sub>`

        this.container.prepend(postElement)
    }

    getPosts() {
        return this.data
    }

    createNewPostFromTitleAndBody({ title, body }) {
        return new Post({
            userId: 1,
            id: this.data.length + 1,
            title,
            body
        })
    }

    addPost(post) {
        this.data.unshift(post)
    }
}
