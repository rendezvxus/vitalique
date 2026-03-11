import { Post, PostFilter, PostForm, PostList } from '@/components/components-wrap.js'
import { data } from '@/data.js'

export default class App {

    constructor(filterContainer, formContainer, postsContainer) {
        this.filterContainer = filterContainer;
        this.formContainer = formContainer;
        this.postsContainer = postsContainer;

        this.allPosts = [...data];

        this.postList = null;
        this.postForm = null;
        this.postFilter = null;
    }

    init() {
        this.postList = new PostList(this.postsContainer)
        this.renderPosts()
    }

    renderPosts() {
        const posts = this.allPosts
        this.postList.render(posts)
    }
}