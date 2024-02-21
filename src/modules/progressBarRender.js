

export const progressBarRender = () => {

    if(document.querySelector('.progress')){
        document.querySelectorAll('.progress').forEach(el=>{
            let percent = el.dataset.progress
            
            el.querySelector('.progress-result').style.width = percent+'%'
        })
    }

    if(document.querySelector('.circle')){
        document.querySelectorAll('.circle').forEach(el=>{
            let percent = parseFloat(el.dataset.progress)
            let counter = 0

 
            // 263 это 100% для этого конкретно svg
            
            let intervalId = setInterval(()=>{
                if(counter >= percent){
                    clearInterval(intervalId)
                }else{
                    counter++
                    el.querySelector('circle').style.strokeDashoffset = 263 - 2.63 * counter
                }
                
            },25)

        })
    }

    

    
    
    

}