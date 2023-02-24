const popupEditProfileBtn = document.querySelector(".profile__button-edit");//кнопка открытия popup
const popupEditProfile = document.querySelector(".popup_edit");// выбор popup
const popupConteinerAdd = document.querySelector(".popup_add");// выбор popup
const popupEditBtnClose = document.querySelector(".popup__buttom-close_edit");//кнопка закрыть popup
const popupBtnCloseAdd = document.querySelector(".popup__buttom-close_add");//кнопка закрыть popup
const popupSubmit = document.querySelector(".popup__submit_edit");//кнопка сохранить popup
const popupSubmitAdd = document.querySelector(".popup__submit_add");//кнопка сохранить popup
const formElementEdit = document.querySelector(".popup__form_edit");//форма
const formElementAdd = document.querySelector(".popup__form_add");//форма
const popupBtnAdd = document.querySelector(".profile__button-add"); 
const popupAddTitle = document.querySelector(".popup__input_title_value");
const popupAddLink = document.querySelector(".popup__input_link_value");
const popupAddClose = document.querySelector(".popup__submit_add")
const profileName = document.querySelector(".profile__name");//заголовок на странице
const profileJob = document.querySelector(".profile__job");//заголовок на странице
const popupName = document.querySelector(".popup__input_name_value");//input
const popupJod = document.querySelector(".popup__input_job_value");//input 
const cardElements = document.querySelector('.elements');
const popupFoto = document.querySelector(".popup_type_foto");
const popupFotoImg = document.querySelector(".popup__foto");
const popupFotoTitle = document.querySelector(".popup__foto-title");
const popupFotoBtnClose = document.querySelector(".popup__buttom-close_foto")

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

    function submitEditProfileForm (evt) {
        evt.preventDefault();
    
        profileName.textContent = popupName.value;
        profileJob.textContent = popupJod.value;
        closePopup(popupEditProfile);
    }
    
  function createCards(item) {   
    const card = template.cloneNode(true);
    const imageElement = card.querySelector(".elements__img");
    imageElement.src = item.link;
    imageElement.alt = item.name;
    card.querySelector(".elements__text").textContent = item.name;
    card.querySelector(".elements__grup-button").addEventListener("click", (evt) => {
        evt.target.classList.toggle("elements__grup-button_active");
    });
    card.querySelector(".elements__img").addEventListener("click", (evt) => {
        const imageElement = card.querySelector(".elements__img");
        popupFotoImg.src = item.link;
        popupFotoImg.alt = item.name;
        popupFotoTitle.textContent = card.querySelector(".elements__text").textContent;
        openPopup(popupFoto);
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

function submitAddProfileForm (evt) {
    evt.preventDefault(); 
    
    const name = popupAddTitle.value
    const link = popupAddLink.value

    const newCard = createCards({name: name, link: link});
    cardElements.prepend(newCard)
    closePopupAddFoto();
}

function openPopup(popup){
    popup.classList.add("popup_opened")
    document.addEventListener('keydown', (evt) => {
        keyHandlerEsc(evt, popup)
    })
    document.addEventListener( 'mousedown', (evt) => {
        keyHandlerOverlay (evt, popup)
    })

};

function closePopup(popup) {                                                      //удаление класса для popup
    popup.classList.remove("popup_opened");
    document.removeEventListener('keydown', (evt) => {
        keyHandlerEsc(evt, popup)
    })
    document.removeEventListener( 'mousedown', (evt) => {
        keyHandlerOverlay (evt, popup)
    })

};

function closePopupAddFoto() {
    popupAddTitle.value = '';
    popupAddLink.value = '';
    closePopup(popupConteinerAdd);
}

function openPopupEdit() {                                                     //добавление класса для popup
    popupName.value = profileName.textContent;
    popupJod.value = profileJob.textContent;
    openPopup(popupEditProfile)
};

popupEditProfileBtn.addEventListener("click", openPopupEdit);

popupEditBtnClose.addEventListener("click", ()=> {
    closePopup(popupEditProfile);
});
formElementAdd.addEventListener("submit",submitAddProfileForm);

popupBtnAdd.addEventListener("click", () => {
    openPopup(popupConteinerAdd);
})
formElementEdit.addEventListener('submit', submitEditProfileForm); 

popupBtnCloseAdd.addEventListener("click", ()=> {
    closePopupAddFoto();
});
popupFotoBtnClose.addEventListener("click", ()=> {
    closePopup(popupFoto)
});

function keyHandlerEsc(evt, popup) {
    if(evt.key === 'Escape') {
        closePopup(popup)
    }
  }
  function keyHandlerOverlay (evt, popup){
  if (evt.target == popup) {
      closePopup(popup)
  }}