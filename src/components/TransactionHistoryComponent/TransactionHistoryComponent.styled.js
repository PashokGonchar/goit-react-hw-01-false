import styled from '@emotion/styled';

export const TransactionHistory = styled.table`
  width: 400px;
  border: 1px solid #8b0000;
  align-content: center;
  text-align: center;
  margin: 10px auto;
//   border-collapse: collapse;
`;

export const TheadTransactions = styled.thead`
  background-color: #9400d3;
`;

export const ThTypeThead = styled.th`
width: 40%;
`

export const ThAmountThead = styled.th`
  width: 30%;
`;

export const ThCurrencyThead = styled.th`
  width: 30%;
`;

export const TrInvoiceTbody = styled.tr`
  background-color: #ff6347;
`;

export const TrWithdrawalTbody = styled.tr`
  background-color: #7cfc00;
`;
