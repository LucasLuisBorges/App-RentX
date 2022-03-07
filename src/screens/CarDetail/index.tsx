import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories,
  Footer
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

export function CarDetail(){
  const navigation = useNavigation<any>();

  function handleConfirmRental() {
    navigation.navigate('Scheduling')
  }

  return (
    <Container>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />

      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider 
          imagesUrl={['https://cdn.wheel-size.com/automobile/body/audi-rs5-2020-2022-1613028936.4473815.png']}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborguini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Acessories>
          <Accessory name='380Km/h' icon={speedSvg} />
          <Accessory name='3.2s' icon={accelerationSvg} />
          <Accessory name='800 HP' icon={forceSvg} />
          <Accessory name='Gasolina' icon={gasolineSvg} />
          <Accessory name='Auto' icon={exchangeSvg} />
          <Accessory name='2 pessoas' icon={peopleSvg} />
        </Acessories>

        <About>
          Este é automóvel desportivo. Surgiu do lendário 
          touro de lide indultado na praça real Maestranza de Sevilla. 
          É um belíssimo carro para quem gosta de acelerar.
        </About>

      </Content>

      <Footer>
        <Button title='Escolher período do aluguel' onPress={handleConfirmRental}/>
      </Footer>

    </Container>
  );
}