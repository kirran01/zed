import React from 'react';
import Link from 'next/link';

const TestComp = () => {
    return (
        <div>
            <ul className='flex bg-slate-800 p-5'>
                <li className='mr-2 underline'>
                    <Link href="/">Home</Link>
                </li>
                <li className='mr-2 underline'>
                    <Link href="/transactions">Transactions</Link>
                </li>
                <li className='mr-2 underline'>
                    <Link href="/user">User</Link>
                </li>
            </ul>
        </div>
    );
}

export default TestComp;
