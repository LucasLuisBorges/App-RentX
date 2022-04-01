import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CarDTO } from "../dtos/CarDTO";

import { Splash } from "../screens/Splash";
import { Confirmation } from '../screens/Confirmation';
import { SignIn } from "../screens/SignIn";
import { SignUpFirstStep } from "../screens/SignUp/SignUpFirstStep";
import { SignUpEndStep } from "../screens/SignUp/SignUpEndStep";

export type AuthRoutes = {
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
}

declare global {
  namespace ReactNavigation{
    interface RootParamList extends AuthRoutes{

    }
  }
}

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return(
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Screen
        name="Splash"
        component={Splash}
      />
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="SignUpFirstStep"
        component={SignUpFirstStep}
      />
      <Screen
        name="SignUpEndStep"
        component={SignUpEndStep}
      />
      <Screen
        name="Confirmation"
        component={Confirmation}
      />
    </Navigator>
  )
}