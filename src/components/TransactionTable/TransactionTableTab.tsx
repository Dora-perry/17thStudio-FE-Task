'use client';

import React, { useState, useEffect } from 'react';
import { transactions } from '@/constants/data';
import TransactionTable from './TransactionTable';
import TransactionTableSkeleton from '../shared';

type Props = {
  isLoading: boolean;
};

const TransactionsTab = ({ isLoading }: Props) => {
  const [filterType, setFilterType] = useState<'All' | 'Credit' | 'Debit'>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [localLoading, setLocalLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLocalLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const filteredTransactions = transactions.filter((txn) => {
    const matchesType = filterType === 'All' || txn.type === filterType;
    const matchesSearch = txn.remark.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const showSkeleton = localLoading || isLoading;

  return (
    <div className="space-y-6 mt-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by remark..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/3 px-4 py-2 border rounded-md text-sm"
        />

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value as 'All' | 'Credit' | 'Debit')}
          className="w-full sm:w-1/4 px-4 py-2 border rounded-md text-sm"
        >
          <option value="All">All Types</option>
          <option value="Credit">Credit</option>
          <option value="Debit">Debit</option>
        </select>
      </div>

      {showSkeleton ? (
        <TransactionTableSkeleton />
      ) : filteredTransactions.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-gray-400 py-20">
          <p className="text-base mb-2">No transactions match your filter.</p>
        </div>
      ) : (
        <TransactionTable data={filteredTransactions} isLoading={false} />
      )}
    </div>
  );
};

export default TransactionsTab;
