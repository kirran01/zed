import Link from "next/link";

const TransactionsPage = () => {
    return (
        <div>
            <p className="text-3xl">Transactions</p>
            <ul>
                <li className="underline">
                    <Link href='/'>Home</Link>
                </li>
            </ul>
        </div>
    );
}

export default TransactionsPage;
