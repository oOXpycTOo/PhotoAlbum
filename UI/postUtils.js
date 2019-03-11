(function() {
    var photoPosts = [
        {
            id: '1',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg"
        },
        {
            id: '2',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg"
        },
        {
            id: '3',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg"
        },
        {
            id: '4',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg"
        },
        {
            id: '5',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg"
        },
        {
            id: '6',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg"
        },
        {
            id: '7',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg"
        },
        {
            id: '8',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg"
        },
        {
            id: '9',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg"
        },
        {
            id: '10',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg"
        },
        {
            id: '11',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg"
        },
        {
            id: '12',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg"
        },
        {
            id: '13',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg"
        },
        {
            id: '14',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg"
        },
        {
            id: '15',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg"
        },
        {
            id: '16',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg"
        },
        {
            id: '17',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg"
        },
        {
            id: '18',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg"
        },
        {
            id: '19',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg"
        },
        {
            id: '20',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg"
        }
    ];

    function getPhotoPosts(skip=0, top=10, filterConfig={}) {
        if(isEmpty(filterConfig)) {
            var filteredPosts = photoPosts;
        } else {
            var filteredPosts = photoPosts.filter(post => {
                var isValidPost = true;
                for (var key in filterConfig) {
                    isValidPost = isValidPost && (post.key == filterConfig.key);
                }
                return isValidPost;
            });
        }
        filteredPosts.sort((a, b) => {
            (a.createdAt > b.createdAt) ? 1 : ((b.createdAt > a.createdAt) ? -1 : 0);
        });
        return filteredPosts.slice(skip, skip+top);
    }

    function getPhotoPost(id) {
        return photoPosts.find(post => {
            return post.id == id;
        });
    }

    function isValidId(id) {
        return typeof(id) == 'string' && !isNaN(id);
    }

    function isString(str) {
        return typeof(str) == 'string';
    }

    function isValidDate(date) {
        return Object.prototype.toString.call(date) === '[object Date]';
    }

    function isValidPhotoPost(photoPost) {
        return isValidId(photoPost.id) && isString(photoPost.description)
        && isValidDate(photoPost.createdAt) && isString(photoPost.author) &&
        isString(photoPost.photoLink);
    }

    function addPhotoPost(photoPost) {
        if(isValidPhotoPost(photoPost)) {
            photoPost.push(photoPost);
            return true;
        }
        return false;
    }

    function editPhotoPost(id, photoPost) {
        if (!isNaN(id)) {
            for(var i = 0; i < photoPosts.length; ++i) {
                if(photoPosts[i].id === id) {
                    for(var key in photoPost) {
                        if(photoPosts[i].hasOwnProperty(key)) {
                            photoPosts[i][key] = photoPost[key];
                        }
                    }
                }
            }
        }
        return false;
    }

    function removePhotoPost(id) {
        if(!isNaN(id)) {
            for (var i = 0; i < photoPosts.length; ++i) {
                if (photoPosts[i].id === id) {
                    photoPosts.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }
}());