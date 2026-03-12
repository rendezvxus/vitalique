import Post from './Post.js'

export default class PostList {

    constructor(container) {
        this.container = container
    }

    renderPosts(posts, rerender = false) {
        if (rerender) {
            this.container.replaceChildren()
        }

        posts.forEach(post => { this.renderPost(post) })
    }

    renderPost(post, insertAtTop = false) {
        const postElement = post.render()

        if (insertAtTop) {
            this.container.prepend(postElement)
        } else {
            this.container.appendChild(postElement)
        }
    }
}