import React, {PropTypes} from 'react';
import {IndexLink, Link} from 'react-router';
import LoadingDots from '../common/LoadingDots.js';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="courses" activeClassName="active">Courses</Link>
      {" | "}
      <Link to="about" activeClassName="active">About</Link>
      {loading && <LoadingDots interval={100} dots={20} />}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
