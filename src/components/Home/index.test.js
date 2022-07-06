import { Home } from './index';
import { render } from '@testing-library/react';

// test Home exist
test('Home exist', () => {
    expect(<Home />).toBeDefined();
});

describe('Home', () => {
    test('renders Home component', () => {
        render(<Home />);
    });
});