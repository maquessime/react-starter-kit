/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component, PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import http from '../../core/HttpClient';

class User extends Component {


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
      http.get(this.props.source).then(
          (data)=>{
            this.setState({
              data: data,
            });
          });
    }

    render() {
      const createItem = function mapToListItem(item) {
        return <li>{item.id} {item.name}</li>;
      };
      console.log(this.state.data);
      return <div><ul>{this.state.data.map(createItem)}</ul></div>;
    }
}

export default User;