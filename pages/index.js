import Head from 'next/head';
import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div>
            <Head>
                <title>Home</title>
                <meta name='robots' content='index/follow' />
                <meta name='description' content='Site sobre Ederson Duarte Schaukoski' />
            </Head>
            <Menu />
            <h1>Página Home!</h1>
        </div>
    );
}

export default Home;