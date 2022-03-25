import React from 'react';
import { 
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle
} from './styles';
import { Input } from '../../../components/Input';

export function SignUpFirstStep(){
  const navigation = useNavigation()

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
            <Bullet active />
            <Bullet />
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
          <FormTitle>1. Dados</FormTitle>
          <Input iconName='user' placeholder='Nome' />
          <Input iconName='mail' placeholder='E-mail' />
          <Input iconName='credit-card' placeholder='CNH' />
        </Form>

        <Button 
          title='Próximo'
          
        />

      </Container>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}