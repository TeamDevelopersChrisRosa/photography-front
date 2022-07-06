import { Footer } from './index';
import { render } from '@testing-library/react';


// test Footer exist
test('Footer exist', () => {
    expect(<Footer />).toBeDefined();
});

describe('Footer', () => {
    test('renders Footer component', () => {
        render(<Footer />);
    });
});