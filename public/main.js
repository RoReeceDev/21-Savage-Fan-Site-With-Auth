var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash-o");

console.log(trash)

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const listItem = this.closest('.message')
        const name = listItem.querySelector('.name').textContent
        const msg = listItem.querySelector('.msg').textContent
        const thumbUp = parseFloat(listItem.querySelector('.thumbs').textContent)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


Array.from(thumbDown).forEach(function(element) {
  element.addEventListener('click', function(){
    const listItem = this.closest('.message')
    const name = listItem.querySelector('.name').textContent
    const msg = listItem.querySelector('.msg').textContent
    const thumbDown = parseFloat(listItem.querySelector('.thumbs').textContent)
    fetch('messages/down', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'msg': msg,
        'thumbUp':thumbDown
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});


Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function(){
    const listItem = this.closest('.message')
    const name = listItem.querySelector('.name').textContent
    const msg = listItem.querySelector('.msg').textContent
    fetch('messages', {
      method: 'delete',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'msg': msg,
      })
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});
