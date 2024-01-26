let slider = document.querySelector('[type=range]')
let div = document.querySelector('.container')

slider.addEventListener('input', e => {
  div.style.width = e.target.value * 10 + 'px'
})
