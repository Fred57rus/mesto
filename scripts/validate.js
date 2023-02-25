// const form = document.querySelector('.popup__form');
// const formInput = form.querySelector('.popup__input');
// const formError = form.querySelector(`.${formInput.id}-error`);

const formsConfig = {
    formElement: '.popup__form',
    inputElement: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  }

const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  //console.log(errorElement)
  inputElement.classList.add(formsConfig.inputErrorClass);
  errorElement.classList.add(formsConfig.errorClass);
  errorElement.textContent = errorMessage;
};

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(formsConfig.inputErrorClass);
  errorElement.classList.remove(formsConfig.errorClass);
  errorElement.textContent = ""
  
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement);   
  }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(formsConfig.inactiveButtonClass);
      buttonElement.setAttribute('disabled', 'disabled');
      //console.log(inputList)
    } else {
      buttonElement.classList.remove(formsConfig.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  };

  const toggleButtonStateStart = (buttonElement) => {
    buttonElement.classList.add(formsConfig.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
  }
console.log(toggleButtonStateStart)
const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(formsConfig.inputElement));
    const buttonElement = formElement.querySelector(formsConfig.submitButtonSelector);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function(){
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      })
    })
  }

  
  const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(formsConfig.formElement)); 
  formList.forEach((formElement) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
    setEventListeners(formElement);
}); 
};

enableValidation(formsConfig);
















































// // const form = document.querySelector('.popup__form');
// // const formInput = form.querySelector('.popup__input');
// // const formError = form.querySelector(`.${formInput.id}-error`);

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
