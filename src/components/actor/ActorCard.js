import React from 'react';
import { StyledActorCard } from './ActorCard.styled';

const ActorCard = ({ image, name, gender, country, birthday, deathday }) => {
  const calculateAge = birth => {
    const today = new Date();
    const birthDate = new Date(birth);
    let ageNow = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      ageNow--;
    }
    return ageNow;
  };

  return (
    <StyledActorCard>
      <div className="img-wrapper">
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      {birthday ? <p>Age : {calculateAge(birthday)} </p> : 'Not Known'}
      <p>{country ? `Country : ${country}` : 'No country known'}</p>
      {birthday ? <p>Born : {birthday}</p> : null}
      <p className="deathday">{deathday ? `Died : ${deathday}` : null}</p>
    </StyledActorCard>
  );
};

export default ActorCard;
