import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../store/slices/userSlice';
import Spinner from '../Spinner/Spinner';

const OnlyNotAuthorizedUserHoc = Component => {
  class HocForLoginSignUp extends React.Component {
    componentDidMount () {
      this.props.getUser(this.props.history.replace);
    }

    render () {
      if (this.props.isFetching) {
        return <Spinner />;
      }
      if (!this.props.data) {
        return <Component history={this.props.history} />;
      }
      return null;
    }
  }

  const mapStateToProps = state => state.userStore;

  const mapDispatchToProps = dispatch => ({
    getUser: replace => dispatch(getUser(replace)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(HocForLoginSignUp);
};

export default OnlyNotAuthorizedUserHoc;
