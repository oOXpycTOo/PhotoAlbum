class PhotoPostView {
    constructor(photoPostModel) {
        this.photoPostModel = photoPostModel;
        this.mainDom = document.querySelector('main');
    }

    displayPage(from=0, to=10) {
        let postsToShow = this.photoPostModel.getPage(from, to);
        postsToShow.forEach(photoPost => {
            this.mainDom.innerHTML +=
            '<div class="post shadow span-col' + photoPost.spanCol +
                ' span-row' + photoPost.spanRow + '" id="' + photoPost.id + '">\
                <img src="' + photoPost.photoLink + '" />\
                    <div class="post-overlay">\
                        <div class="description">\
                            <h3>Posted by: ' + photoPost.author + '</h3>\
                            <p>on ' + this._dateToString(photoPost.createdAt) + '</p>\
                        </div>\
                    </div>\
            </div>';
        });
    }

    displayModal(id) {
        const photoPost = this.photoPostModel.get(id);
        let modalDom = document.querySelector('.modal-overlay');
        document.querySelector('body').classList.toggle('no-scroll');
        modalDom.classList.toggle('active');
        modalDom.innerHTML =
        '<div class="close">&times</div>\
        <div class="post-modal">\
            <div class="hidden-scroll">\
                <div class="photo-zone">\
                    <img src="' + photoPost.photoLink + '" />\
                    <div class="text">\
                        <div class="horizontal-container">\
                            <div class="user-info">\
                                <span><img src="' + photoPost.photoLink + '" class="user-photo"></span>\
                                <div class="photo-info">\
                                    <span>' + photoPost.author + '</span>\
                                    <span>' + this._dateToString(photoPost.createdAt) + '</span>\
                                </div>\
                            </div>\
                            <button class="like"><i class="fas fa-heart"></i></button>\
                        </div>\
                        <hr/>\
                        <div class="hashtags">\
                            ' + this._getHashtags(photoPost.hashtags) + '\
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
        document.querySelector('.close').addEventListener('click', function () {
            document.querySelector('body').classList.toggle("no-scroll");
            document.querySelector('.modal-overlay').classList.toggle('active');
        });
    }

    _getHashtags(hashtags) {
        let hashtagHTML = '';
        hashtags.forEach(hashtag=>{
            hashtagHTML += '<a class="hashtag">' + hashtag + '</a>';
        });
        return hashtagHTML;
    }

    _dateToString(date) {
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
        return intToMonth[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    }
}