import React from 'react';
import ChallengeCard from './ChallengeCard';
import { Link } from 'react-router-dom'

import './ChallengeCardList.css'

export default function ChallengeCardList(props) {

    const onClick = props.onClick
    const cardListInformation = props.cardListInformation

    const generateCardListUI = (cardListInformation) => 
        cardListInformation.map(
            (element) => {
                return <Link to={"/"+element.key} key={element.key} style={{ textDecoration: 'none' }}><ChallengeCard 
                    onClick={onClick}
                    cardImage={element.cardImage}
                    name={element.name}
                    description={element.description}
                    challengeKey={element.key}
                    /></Link>
            }
        )

  return (
    <div className='CardList'>
        {generateCardListUI(cardListInformation)}
    </div>
  );
}