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
                            <div className={`rounded-circle ${styles.circulo} ${styles.centralizar}`}>
                                <FontAwesomeIcon icon={faSitemap} />
                            </div>
                            <h2 className="mt-4 mb-4">Personalização</h2>
                            <p>
                                Criação de site personalizado utilizando as
                                tecnologias mais recentes
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <div className={`rounded-circle ${styles.circulo} ${styles.centralizar}`}>
                                <FontAwesomeIcon icon={faTachometerAlt} />
                            </div>
                            <h2 className="mt-4 mb-4">Velocidade</h2>
                            <p>
                                Melhor performance para indexação dos buscadores
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <div className={`rounded-circle ${styles.circulo} ${styles.centralizar}`}>
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
                        <div className="col-md-7" style={{margin: "auto"}}>
                            <h2 className="featurette-heading">
                                Portfólio
                            </h2>
                            <p className="lead">
                                Foi criado o site da evipes!
                            </p>
                        </div>
                        <div className="col-md-5">
                            <img
                                className="featurette-image img-fluid mx-auto"
                                data-src="holder.js/500x500/auto"
                                alt="500x500"
                                style={{width: "500px", height: "500px"}}
                                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_179aa849c76%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_179aa849c76%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.1171875%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                data-holder-rendered="true"
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Home;
