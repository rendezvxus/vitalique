export default class PostList {

    constructor(container) {
        this.container = container
    }

    render(posts) {
        this.container.replaceChildren()
        posts.forEach(post => {
            const postElement = document.createElement('div')
            postElement.classList.add('post')
            postElement.innerHTML = `
                <h1>${post.title}</h1>
                <h3>${post.body}</h3>
                <sub>User: ${post.userId}</sub>
            `

            this.container.appendChild(postElement)
        })
    }
}
