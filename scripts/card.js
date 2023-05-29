import {initialCards} from './constants.js' 


const popupFoto = document.querySelector(".popup_type_foto");
const popupFotoImg = document.querySelector(".popup__foto");
const popupFotoTitle = document.querySelector(".popup__foto-title");
const popupFotoBtnClose = document.querySelector(".popup__buttom-close_foto")
const popupBtnAddSubmit = document.querySelector(".popup__submit_add");
const popupAddTitle = document.querySelector(".popup__input_title_value");
const popupAddLink = document.querySelector(".popup__input_link_value");
const cardElement = document.querySelector('.elements');

// function createCards(item) {   
//     const card = template.cloneNode(true);
//     const imageElement = card.querySelector(".elements__img");
//     imageElement.src = item.link;
//     imageElement.alt = item.name;
//     card.querySelector(".elements__text").textContent = item.name;
//     card.querySelector(".elements__grup-button").addEventListener("click", (evt) => {
//         evt.target.classList.toggle("elements__grup-button_active");
//     });
//     card.querySelector(".elements__img").addEventListener("click", (evt) => {
//         popupFotoImg.src = item.link;
//         popupFotoImg.alt = item.name;
//         popupFotoTitle.textContent = item.name;
//         openPopup(popupFoto);
//     })
//     card.querySelector(".elements__delit").addEventListener("click", () => {
//         card.remove();

//     }) 
//     return card
//   }; 

//   function renderCards() {
//     initialCards.forEach((item) => {
//         cardElements.append(createCards(item));
//     })
//   };

//   renderCards(); 

class Cards {
    constructor(name, link) {
        this._name = name;
        this._link = link;
    }

    _getTemplaet() {    
        const card = document
        .querySelector(".template")
        .content.querySelector(".elements__card")
        .cloneNode(true);

        return card
    }

    _generalCard() {
        this._element = this._getTemplaet();
      
        this._setEventListeners();

        this._element.querySelector('.elements__text').textContent = this._name;
        this._element.querySelector('.elements__img').src = this._link;
        this._element.querySelector('.elements__img').alt = this._name;

        return this._element
    }

    _handleOpenPopup (evt) {
        if(evt.target !== this._element.querySelector(".elements__delit") && evt.target !== this._element.querySelector(".elements__grup-button")) {
            evt.preventDefault();

            popupFotoImg.src = this._link;
            popupFotoImg.alt = this._name;
            popupFotoTitle.textContent = this._name;
            popupFoto.classList.add('popup_opened');
        }
    };

    _handleClosePopup (){
        popupFoto.classList.remove('popup_opened');
    };

    _handleDelit (evt) {
        if(evt.target === this._element.querySelector(".elements__delit")) {
            evt.preventDefault();
            this._element.remove()
        }
    }

    _handleLike(evt) {
        console.log(evt.target)
        if(evt.target === this._element.querySelector(".elements__grup-button")) {
            evt.preventDefault();
            evt.target.classList.toggle("elements__grup-button_active");
            //this._element.querySelector(".elements__grup-button").classList.toggle("elements__grup-button_active")
        }
    }

    _submitAddProfileForm(evt) {
        evt.preventDefault(); 
    
        this._name = popupAddTitle.value;
        this._link = popupAddLink.value;
        console.log(this._name, this._link);

        const card = new Cards(this._name, this._link);

        const cardElement = card._generalCard();
        console.log(cardElement)
        document.querySelector('.elements').append(cardElement);
        
        
    
        // const newCard = new Cards(name, link);
        // cardElement = newCard.generalCard();
        // document.querySelector('.elements').append(this._cardElement);
        closePopupAddFoto(evt);
    }

    _setEventListeners () {
        this._element.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._handleOpenPopup(evt)
        });
        
        popupFotoBtnClose.addEventListener('click', () => {
            this._handleClosePopup ()
        });

        this._element.querySelector(".elements__delit").addEventListener('click', (evt) => {
            this._handleDelit (evt);
        })

        this._element.querySelector('.elements__grup-button').addEventListener('click', (evt) => {
           this._handleLike(evt);
        })

        popupBtnAddSubmit.addEventListener('click', (evt) => {
            this._submitAddProfileForm(evt)
        })
    };

};

initialCards.forEach((item) => {
    const card = new Cards(item.name, item.link);
    const cardElement = card._generalCard();
    document.querySelector('.elements').append(cardElement);
})


//if(e.target === this._element.querySelector('.elements__delit')) {