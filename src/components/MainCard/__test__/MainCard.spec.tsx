import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainCard from '../';

describe('MainCard test', () => {
    it('can test MainCard properly', () => {
      const { baseElement } = render(<MainCard />);
      expect(baseElement).toBeTruthy();
    });
});
