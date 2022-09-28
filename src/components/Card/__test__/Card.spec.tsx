import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../';

const onClick = jest.fn();
const onClose = jest.fn();

describe('Card test', () => {
    it('can test Card properly', () => {
      const { baseElement } = render(
        <Card
            selected={false}
            onClick={onClick}
            onClose={onClose}
        >
            Mock btn
        </Card>
    );
      expect(baseElement).toBeTruthy();
    });
});
