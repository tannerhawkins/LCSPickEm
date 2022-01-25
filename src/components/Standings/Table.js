import React, { useEffect } from "react";
import styled from "styled-components";
import { useTable } from "react-table";

const Table = ({ data }) => {
  console.log(data);
  const scoreCols = data[0]
    ? data[0]?.weeks?.map((week) => {
        return {
          Header: week.name,
          accessor: week.name,
        };
      })
    : [];
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Scores",
        columns: [
          ...scoreCols,
          {
            Header: "Total",
            accessor: "total",
          },
        ],
      },
    ],
    [data]
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
