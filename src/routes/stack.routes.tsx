import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CarDTO } from "../dtos/CarDTO";

import { Home } from '../screens/Home';
import { CarDetail } from '../screens/CarDetail';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { Confirmation } from '../screens/Confirmation';
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
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
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