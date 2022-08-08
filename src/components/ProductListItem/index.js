import {useState} from "react";
import {ArrowRight, Cart, ChevronDown, ChevronUp, Heart, Sliders2} from "react-bootstrap-icons";
import './index.scss';

const productImages = [
    'https://cdn.evkur.com.tr/c/Product/thumbs/20263195-1_gw6i4c_500.jpg',
    'https://cdn.cimri.io/image/1000x1000/siemenssnidtasnfprogramlbulakmakinesibeyaz_384235628.jpg',
    'https://st1.myideasoft.com/shop/vr/10/myassets/products/866/arcelik-10120-ma-10-kg-camasir-makinesi-2.png?revision=1654005375',
    'https://st2.myideasoft.com/shop/bm/90/myassets/products/720/image_min.png?revision=1636620528'
];

export function ProductListItem(props) {
    const product = props.product;
    const [mouseOVer, setMouseOver] = useState(false);

    function priceFormat(price) {
        return price.toLocaleString('tr-TR', {maximumFractionDigits: 2, minimumFractionDigits: 2})
    }

    function mouseOverFunction() {
        setMouseOver(true);
    }

    function mouseOutFunction() {
        setMouseOver(false);
    }

    return (
        <div className={'d-flex flex-column me-2 border'} onMouseOver={() => mouseOverFunction()}
             onMouseOut={() => mouseOutFunction()}>
            <img className={'product-image p-5'} alt='' src={product.img || productImages[product.id % 4]}/>
            <div className={'top-container'}>
            {
                mouseOVer ?
                    <div className={'bg-dark d-flex justify-content-center align-items-center me-3 ms-3'}>
                                <span className={'text-center flex-grow-1'}>
                                    1
                                </span>
                        <div className={'pe-3'}>
                            <div>
                                    <span>
                                        <ChevronUp/>
                                    </span>
                            </div>
                            <div>
                                    <span>
                                        <ChevronDown/>
                                    </span>
                            </div>
                        </div>
                    </div>:
                    <span className={'text-center p-2 product-name'}>
                            {product.name}
                        </span>
            }
            </div>
            <div className={'d-flex flex-column mid-container'}>
            {
                mouseOVer ?
                    <div className={'d-flex p-3'}>
                        <div className={'col-4 d-flex justify-content-center'}>
                            <div className={'icon-div rounded-circle'}>
                                <Cart title={'Sepete Ekle'} className={'m-2'}/>
                            </div>
                        </div>
                        <div className={'d-flex col-4 justify-content-center'}>
                            <div className={'icon-div rounded-circle'}>
                                <Heart title={'Favorilerime Ekle'} className={'m-2'}/>
                            </div>
                        </div>
                        <div className={'d-flex col-4 justify-content-center'}>
                            <div className={'icon-div rounded-circle'}>
                                <Sliders2 title={'Filtrele'} className={'m-2'}/>
                            </div>
                        </div>
                    </div>:
                    <span className={'text-center p-3 fw-bold'}>
                            {`${priceFormat(product.price)} ${product.currency}`}
                        </span>
            }
            </div>
            <div className={'d-flex flex-column justify-content-end bottom-container'}>
            {
                mouseOVer ?
                    <button className={'bg-primary border-0 py-2 text-white'}>
                            <span className={'pe-2'}>
                                Ürünü İncele
                            </span>
                        <ArrowRight/>
                    </button>:
                    <span className={'text-center p-3'}>
                        <span className={'fw-bold'}>
                            Taksitli Fiyatı:
                        </span>
                        {` 3x${priceFormat(product.price / 3)} ${product.currency}`}
                        </span>
            }
            </div>
        </div>
    )
}
