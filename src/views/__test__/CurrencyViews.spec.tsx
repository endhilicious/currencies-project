import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CurrencyViews from '../CurrencyViews';

const CurrencyViewsClick = jest.fn();

describe('CurrencyViews test', () => {
    it('can test CurrencyViews properly', () => {
      const { baseElement } = render(<CurrencyViews />);
      expect(baseElement).toBeTruthy();
    });
});
