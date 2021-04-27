import React from 'react';
import { mount } from 'enzyme';
import Index from '../pages/index';

describe('Fazendo testes no Next.JS com Enzyme', () => {
  it('Deve conter o texto "Dashboard" dentro de um H1 no componente Home', () => {
    const wrap = mount(<Index />);
    expect(wrap.find('h1').text()).toEqual('Dashboard');
  });
});
