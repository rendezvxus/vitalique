import { Post, PostFilter, PostForm, PostList } from '@/components/components-wrap.js'
import { data } from '@/data.js'

export default class App {

    constructor(filterContainer, formContainer, postsContainer) {
        this.filterContainer = filterContainer;
        this.formContainer = formContainer;
        this.postsContainer = postsContainer;

        this.postForm = null;
        this.postFilter = null;
        this.postList = null;
    }

    init() {
        this.postFilter = new PostFilter(
            this.filterContainer, 
            (filterText) => {this.filterPosts(filterText)}
        )
        
        this.postForm = new PostForm(
            this.formContainer, 
            (newPost) => {this.addPost(newPost)}
        )

        this.postList = new PostList(this.postsContainer, data)
        
        this.postFilter.render()
        this.postForm.render()
        this.postList.render()
    }

    filterPosts(pattern) {
        this.postList.render(pattern)
    }

    addPost({ title, body }) {
        this.postList.addPost({ title, body })
    }
}