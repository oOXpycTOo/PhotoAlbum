class AddPhotoController {
    constructor(addPhotoModel, addPhotoView) {
        this.addPhotoModel = addPhotoModel;
        this.addPhotoView = addPhotoView;
        this._init();
    }

    _init() {
        this._createChildren()
            ._setupHandlers();
    }

    _createChildren() {
        this.addPhotoPostButton = document.querySelector('.add-photopost');
        return this;
    }

    _setupHandlers() {
        this.addPhotoPostButton.addEventListener('click', () => {
            this.addPhotoView.render();
        });
    }
}