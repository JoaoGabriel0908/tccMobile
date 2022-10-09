/* regex que permite apenas letras no input*/
export const onlyLetters = /^[A-Za-záàôãéèêícóôöúcñÁÀÂÃÉÈÍÏóôÖÖÚCN ']+$/;

export const pwd =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;

export const nome = 
  /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/