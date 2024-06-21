import { ReactNode } from 'react';

const TableHeader = (props: { children?: ReactNode, id: string }) => {
  return (
    <th id={props.id} align="left">
      {props.children}
    </th>
  );
};

export default TableHeader;
