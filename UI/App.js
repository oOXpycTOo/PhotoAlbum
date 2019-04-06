(function() {
    // TODO dataservice.js
    let photoPosts = []
    if(localStorage.getItem('photoPosts') === null) {
        photoPosts = [
            new PhotoPost(
                '1',
                'New post is there',
                '2017-12-16',
                'Ulad',
                'images/1.jpg',
                1, 2,
                ['fish', 'nature', 'water'],
                ['Cheburashka', 'Ulad', 'Ann']),
            new PhotoPost(
                '2',
                'Beautiful industrial photo',
                '2017-12-16',
                'Ulad',
                'images/2.jpg',
                3, 2,
                ['city', 'gray', 'industrial'],
                ['Ulad', 'Ann']),
            new PhotoPost(
                '3',
                'Just a default city',
                '2018-01-18',
                'Ulad',
                'images/3.jpg',
                1, 1,
                ['city', 'NewYork', 'fromsky'],
                ['Ulad', 'Ann']),
            new PhotoPost(
                '4',
                'Nature from the sky',
                '2018-01-20',
                'Ulad',
                'images/4.jpg',
                1, 4,
                ['nature', 'green', 'river'],
                ['Ulad', 'Ann']),
            new PhotoPost(
                '5',
                'Chilling at the seaside',
                '2018-03-22',
                'Ulad',
                'images/5.jpg',
                1, 1,
                ['sea', 'beach', 'waves'],
                ['Ulad', 'Ann', 'Donuld']),
            new PhotoPost(
                '6',
                'Chilling in a desert',
                '2018-03-22',
                'Ulad',
                'images/6.jpg',
                1, 1,
                ['dry', 'desert', 'natureisbeautiful'],
                ['Ulad', 'Ann', 'Donuld'])
        ];
        localStorage.setItem('photoPosts', JSON.stringify(photoPosts));
    } else {
        photoPosts = JSON.parse(localStorage.getItem('photoPosts'));
        photoPosts.forEach(photoPost => {
            photoPost.__proto__ = PhotoPost.prototype;
            photoPost.createdAt = new Date(photoPost.createdAt);
        });
    }
    let photoPostModel = new PhotoPostsModel(photoPosts);
    let photoPostView = new PhotoPostsView(photoPostModel);
    let photoPostController = new PhotoPostsController(photoPostModel, photoPostView);
    let addPhotoModel = new AddPhotoModel();
    let addPhotoView = new AddPhotoView(addPhotoModel);
    let addPhotoController = new AddPhotoController(addPhotoModel, addPhotoView);
}());