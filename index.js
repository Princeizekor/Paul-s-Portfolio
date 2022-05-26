function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
  }
  const hamper = document.querySelector('.hamperbar');
  const Camp = document.querySelector('.closehamper');
  const list = document.querySelector('.lists');
  hamper.addEventListener('click', function () {
      if (hamper.className != 'open') {
          Camp.style.display = 'block'
          list.style.display = 'block'
          hamper.style.display = 'none'
      } else {
          hamper.className = 'open';
          Camp.style.display = 'none'
          list.style.display = 'none'
      }
     
      
  })
  Camp.addEventListener('click', function () {
      if (Camp.className != 'open') {
          hamper.style.display = 'block';
          list.style.display = 'none';
          Camp.style.display = 'none';
      } else {
          Camp.className = 'open';
          hamper.style.display = 'none';
          list.style.display = 'block';
      }
  })