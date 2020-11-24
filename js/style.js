const   burger = document.querySelector('#burger'),
        modals = document.querySelector('#modal'),
        closemodal = document.querySelector('.modal__close')


burger.addEventListener('click', () => {
    if(modals.classList.contains('hide')) {
        modals.classList.remove('hide');
    } else {
        modals.classList.add('hide');
    }
})

closemodal.addEventListener('click', () => {
    modals.classList.add('hide')
})
