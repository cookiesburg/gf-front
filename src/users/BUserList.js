import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import UserTile from '../UserTile';
import AddUserBtn from './AddUserBtn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers } from './actions';
import { Link } from 'react-router-dom';

class UserList extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users, isLoaded } = this.props;
    if (!isLoaded) return <h1>loading users...</h1>;
    return (
      <Fragment>
        <UsersContainer>
          <LeftMargin>
          </LeftMargin>
          <AddUserBtn />
          {users.map(user => <UserTile key={user.id} user={user} id={user.id} />)}
          <RightMargin>
            <nav>
              <Link to='/courses'> COURSE LIST </Link>
            </nav>

          </RightMargin>
        </UsersContainer>
    </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  isLoaded: state.users.usersLoaded,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getUsers,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

const UsersContainer = styled.div`
  display: grid;
  grid-template-columns: 27.5% 15% 15% 15% 27.5%;
`;
const LeftMargin = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 5;
`;
const RightMargin = styled.div`
  grid-column-start: 6;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 5;
`;
