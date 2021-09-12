import React, { useState } from 'react';
import { withRouter } from "react-router-dom"
import { DataGrid } from '@material-ui/data-grid';
import { Button } from '../../node_modules/@material-ui/core';

const rows = [
    {
        id: 1,
        title: "Exam 1",
        description: "Exam one",
        duration: 30,
    },
    {
        id: 2,
        title: "Exam 2",
        description: "Exam two",
        duration: 40,
    },
    {
        id: 3,
        title: "Exam 3",
        description: "Exam three",
        duration: 60,
    },
    {
        id: 4,
        title: "Exam 4",
        description: "Exam four",
        duration: 60,
    },
]

function List(props) {
    const [columns, setColumns] = useState([
        {
            field: 'title',
            headerName: 'Exam Title',
            width: 250,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 250,
        },
        {
            field: 'duration',
            headerName: 'Duration',
            width: 150,
            renderCell: data => {
                return <div>{data.row.duration} Seconds</div>
            }
        },
        {
            field: '',
            headerName: 'Action',
            width: 200,
            renderCell: data => {
                return <Button onClick={() => handleSelect(data.row.id, data.row.duration)} variant="contained" color="primary">Start Exam</Button>
            }

        }
    ]);

    const handleSelect = (id, duration) => {
        props.history.push({
            pathname: `/exam/${id}`,
            state: { time: duration }
        });
    }
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                disableSelectionOnClick
            />
        </div>
    );
}

export default withRouter(List);