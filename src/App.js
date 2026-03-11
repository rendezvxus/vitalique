import { Post, PostFilter, PostForm, PostList } from '@/components/components-wrap.js'
import { data } from '@/data.js'

export default class App {

    constructor(filterContainer, formContainer, postsContainer) {
        this.filterContainer = filterContainer;
        this.formContainer = formContainer;
        this.postsContainer = postsContainer;

        this.allPosts = [...data];
        this.filterText = ''

        this.postList = null;
        this.postForm = null;
        this.postFilter = null;
    }

    init() {
        this.postForm = new PostForm(this.formContainer)
        this.postFilter = new PostFilter(this.filterContainer, (filterText) => {this.filterPosts(filterText)})
        this.postList = new PostList(this.postsContainer)

        const allPosts = this.allPosts

        this.postForm.render()
        this.postFilter.render()
        this.renderPosts(allPosts)
    }

    renderPosts(posts) {
        this.postList.render(posts)
    }

    filterPosts(pattern) {
        this.filterText = pattern

        const allPosts = this.allPosts
        const filteredPosts = allPosts.filter(post => {
            const regex = new RegExp(pattern)
            return post.title.match(regex)
        })

        this.postList.render(filteredPosts)
    }
}