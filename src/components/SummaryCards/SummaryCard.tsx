import { SummaryCardProps } from '@/interfaces';
import Image from 'next/image';
import { Skeleton } from '../ui/skeleton';

export default function SummaryCard({ title, value, change, isLoading }: SummaryCardProps & { isLoading?: boolean }) {
  const isPositive = change >= 0;

  if (isLoading) {
    return (
      <div className="w-full rounded-[20px] p-4 md:p-6 bg-[#E5E8E8]">
        <div className="flex justify-between items-center mb-2">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-5 w-5" />
        </div>
        <Skeleton className="h-10 w-32 mb-2" />
        <Skeleton className="h-5 w-16" />
      </div>
    );
  }

  return (
    <div className="w-full rounded-[20px] p-4 md:p-6 bg-[#E5E8E8]">
      <div className="flex justify-between items-center mb-2">
        <p className="text-[16px] md:text-[17px] font-bold text-black">{title}</p>
        <Image src="/images/threedots.svg" alt="More options" width={24} height={24} />
      </div>

      <h2 className="text-[28px] md:text-[34px] font-bold text-black">
        {title === 'Transactions' ? value.toLocaleString() : `$${value.toLocaleString()}`}
      </h2>

      <p className={`text-sm md:text-base font-medium ${isPositive ? 'text-[#3E7383]' : 'text-[#3E7383]'}`}>
        {isPositive ? '+' : ''}
        {change}%
      </p>
    </div>
  );
}
