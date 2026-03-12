export default class Post {
    constructor({userId, id, title, body}) {
        this.userId = userId
        this.id = id
        this.title = title
        this.body = body
    }

    render() {
        const postElement = document.createElement('div')
        postElement.classList.add('post')
        postElement.innerHTML = `
            <h1>${this.title}</h1>
            <h3>${this.body}</h3>
            <sub>User: ${this.userId}</sub>
            <sub>ID: ${this.id}</sub>`

        return postElement
    }
}