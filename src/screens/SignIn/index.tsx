import React, { useState } from 'react';
import { 
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
 } from 'react-native';
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
              onPress={() => {}}
              disabled={true}
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