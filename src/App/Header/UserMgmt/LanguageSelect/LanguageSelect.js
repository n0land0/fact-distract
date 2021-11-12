import React, { useContext } from 'react';
import { AppContext } from '../../../AppContextProvider';

const LanguageSelect = () => {
  const {
    currentFact, recentFacts, savedFacts, paletteMode, language, allLanguages,
    setCurrentFact, setRecentFacts, setSavedFacts, setPaletteMode, setLanguage
  } = useContext(AppContext);

  const languageOptions = allLanguages.map(langAbbrev =>
    <option value={langAbbrev}>{langAbbrev}</option>
  )

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'language') { setLanguage(value) };
  }

  return (
    <select
      className='language-select'
      name='language'
      defaultValue={''}
      value={language}
      onChange={handleChange}
      required
    >
      <option
        value=''
        disabled
        selected
      >
        choose a language
      </option>
      { languageOptions }
    </select>
  )
}

export default LanguageSelect;
