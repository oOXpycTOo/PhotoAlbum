class AddPhotoView {
    constructor(addPhotoModel) {
        this.addPhotoModel = addPhotoModel;
        this._init();
    }

    _init() {
        this._createChildren();
    }

    _createChildren() {
        this.body = document.querySelector("body");
        this.modal = document.querySelector(".modal-overlay");
    }

    display() {
       this._displayModal();
       let modalWindow = document.querySelector(".modal-window");
       let addPhotoPostLayout = document.getElementById("add-photopost");
       modalWindow.appendChild(addPhotoPostLayout.content.cloneNode(true));
    }
    
    _displayModal() {
        let modalWindow = document.getElementById("modal-window");
        this.body.classList.toggle("no-scroll");
        this.modal.classList.add("active");
        this.modal.appendChild(modalWindow.content.cloneNode(true));
    }
}