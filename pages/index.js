import Head from "next/head";
import Menu from "../components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSitemap,
    faTachometerAlt,
    faServer,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

function Home() {
    return (
        <div>
            <Head>
                <title>Ederson - Criação de sites</title>
                <meta name="robots" content="index/follow" />
                <meta
                    name="description"
                    content="Site de portfólio sobre Ederson Duarte Schaukoski"
                />
                <meta name="author" content="Ederson Duarte Schaukoski" />
            </Head>
            <Menu />
            <div className={styles.servicos}>
                <Container className="text-center">
                    <h1 className="display-4">Serviços</h1>
                    <p className="lead">
                        Temos a solução que a sua empresa precisa!
                    </p>

                    <div className="row">
                        <div className="col-lg-4">
                            <div
                                className={`rounded-circle ${styles.circulo} ${styles.centralizar}`}
                            >
                                <FontAwesomeIcon icon={faSitemap} />
                            </div>
                            <h2 className="mt-4 mb-4">Personalização</h2>
                            <p>
                                Criação de site personalizado utilizando as
                                tecnologias mais recentes
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <div
                                className={`rounded-circle ${styles.circulo} ${styles.centralizar}`}
                            >
                                <FontAwesomeIcon icon={faTachometerAlt} />
                            </div>
                            <h2 className="mt-4 mb-4">Velocidade</h2>
                            <p>
                                Melhor performance para indexação dos buscadores
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <div
                                className={`rounded-circle ${styles.circulo} ${styles.centralizar}`}
                            >
                                <FontAwesomeIcon icon={faServer} />
                            </div>
                            <h2 className="mt-4 mb-4">Manutenção</h2>
                            <p>
                                Realizamos manutenções constantes para progredir
                                junto com o cliente final
                            </p>
                        </div>
                    </div>
                    <hr className="featurette-divider" />
                    <div id="portfolio" className="row featurette">
                        <div className="col-md-7" style={{ margin: "auto" }}>
                            <h2 className="featurette-heading">Portfólio</h2>
                            <p className="lead">Foi criado o site da evipes!</p>
                        </div>
                        <div className="col-md-5">
                            <a
                                href="https://edersonschaukoski.herokuapp.com/evipes/"
                                target="blank"
                            >
                                <Image
                                    src="/evipes.png"
                                    alt="Evipes"
                                    width={500}
                                    height={500}
                                />
                            </a>
                        </div>
                    </div>
                    <hr className="featurette-divider" />
                    <div id="contato">
                        <h2 className="mt-4 mb-4">Contato</h2>
                        <p>Email: eder-duarte@hotmail.com.br</p>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Home;
