import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { ConfirmButton } from '../../components/ConfirmButton';

import {
  Container,
  Content,
  Tile,
  Message,
  Footer
} from './styles';
import { useNavigation } from '@react-navigation/native';

export function SchedulingComplete(){
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  function handleConfirm() {
    navigation.navigate('Home')
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
        <Tile>Carro alugado!</Tile>

        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pefar o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title='OK' onPress={handleConfirm} />
      </Footer>

    </Container>
  );
}