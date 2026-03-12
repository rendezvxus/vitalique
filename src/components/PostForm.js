export default class PostForm  {
    constructor (container, onSubmitEvent) {
        this.container = container;
        this.onSubmitEvent = onSubmitEvent;
    }

    render() {
        const formElement = document.createElement('form')

        const postTitle = document.createElement('input')
        const postBody = document.createElement('input')
        const postSubmitBtn = document.createElement('button')

        formElement.classList.add('form')
        formElement.method = 'post'

        postTitle.placeholder = 'Название'
        postBody.placeholder = 'Начните писать статью'
        postSubmitBtn.type = 'submit'
        postSubmitBtn.innerHTML = `Опубликовать`
        
        formElement.appendChild(postTitle)
        formElement.appendChild(postBody)
        formElement.appendChild(postSubmitBtn)

        formElement.addEventListener('submit', (e) => {
            e.preventDefault()

            const title = postTitle.value
            const body = postBody.value

            if (!(title && body)) {
                alert('Заполните все поля!')
                return;
            }
            
            if (this.onSubmitEvent) {
                this.onSubmitEvent({title, body})
            }

            postTitle.value = ''
            postBody.value =''
        })
        
        this.container.appendChild(formElement)
    }
}