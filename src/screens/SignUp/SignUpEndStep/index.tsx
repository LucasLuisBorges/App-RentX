import React, { useState } from 'react';
import { 
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { PasswordInput } from '../../../components/PasswordInput';

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle
} from './styles';
import { useTheme } from 'styled-components';

interface Params {
  user: {
    name: string;
    email: string;
    driveLicense: string;
  }
}

export function SignUpEndStep(){
  const navigation = useNavigation()
  const route = useRoute()

  const { user } = route.params as Params

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const theme = useTheme()

  function handleBack() {
    navigation.goBack()
  }

  function handleRegister() {
    if(!password || !confirmPassword) {
      return Alert.alert('Informe a senha');
    };

    if(password != confirmPassword) {
      return Alert.alert('As senhas não conferem');
    };

    
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <BackButton onPress={handleBack}/>
          <Steps>
            <Bullet />
            <Bullet active />
          </Steps>
        </Header>

        <Title>
          Crie sua{'\n'}
          conta
        </Title>
        <SubTitle>
          Faça seu cadastro de{'\n'}
          forma rápida e fácil
        </SubTitle>

        <Form>
          <FormTitle>02. Senha</FormTitle>
          <PasswordInput 
            iconName='lock' 
            placeholder='Senha'
            onChangeText={setPassword}
            value={password}
          />
          <PasswordInput 
            iconName='lock'
            placeholder='Confirmar senha'
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
        </Form>

        <Button 
          title={password && confirmPassword ? 'Cadastrar' : 'Próximo'}
          color={password && confirmPassword ? theme.colors.success : theme.colors.main}
          onPress={handleRegister}
        />

      </Container>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}