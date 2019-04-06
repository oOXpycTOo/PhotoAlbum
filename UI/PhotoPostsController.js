class PhotoPostsController {
    constructor(photoPostsModel, photoPostsView) {
        this.photoPostsModel = photoPostsModel;
        this.photoPostsView = photoPostsView;
        this._init();
    }

    _init() {
        this._createChildren()
            ._setupHandlers();
    }

    _createChildren() {
        this.body = document.querySelector('body');
        this.mainContainer = document.querySelector('main');
        this.photoPostModal = document.querySelector('.modal-overlay');
        this.addPhotoPostButton = document.querySelector('.add-photopost');
        this.editModeButton = document.querySelector('.enter-editing-mode');
        this.filterButton = document.querySelector('.filter-photoposts');
        this.photoPosts = document.getElementsByClassName('post-overlay');
        return this;
    }

    _setupHandlers() {
        for(let i = 0; i < this.photoPosts.length; ++i) {
            this.photoPosts[i].addEventListener('click', () => {
                this.displayPhotoPost(this.photoPosts[i].parentElement.id);
            });
        }
        this.editModeButton.onclick = this.enterEditMode;
        this.filterButton.onclick = this.displayFilterWindow;
        document.querySelector('.close').addEventListener('click', ()=>{
            this.photoPostModal.classList.remove('active');
            this.photoPostModal.removeChild(this.photoPostModal.lastElementChild);
            this.body.classList.remove('no-scroll');
        });
    }

    displayPhotoPost(id) {
        this.photoPostsView.displayPhotoPost(id);
    }

    enterEditMode() {
        this.photoPostsView.enterEditMode();
    }

    displayFilterWindow() {
        this.photoPostsView.displayFilterWindow();
    }
}