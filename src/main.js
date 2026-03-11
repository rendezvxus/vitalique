import './style.scss'
import App from '@/App.js'

document.addEventListener("DOMContentLoaded", () => {
    const filterContainer = document.querySelector("#filter-container")
    const formContainer = document.querySelector("#form-container")
    const postsContainer = document.querySelector("#posts-container")

    const app = new App(filterContainer, formContainer, postsContainer)

    app.init()
})
