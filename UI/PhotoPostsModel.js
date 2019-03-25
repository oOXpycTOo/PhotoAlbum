class PhotoPostsModel {
    constructor(photoPosts) {
        this.photoPosts = photoPosts;
    }

    getPage(skip = 0, top = 10, filters = {}) {
        let filteredPosts = this._filterPosts(filters);
        filteredPosts.sort((a, b) => {
            (a.createdAt > b.createdAt) ? 1 : ((b.createdAt > a.createdAt) ? -1 : 0);
        });
        return filteredPosts.slice(skip, skip + top);
    }

    _filterHashtags(postHashtags, filterHashtags) {
        return postHashtags.some(hashtag => filterHashtags.includes(hashtag));
    }

    _filterPosts(filters) {
        const filterKeys = Object.keys(filters);
        return this.photoPosts.filter((photoPost) => {
            return filterKeys.every(key => {
                if (!filters[key].length) {
                    return true;
                }
                if (key !== 'hashtags') {
                    return filters[key].includes(photoPost[key]);
                } else {
                    return this._filterHashtags(photoPost[key], filters[key]);
                }
            });
        });
    }

    get(id) {
        return this.photoPosts.find(photoPost => {
            return photoPost.id === id;
        });
    }

    static validate(photoPost) {
        return this._isValidId(photoPost.id) &&
        this._isString(photoPost.description) &&
        this._isValidDate(photoPost.createdAt) && 
        this._isString(photoPost.author) &&
        this._isString(photoPost.photoLink);
    }

    _isValidId(id) {
        return this._isString(id) && !isNaN(id);
    }

    _isString(obj) {
        return typeof (obj) === 'string';
    }

    _isValidDate(date) {
        return Object.prototype.toString.call(date) === '[object Date]';
    }

    add(photoPost) {
        if (this.validate(photoPost)) {
            photoPosts.unshift(photoPost);
            return true;
        }
        return false;
    }

    remove(id) {
        if (this._isValidId(id)) {
            for (let i = 0; i < this.photoPosts.length; ++i) {
                if (this.photoPosts[i].id === id) {
                    this.photoPosts.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }

    edit(id, photoPost) {
        if (this._isValidId(id)) {
            let photoPostToEdit = this.get(id);
            if(photoPostToEdit !== undefined) {
                for (let key in photoPost) {
                    if (photoPostToEdit.hasOwnProperty(key) &&
                        this._isMutableProperty(key)) {
                        photoPostToEdit[key] = photoPost[key];
                    }
                }
                return true;
            }
            return false;
        }
        return false;
    }

    _isMutableProperty(property) {
        return property !== 'id' && property !== 'author' && property !== 'createdAt';
    }
}