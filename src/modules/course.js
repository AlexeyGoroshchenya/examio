export const course = () => {



    document.addEventListener('click', (e)=>{
        if(e.target.closest('.course__tab') && !e.target.closest('.course__tab').classList.contains('active')){
            document.querySelector('.course__tab.active').classList.remove('active')
            e.target.closest('.course__tab').classList.add('active')

            const tabType = e.target.closest('.course__tab').dataset.state

            document.querySelectorAll('.course__state').forEach(el=>{
                if(el.dataset.state === tabType){
                     el.classList.remove('hidden')
                    } else {
                        el.classList.add('hidden')
                    }
            })
        }

        if(e.target.closest('.course__filter-body') && !e.target.closest('.course__filter-list')){
            e.target.closest('.course__filter-body').classList.toggle('active')
        }

        if(e.target.closest('.course__filter-input')){
            e.target.closest('.course__filter-input').classList.toggle('checked')
            let number = e.target.closest('.course__filter').querySelectorAll('.checked').length
            
            const span = e.target.closest('.course__filter').querySelector('span')
            if(number > 0){
                
                span.textContent = number
                span.classList.add('checked-filter')

            } else {
                span.classList.remove('checked-filter')
            }
        }

        if(document.querySelector('.course__filter-body.active') && !e.target.closest('.course__filter')){
            document.querySelectorAll('.course__filter-body.active').forEach(el=>{
                el.classList.remove('active')
            })
        }

        if(e.target.closest('.course__filter-clear')){
            document.querySelectorAll('.course__filter .checked').forEach(el=>{
                el.classList.remove('checked')
                el.querySelector('input').checked=false
            })
            document.querySelectorAll('.checked-filter').forEach(el=>{
                el.classList.remove('checked-filter')
            })
        }

        if(e.target.closest('.course__module-title')) e.target.closest('.course__module').classList.toggle('active')

    })

}