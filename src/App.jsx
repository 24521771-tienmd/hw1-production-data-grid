
import DataGrid from './DataGrid'
import { employeeColumns, employees } from './data/employees'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <header className="page-header">
        <div>
          <p className="eyebrow">WORKFORCE MANAGEMENT</p>
          <h1>Employee Directory</h1>
          <p className="page-description">
            View and manage employee information in one place.
          </p>
        </div>
      </header>

      <section className="directory-section" aria-labelledby="directory-title">
        <div className="section-heading">
          <div>
            <h2 id="directory-title">All employees</h2>
            <p className="section-description">
              Employee records and current employment status.
            </p>
          </div>
          <span className="record-count">{employees.length} employees</span>
        </div>

        <DataGrid
          columns={employeeColumns}
          rows={employees}
          pageSize={10}
        />
      </section>
    </main>
  )
}

export default App
