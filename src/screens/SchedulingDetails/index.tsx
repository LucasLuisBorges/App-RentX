import React, { useEffect, useState } from 'react';
import { TabRouter, useNavigation, useRoute } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components';
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIscon } from '../../utils/getAccessoryIscon';

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
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal
} from './styles';
import { Alert, StatusBar } from 'react-native';
import { format } from 'date-fns';
import { getPlataformDate } from '../../utils/getPlataformDate';
import api from '../../services/api';

interface RentalPeriod {
  start: string;
  end: string;
}

interface Params {
  car: CarDTO;
  dates: string[];
}

export function SchedulingDetails() {
  const [loading, setLoading] = useState(false)
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

  const route = useRoute();
  const { car, dates } = route.params as Params;
  const navigation = useNavigation();
  const theme = useTheme();

  const rentTotal = Number(dates.length * car.rent.price)

  async function handleConfirmRental() {
    setLoading(true)

    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`)

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    ];
    
    await api.post(`/schedules_byuser`, {
      user_id: 1,
      car,
      startDate: format(getPlataformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      endDate: format(getPlataformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
    });

    api.put(`/schedules_bycars/${car.id}`, {
      id: car.id,
      unavailable_dates,
    })
    .then(() => navigation.navigate('Confirmation', {
      nextScreenRoute: 'Home',
      title: 'Carro alugado!',
      mensage: `Agora você só precisa ir\naté a concessionário da RENTX\npegar o seu automóvel`
    }))
    .catch(() => {
      Alert.alert("Não foi possível confirmar o agendamento.")
      setLoading(false)
    })
  }

  function handleBack() {
    navigation.goBack();
  };

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlataformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getPlataformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
    })
  }, [])

  return (
    <Container>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <BackButton onPress={handleBack} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={car.photos}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {
            car.accessories.map(accessory => (
              <Accessory
                key={accessory.type}
                name={accessory.name}
                icon={getAccessoryIscon(accessory.type)}
              />
            ))
          }
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name='calendar'
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <Feather
            name='chevron-right'
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>

        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>{`R$ ${car.rent.price} x${dates.length} diárias`}</RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>

      </Content>

      <Footer>
        <Button 
          title='Alugar agora'
          color={theme.colors.success}
          onPress={handleConfirmRental}
          disabled={loading}
          loading={loading}
        />
      </Footer>

    </Container>
  );
}