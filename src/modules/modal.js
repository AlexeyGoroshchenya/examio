export const modal = () => {

    const closeModal =()=>{
        document.querySelector('.modal.active').classList.remove('active')
    }

    document.addEventListener('click', (e)=>{
        if((document.querySelector('.modal.active') && !e.target.closest('.modal__body')) || e.target.closest('.modal__cancel')){
            closeModal()
        }
    })

}