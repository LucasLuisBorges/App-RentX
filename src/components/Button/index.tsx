import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import {
  Container,
  Title
} from './styles';

interface Props {
  title: string;
  color?: string;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  light?: boolean;
}

export function Button({ 
  title,
  color,
  onPress,
  disabled = false,
  loading = false,
  light = false,
} : Props){
  const theme = useTheme()

  return (
    <Container
      activeOpacity={0.5}
      color={color ? color : theme.colors.main}
      onPress={onPress}
      disabled={disabled}
      style={{ opacity : (disabled === true|| loading === true) ? 0.5 : 1 }}
    >
      { 
        loading 
        ? <ActivityIndicator color={theme.colors.shape} />
        : <Title light={light}>{title}</Title>
      }
    </Container>
  );
}