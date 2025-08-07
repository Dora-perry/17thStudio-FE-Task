import { Transaction } from "./types";

export interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export interface TransactionTableProps {
    data: Transaction[];
    isLoading?: boolean;
}

export interface SummaryCardProps {
    title: string;
    value: number;
    change: number;
    isLoading?: boolean;

}