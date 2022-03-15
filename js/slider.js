(function(){
    
    const sliders = [...document.querySelectorAll('.hdvida_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.hdvida_body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;


        sliders[Number(currentTestimony)-1].classList.remove('hdvida_body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('hdvida_body--show');

    }

})();