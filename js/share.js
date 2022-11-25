const shareButton = document.querySelector('.share-button');

shareButton.addEventListener('click', event => {
  if (navigator.share) { 
   navigator.share({
      title: 'Radio Mi Preferida',
      text: 'Radio Mi Preferida con los mejores éxitos de hoy.',
      url: '#'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
    } else {
        shareDialog.classList.add('is-open');
    }
});



// closeButton.addEventListener('click', event => {
//   shareDialog.classList.remove('is-open');
// });