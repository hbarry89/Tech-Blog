// alert("hello");

document.querySelector('.post-delete').addEventListener('click', function(e) {
  if (e.target.matches('button')) {
    fetch(`/api/post/${e.target.dataset.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then(data => {
      data ? alert('Your post has been deleted!') : alert("Oops, something is not working...")
      document.location.replace('/')
    })
  }
})