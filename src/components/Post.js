export default class Post {
    constructor({userId, id, title, body}, deletePostCallback) {
        this.userId = userId
        this.id = id
        this.title = title
        this.body = body
        this.deletePostCallback = deletePostCallback
    }

    render() {
        const postElement = document.createElement('div')
        postElement.classList.add('post')
        postElement.innerHTML = `
            <h1>${this.title}</h1>
            <h3>${this.body}</h3>
            <p>User: ${this.userId}</p>
            <p>ID: ${this.id}</p>`
        
        const deleteButton = document.createElement('button')
        deleteButton.type = 'button'
        deleteButton.innerHTML = `Удалить`
        deleteButton.addEventListener('click', (e) => {
            this.deletePostCallback(this)
        })

        postElement.appendChild(deleteButton)
        
        return postElement
    }

    isMatchingPattern(pattern) {
        return this.title.match(pattern)
    }
}