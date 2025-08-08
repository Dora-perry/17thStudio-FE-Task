export default function TransactionTableSkeleton() {
  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden mt-6">
      <table className="w-full text-sm animate-pulse">
        <thead>
          <tr className="text-gray-500 text-[13px]">
            <th className="p-3 text-left">Txn ID</th>
            <th className="p-3 text-left">Amount</th>
            <th className="p-3 text-left">Remark</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(6)].map((_, i) => (
            <tr key={i} className="border-b">
              {[...Array(5)].map((_, j) => (
                <td key={j} className="p-3">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
