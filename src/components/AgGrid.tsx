import { Component, createRef } from "preact";

import { Grid } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export class AgGrid extends Component {
  div = createRef<HTMLDivElement>();

  componentDidMount() {
    new Grid(this.div.current, gridOptions);
  }

  render() {
    return (
      <>
        <div ref={this.div} class="ag-theme-alpine" style="height: 500px"></div>
      </>
    )
  }
}

const columnDefs = [
  { field: "make" },
  { field: "model" },
  { field: "price" }
];

// specify the data
const rowData = [
  { make: "Toyota", model: "Celica", price: 35000 },
  { make: "Ford", model: "Mondeo", price: 32000 },
  { make: "Porsche", model: "Boxster", price: 72000 }
];

// let the grid know which columns and what data to use
const gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData
};
