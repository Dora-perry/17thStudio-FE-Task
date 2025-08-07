export const metadata = {
  title: "Wallet Dashboard",
  description: "Overview of transactions and balances",
};

import DashboardPage from "@/components/TransactionTable";

export default function Dashboard() {
  return <DashboardPage />;
}
