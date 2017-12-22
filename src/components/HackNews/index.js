import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as newsActions from '../../actions/newsActions';
import HackNews from './HackNews';

function mapStateToProps(state, ownProps) {
	return {
		  data: state.news.data,
      loading: state.news.loading
	};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(newsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HackNews);