import { Post, PostFilter, PostForm, PostList } from '@/components/components-wrap.js'
import { data } from '@/data.js'

export default class App {

    constructor(filterContainer, formContainer, postsContainer) {
        this.filterContainer = filterContainer;
        this.formContainer = formContainer;
        this.postsContainer = postsContainer;

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

    filterPosts(pattern) {
        this.postList.render(pattern)
    }

    addPost({ title, body }) {
        const newPost = this.postList.createNewPostFromTitleAndBody({ title, body })
        this.postList.addPost(newPost)
        this.postList.renderNewPost(newPost)
    }
}