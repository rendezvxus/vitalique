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
                    <sub>ID: ${post.id}</sub>
                `

                this.container.appendChild(postElement)
            })
    }

    getPosts() {
        return this.data
    }

    addPost(post) {
        this.data.unshift(post)
    }
}
