class PhotoPost {
    constructor(
        id, 
        description, 
        createdAt, 
        author, 
        photoLink, 
        spanRow, 
        spanCol, 
        hashtags, 
        likedBy) {
            this.id = id;
            this.description = description;
            this.createdAt = new Date(createdAt);
            this.author = author;
            this.photoLink = photoLink;
            this.spanRow = spanRow;
            this.spanCol = spanCol;
            this.hashtags = hashtags;
            this.likedBy = likedBy;
        }

    get getId() {
        return this.id;
    }

    get getDescription() {
        return this.description;
    }

    get getCreatedAt() {
        return this.createdAt;
    }

    get getAuthor() {
        return this.author;
    }

    get getPhotoLink() {
        return this.photoLink;
    }

    get getSpanRow() {
        return this.spanRow;
    }

    get getSpanCol() {
        return this.spanCol;
    }

    get getHashtags() {
        return this.hashtags;
    }

    get getLikedBy() {
        return this.likedBy;
    }
}