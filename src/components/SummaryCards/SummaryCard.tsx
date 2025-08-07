import Image from 'next/image';


interface Props {
  title: string;
  value: number;
  change: number;
}

export default function SummaryCard({ title, value, change }: Props) {
  const isPositive = change >= 0;
  return (
    <div className="rounded-[20px] border p-6 shadow-sm w-full bg-gray-300">
      <div className='flex justify-between'>
        <p className="text-[17px] text-black font-bold">{title}</p>
        <Image src="/images/threedots.svg" alt="More options" width={30} height={30} />
      </div>

      <h2 className="text-[34px] font-bold">    
      {title === 'Transactions' ? value.toLocaleString() : `$${value.toLocaleString()}`}
      </h2>

      <p className={`text-sm ${isPositive ? 'text-[#3E7383]' : 'text-[#3E7383]'}`}>
        {isPositive ? '+' : ''}
        {change}%
      </p>
    </div>
  );
}
