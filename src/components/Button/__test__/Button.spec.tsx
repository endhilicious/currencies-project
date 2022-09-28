import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../';

const ButtonClick = jest.fn();

describe('Button test', () => {
    it('can test Button properly', () => {
      const { baseElement } = render(<Button onClick={ButtonClick}>Mock btn</Button>);
      expect(baseElement).toBeTruthy();
    });
});
