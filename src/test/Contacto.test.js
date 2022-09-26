import { render, screen } from '@testing-library/react';
import Contacto from '../page/Contacto';
import React from 'react';


describe('Contacto component', () => {
  test('la caja de texto se encuentra en el documento', () => {
    render(<Contacto />);
    const tittle = screen.getByText(/Ponte en Contacto/i);

    expect(tittle).toBeInTheDocument();
  });
})