document.querySelector('#signup-submit').addEventListener('click', function(e) {
    e.preventDefault()
    const username = document.querySelector('#signup-username').value;
    const password = document.querySelector('#signup-password').value;
    console.log(username, password);
    fetch(`/api/user`, {
        method: 'POST',
        body: JSON.stringify({
            username, password
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.json())
      .then(data => {
        data ? alert('You are now signed up!') : alert("Oops, something is not working...")
        document.location.replace('/dashboard')
      })
});

document.querySelector('#login-submit').addEventListener('click', function(e) {
    e.preventDefault()
    const username = document.querySelector('#login-username').value;
    const password = document.querySelector('#login-password').value;
    console.log(username, password);
    fetch(`/api/user`, {
        method: 'POST',
        body: JSON.stringify({
            username, password
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.json())
      .then(data => {
        data ? alert('You are now logged in!') : alert("Oops, something is not working...")
        document.location.replace('/dashboard')
      })
});