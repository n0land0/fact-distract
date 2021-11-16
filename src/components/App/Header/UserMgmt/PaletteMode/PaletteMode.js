import React, { useContext } from 'react';
import { AppContext } from '../../../AppContextProvider';

const PaletteMode = () => {
  const {
    paletteMode, togglePalette
  } = useContext(AppContext);

  // const newPalette = paletteMode === 'dark'
  //   ? 'light'
  //   : 'dark';

  return (
    <div className='toggle-switch'>
      <input
       type='checkbox'
       className='toggle-switch-checkbox'
       name='paletteToggle'
       id='paletteToggle'
       checked={ paletteMode === 'dark' }
       onChange={ togglePalette }
      />
      <label className='toggle-switch-label' htmlFor='paletteToggle'>
        <span className='toggle-switch-inner' />
        <span className='toggle-switch-switch' />
      </label>
    </div>
  )
}

export default PaletteMode;
