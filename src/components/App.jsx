import ProfileComponent from './ProfileComponent';
import StatisticsComponent from './StatisticsComponents';
import FriendList from './FriendList'
import TransactionHistory from './TransactionHistory'

const App = () => {
  return (
    <>
      <ProfileComponent />
      <StatisticsComponent />
      <FriendList />
      <TransactionHistory />
    </>
  );
};

export default App;
