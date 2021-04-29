import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import columns from './constants';


export default function DataTable() {

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}