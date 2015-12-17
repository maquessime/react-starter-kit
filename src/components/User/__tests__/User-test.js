jest.dontMock('../User');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactAddons from 'react/addons';
import http from '../../../core/HttpClient';
import User from '../User';

const TestUtils = ReactAddons.addons.TestUtils;

describe('load data from backend on componentIsMounted', () => {
  it('should load data from backend when it is mounted', () => {
  	
  	const expectedUsers = ["1 gazon","2 patate"];
    http.get=jest.genMockFunction();
    http.get.mockReturnValue(new Promise(
      (resolve,reject)=>
        resolve(JSON.parse('[{"id":1,"name":"gazon"},{"id":2,"name":"patate"}]'))
      )
    );
    
    const user = TestUtils.renderIntoDocument(
     <User source="whatever" />
	  );

    let users=TestUtils.scryRenderedDOMComponentsWithTag(user,'li').map((node)=>node.textContent);
    for(var i=0;i<2;i++){
    	expect(users[i]).toBe(expectedUsers[i])
    }
    console.log("test")
  });
});