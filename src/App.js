import { Post, PostFilter, PostForm, PostList } from '@/components/components-wrap.js'
import { data } from '@/data.js'

export default class App {

    constructor(filterContainer, formContainer, postsContainer) {
        this.filterContainer = filterContainer;
        this.formContainer = formContainer;
        this.postsContainer = postsContainer;

        this.posts = null;
        this.filterPattern = ''; // Used in case where new post title doesn't match filter

        this.postForm = null;
        this.postFilter = null;
        this.postList = null;

        this.deletePostCallback = (post) => {this.deletePost(post)};
        this.postFilterCallback = (filterText) => {this.filterPosts(filterText)};
        this.addPostCallback = (post) => {this.addPost(post)};
    }

    init() {
        this.posts = data.map(mockDatum => 
            new Post(
                mockDatum, 
                this.deletePostCallback
            )
        )

        this.postFilter = new PostFilter(
            this.filterContainer, 
            this.postFilterCallback
        )
        
        this.postForm = new PostForm(
            this.formContainer, 
            this.addPostCallback 
        )

        this.postList = new PostList(this.postsContainer)

        this.postFilter.render()
        this.postForm.render()
        this.postList.renderPosts(this.posts)
    }

    filterPosts(pattern) {
        this.filterPattern = pattern
        const filteredPosts = this.posts.filter(post => post.isMatchingPattern(this.filterPattern))
        this.postList.renderPosts(filteredPosts, true)
    }

    addPost({ title, body }) {

        const lastPostIndex = this.posts.length - 1
        const lastId = this.posts[lastPostIndex].id

        const newPost = new Post(
            {
                userId: 1,
                id: lastId + 1,
                title,
                body
            }, 
            (post) => this.deletePostCallback(post)
        )

        this.posts.push(newPost)
        if (newPost.isMatchingPattern(this.filterPattern)) {
            this.postList.renderPost(newPost, true)
        } else {
            alert(`Пост создан успешно! Очистите фильтр чтобы увидеть пост в конце списка.`)
        }
    }

    deletePost(post) {
        const postIndex = this.posts.indexOf(post)
        this.posts.splice(postIndex, 1)
        this.filterPosts(this.filterPattern)
    }
}