import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import Dropdown from "react-bootstrap/Dropdown";
import {useEffect, useState} from "react";
import {ProductListItem} from "../ProductListItem";
import {getProducts} from "../../service/product.api.service";

import './index.scss';

function returnPaginationArray(currentPage, limit) {
    if (currentPage > limit) {
        return [];
    }
    const rightArray = [];
    const leftArray = [];
    if (currentPage - 2 >= 0) {
        leftArray.push(currentPage - 2)
    }
    if (currentPage - 1 >= 0) {
        leftArray.push(currentPage - 1);
    }
    while (rightArray.length + leftArray.length + 1 < 5) {
        if (currentPage + rightArray.length < limit) {
            rightArray.push(currentPage + rightArray.length + 1);
        } else {
            break;
        }
    }
    return [...leftArray, currentPage, ...rightArray];
}

export function Content() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);

    useEffect(() => {
        getProducts(page).then((productListObj) => {
            setProducts(productListObj.productList);
            setTotalPage(Math.ceil(productListObj.listLength / 4));
        })
    }, [page])

    const changePageClick = (number) => {
        setPage(number);
    }

    const paginationFirstClick = () => {
        setPage(0)
    }

    const paginationPrevClick = () => {
        if(page > 0) {
            setPage(page-1)
        }
    }

    const paginationNextClick = () => {
        if (page < totalPage - 1) {
            setPage(page+1)
        }
    }

    const paginationLastClick = () => {
        setPage(totalPage - 1);
    }

    return (
        <Container>
            <Row className={'pt-5 pb-2'}>
                <Col xs={4}/>
                <Col>
                    <b>Beyaz Eşya</b> kategorisi içeriğindeki ürünler listeleniyor
                </Col>
            </Row>
            <Row>
                <Col lg={3}>
                    <Dropdown>
                        <Dropdown.Toggle className={'bg-secondary border-dark border-3'}>
                            En Son Eklenenlere Göre
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                Seçenek 1
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Seçenek 2
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col lg={3}>
                    <Dropdown>
                        <Dropdown.Toggle className={'bg-secondary border-dark border-3'}>
                            Tüm Ürünler
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                Seçenek 1
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Seçenek 2
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
            <Row className={'pt-3'}>
                {
                    products.map((product) => (
                        <Col key={product.id} className={'pb-2'} lg={3} md={6} xs={12}>
                            <ProductListItem product={product}/>
                        </Col>
                    ))
                }
            </Row>
            <Row className={'pt-4'}>
                <Col className={'d-flex justify-content-center'}>
                    <Pagination size="sm">
                        <Pagination.First className={'p-2'} onClick={() => paginationFirstClick()}/>
                        <Pagination.Prev className={'p-2'} onClick={() => paginationPrevClick()}/>
                        {returnPaginationArray(page, totalPage - 1).map((item, index) => (
                                <Pagination.Item className={'p-2'} key={item} active={item === page}
                                                 onClick={() => changePageClick(item)}>
                                    {item + 1}
                                </Pagination.Item>
                            )
                        )}
                        <Pagination.Next onClick={() => paginationNextClick()} className={'p-2'}/>
                        <Pagination.Last onClick={() => paginationLastClick()} className={'p-2'}/>
                    </Pagination>
                </Col>
            </Row>
            <Row>
            </Row>
        </Container>
    )
}
