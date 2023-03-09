document.querySelector('#logout').addEventListener('click', function(e) {
    e.preventDefault()
fetch(`/api/user/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(data => {
    data ? alert('You are now logged out!') : alert("Oops, something is not working...")
    document.location.replace('/')
  })
});