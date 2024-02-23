export const langSelect = () => {
document.addEventListener('click', (e)=>{
    if (e.target.closest('#lang') && !e.target.closest('.buttons-header__language-option')) {
    document.querySelector('#lang').classList.toggle('active')
  }

  if(document.querySelector('#lang.active') && !e.target.closest('#lang')){
    document.querySelector('#lang').classList.remove('active')
  }

  if (e.target.closest('.buttons-header__language-option')) {
    document.querySelectorAll('.buttons-header__language-option').forEach(item => {
      item.classList.remove('active')
      e.target.closest('.buttons-header__language-option').classList.add('active')
    })
    document.querySelector('#lang p').textContent = e.target.textContent

   
  }
})
}
