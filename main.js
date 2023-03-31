let si = document.querySelector('#btn_si');

si.addEventListener('click', ()=>{
    Swal.fire({
        title: 'Sabia que dirias que si, prepara el iphone:3',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
})

let no = document.querySelector('#btn_no');

no.addEventListener('mouseover', ()=>{
    let randomX = parseInt(Math.random()*100);
    let randomY = parseInt(Math.random()*100);
    no.style.setProperty('top',randomY+'%');
    no.style.setProperty('left',randomX+'%');
    no.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})

