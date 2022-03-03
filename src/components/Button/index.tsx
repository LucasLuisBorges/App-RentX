import React from 'react';

import {
  Container,
  Title
} from './styles';

interface Props {
  title: string;
  color?: string;
}

export function Button({ title, color, ...rest } : Props){
  return (
    <Container {...rest} activeOpacity={0.5} color={color}>
      <Title>{title}</Title>
    </Container>
  );
}