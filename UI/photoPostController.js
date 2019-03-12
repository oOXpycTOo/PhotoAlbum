class PhotoPostController {
    constructor(photoPostModel, photoPostView) {
        this.photoPostModel = photoPostModel;
        this.photoPostView = photoPostView;
        this.photoPostView.displayPage();
        this.initHandlers();
    }

    initHandlers() {
        let photoPostsDom = document.getElementsByClassName('post-overlay');
        for (let i = 0; i < photoPostsDom.length; ++i) {
            let controller = this;
            photoPostsDom[i].onclick = function() {
                controller.onClick(photoPostsDom[i].parentElement.id);
            }
        }
    }

    onClick(id) {
        this.photoPostView.displayModal(id);
    }
}