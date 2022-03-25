import React, { useState } from 'react';
import { 
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
import theme from '../../../styles/theme';
import { useTheme } from 'styled-components';

export function SignUpEndStep(){
  const navigation = useNavigation()
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const theme = useTheme()

  function handleBack() {
    navigation.goBack()
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
          />
          <PasswordInput 
            iconName='lock'
            placeholder='Confirmar senha'
            onChangeText={setConfirmPassword}
          />
        </Form>

        <Button 
          title={password && confirmPassword ? 'Cadastrar' : 'Próximo'}
          color={password && confirmPassword ? theme.colors.success : theme.colors.main}
        />

      </Container>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}