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
});