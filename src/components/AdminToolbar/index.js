import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkUserIsAdmin } from './../../Utils';
import './styles.scss';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'

const mapState = ({ user }) => ({
  currentUser: user.currentUser
})

const AdminToolbar = props => {
  const { currentUser } = useSelector(mapState);

  const isAdmin = checkUserIsAdmin(currentUser);
  if (!isAdmin) return null;

  return (
    <div className="adminToolbar">
      <ul>
        <li>
          <Link to="/admin">
          <SupervisorAccountIcon className="Icons"/>
          <p>Admin</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminToolbar;