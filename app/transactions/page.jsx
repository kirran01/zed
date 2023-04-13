import Link from "next/link";
import Nav from "../components/Nav";
import ServerPage from "../server/page";


export default function TransactionsPage() {
    return (
        <div>
            <Nav />
            <ServerPage />
            <p className="text-3xl">Transactions</p>
        </div>
    );
}