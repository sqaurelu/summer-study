class Post {
    static make(post) {
        const { postId, userId, title, content, updateDate } = post;

        return new Post(postId, userId, title, content, updateDate);
    }

    constructor(postId, userId, title, content, updateDate) {
        this.postId = postId;
        this.userId = userId;
        this.title = title;
        this.content = content;
        this.updateDate = updateDate;
    }
}

export default Post;