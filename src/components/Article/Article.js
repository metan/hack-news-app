import React, { Component, PropTypes } from "react";
import {Link} from 'react-router';
import { Layout, Header, Card, CardTitle, CardText, CardActions, Button, Dialog, DialogContent, DialogActions, Navigation } from 'react-mdl';

export default class Article extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }
  
  componentWillMount() {
    const articleId = this.props.location.query.id
    if(articleId) {
        this.props.actions.loadArticle(articleId);
    }
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }
  
  render() {
    
    const loader = <div className="articleLoading"><i className='fa fa-spinner fa-spin' aria-hidden='true'></i></div>;
    const { title, url, by, score } = this.props.data;

    return(
      <Layout className="hack-news">
        <Header title="Article">
          <Navigation>
              <Link to='/'>&#60; Homepage</Link>
          </Navigation>
        </Header>
        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
            <CardTitle 
                style={{color: '#fff', height: '176px', background: 'url(../../../images/article-bg.jpg)'}}>
                {title}
            </CardTitle>
            <CardText>by: {by}<span style={{float: 'right'}}>score: {score}</span></CardText>
            <CardActions border>
                <Button onClick={this.handleOpenDialog} colored>See full article</Button>
            </CardActions>
        </Card>
        <Dialog open={this.state.openDialog} style={{width: '80%', height: '80vh'}}>
          <DialogContent>
            <iframe src={url} style={{width: '100%', height: '65vh'}}/>
          </DialogContent>
          <DialogActions>
            <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>
      </Layout>
    )
  }

}
