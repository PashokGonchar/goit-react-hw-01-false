import CreateUsersProfile from '../Profile';
import user from '../../assets/user.json';

const ParentComponent = () => {
  return (
    <div>
      <CreateUsersProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};

export default ParentComponent;
