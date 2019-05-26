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
        this.dropArea = document.querySelector(".drop-area");
    }

    render() {
        this._renderModal();
        let modalWindow = document.querySelector(".modal-window");
        let addPhotoPostLayout = document.getElementById("add-photopost");
        modalWindow.appendChild(addPhotoPostLayout.content.cloneNode(true));
        this._addPhotoHandler();
    }
    
    _renderModal() {
        let modalWindow = document.getElementById("modal-window");
        this.body.classList.toggle("no-scroll");
        this.modal.classList.add("active");
        this.modal.appendChild(modalWindow.content.cloneNode(true));
    }

    _addPhotoHandler() {
        let addPhotoButton = document.querySelector('.add-photo-btn');
        addPhotoButton.addEventListener('click', () => {
            document.getElementById('photo-input').click();
        });
        let photoInput = document.getElementById('photo-input');
        photoInput.addEventListener('change', () => {
            let imageReader = new FileReader();
            imageReader.addEventListener('load', (ev) => {
                this._renderPhotoPost(ev.target.result);
            });
            imageReader.readAsDataURL(photoInput.files[0]);
        });
    }

    _renderPhotoPost(photoLink) {
        let modalWindow = document.querySelector('.modal-window');
        let photoPostTemplate = document.getElementById('photo-post');
        modalWindow.replaceChild(photoPostTemplate.content.cloneNode(true), modalWindow.firstElementChild);
        document.querySelector('.photo-zone img').src = photoLink;
        document.querySelector('.user-photo').src = photoLink;
        let userInfo = document.querySelectorAll('.photo-info span');
        userInfo[0].innerHTML = "Ulad";
        userInfo[1].innerHTML = PhotoPost.formatDate(new Date(Date.now()));
        document.querySelector('.hashtags').appendChild(document.createElement('input'));
        let hastTag = document.createElement('div');
        document.querySelector('.hashtags').appendChild(document.createElement('div')) 
    }
}