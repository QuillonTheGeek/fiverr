import './Home.scss';
import React from 'react';
import Featured from '../../components/Featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slides from '../../components/Slides/Slides';


const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Slides/>
    </div>
  )
}

export default Home