import { connect } from 'react-redux';
import LeftNav from './left_nav';


const mapStateToProps = ({ session }) => {
  return {
    session
  };
};

const mapDispatchToProps = () => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftNav);
