jest.dontMock('../UserHardcoded');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactAddons from 'react/addons';
import UserHardcoded from '../UserHardcoded'

const TestUtils = ReactAddons.addons.TestUtils;

describe('load data from backend on componentIsMounted', () => {
  it('should load data from backend when it is mounted', () => {
  	
  	const expectedUsers = ["1 gazon","2 patate"];
    
    const user = TestUtils.renderIntoDocument(
     <UserHardcoded source="whatever" />
	  );

    let users=TestUtils.scryRenderedDOMComponentsWithTag(user,'li').map((node)=>node.textContent);
    for(var i=0;i<2;i++){
    	expect(users[i]).toBe(expectedUsers[i])
    }
  });
});