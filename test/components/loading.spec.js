import App from '../../app/components/Loading';
import React from 'react';
import {shallow} from 'enzyme';
describe('sdsd sd',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<App />);
        
    })

    it('+++ render the DUMB component', () => {
       expect(wrapper).toBeTruthy();
    });
});
