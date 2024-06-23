import { ChangeEvent } from 'react';
import styles from './Table.module.css';
import TableHeader from '../../organisms/TableHeader/TableHeader';
import TableRow from '../../organisms/TableRow/TableRow';
import TableCell from '../../molecules/TableCell/TableCell';

const Table = (props:{
  rows: { [key: string]: string }[],
  selectable?: boolean,
  headers?: string[],
  selected?: string[],
  capitalizedCell?: string,
  highlightedCell?: string,
  onSelect?: (selected: string[]) => void,
}) => {
  const handleSelectionChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.onSelect && props.selected) {
      if (event.target.checked) {
        props.onSelect([...props.selected, event.target.id]);
      } else {
        props.onSelect(props.selected.filter((selectedId) => selectedId !== event.target.id));
      }
    }
  };

  return (
    <table className={styles.table}>
      <tbody>
        {props.headers && <TableHeader keys={props.selectable ? ['', ...props.headers] : props.headers} />}
        {
          props.rows.map((rowData, index) => {
            const firstValue = Object.values(rowData)[0];
            return (
              <TableRow key={index}>
                {props.selectable && (
                <TableCell headers="checkbox">
                  <input
                    type="checkbox"
                    name={firstValue}
                    id={firstValue}
                    onChange={handleSelectionChange}
                    checked={props?.selected?.includes(Object.values(rowData)[0])}
                    disabled={rowData.status !== 'available'}
                  />
                </TableCell>
                )}
                {
                  Object.entries(rowData).map((cellData) => {
                    const highlight = cellData[1] === props.highlightedCell;
                    const capitalize = cellData[0] === props.capitalizedCell;
                    return (
                      <TableCell headers={cellData[0]} key={crypto.randomUUID()} highlight={highlight} capitalize={capitalize}>
                        {cellData[1]}
                      </TableCell>
                    );
                  })
                }
              </TableRow>
            );
          })
        }
      </tbody>
    </table>
  );
};

export default Table;
