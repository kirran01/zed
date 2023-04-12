import Link from "next/link";
import TestComp from "./components/Nav";
const HomePage = () => {
  return (
    <div>
      <TestComp />
      <p className="text-3xl">Home</p>
    </div>
  );
};

export default HomePage;
