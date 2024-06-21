import { ChangeEvent, useEffect, useRef, useState } from 'react';
import './App.css';
import TableCell from './components/ui/molecules/TableCell/TableCell';
import TableHeader from './components/ui/molecules/TableHeader/TableHeader';
import TableRow from './components/ui/organisms/TableRow/TableRow';
import Table from './components/ui/templates/Table/Table';
import Button from './components/ui/atoms/Button/Button';

import dataJson from './assets/data.json';

const App = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      if (selected.length === 0) {
        checkboxRef.current.indeterminate = false;
        checkboxRef.current.checked = false;
      } else if (selected.length === dataJson.length) {
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
      const allIds = dataJson.map((data) => data.name);
      setSelected(allIds);
    } else {
      setSelected([]);
    }
  };

  const tableContent = dataJson.map((data, index) => {
    return (
      <TableRow key={index}>
        <TableCell headers="checkbox">
          <input type="checkbox" name={data.name} id={data.name} onChange={handleSelectionChange} checked={selected.includes(data.name)} />
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
        <TableCell headers="path">
          {data.status}
        </TableCell>
      </TableRow>
    );
  });

  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={selected.length === dataJson.length}
          onChange={handleSelectAllChange}
          ref={checkboxRef}
        />
        <span>{`Selected ${selected.length}`}</span>
        <Button>Download Selected</Button>
      </div>
      <Table>
        <TableRow>
          <TableHeader id="checkbox" />
          <TableHeader id="name">
            Name
          </TableHeader>
          <TableHeader id="device">
            Device
          </TableHeader>
          <TableHeader id="path">
            Path
          </TableHeader>
          <TableHeader id="status">
            Status
          </TableHeader>
        </TableRow>
        {tableContent}
      </Table>
    </>
  );
};

export default App;
