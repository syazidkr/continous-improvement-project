"use client"

// components/EmployeeTable.tsx
import { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { employeesData } from '../lib/data';
import { Button } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'ID', headerName: 'ID', width: 120 },
  { field: 'Nama', headerName: 'Nama', width: 180 },
  { field: 'Tim', headerName: 'Tim', width: 100 },
  { field: 'Posisi', headerName: 'Posisi', width: 150 },
  { field: 'Status Karyawan', headerName: 'Status', width: 150 },
  { field: 'Email', headerName: 'Email', width: 220 },
  { field: 'Status Aktif', headerName: 'Aktif', width: 100, type: 'boolean' },
];

const Table = () => {
  const [rows, setRows] = useState(employeesData);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleDelete = () => {
    const filtered = rows.filter(row => !selectedIds.includes(row.ID));
    setRows(filtered);
  };

  return (
    <div className="p-4" style={{ height: 600 }}>
        <h1 className="text-2xl font-bold mb-4">Employee Data</h1>
      <div className='flex justify-end gap-2'>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDelete}
            style={{ marginBottom: 10 }}
          >
            Add Employee
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleDelete}
            style={{ marginBottom: 10 }}
          >
            Delete Selected
          </Button>
         
      </div>
      <DataGrid
        getRowId={(row) => row.ID}
        rows={rows}
        columns={columns}
        checkboxSelection
        showToolbar
        // onRowSelectionModelChange={(ids) => setSelectedIds(ids as string[])}
      />
    </div>
  );
};

export default Table;
