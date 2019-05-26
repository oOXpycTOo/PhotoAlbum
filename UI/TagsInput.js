class TagsInput {
    constructor(
        selector='', 
        tagClass='hashtag', 
        wrapper='hashtags',
    ) {
        this.selector = selector;
        this.tagClass = tagClass;
        this.wrapper = document.querySelector(wrapper);
        this.hashtags = [];
    }

    addTag(tag) {
        this.hashtags.push(tag);
        
    }

    render() {
        
    }
}