(function() {
    const photoPosts = [
        new PhotoPost(
            '1',
            'New post is there',
            '2017-12-16',
            'Ulad',
            'images/1-min.jpg',
            1, 2,
            ['fish', 'nature', 'water'],
            ['Cheburashka', 'Ulad', 'Ann']),
        new PhotoPost(
            '2',
            'Beautiful industrial photo',
            '2017-12-16',
            'Ulad',
            'images/2-min.jpg',
            3, 2,
            ['city', 'gray', 'industrial'],
            ['Ulad', 'Ann']),
        new PhotoPost(
            '3',
            'Just a default city',
            '2018-01-18',
            'Ulad',
            'images/3-min.jpg',
            1, 1,
            ['city', 'NewYork', 'fromsky'],
            ['Ulad', 'Ann']),
        new PhotoPost(
            '4',
            'Nature from the sky',
            '2018-01-20',
            'Ulad',
            'images/4-min.jpg',
            1, 4,
            ['nature', 'green', 'river'],
            ['Ulad', 'Ann']),
        new PhotoPost(
            '5',
            'Chilling at the seaside',
            '2018-03-22',
            'Ulad',
            'images/5-min.jpg',
            1, 1,
            ['sea', 'beach', 'waves'],
            ['Ulad', 'Ann', 'Donuld']),
        new PhotoPost(
            '6',
            'Chilling in a desert',
            '2018-03-22',
            'Ulad',
            'images/6-min.jpg',
            1, 1,
            ['dry', 'desert', 'natureisbeautiful'],
            ['Ulad', 'Ann', 'Donuld'])
    ];

    let photoPostModel = new PhotoPostModel(photoPosts);
    let photoPostView = new PhotoPostView(photoPostModel);
    let photoPostController = new PhotoPostController(photoPostModel, photoPostView);
}());