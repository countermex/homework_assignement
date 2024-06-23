import TableHeaderCell from '../../molecules/TableHeader/TableHeaderCell';
import TableRow from '../TableRow/TableRow';
// import styles from './TableHeader.module.css';

const TableHeader = (props: { keys: string[] }) => {
  return (
    <TableRow>
      {props.keys.map((key, index) => {
        return (
          <TableHeaderCell headerKey={key} align="left" key={`header_key_${index}`} />
        );
      })}
    </TableRow>
  );
};

export default TableHeader;
