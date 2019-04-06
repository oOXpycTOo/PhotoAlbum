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
        this.dropZone = document.querySelector(".drop-zone");
        return this;
    }

    _setupHandlers() {
        this.addPhotoPostButton.addEventListener('click', () => {
           this.displayAddingWindow(); 
        }); 
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(event => {
            this.dropZone.addEventListener(event, preventDefaults, false);
        });

        function preventDefaults(event) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    displayAddingWindow() {
        this.addPhotoView.display();
    }
}