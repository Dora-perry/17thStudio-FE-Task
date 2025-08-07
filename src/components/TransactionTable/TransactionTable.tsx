import Image from 'next/image';
import { Badge } from '../ui/badge';
import { TransactionTableProps } from '@/interfaces';

export default function TransactionTable({ data, isLoading = false }: TransactionTableProps) {
  const skeletonRows = new Array(5).fill(null);

  return (
    <table className="w-full table-fixed mt-6 text-sm bg-white overflow-x-hidden">
      <thead>
        <tr className="text-gray-500 text-[13px]">
          {['Date', 'Remark', 'Amount', 'Currency', 'Type'].map((heading) => (
            <th key={heading} className="p-3 text-left">
              <div className="flex items-center gap-1 border-b w-full border-gray-200 pb-0.5">
                <span>{heading}</span>
                <Image src="/images/triangle.svg" alt="Sort" width={10} height={5} />
              </div>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {isLoading
          ? skeletonRows.map((_, idx) => (
              <tr key={idx}>
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <td key={i} className="p-3">
                      <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                    </td>
                  ))}
              </tr>
            ))
          : data.map((tx, index) => (
              <tr key={tx.id}>
                <td className="p-3">
                  <span className="inline-block w-full border-b border-gray-200 pb-0.5">{tx.date}</span>
                </td>
                <td className="p-3">
                  <span className="inline-block w-full border-b border-gray-200 pb-0.5">{tx.remark}</span>
                </td>
                <td className="p-3 font-semibold">
                  <span className="inline-block w-full border-b border-gray-200 pb-0.5">
                    {index === 0
                      ? `$${Math.abs(tx.amount).toLocaleString()}`
                      : `-$${Math.abs(tx.amount).toLocaleString()}`}
                  </span>
                </td>
                <td className="p-3">
                  <span className="inline-block w-full border-b border-gray-200 pb-0.5">{tx.currency}</span>
                </td>
                <td className="inline-block w-full border-b border-gray-200 pb-0.5 p-3">
                  <Badge variant="fintrack">
                    <span
                      className={`inline-block h-1 w-1 rounded-full ${
                        tx.type === 'Credit' ? 'bg-[#087A2E]' : 'bg-[#C6381B]'
                      }`}
                    ></span>
                    {tx.type}
                  </Badge>
                </td>
              </tr>
            ))}
      </tbody>
    </table>
  );
}
