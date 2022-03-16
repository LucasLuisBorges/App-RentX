import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Load } from '../../components/Load';
import { Car } from '../../components/Car';

import api from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

import  Logo from '../../assets/logo.svg';

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
  MyCarsButton
} from './styles';
import { useTheme } from 'styled-components';

interface NavigationProps {
  navigate:(
    screen: string,
    carObject?:{
      car: CarDTO
    }
  ) => void
}

export function Home(){
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<NavigationProps>();

  const theme = useTheme();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car })
  }

  function handleOpenMyCars() {
    navigation.navigate('MyCars')
  }

  useEffect(()=> {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        setCars(response.data)
      } catch (error) {
        console.log(error);
      }finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

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

        { loading ? <Load /> : 
          <CarList
            data={cars}
            keyExtractor={item => item.id}
            renderItem={({ item }) => 
              <Car data={item} onPress={() => handleCarDetails(item)} />
            }
          />
        }
        
        <MyCarsButton onPress={handleOpenMyCars}>
          <Ionicons 
            name='ios-car-sport'
            size={32}
            color={theme.colors.shape}
          />
        </MyCarsButton>
    </Container>
  );
}