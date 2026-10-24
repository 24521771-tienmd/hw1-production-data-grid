
function DataGrid({ columns, rows, pageSize }) {
  const visibleRows = rows.slice(0, pageSize)

  return (
    <div className="table-wrapper">
      <table className="data-grid">
        <caption className="visually-hidden">
          Employee directory with employee details and employment status
        </caption>

        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {visibleRows.length > 0 ? (
            visibleRows.map((row) => (
              <tr key={row.id}>
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={column.key === 'name' ? 'employee-name' : undefined}
                  >
                    {column.key === 'status' ? (
                      <span
                        className={`status status-${String(row[column.key])
                          .toLowerCase()
                          .replace(/\s+/g, '-')}`}
                      >
                        {row[column.key]}
                      </span>
                    ) : (
                      row[column.key]
                    )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>No employee records available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default DataGrid
