import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList
} from './styles';

import  Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';


export function Home(){
  const navigation = useNavigation()

  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao Dia',
      price: 120,
    },
  thumbnail: 'https://cdn.wheel-size.com/automobile/body/audi-rs5-2020-2022-1613028936.4473815.png'
  }

  function handleCarDetails() {
    navigation.navigate('CarDetails')
  }

  return (
    <Container>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
          />
        <Header>
          <HeaderContent>
            <Logo 
              height={RFValue(12)}
              width={RFValue(108)}
            />
            <TotalCars>
              Total de 12 carros
            </TotalCars>
          </HeaderContent>
        </Header>

        <CarList
          data={[1, 2, 3, 4, 5, 6, 7]}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Car data={carData} onPress={handleCarDetails} />}
        />

    </Container>
  );
}