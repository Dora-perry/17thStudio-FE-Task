'use client';

import React, { useState } from 'react';
import WalletLedgerHeader from '@/components/WalletLedgerHeader/WalletLedgerHeader';
import { transactions, summaryData } from '@/constants/data';
import TransactionTable from './TransactionTable';
import SummaryCard from '../SummaryCards/SummaryCard';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'transactions'>('overview');

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-6xl mx-auto p-6">
        <WalletLedgerHeader />
        <div className="flex space-x-6 border-b mb-4 mt-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-2 text-sm font-medium ${activeTab === 'overview'
                ? 'border-b-2 border-black text-black'
                : 'text-gray-400'
              }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('transactions')}
            className={`pb-2 text-sm font-medium ${activeTab === 'transactions'
                ? 'border-b-2 border-black text-black'
                : 'text-gray-400'
              }`}
          >
            Transaction History
          </button>
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-6">
            <h1 className='text-black font-bold text-base'>Summary</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <SummaryCard
                title="Total Balance"
                value={summaryData.totalBalance}
                change={summaryData.balanceChange}
              />
              <SummaryCard
                title="Total Credits"
                value={summaryData.totalCredits}
                change={summaryData.creditsChange}
              />
              <SummaryCard
                title="Total Debits"
                value={summaryData.totalDebits}
                change={summaryData.debitsChange}
              />
              <SummaryCard
                title="Transactions"
                value={summaryData.transactionCount}
                change={summaryData.transactionChange}
              />
            </div>

            <TransactionTable data={transactions} />
          </div>
        )}

        {activeTab === 'transactions' && (
          <div className="text-gray-500 text-sm">
            Transaction History content goes here...
          </div>
        )}
      </section>
    </main>
  );
}
