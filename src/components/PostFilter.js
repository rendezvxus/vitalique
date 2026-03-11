export default class PostFilter {
    constructor (container) {
        this.container = container
    }

    render() {
        const filterElement = document.createElement('div')
        filterElement.classList.add('filter')
        filterElement.innerHTML = `
            <input placeholder="Фильтры для поиска"></input>
        `

        this.container.appendChild(filterElement)
    }
}