const popupBtnOpen = document.querySelector(".profile__button-edit");//кнопка открытия popup
const popupConteinerEdit = document.querySelector(".popup_edit");// выбор popup
const popupConteinerAdd = document.querySelector(".popup_add");// выбор popup
const popupBtnClose = document.querySelector(".popup__buttom-close_edit");//кнопка закрыть popup
const popupBtnCloseAdd = document.querySelector(".popup__buttom-close_add");//кнопка закрыть popup
const popupSubmit = document.querySelector(".popup__submit_edit");//кнопка сохранить popup
const popupSubmitAdd = document.querySelector(".popup__submit_add");//кнопка сохранить popup
let formElementEdit = document.querySelector(".popup__form_edit");//форма
let formElementAdd = document.querySelector(".popup__form_add");//форма
const popupBtnAdd = document.querySelector(".profile__button-add");
//let popupTitle = document.querySelector(".popup__title");   
const popupAddTitle = document.querySelector(".popup__input_title_value");
const popupAddLink = document.querySelector(".popup__input_link_value");
const popupAddClose = document.querySelector(".popup__submit_add")
let profileName = document.querySelector(".profile__name");//заголовок на странице
let profileJob = document.querySelector(".profile__job");//заголовок на странице
let popupName = document.querySelector(".popup__input_name_value");//input
let popupJod = document.querySelector(".popup__input_job_value");//input 
const cardElements = document.querySelector('.elements');
const fotoContainer = document.querySelector(".foto");
const fotoImg = document.querySelector(".foto__image");
const fotoTitle = document.querySelector(".foto__title");
const fotoBtnClose = document.querySelector(".foto__close")

const template = document
    .querySelector(".template")
    .content.querySelector(".elements__card");
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
    ];

    function handleFormSubmit (evt) {
        evt.preventDefault();
    
        profileName.textContent = popupName.value;
        profileJob.textContent = popupJod.value;
        closePopupEdit()
    }
    
  function createCards(item) {   
    const card = template.cloneNode(true);
    card.querySelector(".elements__img").src = item.link;
    card.querySelector(".elements__img").alt = item.name;
    card.querySelector(".elements__text").textContent = item.name;
    card.querySelector(".elements__grup-button").addEventListener("click", (evt) => {
        evt.target.classList.toggle("elements__grup-button_active");
    });
    card.querySelector(".elements__img").addEventListener("click", (evt) => {
        OpenFullScrinFoto();
        fotoImg.src = card.querySelector(".elements__img").src;
        fotoTitle.textContent = card.querySelector(".elements__text").textContent;
    })
    card.querySelector(".elements__delit").addEventListener("click", () => {
        card.remove();

    }) 
    return card
  }; 

  function renderCards() {
    initialCards.forEach((item) => {
        cardElements.append(createCards(item));
    })
  };

  renderCards();

function AddFormSubmit (evt) {
    evt.preventDefault(); 
    
    const name = popupAddTitle.value
    const link = popupAddLink.value

    const newCard = createCards({name: name, link: link});
    cardElements.append(newCard)
    closePopupAdd()
}

function openPopupEdit() {                                                     //добавление класса для popup
    popupConteinerEdit.classList.add("popup_opened");
    //popupTitle.textContent = "Редактировать профиль";
    popupName.value = profileName.textContent;
    popupJod.value = profileJob.textContent;
};

function openPopupAdd(){
    popupConteinerAdd.classList.add("popup_opened")
   //popupTitle.textContent = "Новое место";
    popupAddTitle.value = "Название";
    popupAddLink.value = "Ссылка на картинку";
}

function OpenFullScrinFoto() {
    fotoContainer.classList.add("popup_opened")
}

function closePopupEdit() {                                                      //удаление класса для popup
    popupConteinerEdit.classList.remove("popup_opened")
}

function closePopupAdd() {                                                      //удаление класса для popup
    popupConteinerAdd.classList.remove("popup_opened")
}

function fullFotoClose() {
    fotoContainer.classList.remove("popup_opened");
}

popupBtnOpen.addEventListener("click", openPopupEdit);
popupBtnClose.addEventListener("click", closePopupEdit);
formElementAdd.addEventListener("submit",AddFormSubmit)
popupBtnAdd.addEventListener("click", openPopupAdd)
formElementEdit.addEventListener('submit', handleFormSubmit); 
popupBtnCloseAdd.addEventListener("click", closePopupAdd);
fotoBtnClose.addEventListener("click", fullFotoClose);