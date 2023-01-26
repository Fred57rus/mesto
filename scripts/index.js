const popupBtnOpen = document.querySelector(".profile__button-edit");               //кнопка открытия popup
const popupConteiner = document.querySelector(".popup");                            // выбор popup
const popupBtnClose = document.querySelector(".popup__buttom-close");               //кнопка закрыть popup
const popupSubmit = document.querySelector(".popup__submit")                        //кнопка сохранить popup
let formElement = document.querySelector(".popup__form");                           //форма
let profileName = document.querySelector(".profile__name");                         //заголовок на странице
let profileJob = document.querySelector(".profile__job");                           //заголовок на странице
let popupName = document.querySelector(".popup__input_name_value");                 //input
let popupJod = document.querySelector(".popup__input_job_value");                   //input


function openPopup() {                                                      //добавление класса для popup
    popupConteiner.classList.add("popup_opened")
    popupName.value = profileName.textContent;
    popupJod.value = profileJob.textContent;
};

function closePopup() {                                                      //удаление класса для popup
    popupConteiner.classList.remove("popup_opened")
}



function handleFormSubmit (evt) {
    evt.preventDefault(); 
    

    profileName.textContent = popupName.value;
    profileJob.textContent = popupJod.value;
    closePopup()
}
popupBtnOpen.addEventListener("click", openPopup);
popupBtnClose.addEventListener("click", closePopup);
formElement.addEventListener('submit', handleFormSubmit); 


