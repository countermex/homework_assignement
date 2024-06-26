import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Download } from 'react-feather';
import Header from '../../molecules/Header/Header';
import Button from '../../atoms/Button/Button';
import Table from '../../templates/Table/Table';
import styles from './HomePage.module.css';
import Checkbox from '../../atoms/Checkbox/Checkbox';
import dataJson from '../../../../assets/data.json';

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

  const handleSelect = (newSelected: string[]) => {
    setSelected(newSelected);
  };

  const handleClick = () => {
    const selectedData = dataJson.filter((data) => selected.includes(data.name)).map((data) => `Device: ${data.device}, Path: ${data.path}`);
    alert(selectedData);
  };

  return (
    <div className={styles.container}>
      <Header>
        <Checkbox
          onClick={handleSelectAllChange}
          inputRef={checkboxRef}
        />
        <span>{selected.length === 0 ? 'None Selected' : `Selected ${selected.length}`}</span>
        <Button onClick={handleClick} disabled={selected.length === 0} icon={<Download />}>
          Download Selected
        </Button>
      </Header>
      <Table
        rows={dataJson}
        selectable
        headers={['name', 'device', 'path', 'status']}
        onSelect={handleSelect}
        highlightedCells={['available']}
        capitalizedCells={['status']}
        selected={selected}
      />
    </div>
  );
};

export default HomePage;
