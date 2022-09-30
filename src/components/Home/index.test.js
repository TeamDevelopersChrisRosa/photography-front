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

// test Home have an image
test('Home have a image', () => {
    const { container } = render(<Home />);
    expect(container.querySelector('img')).toBeInTheDocument();
});
