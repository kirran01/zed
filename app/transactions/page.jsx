import Link from "next/link";
import TestComp from "../components/Nav";

const TransactionsPage = () => {
    return (
        <div>
            <TestComp />
            <p className="text-3xl">Transactions</p>
        </div>
    );
}

export default TransactionsPage;
