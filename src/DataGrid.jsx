
const employees = [
  {
    id: 'EMP-001',
    name: 'Olivia Chen',
    email: 'olivia.chen@example.com',
    department: 'Engineering',
    role: 'Frontend Developer',
    status: 'Active',
  },
  {
    id: 'EMP-002',
    name: 'Noah Williams',
    email: 'noah.williams@example.com',
    department: 'Design',
    role: 'UI/UX Designer',
    status: 'Active',
  },
  {
    id: 'EMP-003',
    name: 'Ava Patel',
    email: 'ava.patel@example.com',
    department: 'Engineering',
    role: 'Backend Developer',
    status: 'On leave',
  },
  {
    id: 'EMP-004',
    name: 'Liam Nguyen',
    email: 'liam.nguyen@example.com',
    department: 'Marketing',
    role: 'Marketing Specialist',
    status: 'Inactive',
  },
  {
    id: 'EMP-005',
    name: 'Sophia Garcia',
    email: 'sophia.garcia@example.com',
    department: 'Human Resources',
    role: 'HR Manager',
    status: 'Active',
  },
]

function DataGrid() {
  return (
    <div className="table-wrapper">
      <table className="data-grid">
        <caption className="visually-hidden">
          Employee directory with employee details and employment status
        </caption>

        <thead>
          <tr>
            <th scope="col">Employee ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Department</th>
            <th scope="col">Role</th>
            <th scope="col">Status</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td className="employee-name">{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
              <td>{employee.role}</td>
              <td>
                <span
                  className={`status status-${employee.status
                    .toLowerCase()
                    .replace(/\s+/g, '-')}`}
                >
                  {employee.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataGrid
