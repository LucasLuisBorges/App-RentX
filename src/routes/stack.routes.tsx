import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CarDTO } from "../dtos/CarDTO";

import { Home } from '../screens/Home';
import { CarDetail } from '../screens/CarDetail';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { SchedulingComplete } from '../screens/SchedulingComplete';
import { MyCars } from "../screens/MyCars";
import { Splash } from "../screens/Splash";

export type AppRoutes = {
  Home: undefined;
  CarDetails: undefined;
  Scheduling: {
    car: CarDTO;
  };
  SchedulingDetails: {
    car: CarDTO;
    dates: string[];
  };
  SchedulingComplete: undefined;
  MyCars: undefined;
}

declare global {
  namespace ReactNavigation{
    interface RootParamList extends AppRoutes{

    }
  }
}

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return(
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Screen
        name="Splash"
        component={Splash}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false
        }}
      />
      <Screen
        name="CarDetails"
        component={CarDetail}
      />
      <Screen
        name="Scheduling"
        component={Scheduling}
      />
      <Screen
        name="SchedulingDetails"
        component={SchedulingDetails}
      />
      <Screen
        name="SchedulingComplete"
        component={SchedulingComplete}
      />
      <Screen
        name="MyCars"
        component={MyCars}
      />
    </Navigator>
  )
}