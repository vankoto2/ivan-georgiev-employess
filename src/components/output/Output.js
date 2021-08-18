import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import calculateLongestTeemWork from '../../helpers/CalculateLongestTeemWork'

const obj = calculateLongestTeemWork;
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstEmplID',
        headerName: 'firstEmplID',
        width: 150,
        editable: true,
    },
    {
        field: 'secondEmplID',
        headerName: 'secondEmplID',
        width: 150,
        editable: true,
    },
    {
        field: 'projectID',
        headerName: 'IprojectIDD',
        width: 150,
    },
    {
        field: 'daysWorkedTogether',
        headerName: 'daysWorkedTogether',
        type: 'number',
        width: 150,
        editable: true,
    },

];

const rows = [
    {
        id: 1,
        firstEmplID: obj.firstEmplID,
        secondEmplID: obj.secondEmplID,
        projectID: obj.projectID,
        daysWorkedTogether: obj.daysWorkedTogether,
    },
];

 function DataGridDemo() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
}

export default (DataGridDemo);