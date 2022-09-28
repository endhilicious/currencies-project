import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Select from '../';

const SelectMockFn = jest.fn();

describe('Select test', () => {
    it('can test Select properly', () => {
      const { baseElement } = render(<Select value={null} onChange={SelectMockFn} options={[]} />);
      expect(baseElement).toBeTruthy();
    });
});
