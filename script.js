function showImage(imageNumber) {
    // Hide all images
    var images = document.querySelectorAll('.image');
    images.forEach(function(image) {
        image.classList.remove('active');
    });

    // Show the selected image
    document.getElementById('image' + imageNumber).classList.add('active');
}

// function showImage(imageNumber) {
//     // Hide all images
//     var images = document.querySelectorAll('.image');
//     images.forEach(function(image) {
//         image.classList.remove('active');
//     });

//     // Show the selected image
//     document.getElementById('image' + imageNumber).classList.add('active');
// }