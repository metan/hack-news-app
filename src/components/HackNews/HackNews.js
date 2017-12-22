import React, { Component, PropTypes } from "react";
import {Link} from 'react-router';
import { Layout, Header, List, ListItem } from 'react-mdl';

export default class HackNews extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.loadNews();
  }
  
  render() {
    const loader = <div className="appLoading"><i className='fa fa-spinner fa-spin' aria-hidden='true'></i></div>;
    const news = this.props.data.map((id) => {
      return (
          <ListItem key={id}>
            <Link to={{ pathname: '/article', query: { id } }}>{id}</Link>
          </ListItem>
      );
  });
    return(
      <Layout className="hack-news">
        <Header><h2>Top Hack News</h2></Header>
        <List>
          {news}
        </List>
      </Layout>
    )
  }

}
