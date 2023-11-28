//const form = document.querySelector('.popup__form');

const formsConfig = {
    formElement: '.popup__form',
    inputElement: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  }


  class Validation {
    constructor (formElement,inputElement,submitButtonSelector,inactiveButtonClass,inputErrorClass,errorClass) {
        this.formElement = formsConfig.formElement;
        this.inputElement = formsConfig.inputElement;
        this.submitButtonSelector = formsConfig.submitButtonSelector;
        this.inactiveButtonClass = formsConfig.inactiveButtonClass;
        this.inputErrorClass = formsConfig.inputErrorClass;
        this.errorClass = formsConfig.errorClass;
      }

      _showError() {
        const errorElement = this.formElement.querySelector(`.${this.inputElement.id}-error`);
        this.inputElement.classList.add(this.inputErrorClass);
        errorElement.classList.add(this.errorClass);
        errorElement.textContent = errorMessage;
        console.log(errorElement)
       }
      
      _hideError() {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        this.inputElement.classList.remove(this.inputErrorClass);
        errorElement.classList.remove(this.errorClass);
        errorElement.textContent = ""
      }
    
      _checkInputValidity() {
        if (!this.inputElement.validity.valid) {
          _showError();
        } else {
          _hideError();   
        }
      }

      _setEventListeners() {
        const inputList = Array.this.formElement
        console.log(inputList)

        
      }
      

  }

  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(formsConfig.formElement)); 
    formList.forEach((formElement) => {
      const valid = new Validation 
    })
    
  }
  enableValidation(formsConfig)

  
  // formElement.addEventListener('submit', (evt) => {
  //   evt.preventDefault()
  // })











































// const form = document.querySelector('.popup__form');
// const formInput = form.querySelector('.popup__input');
// const formError = form.querySelector(`.${formInput.id}-error`);

// const formsConfig = {
//     formElement: '.popup__form',
//     formElement: '.popup__input',
//     submitButtonSelector: '.popup__button',
//     inactiveButtonClass: 'popup__button_disabled',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__error_visible'
//   }

// const showInputError = (formElement, inputElement, errorMessage) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.add('.popup__input_type_error');
//     errorElement.classList.add('.popup__error_visible');
//     errorElement.textContent = errorMessage;
// }

// const hideInputError = (formElement, inputElement) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.remove('.popup__input_type_error');
//     errorElement.classList.remove('.popup__error_visible');
//     errorElement.textContent = '';
// }

// const checkInputValidity = (formElement, inputElement) => {
//     if (!inputElement.validity.valid) {
//       showInputError(formElement, inputElement, inputElement.validationMessage);
//     } else {
//       hideInputError(formElement, inputElement);
//     }
//   };

//   const hasInvalidInput = (inputList) => {
//     return inputList.some((inputElement) => {
//       return !inputElement.validity.valid;
//     })
//   }
  
//   const toggleButtonState =(inputList, buttonElement) => {
//     if(hasInvalidInput(inputList)){
//        buttonElement.classList.add('button_inactive');
//     }
//       else {
//         buttonElement.classList.remove('button_inactive');
//       }
//   }

//   const setEventListeners = (formElement) => {
//     const inputList = Array.from(formElement.querySelectorAll('.form__input'));
//     const buttonElement = formElement.querySelector('.popup__submit');
//     toggleButtonState(inputList, buttonElement);
//     inputList.forEach((inputElement) => {
//       inputElement.addEventListener('input', function () {
//         checkInputValidity(formElement, inputElement);
//         toggleButtonState(inputList, buttonElement);
//       });
//     });
//   };

//   const enableValidation = () => {
//     const formList = Array.from(document.querySelectorAll('.form'));
//     formList.forEach((formElement) => {
//       formElement.addEventListener('submit', function (evt) {
//         evt.preventDefault();
//       });
      
//       const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
//     fieldsetList.forEach((fieldSet) => {
//     setEventListeners(fieldSet);
//   }); 
      
  
//     });
//   };
  


//   enableValidation(formsConfig); 
