import Link from "next/link";
const HomePage = () => {
  return (
    <div>
      <p className="text-3xl">Home</p>
      <ul>
        <li className="underline">
          <Link href="/transactions">Transactions</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
