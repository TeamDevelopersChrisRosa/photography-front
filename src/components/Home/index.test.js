import { Home } from './index';


// test(),prend une string en premier argument, puis une fonction en deuxième argument.

/* test('Ceci est mon premier test', () => {
    expect(3).toBe(3);
}); */

// test Home exist
/* test('Home exist', () => {
    expect(<Home />).toBeDefined();
}); */

// test Home rendered
test('Home rendered', () => {
    const wrapper = expect(<Home />);
    expect(wrapper).toMatchSnapshot();
});

// test image in Home
test('image in Home', () => {
    const wrapper = shallow(<Home />);
    console.log('TEST', wrapper.find('.home__picture'));
    //expect(wrapper.find('.home__picture').length).toBe(1);
});


