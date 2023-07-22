import transactions from '../../assets/transactions.json';
import TransactionHistoryComponent from '../TransactionHistory';

const TransactionHistory = () => {
  return (
    <div>
      <TransactionHistoryComponent items={transactions} />
    </div>
  );
};

export default TransactionHistory;
