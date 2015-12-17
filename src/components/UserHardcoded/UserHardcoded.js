/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component, PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import http from '../../core/HttpClient';

class UserHardcoded extends Component {


    static propTypes = {
      source: PropTypes.string.isRequired,
    };


  constructor() {
    super();
    this.state = {
      data: [],
    };
  }


    componentDidMount() {
     this.setState(
        {data: JSON.parse('[{"id":1,"name":"gazon"},{"id":2,"name":"patate"}]')}
      );
    }

    render() {
      const createItem = function mapToListItem(item) {
        return <li>{item.id} {item.name}</li>;
      };
      console.log(this.state.data);
      return <div><ul>{this.state.data.map(createItem)}</ul></div>;
    }
}

export default UserHardcoded;