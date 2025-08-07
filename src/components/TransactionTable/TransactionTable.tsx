import { Transaction } from '@/types';
import Image from 'next/image';
import { Badge } from '../ui/badge';


interface Props {
  data: Transaction[];
}

export default function TransactionTable({ data }: Props) {
  return (
    <table className="w-full border mt-6 text-sm bg-white shadow-sm rounded-md overflow-hidden">
     
<thead>
  <tr className='text-gray-500 text-[13px]'>
   <th className="p-3 text-left pr-24">
      <div className="flex items-center gap-1">
        Date
        <Image src="/images/triangle.svg" alt="Ava" width={10} height={5} />
      </div>
    </th>
    <th className="p-3 text-left">
      <div className="flex items-center gap-1">
        Remark
          <Image src="/images/triangle.svg" alt="Ava" width={10} height={5} />
      </div>
    </th>
    <th className="p-3 text-left">
      <div className="flex items-center gap-1">
        Amount
          <Image src="/images/triangle.svg" alt="Ava" width={10} height={5} />
      </div>
    </th>
    <th className="p-3 text-left">
      <div className="flex items-center gap-1">
        Currency
          <Image src="/images/triangle.svg" alt="Ava" width={10} height={5} />
      </div>
    </th>
    <th className="p-3 text-left">
      <div className="flex items-center gap-1">
        Type
          <Image src="/images/triangle.svg" alt="Ava" width={10} height={5} />
      </div>
    </th>
  </tr>
</thead>
     <tbody>
  {data.map((tx) => (
    <tr key={tx.id}>
      <td className="p-3">
        <span className="inline-block w-full border-b border-gray-200 pb-0.5">{tx.date}</span>
      </td>
      <td className="p-3">
        <span className="inline-block w-full border-b border-gray-200 pb-0.5">{tx.remark}</span>
      </td>
      <td className="p-3 font-semibold">
        <span
          className={`inline-block w-full border-b border-gray-200 pb-0.5`}
        >
          ${Math.abs(tx.amount).toLocaleString()}
        </span>
      </td>
      <td className="p-3">
        <span className="inline-block w-full border-b border-gray-200 pb-0.5">{tx.currency}</span>
      </td>
      <td className="p-3">
        <Badge variant="fintrack">
          <span
            className={`inline-block h-2 w-2  rounded-full ${
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
