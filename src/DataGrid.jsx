
import { useState } from 'react'

function DataGrid({ columns, rows, pageSize }) {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'ascending',
  })
  const [filterQuery, setFilterQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const handleSort = (column) => {
    if (!column.sortable) return

    setSortConfig((current) => ({
      key: column.key,
      direction:
        current.key === column.key && current.direction === 'ascending'
          ? 'descending'
          : 'ascending',
    }))
  }

  const normalizedQuery = filterQuery.trim().toLowerCase()

  const filteredRows = rows.filter((row) =>
    columns.some((column) =>
      String(row[column.key] ?? '')
        .toLowerCase()
        .includes(normalizedQuery),
    ),
  )

  const sortedRows = [...filteredRows].sort((a, b) => {
    if (!sortConfig.key) return 0

    const firstValue = a[sortConfig.key]
    const secondValue = b[sortConfig.key]

    const comparison = String(firstValue ?? '').localeCompare(
      String(secondValue ?? ''),
      undefined,
      { numeric: true, sensitivity: 'base' },
    )

    return sortConfig.direction === 'ascending' ? comparison : -comparison
  })

  const safePageSize =
    Number.isInteger(pageSize) && pageSize > 0 ? pageSize : 10

  const totalPages = Math.max(
    1,
    Math.ceil(sortedRows.length / safePageSize),
  )

  const effectivePage = Math.min(currentPage, totalPages)

  const startIndex = (effectivePage - 1) * safePageSize
  const visibleRows = sortedRows.slice(
    startIndex,
    startIndex + safePageSize,
  )

  const handleFilterChange = (event) => {
    setFilterQuery(event.target.value)
    setCurrentPage(1)
  }

  const firstVisibleRow = sortedRows.length === 0 ? 0 : startIndex + 1
  const lastVisibleRow = Math.min(
    startIndex + visibleRows.length,
    sortedRows.length,
  )

  return (
    <div className="table-wrapper">
      <div className="data-grid-toolbar">
        <label htmlFor="employee-filter">Search employees</label>
        <input
          id="employee-filter"
          type="search"
          value={filterQuery}
          onChange={handleFilterChange}
          placeholder="Search by name, email, department..."
        />
        <p className="filter-result-count" aria-live="polite">
          {filteredRows.length} matching employee
          {filteredRows.length === 1 ? '' : 's'}
        </p>
      </div>

      <table className="data-grid">
        <caption className="visually-hidden">
          Employee directory with employee details and employment status
        </caption>

        <thead>
          <tr>
            {columns.map((column) => {
              const isSorted = sortConfig.key === column.key

              return (
                <th
                  key={column.key}
                  scope="col"
                  aria-sort={isSorted ? sortConfig.direction : 'none'}
                >
                  {column.sortable ? (
                    <button
                      type="button"
                      className="sort-button"
                      onClick={() => handleSort(column)}
                    >
                      {column.header}
                      <span aria-hidden="true">
                        {isSorted
                          ? sortConfig.direction === 'ascending'
                            ? ' ▲'
                            : ' ▼'
                          : ' ↕'}
                      </span>
                    </button>
                  ) : (
                    column.header
                  )}
                </th>
              )
            })}
          </tr>
        </thead>

        <tbody>
          {visibleRows.length > 0 ? (
            visibleRows.map((row) => (
              <tr key={row.id}>
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={
                      column.key === 'name' ? 'employee-name' : undefined
                    }
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
              <td colSpan={columns.length}>
                {rows.length === 0
                  ? 'No employee records available.'
                  : 'No employees match your search.'}
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="pagination" aria-label="Employee table pagination">
        <p className="pagination-summary" aria-live="polite">
          Showing {firstVisibleRow}–{lastVisibleRow} of {sortedRows.length}
          {' '}employees
        </p>

        <div className="pagination-controls">
          <button
            type="button"
            onClick={() => setCurrentPage(Math.max(1, effectivePage - 1))}
            disabled={effectivePage <= 1}
          >
            Previous
          </button>

          <span aria-current="page">
            Page {Math.min(effectivePage, totalPages)} of {totalPages}
          </span>

          <button
            type="button"
            onClick={() => setCurrentPage(Math.min(totalPages, effectivePage + 1))}
            disabled={effectivePage >= totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default DataGrid
