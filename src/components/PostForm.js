export default class PostForm  {
    constructor (container) {
        this.container = container;
    }

    render() {
        const formElement = document.createElement('div')
        formElement.classList.add('form')
        formElement.innerHTML = `
            <input placeholder="Название"></input>
            <input placeholder="Начните писать статью..."></input>
            <button type="submit">Опубликовать</submit>
        `
        this.container.appendChild(formElement)
    }
}