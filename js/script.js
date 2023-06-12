const button = document.querySelector('.banner__button')
const closeIcon = document.querySelector('.popup__icon')
const popupEmail = document.querySelector('.popup--email')
const banner = document.querySelector('.banner')
const popupInput = document.querySelector('.popup__input')

const form = document.querySelector('.popup__content')

const popupAnswer = document.querySelector('.popup--answer')


button.addEventListener('click',()=>{
    popupEmail.classList.add('popup--email--active')
    banner.classList.add('banner--active')
})



form.addEventListener('submit',(event)=>{
    event.preventDefault()

    if(popupInput.checkValidity()){
        popupEmail.classList.remove('popup--email--active')
        popupAnswer.classList.add('popup--answer--active')
        button.disabled = true

        setTimeout(()=>{
            popupAnswer.classList.remove('popup--answer--active')
            banner.classList.remove('banner--active')
            button.disabled = false
        },4000)
    }
})

closeIcon.addEventListener('click',()=>{
    popupEmail.classList.remove('popup--email--active')
    banner.classList.remove('banner--active')

})