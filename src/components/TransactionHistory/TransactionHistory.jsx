import transactions from '../../assets/transactions.json';
import TransactionHistoryComponent from '../TransactionHistoryComponent';

const TransactionHistory = () => {
  return (
    <div>
      <TransactionHistoryComponent items={transactions} />
    </div>
  );
};

export default TransactionHistory;
