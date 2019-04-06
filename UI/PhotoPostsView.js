class PhotoPostsView {
    constructor(photoPostsModel) {
        this.photoPostsModel = photoPostsModel;
        this._init();
    }

   _init() {
       this._createChildren()
           .displayPage();
   } 

   _createChildren() {
       this.mainContainer = document.querySelector('main');
       this.body = document.querySelector('body');
       this.modal = document.querySelector('.modal-overlay');
       return this;
   }

    displayPage(from=0, to=10, filter={}) {
        let postsToShow = this.photoPostsModel.getPage(from, to, filter);
        postsToShow.forEach(photoPost => {
            this.mainContainer.innerHTML +=
            '<div class="post shadow span-col' + photoPost.spanCol +
                ' span-row' + photoPost.spanRow + '" id="' + photoPost.id + '">\
                <img src="' + photoPost.photoLink + '" />\
                    <div class="post-overlay">\
                        <div class="description">\
                            <h3>Posted by: ' + photoPost.author + '</h3>\
                            <p>on ' + photoPost.creationDate + '</p>\
                        </div>\
                    </div>\
            </div>';
        });
    }

    displayPhotoPost(id) {
        const photoPost = this.photoPostsModel.get(id);
        this._displayModal();
        let modalWindow = document.querySelector('.modal-window');
        modalWindow.innerHTML +=
        '<div class="post-layout">\
            <div class="hidden-scroll">\
                <div class="photo-zone">\
                    <img src="' + photoPost.photoLink + '" />\
                    <div class="text">\
                        <div class="horizontal-container">\
                            <div class="user-info">\
                                <span><img src="' + photoPost.photoLink + '" class="user-photo"></span>\
                                <div class="photo-info">\
                                    <span>' + photoPost.author + '</span>\
                                    <span>' + photoPost.creationDate + '</span>\
                                </div>\
                            </div>\
                            <button class="like"><i class="fas fa-heart"></i></button>\
                        </div>\
                        <hr/>\
                        <div class="hashtags">\
                            ' + this._getHashtagsHTML(photoPost.hashtags) + '\
                        </div>\
                    </div>\
                </div>\
            </div>\
            <div class="hidden-scroll">\
                <div class="text-zone">\
                    \
                    <div class="description">\
                        '+ photoPost.description + '\
                    </div><hr/>\
                </div>\
            </div>\
        </div>';
    }

    _displayModal() {
        let modalWindow = document.getElementById('modal-window');
        this.body.classList.toggle('no-scroll');
        this.modal.classList.add('active');
        this.modal.appendChild(modalWindow.content.cloneNode(true));
    }

    _getHashtagsHTML(hashtags) {
        let hashtagHTML = '';
        hashtags.forEach(hashtag=>{
            hashtagHTML += '<a class="hashtag">' + hashtag + '</a>';
        });
        return hashtagHTML;
    }

}