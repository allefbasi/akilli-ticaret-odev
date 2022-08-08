import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Stack from "react-bootstrap/Stack";
import {
    CartFill,
    ChevronDown,
    Facebook,
    Instagram,
    Person,
    Search, Shop,
    Twitter,
    Youtube
} from "react-bootstrap-icons";

import './index.scss'

const iconColor = '#656d7b';

export function Header() {
    return (
        <>
            <Container fluid>
                <Row className={'bg-light'}>
                    <Col>
                        <Stack className={'header-stack px-4'} direction={'horizontal'} gap={{xs: 1, md: 2, lg: 4}}>
                            <button className={'bg-light border-0'}>
                                <Facebook color={iconColor}/>
                            </button>
                            <button className={'bg-light border-0'}>
                                <Twitter color={iconColor}/>
                            </button>
                            <button className={'bg-light border-0'}>
                                <Youtube color={iconColor}/>
                            </button>
                            <button className={'bg-light border-0'}>
                                <Instagram color={iconColor}/>
                            </button>
                            <button className={'ms-auto bg-light border-0'}>Yardım</button>
                            <button className={'bg-primary p-2 text-white border-0'}>Blog</button>
                        </Stack>
                    </Col>
                </Row>
                <Row className={'header-search-container h-auto'}>
                    <Col md={3} className={'d-flex mt-2 justify-content-center align-items-center'}>
                        <Shop size={36} className={'me-3 text-primary'}/>
                        <h2 className={'text-primary m-0'}>KARMA</h2>
                    </Col>
                    <Col md={5} xs={10} className={'d-flex justify-content-center ps-md-3 align-items-center py-3'}>
                        <input placeholder={'Ne aramıştınız?'} type={'search'}
                               className={'bg-light border border-dark flex-grow-1 h-100 py-2 ps-3'}/>
                        <button className={'h-100 border border-dark bg-primary py-1 px-3'}>
                            <Search color={'white'}/>
                        </button>
                    </Col>
                    <Col md={2} xs={1} className={'d-flex justify-content-md-center'}>
                        <button className={'bg-white border-0 d-flex flex-row align-items-center'}>
                            <Person size={24} className={'me-1 me-md-2'}/>
                            <div className={'d-none d-md-flex flex-column'}>
                                <b>
                                    Giriş Yap
                                </b>
                                <small className={'d-lg-block d-none'}>
                                    veya üye ol
                                </small>
                            </div>
                            <ChevronDown className={'ms-md-3'}/>
                        </button>
                    </Col>
                    <Col md={2} xs={1} className={'d-flex justify-content-xs-center'}>
                        <button className={'bg-white border-0 d-flex flex-row align-items-center'}>
                            <CartFill size={24} className={'me-1 me-md-2'}/>
                            <div className={'d-none d-md-flex flex-column'}>
                                <b className={'d-lg-block d-none'}>
                                    Sepet
                                </b>
                                <b>
                                    0,00 TL
                                </b>
                            </div>
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Navbar className={'bg-primary ps-5'} expand='md'>
                        <Container fluid>
                            <Navbar.Toggle aria-controls="offCanvasNavbar-expand-md"/>
                            <Navbar.Offcanvas
                                className={'bg-primary'}
                                id={`offcanvasNavbar-expand-md`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                                placement="start"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`} className={'text-white'}>
                                        Ürünler
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className={'offCanvasNavbar-expand-md'}>
                                        <NavDropdown
                                            title="Beyaz Eşya"
                                            id={`offcanvasNavbarDropdown-expand-md`}
                                        >
                                            <NavDropdown.Item href="#action3">
                                                Buzdolapları
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">
                                                Çamaşır Makineleri
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">
                                                Bulaşık Makineleri
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown
                                            title="Televizyonlar & Ses Sistemleri"
                                            id={`offcanvasNavbarDropdown-expand-md`}
                                        >
                                            <NavDropdown.Item href="#action4">
                                                Televizyonlar
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action5">
                                                Ses Sistemleri
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown
                                            title="Ev Eşyaları"
                                            id={`offcanvasNavbarDropdown-expand-md`}
                                        >
                                            <NavDropdown.Item href="#action4">
                                                Oturma Grubu
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action5">
                                                Yemek Odası
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown
                                            title="Kişisel Bakım"
                                            id={`offcanvasNavbarDropdown-expand-md`}
                                        >
                                            <NavDropdown.Item href="#action4">
                                                Traş Makineleri
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action5">
                                                Diş Fırçaları
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown
                                            title="Mutfak Gereçleri"
                                            id={`offcanvasNavbarDropdown-expand-md`}
                                        >
                                            <NavDropdown.Item href="#action4">
                                                Kahve & Çay Makineleri
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action5">
                                                Küçük Ev Aletleri
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                </Row>
                <Row>
                    <Col>
                        <Breadcrumb className={'bg-light ps-5 py-2'}>
                            <Breadcrumb.Item className={'text-black'}>Anasayfa</Breadcrumb.Item>
                            <Breadcrumb.Item className={'fw-bold'}>Beyaz Eşya</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

