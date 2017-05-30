import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../app/components/Header';

describe('sdsd sd',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<Header />);
        
    })

    it('+++ render the DUMB component', () => {
       expect(wrapper).toBeTruthy();
    });
});
