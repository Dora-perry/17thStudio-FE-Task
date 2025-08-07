'use client';

import React, { useState, useEffect } from 'react';
import WalletLedgerHeader from '@/components/WalletLedgerHeader/WalletLedgerHeader';
import { transactions, summaryData } from '@/constants/data';
import TransactionTable from './TransactionTable';
import SummaryCard from '../SummaryCards/SummaryCard';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'transactions'>('overview');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-full mx-auto p-6">
        <WalletLedgerHeader />

        {/* Tabs */}
        <div className="flex space-x-6 border-b mb-4 mt-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-2 text-base font-medium ${activeTab === 'overview'
                ? 'border-b-2 border-[#437D8E] text-[#437D8E]'
                : 'text-gray-400'
              }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('transactions')}
            className={`pb-2 text-sm font-medium ${activeTab === 'transactions'
                ? 'border-b-2 border-[#437D8E] text-[#437D8E]'
                : 'text-gray-400'
              }`}
          >
            Transactions
          </button>
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-6">
            <h1 className="text-black font-bold text-base">Summary</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <SummaryCard
                title="Total Balance"
                value={summaryData.totalBalance}
                change={summaryData.balanceChange}
                isLoading={isLoading}

              />
              <SummaryCard
                title="Total Credits"
                value={summaryData.totalCredits}
                change={summaryData.creditsChange}
                isLoading={isLoading}

              />
              <SummaryCard
                title="Total Debits"
                value={summaryData.totalDebits}
                change={summaryData.debitsChange}
                isLoading={isLoading}

              />
              <SummaryCard
                title="Transactions"
                value={summaryData.transactionCount}
                change={summaryData.transactionChange}
                isLoading={isLoading}
              />
            </div>

            <TransactionTable data={transactions} isLoading={isLoading} />
          </div>
        )}

        {activeTab === 'transactions' && (
          <div className="flex flex-col items-center justify-center h-64 text-center text-gray-400">
            <p className="text-base mb-2">Transaction UI not yet available.</p>
            <button
              onClick={() => setActiveTab('overview')}
              className="px-4 py-2 text-white bg-[#437D8E] rounded-md"
            >
              Go back to Overview
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
