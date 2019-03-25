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

    get creationDate() {
        const intToMonth = {
            0: 'Jan',
            1: 'Feb',
            2: 'Mar',
            3: 'Apr',
            4: 'May',
            5: 'Jun',
            6: 'Jul',
            7: 'Aug',
            8: 'Sep',
            9: 'Oct',
            10: 'Nov',
            11: 'Dec'
        };
        return intToMonth[this.createdAt.getMonth()] + ' ' + 
                          this.createdAt.getDate() + ', ' + 
                          this.createdAt.getFullYear();
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