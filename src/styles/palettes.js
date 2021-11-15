import { createGlobalStyle } from 'styled-components';

export const darkMode = {
  body: 'linear-gradient(to right, #1d4e89, #023047);',
  titleColor: 'linear-gradient(to right, #F5F4F5, #CBC9CF);',
  titleShadow: '1.5px 1.5px 3px #474747;',
  navLinkFontColor: 'rgba(252, 217, 237);',
  navLinkFontColorActive: '#7a5d83;',
  navLinkColorActive: 'rgba(252, 217, 237, 1);',
  menuLineColor: 'white;',
  currentBodyColor: '#ECEAEC;',
  newButtonColor: '#a5b9c9;',
  newButtonFontColor: '#474747;',
  saveButtonColor: '#966b9d;',
  recentsBackground: 'linear-gradient(to left, #1d4e89, #1D4C87);',
  recentsHeaderColor: '#F5F4F5;',
  recentsBodyColor: '#ECEAEC;',
  recent1Background: 'linear-gradient(200deg, rgba(205, 251, 255, 0.25), rgba(138, 178, 202, 0.25));',
  recent2Background: 'linear-gradient(200deg, rgba(138, 178, 202, 0.25), rgba(169, 178, 202, 0.25));',
  recent3Background: 'linear-gradient(200deg, rgba(169, 178, 202, 0.25), rgba(200, 178, 202, 0.25));',
  promptFontColor: '#ECEAEC;',
}

export const lightMode = {
  body: 'linear-gradient(to right, #CE6A85, #5C374C);',
  titleColor: 'linear-gradient(to right, #FBBC9D, #CBC9CF);',
  titleShadow: '1.5px 1.5px 3px #474747;',
  navLinkFontColor: 'rgba(252, 217, 237);',
  navLinkFontColorActive: '#7a5d83;',
  navLinkColorActive: '#FBBC9D;',
  menuLineColor: 'white;',
  currentBodyColor: '#ECEAEC;',
  newButtonColor: '#FBBC9D;',
  newButtonFontColor: '#474747;',
  saveButtonColor: '#CE6A85;',
  recentsBackground: 'linear-gradient(to left, #FAA275, #FF8C61);',
  recentsHeaderColor: '#5C374C;',
  recentsBodyColor: '#5C374C;',
  recent1Background: 'linear-gradient(200deg, rgba(205, 251, 255, 0.25), rgba(138, 178, 202, 0.25));',
  recent2Background: 'linear-gradient(200deg, rgba(138, 178, 202, 0.25), rgba(169, 178, 202, 0.25));',
  recent3Background: 'linear-gradient(200deg, rgba(169, 178, 202, 0.25), rgba(200, 178, 202, 0.25));',
  promptFontColor: '#ECEAEC;',
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

  .navbar__navlink {
    color: ${ props => props.theme.navLinkFontColor };
  }

  .active {
    background: ${ props => props.theme.navLinkColorActive };
    color: ${ props => props.theme.navLinkFontColorActive };
  }

  .menu:hover {
    background-color: #ECEAEC;
  }

  .menu:hover .menu-line-1 {
    background-color: ${ props => props.theme.recentsBodyColor };
  }

  .menu:hover .menu-line-2 {
    background-color: ${ props => props.theme.recentsBodyColor };
  }

  .menu:hover .menu-line-3 {
    background-color: ${ props => props.theme.recentsBodyColor };
  }

  .menu-line-1 {
    background-color: ${ props => props.theme.menuLineColor };
  }

  .menu-line-2 {
    background-color: ${ props => props.theme.menuLineColor };
  }

  .menu-line-3 {
    background-color: ${ props => props.theme.menuLineColor };
  }

  .user-mgmt-container {
    background-color: #ECEAEC;
  }

  .current-fact__text {
    color: ${ props => props.theme.currentBodyColor };
  }

  .current-fact__did-you-know {
    color: ${ props => props.theme.currentBodyColor };
  }

  .new-fact {
    background: ${ props => props.theme.newButtonColor };
    color: ${ props => props.theme.newButtonFontColor };
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

  .prompt__text {
    color: ${ props => props.theme.promptFontColor };
  }
`
