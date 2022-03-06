/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const img = screen.getByRole('img', {
      // @ts-ignore
      src: /vercel\.svg!/i,
    });

    expect(img).toBeInTheDocument();
  });
});
