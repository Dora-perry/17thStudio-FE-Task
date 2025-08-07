'use client';

import Image from 'next/image';
import { Badge } from '../ui/badge';
import { publicSans } from '../../../public/fontConfiguration/fonts';

const WalletLedgerHeader = () => {
  const avatarImages = [ 'youngMan.svg', 'youngWoman.svg', 'blackLady.png', 'whiteLady.svg'];

  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 md:gap-4">
          <h1
            className={`text-[24px] md:text-[34px] font-bold text-gray-800 ${publicSans.className}`}
          >
            Wallet Ledger
          </h1>

          <Image src="/images/triangle.svg" alt="Triangle" width={10} height={4} />

          <Badge variant="fintrack" className="flex items-center gap-2 py-1 px-2 text-[14px] md:text-[15px]">
            <span className="h-2 w-2 rounded-full bg-[#087A2E]"></span>
            Active
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="tealColor" className="py-2 px-4 md:px-6 text-[14px] md:text-[15px] text-black">
            Share
          </Badge>
          <div className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center">
            <Image src="/images/threedots.svg" alt="More options" width={24} height={24} />
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <div className="flex -space-x-3">
          {[...avatarImages].reverse().map((img, idx) => (
            <div
              key={idx}
              className="w-12 h-12 rounded-full overflow-hidden border-2 border-white z-[30]"
              style={{ zIndex: 30 - idx }} 
            >
              <Image src={`/images/${img}`} alt={`User ${idx + 1}`} width={45} height={45} className='object-fit' />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1 text-gray-500 sm:gap-2 text-[15px] md:text-sm">
          <p>Ava,</p>
          <p>Liam,</p>
          <p>Noah</p>
          <span>+12 others</span>
        </div>
      </div>
    </div>
  );
};

export default WalletLedgerHeader;
