import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { ConfirmButton } from '../../components/ConfirmButton';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import {
  Container,
  Content,
  Tile,
  Message,
  Footer
} from './styles';

interface Params {
  title: string;
  mensage: string;
  nextScreenRoute: any;
}

export function Confirmation(){
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const route = useRoute();
  const { title, mensage, nextScreenRoute } = route.params as Params

  function handleConfirm() {
    navigation.navigate(nextScreenRoute)
  }

  return (
    <Container>
      <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
      />
      
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Tile>{title}</Tile>

        <Message>
          {mensage}
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title='OK' onPress={handleConfirm} />
      </Footer>

    </Container>
  );
}