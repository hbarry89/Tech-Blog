// alert("hello");
const addPostForm = document.querySelector('#add-post');
const titleEl = document.querySelector('#title');
const bodyEl = document.querySelector('#body');

addPostForm.addEventListener('submit', function(e) {
    e.preventDefault();
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
      .then(data => data? alert('post added') : alert("not working "))
});