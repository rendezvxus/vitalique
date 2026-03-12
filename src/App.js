import { Post, PostFilter, PostForm, PostList } from '@/components/components-wrap.js'
import { data } from '@/data.js'

export default class App {

    constructor(filterContainer, formContainer, postsContainer) {
        this.filterContainer = filterContainer;
        this.formContainer = formContainer;
        this.postsContainer = postsContainer;

        this.posts = null;
        
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

        this.postList = new PostList(this.postsContainer)
        
        this.posts = data.map(mockDatum => new Post(mockDatum))

        this.postFilter.render()
        this.postForm.render()
        this.postList.renderPosts(this.posts)
    }

    filterPosts(pattern) {
        const filteredPosts = this.posts.filter(post => post.title.match(pattern))
        this.postList.renderPosts(filteredPosts, true)
    }

    addPost({ title, body }) {
        const newPost = new Post({
            userId: 1,
            id: this.postList.getPosts().length,
            title,
            body
        })

        this.posts.push(newPost)
    }
}