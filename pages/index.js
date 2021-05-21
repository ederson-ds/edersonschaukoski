import Head from 'next/head';

function Home() {
    return (
        <div>
            <Head>
                <title>Home</title>
                <meta name='robots' content='index/follow' />
                <meta name='description' content='Site sobre Ederson Duarte Schaukoski' />
            </Head>
            <h1>Página Home!</h1>
        </div>
    );
}

export default Home;