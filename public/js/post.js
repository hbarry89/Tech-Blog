// alert("hello");
const addPostForm = document.querySelector('#add-post');
const titleEl = document.querySelector('#title');
const bodyEl = document.querySelector('#body');

addPostForm.addEventListener('submit', function(e) {
    // e.preventDefault();
    // alert("hello");
    const postInfo = {
        title: titleEl.value,
        body: bodyEl.value,
    }
    console.log(postInfo);
    fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify(postInfo),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.json())
      .then(data => data ? alert('Your post has been added!') : alert("Oops, something is not working..."))
});

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