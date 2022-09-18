import React, { useEffect } from "react";
import styled from "styled-components";
import { useTable } from "react-table";

const Table = ({ data, games }) => {
  const gameCols = games?.map((game) => {
    return {
      Header: `${game.team1} vs ${game.team2}`,
      result: game.result,
      accessor: `picks.${game.gid}`,
    };
  });
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "user.displayName",
      },
      ...gameCols,
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
                const bg = cell.column.result == undefined ? "white" : cell.column.result == cell.value ? "green" : cell.column.result == "TBD" ? "white" : "red";
                return <td {...cell.getCellProps()} style={{background: bg}}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
