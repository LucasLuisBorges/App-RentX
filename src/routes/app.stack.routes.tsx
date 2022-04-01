import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CarDTO } from "../dtos/CarDTO";

import { Home } from '../screens/Home';
import { CarDetail } from '../screens/CarDetail';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { Confirmation } from '../screens/Confirmation';
import { Splash } from "../screens/Splash";
import { MyCars } from "../screens/MyCars";
import { SignIn } from "../screens/SignIn";
import { SignUpFirstStep } from "../screens/SignUp/SignUpFirstStep";
import { SignUpEndStep } from "../screens/SignUp/SignUpEndStep";

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
  Confirmation: {
    title: string;
    mensage: string;
    nextScreenRoute: any;
  };
  MyCars: undefined;
  SignUpFirstStep: undefined;
  SignUpEndStep: { 
    user: { 
      name: string; 
      email: string; 
      driveLicense: string; 
    };
  };
  SignIn: undefined;
}

declare global {
  namespace ReactNavigation{
    interface RootParamList extends AppRoutes{

    }
  }
}

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes() {
  return(
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Inicio">
      <Screen
        name="Inicio"
        component={Home}
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
        name="Confirmation"
        component={Confirmation}
      />
      <Screen
        name="MyCars"
        component={MyCars}
      />
    </Navigator>
  )
}