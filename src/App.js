import { Post, PostFilter, PostForm, PostList } from '@/components/components-wrap.js'
import { data } from '@/data.js'

export default class App {

    constructor(filterContainer, formContainer, postsContainer) {
        this.filterContainer = filterContainer;
        this.formContainer = formContainer;
        this.postsContainer = postsContainer;

        this.posts = null;
        this.filterPattern = '' // Used in case where new post title doesn't match filter

        this.postForm = null;
        this.postFilter = null;
        this.postList = null;
    }

    init() {
        this.posts = data.map(mockDatum => new Post(mockDatum))

        this.postFilter = new PostFilter(
            this.filterContainer, 
            (filterText) => {this.postFilterCallback(filterText)}
        )
        
        this.postForm = new PostForm(
            this.formContainer, 
            (newPost) => {this.addPost(newPost)}
        )

        this.postList = new PostList(this.postsContainer)

        this.postFilter.render()
        this.postForm.render()
        this.postList.renderPosts(this.posts)
    }

    postFilterCallback(pattern) {
        this.filterPattern = pattern
        const filteredPosts = this.posts.filter(post => post.isMatchingPattern(this.filterPattern))
        this.postList.renderPosts(filteredPosts, true)
    }

    addPost({ title, body }) {
        const newPost = new Post({
            userId: 1,
            id: this.posts.length + 1,
            title,
            body
        })

        this.posts.push(newPost)
        if (newPost.isMatchingPattern(this.filterPattern)) {
            this.postList.renderPost(newPost, true)
        } else {
            alert(`Пост создан успешно! Очистите фильтр чтобы увидеть пост в конце списка.`)
        }
    }
}