const popupBtnOpen = document.querySelector(".edit_button");                //кнопка открытия popup
const popupConteiner = document.querySelector(".popup");                      // выбор popup
const popupBtnClose = document.querySelector(".popup__buttom-close");       //кнопка закрыть popup
let formElement = document.querySelector(".popup__form");               //форма
const popupSubmit = document.querySelector(".popup__submit")
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let popupName = document.querySelector(".popup__type-name");
let popupJod = document.querySelector(".popup__type-job");



popupBtnOpen.addEventListener("click", openPopup);
popupBtnClose.addEventListener("click", closePopup);
popupSubmit.addEventListener("click", handleFormSubmit)

function openPopup() {                                                      //добавление класса для popup
    popupConteiner.classList.add("popup_is-open")
};

function closePopup() {                                                      //удаление класса для popup
    popupConteiner.classList.remove("popup_is-open")
}





function handleFormSubmit (evt) {
    evt.preventDefault(); 
    

    profileName.textContent = popupName.value;
    profileJob.textContent = popupJod.value;
    closePopup()
}

formElement.addEventListener('submit', handleFormSubmit); 


