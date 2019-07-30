import React from 'react';

import List from '../List';

import { Container } from './styles';

export default function Border() {
  return (
    <Container>
      <List/>
      <List/>
      <List/>
      <List/>
    </Container>
  );
}
