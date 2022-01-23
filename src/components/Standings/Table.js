import React from "react";
import styled from "styled-components";
import { useTable } from "react-table";

const Table = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Scores",
        columns: [
          {
            Header: "Week 1",
            accessor: "week1",
          },
          {
            Header: "Week 2",
            accessor: "week2",
          },
          {
            Header: "Week 3",
            accessor: "week3",
          },
          {
            Header: "Week 4",
            accessor: "week4",
          },
          {
            Header: "Week 5",
            accessor: "week5",
          },
          {
            Header: "Week 6",
            accessor: "week6",
          },
          {
            Header: "Week 7",
            accessor: "week7",
          },
          {
            Header: "Week 8",
            accessor: "week8",
          },
          {
            Header: "Total",
            accessor: "total",
          },
        ],
      },
    ],
    []
  );

  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
