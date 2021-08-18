import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import ReactDOM from "react-dom";

function DataGridDemo(answer) {

let obj = answer;

const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    {
        field: 'firstEmplID',
        headerName: 'firstEmplID',
        width: 200,
        editable: true,
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
    },
    {
        field: 'secondEmplID',
        headerName: 'secondEmplID',
        width: 200,
        editable: true,
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
    },
    {
        field: 'projectID',
        headerName: 'IprojectIDD',
        width: 200,
        editable: true,
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
    },
    {
        field: 'daysWorkedTogether',
        headerName: 'daysWorkedTogether',
        type: 'number',
        width: 200,
        editable: true,
        headerClassName: 'super-app-theme--header',
        headerAlign: 'center',
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

//render the table
    ReactDOM.render(<div  className="data-grid-container" style={{ height: 400, width: '100%' }}>
    <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[5]}
    />
</div>, document.getElementById('answer'));
}

export default (DataGridDemo);