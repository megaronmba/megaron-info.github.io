const enableDisableAll = (value) => {
    //localstorage aceita apenas string. Basta transformar o objeto
    localStorage.setItem(‘acceptedLocalData‘, JSON.stringify(initialState(value)));
    localStorage.setItem(‘termsAccepted‘, value);
    const element = document.querySelector(‘.box-cookies‘);
    if (!element.classList.contains(‘hide‘)) element.classList.add(‘hide‘);
};