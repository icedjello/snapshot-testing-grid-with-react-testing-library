import {useState} from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
    const [firstDataRendered, setFirstDataRendered] = useState(false)
    const rowData = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ];
    const defaultColDef = {
        flex: 1
    }

    const onFirstDataRendered = () => {
        setFirstDataRendered(true)
    }

    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
            <p data-testid="dataRendered" style={{ position: 'absolute', left: -999 }}>{firstDataRendered ? "Data rendered to the grid" : null}</p>
            <AgGridReact
                rowData={rowData}
                defaultColDef={defaultColDef}
                onFirstDataRendered={onFirstDataRendered}
            >
                <AgGridColumn field="make"/>
                <AgGridColumn field="model"/>
                <AgGridColumn field="price" editable={true}/>
            </AgGridReact>
        </div>
    );
};

export default App;
