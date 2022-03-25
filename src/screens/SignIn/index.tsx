import React, { useState } from 'react';
import { 
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
 } from 'react-native';
 import * as Yup from 'yup'
import { useTheme } from 'styled-components';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';


import {
  Container,
  Header,
  Title,
  Form,
  SubTitle,
  Footer
} from './styles';

export function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail valido'),
        password: Yup.string()
          .required('A senha é obrigatória')
      })
  
      await schema.validate({ email, password })
      Alert.alert('Pronto')
      
    } catch (error) {
      if(error instanceof Yup.ValidationError){
        return Alert.alert('Opa', error.message)
      } else {
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro au fazer login, verifique as credenciais'
          )
      }
    }
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle={'dark-content'}
            translucent
            backgroundColor='transparent'
          />
          <Header>
            <Title>
              Estamos{'\n'}quase lá.
            </Title>
            <SubTitle>
              Faça seu login para começar{'\n'}
              uma experiência incrível.
            </SubTitle>
          </Header>

          <Form>
            <Input
              iconName="mail"
              placeholder='E-mail'
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />

            <PasswordInput
              iconName="lock"
              placeholder='Senha'
              onChangeText={setPassword}
              value={password}
            />

          </Form>

          <Footer>
            <Button
              title='Login'
              onPress={handleSignIn}
              disabled={false}
              loading={false}
            />
            <Button
              title='Criar conta gratuita'
              color={theme.colors.background_primary}
              onPress={() => {}}
              disabled={true}
              loading={false}
              light={true}
            />
          </Footer>

        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}