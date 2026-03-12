export default class PostForm  {
    constructor (container, onSubmitEvent) {
        this.container = container;
        this.onSubmitEvent = onSubmitEvent;
    }

    render() {
        const formElement = document.createElement('form')
        formElement.classList.add('form')
        formElement.method = 'post'
        
        const postTitle = document.createElement('input')
        postTitle.placeholder = 'Название'

        const postBody = document.createElement('textarea')
        postBody.placeholder = 'Начните писать статью'

        const postSubmitBtn = document.createElement('button')
        postSubmitBtn.type = 'submit'
        postSubmitBtn.innerHTML = `Опубликовать`
        
        formElement.append(postTitle, postBody, postSubmitBtn)
        this.container.appendChild(formElement)

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
    }

}