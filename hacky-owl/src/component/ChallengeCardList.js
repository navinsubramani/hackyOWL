import React from 'react';
import ChallengeCard from './ChallengeCard';

import './ChallengeCardList.css'

export default function ChallengeCardList(props) {

    const onClick = props.onClick
    const cardListInformation = props.cardListInformation

    const generateCardListUI = (cardListInformation) => 
        cardListInformation.map(
            (element) => {
                return <ChallengeCard 
                    onClick={onClick}
                    cardImage={element.cardImage}
                    name={element.name}
                    challengeKey={element.key}
                    description={element.description}
                    />
            }
        )

  return (
    <div className='CardList'>
        {generateCardListUI(cardListInformation)}
    </div>
  );
}