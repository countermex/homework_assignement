import { ChangeEvent } from 'react';
import styles from './Table.module.css';
import TableHeader from '../../organisms/TableHeader/TableHeader';
import TableRow from '../../organisms/TableRow/TableRow';
import TableCell from '../../molecules/TableCell/TableCell';
import Checkbox from '../../atoms/Checkbox/Checkbox';

const Table = (props:{
  rows: { [key: string]: string }[],
  headers: string[],
  selectable?: boolean,
  selected?: string[],
  caption?: string,
  capitalizedCells?: string[],
  highlightedCells?: string[],
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

  const handleClick = (firstValue: string) => {
    if (props.onSelect && props.selected) {
      if (props.selected?.includes(firstValue)) {
        props.onSelect(props.selected.filter((selectedId) => selectedId !== firstValue));
      } else {
        props.onSelect([...props.selected, firstValue]);
      }
    }
  };

  return (
    <table className={styles.table}>
      {props.caption && (
        <caption>
          {props.caption}
        </caption>
      )}
      <tbody>
        <TableHeader keys={props.selectable ? ['', ...props.headers] : props.headers} />
        {
          props.rows.map((rowData, index) => {
            const firstValue = Object.values(rowData)[0];
            const disabled = rowData.status !== 'available';
            return (
              <TableRow key={index} selected={props?.selected?.includes(firstValue)} onClick={disabled ? undefined : () => handleClick(firstValue)}>
                {props.selectable && (
                <TableCell headers="checkbox">
                  <Checkbox value={firstValue} onClick={handleSelectionChange} disabled={disabled} checked={props?.selected?.includes(firstValue)} />
                </TableCell>
                )}
                {props.headers?.map((column) => {
                  const highlight = props.highlightedCells?.includes(rowData[column]);
                  const capitalize = props.capitalizedCells?.includes(column);
                  return (
                    <TableCell headers={column} key={crypto.randomUUID()} highlight={highlight} capitalize={capitalize}>
                      {rowData[column] || ''}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })
        }
      </tbody>
    </table>
  );
};

export default Table;
