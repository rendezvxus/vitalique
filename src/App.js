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
        this.allPosts = this.classifyPosts([...data])

        this.postForm = new PostForm(this.formContainer, (newPost) => {this.addPost(newPost)})
        this.postFilter = new PostFilter(this.filterContainer, (filterText) => {this.filterPosts(filterText)})
        this.postList = new PostList(this.postsContainer)

        const allPosts = this.allPosts

        this.postForm.render()
        this.postFilter.render()
        this.renderPosts(allPosts)
    }

    // This func is practically meaningless
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

    addPost(postObj) {
        console.log(postObj)
    }

    classifyPosts(postsArray) {
        return postsArray.map(post => new Post(post))
    }
}