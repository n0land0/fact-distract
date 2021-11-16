# fact • distract

## Abstract

With Thanksgiving quickly approaching, many people are dreading the extremely awkward dinner-table conversations in their near futures. fact • distract provides users with a plethora of randomly generated dumb facts to make quickly changing the subject a breeze. Users who might want to curate a list in advance have the ability to save facts to a list for later use.

## Snapshots of Application

Landing page (sunrise mode)

<img width="2560" alt="Screen Shot 2021-11-15 at 12 22 04 AM" src="https://user-images.githubusercontent.com/79823098/141739059-08b35a49-00c1-4e14-93b3-5d2fa222d4fc.png">

Landing page (dusk mode)

<img width="2560" alt="Screen Shot 2021-11-15 at 12 22 15 AM" src="https://user-images.githubusercontent.com/79823098/141739162-e6aaf1c8-0f20-4528-9167-1114354f4eca.png">

Landing page (mobile)

<img width="378" alt="Screen Shot 2021-11-15 at 12 25 15 AM" src="https://user-images.githubusercontent.com/79823098/141739583-ea70ab65-44b6-427c-9cd8-8bef2505942b.png">

Saved facts page

<img width="2560" alt="Screen Shot 2021-11-15 at 12 22 39 AM" src="https://user-images.githubusercontent.com/79823098/141739192-6088f19a-af92-4190-ac0e-abf3eef023ba.png">

Saved facts page (mobile)

<img width="375" alt="Screen Shot 2021-11-15 at 12 27 13 AM" src="https://user-images.githubusercontent.com/79823098/141739622-8c4d2679-7f4a-4a1d-8f20-d1b3856f23e9.png">

Landing page - user can generate and save new dumb facts and view their recent history
Saved facts page - user can see facts they've previously saved
Dropdown menu - user can toggle between two color modes (sunrise & dusk)

## Technologies

### Front End

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![SCSS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)

### Dependencies

- Bootstrapped with [Create React App](https://create-react-app.dev/)
- [GSAP](https://greensock.com/get-started/)
- [react-elastic-carousel](https://www.npmjs.com/package/react-elastic-carousel)
- [Styled Components](https://styled-components.com/)
- [Random Useless Facts API](https://uselessfacts.jsph.pl/)

## Wins

- Building with Context from the beginning of the project
- Hitting the ground running with Router 6 just a couple days after it was released
- Getting my first responsive design for mobile done
- Building a hamburger menu
- Getting familiar with GSAP

## Challenges

- Data coming from this API frequently contained inconsistent punctuation, curious formatting, wildly varied sentence length, and some extremely long words; this required a thorough data-cleaning function tacked onto the fetch call to make responses consistently presentable on the page
- Had to take a couple days off, as a very full work slate and extremely taxing previous project had led to serious burnout, so this project timeline was shorter than I'd have liked

## Install/ Set Up Instructions

The deployed app can be viewed [here](https://fact-distract.surge.sh).

If you'd like to run this repo locally:

1. Clone down this repository
2. In your terminal, run:
  ```
  npm install
  npm start
  ```
3. If you're not automatically navigated to `localhost:3000` from your terminal, visit it in your browser
4. Get ready to learn some dumb facts

## Future Features

- Different language options
- Back end to handle user accounts
- Progressive web app

## Contributors

- [Nolan Caine](https://github.com/n0land0)

## Project Spec
- [Project Spec](https://frontend.turing.edu/projects/module-3/showcase.html) provided by [Turing School of Software & Design](https://turing.edu/)
