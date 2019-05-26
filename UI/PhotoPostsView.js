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
        this._renderModal();
        this._renderPhotoPostTemplate();
        document.querySelector('.photo-zone img').src = photoPost.photoLink;
        document.querySelector('.user-photo').src = photoPost.photoLink;
        let userInfo = document.querySelectorAll('.photo-info span');
        userInfo[0].innerHTML = photoPost.author;
        userInfo[1].innerHTML = photoPost.creationDate;
        document.querySelector('.hashtags').innerHTML += this._getHashtagsHTML(photoPost.hashtags);
        document.querySelector('.description').innerHTML = photoPost.description;
        this._renderLike(photoPost, 'Ulad');
        let likeButton = document.querySelector('.like-btn');
        likeButton.addEventListener('click', ()=>{
            this.photoPostsModel.toggleLike(id, 'Ulad');
            this._renderLike(photoPost, 'Ulad');
        });
    }

    _renderPhotoPostTemplate() {
        let modalWindow = document.querySelector('.modal-window');
        let photoPostTemplate = document.getElementById('photo-post');
        modalWindow.appendChild(photoPostTemplate.content.cloneNode(true));
    }

    _renderLike(photoPost, user) {
        let likeButton = document.querySelector('.like-btn');
        if(photoPost.isLikedBy(user)) {
            likeButton.classList.add('active');
        } else {
            likeButton.classList.remove('active');
        }
        likeButton.innerHTML = '<i class="fas fa-heart"></i>' + photoPost.likedByAmount;
    }

    _renderModal() {
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