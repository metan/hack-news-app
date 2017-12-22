import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as newsActions from '../../actions/newsActions';
import Article from './Article';

function mapStateToProps(state, ownProps) {
	return {
		data: state.article.data,
        loading: state.article.loading
	};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(newsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);