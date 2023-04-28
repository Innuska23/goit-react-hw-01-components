import PropTypes from 'prop-types';
import { TransactionHistoryTable, TableTr, TableThead, TableBody, TableTh, TableBodyItem, TableBodyList } from './TransactionHistory.styled'

function TransactionHistory({ items }) {
  return (
    <TransactionHistoryTable>
      <TableThead >
        <TableTr>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </TableTr>
      </TableThead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableBodyList key={id}>
            <TableBodyItem>{type}</TableBodyItem>
            <TableBodyItem>{amount}</TableBodyItem>
            <TableBodyItem>{currency}</TableBodyItem>
          </TableBodyList>
        ))}
      </TableBody>
    </TransactionHistoryTable>
  );
};


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;