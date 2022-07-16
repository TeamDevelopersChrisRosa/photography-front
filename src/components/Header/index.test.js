import { Header } from './index';
import { render } from '@testing-library/react';

// test Header exist
test('Header exist', () => {
    expect(<Header />).toBeDefined();
});

describe('Header', () => {
    test('renders Header component', () => {
        render(<Header />);
    });
});