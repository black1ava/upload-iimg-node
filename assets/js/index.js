const submit = document.getElementById('submit');

submit.addEventListener('click', function(e){
  e.preventDefault();
  const file = document.getElementById('file');
  const formData = new FormData();
  formData.append('file', file.files[0]);
  // console.log(formData.getAll('file'));

  fetch('/file/upload', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(response => {
      window.location = `/file/upload?file=${ response.path }`
    });
});

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
if(params['file']){
  const image = document.getElementById('image');
  image.setAttribute('src', '/' + params['file']);
}