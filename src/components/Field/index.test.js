import { Field } from './index';
import { render } from '@testing-library/react';

// test Field exist
test('Field exist', () => {
    expect(<Field />).toBeDefined();
});

describe('Field', () => {
    test('renders Field component', () => {
        render(<Field />);
    });
});