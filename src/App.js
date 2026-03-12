import { Post, PostFilter, PostForm, PostList } from '@/components/components-wrap.js'
import { data } from '@/data.js'

export default class App {

    constructor(filterContainer, formContainer, postsContainer) {
        this.filterContainer = filterContainer;
        this.formContainer = formContainer;
        this.postsContainer = postsContainer;

        this.allPosts = null;
        this.filterText = '';

        this.postList = null;
        this.postForm = null;
        this.postFilter = null;
    }

    init() {
        this.postForm = new PostForm(this.formContainer, (newPost) => {this.addPost(newPost)})
        this.postFilter = new PostFilter(this.filterContainer, (filterText) => {this.filterPosts(filterText)})
        this.postList = new PostList(this.postsContainer, data)

        this.postForm.render()
        this.postFilter.render()
        this.postList.render()
    }

    // This func is practically meaningless
    renderPosts(posts) {
        this.postList.render(posts)
    }

    filterPosts(pattern) {
        this.postList.render(pattern)
    }

    addPost(postObj) {
        const newPost = this.constructPost(postObj)
        this.allPosts.shift()
    }

    constructPost({ title, body }) {
        return new Post({
            userId: 1,
            id: this.allPosts.length + 1,
            title,
            body
        })
    }
}