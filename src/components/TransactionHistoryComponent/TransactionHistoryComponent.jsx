import {
  TransactionHistory,
  TheadTransactions,
  ThTypeThead,
  ThAmountThead,
  ThCurrencyThead,
  TrInvoiceTbody,
  TrWithdrawalTbody
} from './TransactionHistoryComponent.styled';

const TransactionHistoryComponent = ({ items }) => {
  return (
    <div>
      {items.map(({ id, type, amount, currency }) => (
        <TransactionHistory key={id}>
          <TheadTransactions>
            <tr>
              <ThTypeThead>{type}</ThTypeThead>
              <ThAmountThead>{amount}</ThAmountThead>
              <ThCurrencyThead>{currency}</ThCurrencyThead>
            </tr>
          </TheadTransactions>

          <tbody>
            <TrInvoiceTbody>
              <td>Invoice</td>
              <td>125</td>
              <td>USD</td>
            </TrInvoiceTbody>
            <TrWithdrawalTbody>
              <td>Withdrawal</td>
              <td>85</td>
              <td>USD</td>
            </TrWithdrawalTbody>
          </tbody>
        </TransactionHistory>
      ))}
    </div>
  );
};

export default TransactionHistoryComponent;
