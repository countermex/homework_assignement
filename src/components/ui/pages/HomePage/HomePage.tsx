import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Download } from 'react-feather';
import TableRow from '../../organisms/TableRow/TableRow';
import TableCell from '../../molecules/TableCell/TableCell';
import Header from '../../molecules/Header/Header';
import Button from '../../atoms/Button/Button';
import Table from '../../templates/Table/Table';
import dataJson from '../../../../assets/data.json';
import TableHeader from '../../organisms/TableHeader/TableHeader';

const HomePage = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      if (selected.length === 0) {
        checkboxRef.current.indeterminate = false;
        checkboxRef.current.checked = false;
      } else if (selected.length === dataJson.filter((data) => data.status === 'available').length) {
        checkboxRef.current.indeterminate = false;
        checkboxRef.current.checked = true;
      } else {
        checkboxRef.current.indeterminate = true;
      }
    }
  }, [selected]);

  const handleSelectionChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelected([...selected, event.target.id]);
    } else {
      setSelected(selected.filter((selectedId) => selectedId !== event.target.id));
    }
  };

  const handleSelectAllChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const allIds: string[] = [];
      dataJson.forEach((data) => {
        if (data.status === 'available') {
          allIds.push(data.name);
        }
      });
      setSelected(allIds);
    } else {
      setSelected([]);
    }
  };

  const handleClick = () => {
    const selectedData = dataJson.filter((data) => selected.includes(data.name)).map((data) => `Device: ${data.device}, Path: ${data.path}`);
    alert(selectedData);
  };

  const tableContent = dataJson.map((data, index) => {
    return (
      <TableRow key={index} selected={selected.includes(data.name)}>
        <TableCell headers="checkbox">
          <input
            type="checkbox"
            name={data.name}
            id={data.name}
            onChange={handleSelectionChange}
            checked={selected.includes(data.name)}
            disabled={data.status !== 'available'}
          />
        </TableCell>
        <TableCell headers="name">
          {data.name}
        </TableCell>
        <TableCell headers="device">
          {data.device}
        </TableCell>
        <TableCell headers="path">
          {data.path}
        </TableCell>
        <TableCell headers="status" highlight={data.status === 'available'} capitalize>
          {data.status}
        </TableCell>
      </TableRow>
    );
  });

  return (
    <>
      <Header>
        <input
          type="checkbox"
          onChange={handleSelectAllChange}
          ref={checkboxRef}
        />
        <span>{selected.length === 0 ? 'None Selected' : `Selected ${selected.length}`}</span>
        <Button onClick={handleClick} disabled={selected.length === 0} icon={<Download />}>
          Download Selected
        </Button>
      </Header>
      <Table>
        <TableHeader keys={['', 'Name', 'Device', 'Path', 'Status']} />
        {tableContent}
      </Table>
    </>
  );
};

export default HomePage;
