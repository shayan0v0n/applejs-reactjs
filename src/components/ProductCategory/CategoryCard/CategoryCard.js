import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Loading from '../../loading/Loading';
import './CategoryCard.scss'

const CategoryCard = props => {
    const { cardData } = props;
    let navigate = useNavigate();
  return (
    <>
        {cardData ? (
          <Card className="category-card-custom" onClick={() => {navigate(`/shop/${cardData.name}`)}}>
            <Card.Img src={`assets/imgs/${cardData.name}.png`} fluid className="w-50" />
            <Card.Title className="text-center pt-2">{cardData.name}</Card.Title>
          </Card>
        ) : <Loading />}
    </>
  )
}

export default CategoryCard;