export default class PostFilter {
    constructor (container, onInputEvent) {
        this.container = container
        this.onInputEvent = onInputEvent
    }

    render() {
        const filterElement = document.createElement('input')
        filterElement.classList.add('filter')
        filterElement.placeholder = 'Поиск статьи'
        filterElement.addEventListener('input', (e) => {
            const filterText = e.target.value;

            if (this.onInputEvent) {
                this.onInputEvent(filterText)
            }
        })

        this.container.appendChild(filterElement)
    }
}