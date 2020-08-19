import refs from './refs';
 
const showSpinner =() => {
    refs.spinner.classList.remove('d-none')
};

const hiddenSpinner =() => {
    refs.spinner.classList.add('d-none')
};

export  { showSpinner, hiddenSpinner };