import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {ArrowRight, Facebook, Instagram, Twitter, Whatsapp, Youtube} from "react-bootstrap-icons";
import Stack from "react-bootstrap/Stack";

import './index.scss';

const icon = require('./img/icon.png')
const iconColor = '#000';
const kurumsalList = ['Hakkımızda', 'Kampanyalar', 'Banka Hesap Numaraları', 'Blog', 'Haberler'];
const musteriHizmetleriList = ['Sipariş Sorgulama', 'Teslimat ve Kargo', 'İade ve Değişim', 'Üyelik Sözleşmesi', 'Gizlilik ve Güvenlik'];
const yardimList = ['İletişim Bilgileri', 'Sıkça Sorulan Sorular'];

export function Footer() {
    return (
        <>
            <Container fluid className={'bg-dark px-5 mt-5'}>
                <Row className={'pt-3'}>
                    <Col>
                        <h6>
                            Kurumsal
                        </h6>
                        {
                            kurumsalList.map((listItem) => (
                                <small>
                                    {listItem}
                                    <br/>
                                </small>
                            ))
                        }
                    </Col>
                    <Col>
                        <h6>
                            Müşteri Hizmetleri
                        </h6>
                        {
                            musteriHizmetleriList.map((listItem) => (
                                <small>
                                    {listItem}
                                    <br/>
                                </small>
                            ))
                        }
                    </Col>
                    <Col>
                        <h6>
                            Yardım
                        </h6>
                        {
                            yardimList.map((listItem) => (
                                <small>
                                    {listItem}
                                    <br/>
                                </small>
                            ))
                        }
                    </Col>
                    <Col>
                        <h6>
                            İletişim
                        </h6>
                        <small>
                            <b>Adres:</b>1376 Sok. No: 1/43 Boran Plaza, Halkapınar, Konak/İzmir
                        </small>
                        <br/>
                        <small>
                            <b>Telefon:</b>085055555
                        </small>
                    </Col>
                    <Col>
                        <div className={'d-none d-md-flex float-end rounded-circle bg-black whatsapp-div'}>
                            <Whatsapp className={'m-2'} color={'#11cb64'}/>
                        </div>
                        <h6>
                            Bizi Takip Edin
                        </h6>
                        <Stack className={'header-stack mb-4'} direction={'horizontal'} gap={4}>
                            <button className={'bg-dark border-0'}>
                                <Facebook color={iconColor}/>
                            </button>
                            <button className={'bg-dark border-0'}>
                                <Twitter color={iconColor}/>
                            </button>
                            <button className={'bg-dark border-0'}>
                                <Youtube color={iconColor}/>
                            </button>
                            <button className={'bg-dark border-0'}>
                                <Instagram color={iconColor}/>
                            </button>
                        </Stack>
                        <small>E-bültene abone olun, gelişmeleri kaçırmayın</small>
                        <Stack direction={'horizontal'}>
                            <input placeholder={'E posta adresiniz'}
                                   className={'bg-light border border-dark ps-2 mt-2'}/>
                            <button className={'border border-dark bg-primary mt-2'}>
                                <ArrowRight color={'white'} className={'mb-1'}/>
                            </button>
                        </Stack>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr className={'mt-5'}/>
                        <Stack direction={'horizontal'} className={'mb-2'} gap={5}>
                            <small>
                                Copyright © 2022 Karma-Kırmızı
                            </small>
                            {/*<small className={'ms-auto'}>ssad</small>*/}
                            <img className={'ms-auto'} src={icon} alt={''}/>
                        </Stack>
                    </Col>
                </Row>

            </Container>
        </>
    )
}
