'use client';

import Image from 'next/image';
import { Badge } from '../ui/badge';

const WalletLedgerHeader = () => {
  return (
    <div className="mb-6">
      {/* Top row: title + actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Title and status */}
        <div className="flex items-center gap-2">
          <h1 className="text-[20px] md:text-[24px] font-semibold text-gray-800">
            Wallet Ledger
          </h1>
          <Image src="/images/triangle.svg" alt="Ava" width={12} height={6} />
          <Badge variant="fintrack" className="py-1 px-2">
            <span className="h-2 w-2 rounded-full bg-[#087A2E]"></span>
            Active
          </Badge>
        </div>

        <div className="flex gap-2">
          <Badge variant="tealColor" className="py-2 px-6 text-base">
            Share
          </Badge>
          <div className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center">
            <Image src="/images/threedots.svg" alt="More options" width={30} height={30} />
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <div className="flex -space-x-3">
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white">
            <Image src="/images/whiteLady.svg" alt="User 1" width={36} height={36} />
          </div>
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white">
            <Image src="/images/blackLady.png" alt="User 2" width={36} height={36} />
          </div>
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white">
            <Image src="/images/youngWoman.svg" alt="User 3" width={36} height={36} />
          </div>
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white">
            <Image src="/images/youngMan.svg" alt="User 4" width={36} height={36} />
          </div>
        </div>
        <div className='flex gap-2'>
            <p>Ava,</p>
            <p>Liam,</p>
            <p>Noah</p>
        </div>

        <div className="ml-2 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
          +12
        </div>
      </div>
    </div>
  );
};

export default WalletLedgerHeader;
