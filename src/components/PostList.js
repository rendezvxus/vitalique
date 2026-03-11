export default class PostList {

    constructor(container) {
        this.container = container
    }

    render(posts) {
        posts.forEach(post => {
            const postElement = document.createElement('div')
            postElement.classList.add('post')
            postElement.innerHTML = `<h3>${post.userId}, ${post.id}, ${post.title}</h3>`

            this.container.appendChild(postElement)
        });
    }
}
