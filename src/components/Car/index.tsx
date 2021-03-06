import React from 'react';

import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIscon } from '../../utils/getAccessoryIscon';

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage
} from './styles';
interface Props {
  data: CarDTO;
  onPress?: () => void;
};

export function Car({ data, onPress } : Props){
  const MotorIcon = getAccessoryIscon(data.fuel_type)

  return (
    <Container onPress={onPress}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.period}</Period>
            <Price>{`R$ ${data.price}`}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>

        </About>
      </Details>

      <CarImage 
        source={{ uri: data.thumbnail}} 
        resizeMode='contain'
      />

    </Container>
  );
}