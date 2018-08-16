const imagePaths = ['images/pug-1.jpg', 'images/pug-2.jpg', 'images/pug-3.jpeg', 'images/pug-4.jpeg', 'images/pug-5.jpg'].map(path => chrome.extension.getURL(path))

function getRandomPug() {
  return imagePaths[Math.floor(Math.random() * (imagePaths.length))]
}

function updateImages() {
  var images = document.querySelectorAll('img:not(.puglife-is-life)');
  for (var i = 0, l = images.length; i < l; i++) {
    images[i].setAttribute("src", getRandomPug())
    images[0].classList.add('puglife-is-life')
  }
}

updateImages()
setInterval(updateImages, 4000)

