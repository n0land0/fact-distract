import { createGlobalStyle } from 'styled-components';

export const darkMode = {
  body: 'linear-gradient(to right, #1d4e89, #023047);',
  titleColor: 'linear-gradient(to right, #F5F4F5, #CBC9CF);',
  titleShadow: '1.5px 1.5px 3px #474747;',
  currentBodyColor: '#ECEAEC;',
  saveButtonColor: '#966b9d;',
  recentsBackground: 'linear-gradient(to left, #1d4e89, #1D4C87);',
  recentsHeaderColor: '#F5F4F5;',
  recentsBodyColor: '#ECEAEC;',
  recent1Background: 'linear-gradient(200deg, rgba(205, 251, 255, 0.25), rgba(138, 178, 202, 0.25));',
  recent2Background: 'linear-gradient(200deg, rgba(138, 178, 202, 0.25), rgba(169, 178, 202, 0.25));',
  recent3Background: 'linear-gradient(200deg, rgba(169, 178, 202, 0.25), rgba(200, 178, 202, 0.25));',
}

export const lightMode = {
  body: 'linear-gradient(to right, white, gray);',
  titleColor: 'blue;'
}

export const GlobalStyles = createGlobalStyle`
  body {
    transition: background 2s ease;
    background: ${ props => props.theme.body };
  }

  .page-title {
    background: ${ props => props.theme.titleColor };
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .page-title-shadow {
    text-shadow: ${ props => props.theme.titleShadow };
  }

  .current-fact__text {
    color: ${ props => props.theme.currentBodyColor };
  }

  .current-fact__did-you-know {
    color: ${ props => props.theme.currentBodyColor };
  }

  .save-fact {
    background: ${ props => props.theme.saveButtonColor };
  }

  .recent-facts-container {
    background: ${ props => props.theme.recentsBackground };
    color: ${ props => props.theme.recentsBodyColor };
  }

  .recent-facts__header {
    color: ${ props => props.theme.recentsHeaderColor };
  }

  .recent-fact-1__container {
    background: ${ props => props.theme.recent1Background };
  }

  .recent-fact-2__container {
    background: ${ props => props.theme.recent2Background };
  }

  .recent-fact-3__container {
    background: ${ props => props.theme.recent3Background };
  }
`
