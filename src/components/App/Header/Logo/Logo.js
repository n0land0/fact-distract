import React from 'react';
import animations from '../../../../styles/animations';
// import turkeyLogo from '../../../../assets/turkey1.png';

const Logo = () => {
  let isOpen = false;

  return (
    <article className='turkey-logo__container'>
      <div className='turkey-logo' onClick={ () => {
        animations.toggleBlurb(isOpen);
        isOpen = !isOpen;
        console.log(isOpen)
      } }>
        <p>about</p>
      </div>
      <div className='about'>
        <p>Dreading the awkward table conversation at Thanksgiving? Arm yourself with some totally useless facts for whenever you need to change the subject.</p>
      </div>
    </article>
  )
}

export default Logo;
