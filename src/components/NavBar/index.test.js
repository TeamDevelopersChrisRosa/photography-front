import { NavBar } from './index';
import { render } from '@testing-library/react';


// test NavBar exist
/* test('NavBar exist', () => {
    expect(<NavBar />).toBeDefined();
}); */

describe('NavBar', () => {
    test('renders NavBar component', () => {
        render(<NavBar />);
    });
});


