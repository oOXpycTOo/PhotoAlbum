(function() {
    var photoPosts = [
        {
            id: '1',
            description: 'New post is there',
            createdAt: new Date('2017-12-15'),
            author: 'Cheburashkaasfasfasfasfasfasfasfaf',
            photoLink: "images/1-min.jpg",
            spanRow: 1,
            spanCol: 2,
        },
        {
            id: '2',
            description: 'New post is there',
            createdAt: new Date('2017-12-15'),
            author: 'Kazimirau Ulad',
            photoLink: "images/2-min.jpg",
            spanRow: 3,
            spanCol: 2,
        },
        {
            id: '3',
            description: 'New post is there',
            createdAt: new Date('2017-12-15'),
            author: 'Cheburashka',
            photoLink: "images/3-min.jpg",
            spanRow: 1,
            spanCol: 1,
        },
        {
            id: '4',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/4-min.jpg",
            spanRow: 1,
            spanCol: 4,
        },
        {
            id: '5',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/5-min.jpg",
            spanRow: 1,
            spanCol: 1,
        },
        {
            id: '6',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/6-min.jpg",
            spanRow: 1,
            spanCol: 1,
        },
        {
            id: '7',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1-min.jpg",
            spanRow: 1,
            spanCol: 1,
        },
        {
            id: '8',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/4-min.jpg",
            spanRow: 1,
            spanCol: 1,
        },
        {
            id: '9',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/6-min.jpg",
            spanRow: 1,
            spanCol: 1,
        },
        {
            id: '10',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1-min.jpg",
            spanRow: 1,
            spanCol: 1,
        },
        {
            id: '11',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1-min.jpg",
            spanRow: 1,
            spanCol: 1,
        },
        {
            id: '12',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1-min.jpg",
            spanRow: 1,
            spanCol: 1,
        },
        {
            id: '13',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1-min.jpg",
            spanRow: 1,
            spanCol: 1,
        },
        {
            id: '14',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1-min.jpg",
            spanRow: 1,
            spanCol: 1,
        },
        {
            id: '15',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg",
            spanRow: 1,
            spanCol: 1,
        },
        {
            id: '16',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg",
            spanRow: 1,
            spanCol: 1,
        },
        {
            id: '17',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg",
            spanRow: 1,
            spanCol: 1,
        },
        {
            id: '18',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg",
            spanRow: 1,
            spanCol: 1,
        },
        {
            id: '19',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg",
            spanRow: 1,
            spanCol: 1,
        },
        {
            id: '20',
            description: 'New post is there',
            createdAt: new Date('15.12.2017'),
            author: 'Kazimirau Ulad',
            photoLink: "images/1.jpg",
            spanRow: 1,
            spanCol: 1,
        }
    ];

    function getPhotoPosts(skip=0, top=10, filterConfig={}) {
        if(filterConfig == 0) {
            var filteredPosts = photoPosts;
        } else {
            var filteredPosts = photoPosts.filter(post => {
                var isValidPost = true;
                for (var key in filterConfig) {
                    if (Object.prototype.toString.call(filterConfig[key]) === '[object Date]') {
                        isValidPost = post[key].getTime() === filterConfig[key].getTime();
                    } else {
                        isValidPost = post[key] == filterConfig[key];
                    }
                    if(!isValidPost) {
                        return false;
                    }
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

    function displayModal(id) {
        const photoPost = getPhotoPost(id);
        var postModalDom = document.querySelector('.modal-overlay');
        document.querySelector('body').classList.toggle('no-scroll');
        postModalDom.classList.toggle('active');
        postModalDom.innerHTML = 
        '<div class="post-modal">\
            <div class="hidden-scroll">\
                <div class="photo-zone">\
                    <img src="' + photoPost.photoLink + '" />\
                    <div class="text">\
                        <div class="user-info">\
                            <span><img src="' + photoPost.photoLink + '" class="user-photo"></span>\
                            <div class="photo-info">\
                                <span>' + photoPost.author + '</span>\
                                <span>' + photoPost.createdAt.toLocaleDateString() + '</span>\
                            </div>\
                        </div>\
                        <hr/>\
                        <div class="hashtags">\
                            <a class="hashtag">city</a>\
                        </div>\
                    </div>\
                </div>\
            </div>\
            <div class="hidden-scroll">\
                <div class="text-zone">\
                    \
                    <div class="description">\
                        '+ photoPost.description +'\
                    </div>\
                </div>\
            </div>\
        </div>';
    }

    function displayPhotoPosts() {
        var mainDom = document.querySelector('main');
        var postsToShow = getPhotoPosts(0, 10);
        postsToShow.forEach(post=>{
            mainDom.innerHTML +=
            '<div class="post shadow span-col' + post.spanCol + 
                                   ' span-row' + post.spanRow +'" id="' + post.id + '">\
                <img src="' + post.photoLink + '" />\
                    <div class="post-overlay">\
                        <div class="description">\
                            <h3>Posted by: ' + post.author + '</h3>\
                            <p>on ' + post.createdAt.toLocaleDateString() + '</p>\
                        </div>\
                    </div>\
            </div>';
        });
    }

    window.onload = function() {
        displayPhotoPosts();

        var postClass = document.getElementsByClassName("post-overlay");
        for (var i = 0; i < postClass.length; ++i) {
            postClass[i].addEventListener('click', function () {
                displayModal(this.parentNode.id);
            });
        }
    }
}());