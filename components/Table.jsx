import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Rating } from '@mui/material';
import styles from '../styles/Table.module.css';
import { HiArrowsUpDown } from "react-icons/hi2";
const createData = (Magna, Ultrices, Ornare, Erat, Nisi, Facilisis, Elit, Senectus, Felis, Cursus, Gravity, rating) => {
  return { Magna, Ultrices, Ornare, Erat, Nisi, Facilisis, Elit, Senectus, Felis, Cursus, Gravity, rating };
};

const rows = [
  createData('23/08/30', 'Consectetur', 'Vestibulum', 'Egestas', '154.181', '3', 'N/A', 'Pretium', 'Turkey', 'Nulla', 'N/A',1),
  createData('14/08/70', 'Consectetur', 'Vestibulum', 'Egestas', '154.181', '1', 'N/A', 'Pretium', 'Australia', 'Nulla', 'N/A',2),
  createData('11/06/55', 'Consectetur', 'Vestibulum', 'Egestas', '154.181', '5', 'N/A', 'Pretium', 'India', 'Nulla', 'N/A',3),
  createData('22/09/20', 'Consectetur', 'Vestibulum', 'Egestas', '154.181', '51', 'N/A', 'Pretium', 'Nigeria', 'Nulla', 'N/A',4),
  createData('22/09/20', 'Consectetur', 'Vestibulum', 'Egestas', '154.181', '32', 'N/A', 'Pretium', 'Switzerland', 'Nulla', 'N/A',5),
];

const DataTable = () => {
    return <>
  <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow className={styles.head}>
          <TableCell> Magna</TableCell>
          <TableCell><HiArrowsUpDown /> Ultrices</TableCell>
          <TableCell><HiArrowsUpDown /> Ornare</TableCell>
          <TableCell><HiArrowsUpDown /> Erat</TableCell>
          <TableCell><HiArrowsUpDown /> Nisi</TableCell>
          <TableCell><HiArrowsUpDown /> Facilisis</TableCell>
          <TableCell><HiArrowsUpDown /> Elit</TableCell>
          <TableCell><HiArrowsUpDown /> Senectus</TableCell>
          <TableCell><HiArrowsUpDown /> Felis</TableCell>
          <TableCell><HiArrowsUpDown /> Cursus</TableCell>
          <TableCell><HiArrowsUpDown /> Gravity</TableCell>
          <TableCell><HiArrowsUpDown /> Rating</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.Magna}</TableCell>
            <TableCell>{row.Ultrices}</TableCell>
            <TableCell>{row.Ornare}</TableCell>
            <TableCell>{row.Erat}</TableCell>
            <TableCell>{row.Nisi}</TableCell>
            <TableCell>{row.Facilisis}</TableCell>
            <TableCell>{row.Elit}</TableCell>
            <TableCell>{row.Senectus}</TableCell>
            <TableCell>{row.Felis}</TableCell>
            <TableCell>{row.Cursus}</TableCell>
            <TableCell>{row.Gravity}</TableCell>
            <TableCell>
              <Rating value={row.rating} readOnly />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  <p>Page 1 | 6 de 12</p>
</>
};

export default DataTable;