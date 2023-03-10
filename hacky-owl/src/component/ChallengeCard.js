import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './ChallengeCard.css'

export default function ChallengeCard(props) {

    const onClick = props.onClick
    const cardImage = props.cardImage
    const cardName = props.name
    const cardKey = props.challengeKey
    const cardDescription = props.description

  return (
    <Card sx={{ maxWidth: 200 }} onClick={onClick} className="ChallengeCard" title={cardKey}>
      <CardMedia
        sx={{ height: 200 }}
        image={cardImage}
        title={cardKey}
      />
      <CardContent title={cardKey}>
        <Typography gutterBottom variant="h5" component="div" title={cardKey}>
          {cardName}
        </Typography>
        <Typography variant="body2" color="text.secondary" title={cardKey}>
          {cardDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}