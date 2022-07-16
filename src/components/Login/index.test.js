import { Login } from './index';
import { render } from '@testing-library/react';

// test Login exist
test('Login exist', () => {
    expect(<Login />).toBeDefined();
});

/* describe('Login', () => {
    test('renders Login component', () => {
        render(<Login />);
    });
}); */