import React from 'react';
import { Link } from 'react-router-dom';

const PromptIfNoneSaved = () => {
  return (
    <section className='prompt-container'>
      <h2 className='prompt__text'>you haven't saved any facts yet!</h2>
      <Link to='/'>
        <button className='prompt__go-home-btn'>let's go do that</button>
      </Link>
    </section>
  )
}

export default PromptIfNoneSaved;
