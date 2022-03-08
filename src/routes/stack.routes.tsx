import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { CarDetail } from '../screens/CarDetail';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { SchedulingComplete } from '../screens/SchedulingComplete';

const { Navigator, Screen } = createNativeStackNavigator();

export type AppRoutes = {
  Home: undefined;
  CarDetails: undefined;
  Scheduling: undefined;
  SchedulingDetails: undefined;
  SchedulingComplete: undefined;
}

declare global {
  namespace ReactNavigation{
    interface RootParamList extends AppRoutes{

    }
  }
}

export function StackRoutes() {
  return(
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="CarDetail"
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
    </Navigator>
  )
}