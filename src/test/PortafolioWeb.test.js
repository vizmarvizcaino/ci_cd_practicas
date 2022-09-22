import { render, screen } from '@testing-library/react';
import PortafolioWeb from '../page/Portafolio-Web';
import React from 'react';


describe('Contacto component', () => {
    test('la caja de texto se encuentra en el documento', () => {
        render(<PortafolioWeb />);
        const listItem = screen.getByText(/Desarrollo FrontEnd/i)
        expect(listItem).toBeInTheDocument();
    });
})