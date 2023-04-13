async function getData() {
    try {
        const res = await fetch('https://zed-kirran-test.hasura.app/api/rest/transactions', {
            headers: {
                'x-hasura-admin-secret': 'zx3hIgVhT3hiXeGTd5N17yeq1Tz9P3gsr2sWrewie7bPlnADM80JCBg10QV6wmek',
            },
        });

        if (res.ok) {
            const data = await res.json();
            console.log(data, '<<<<<<<<<<<<<<<data');
            return data;
        } else {
            console.log(`Error: ${res.status} ${res.statusText}`);
        }
    } catch (err) {
        console.log(err);
    }
}

const ServerPage = async () => {
    const data = await getData()
    console.log(JSON.stringify(data, null, 2), 'data');
    return (
        <div>
            <p>transaction page</p>
        </div>
    );
}

export default ServerPage;
