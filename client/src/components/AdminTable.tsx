interface Submission {
  id: number
  name: string
  email: string
  phone: string | null
  message: string
  created_at: string
}

interface AdminTableProps {
  submissions: Submission[]
  onRefresh: () => void
  isLoading: boolean
}

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return date.toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

const truncate = (str: string, max: number) => {
  if (str.length <= max) return str
  return str.slice(0, max) + '...'
}

const getRowClass = (index: number) => {
  const base = 'border-b border-gray-100 hover:bg-primary-light transition-colors duration-150'
  const alt = index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
  return `${base} ${alt}`
}

export default function AdminTable({ submissions, onRefresh, isLoading }: AdminTableProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-dark px-6 py-5 flex items-center justify-between">
        <div>
          <h2 className="text-white font-bold text-lg">Contact Submissions</h2>
          <p className="text-primary-mid text-sm mt-0.5">
            {submissions.length} total
          </p>
        </div>
        <button
          onClick={onRefresh}
          disabled={isLoading}
          className="bg-white text-primary font-semibold text-sm px-4 py-2 rounded-full hover:bg-primary-light transition-all duration-200 disabled:opacity-60 flex items-center gap-2"
        >
          {isLoading ? 'Loading...' : '🔄 Refresh'}
        </button>
      </div>

      {/* Empty state */}
      {submissions.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-4xl mb-3">📭</p>
          <p className="font-medium">No submissions yet</p>
          <p className="text-sm mt-1">Form submissions will appear here</p>
        </div>
      )}

      {/* Table */}
      {submissions.length !== 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                {['#', 'Name', 'Email', 'Phone', 'Message', 'Submitted At'].map((h) => (
                  <th
                    key={h}
                    className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub, index) => (
                <tr key={sub.id} className={getRowClass(index)}>
                  <td className="px-4 py-3 text-gray-400 font-mono text-xs">
                    {index + 1}
                  </td>
                  <td className="px-4 py-3 font-medium text-dark">
                    {sub.name}
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    <a
                      href={`mailto:${sub.email}`}
                      className="hover:text-primary transition-colors duration-150"
                    >
                      {sub.email}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-gray-500">
                    {sub.phone ?? '—'}
                  </td>
                  <td className="px-4 py-3 text-gray-600 max-w-[200px]">
                    <span title={sub.message}>
                      {truncate(sub.message, 60)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap">
                    {formatDate(sub.created_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}