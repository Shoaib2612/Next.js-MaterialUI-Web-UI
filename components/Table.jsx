import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Rating } from '@mui/material';
import { tableData } from '../constants/tabledata'; 
import config from '../constants/tableHeading_config.json';
import styles from '../styles/Table.module.css'; 
import { HiArrowsUpDown } from "react-icons/hi2";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    setData(tableData);
    setHeadings(config.headings);
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow className={styles.head}>
              {headings.map((heading, index) => (
                <TableCell key={index}>{heading === "Magna" ? heading : <><HiArrowsUpDown /> {heading}</>}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {headings.map((heading, colIndex) => (
                  <TableCell key={colIndex}>
                    {heading === 'Rating' ? <Rating value={row[heading]} readOnly /> : row[heading]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p>Page 1 | 6 de 12</p>
    </>
  );
};

export default DataTable;