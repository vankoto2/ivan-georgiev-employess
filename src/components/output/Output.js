import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import ReactDOM from "react-dom";

function DataGridDemo(answer) {

let obj = answer;
if (obj == undefined) {
    console.log('vliza');
    obj = {
        firstEmplID: 0,
        secondEmplID: 0,
        projectID: 0,
        daysWorkedTogether:  0,
      };
}
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

    ReactDOM.render(<div style={{ height: 400, width: '100%' }}>
    <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[5]}
    />
</div>, document.getElementById('answer'));
}

export default (DataGridDemo);