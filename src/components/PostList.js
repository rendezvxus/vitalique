import Post from './Post.js'

export default class PostList {

    constructor(container, mockPostsData) {
        this.container = container
        this.data = mockPostsData.map(post => new Post(post))
    }

    render(pattern) {
        this.container.replaceChildren()
        this.data.filter(post => post.title.match(pattern))
            .forEach(post => {
                const postElement = this.createPostElement(post)
                this.container.appendChild(postElement)
            })
    }

    createPostElement(post) {
        const postElement = document.createElement('div')
        postElement.classList.add('post')
        postElement.innerHTML = `
            <h1>${post.title}</h1>
            <h3>${post.body}</h3>
            <sub>User: ${post.userId}</sub>
            <sub>ID: ${post.id}</sub>`

        return postElement
    }

    renderNewPost(newPost) {
        const postElement = this.createPostElement(newPost)
        this.container.prepend(postElement)
    }

    addPost(data) {
        const newPost = new Post({
            userId: data.userId || 1,
            id: data.id || this.data.length + 1,
            title: data.title,
            body: data.body
        })

        this.data.push(newPost)

        this.renderNewPost(newPost)
    }
}
