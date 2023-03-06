import React from 'react';
import './Slides.scss';
import Slider from 'infinite-react-carousel';
import CatCard from '../catCard/CatCard';
import { cards } from './../../data';


const Slides = () => {
  return (
  <div className="slides">
      <div className="container">
         <Slider slidesToShow={5} arrowsScroll={5}>
          {cards.map(card => (<CatCard item={card} key ={card.id}/>))}
  </Slider>
    </div>
      </div>
  )
}
export default Slides