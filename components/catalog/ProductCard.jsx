import React from 'react';
import { ContactUs } from '../ContactUs'
import { Portal } from 'react-portal'



export const ProductCard = ({ products, categoryTitle }) => {

    const [modalActive, setModalActive] = React.useState(false);
    const [info, setInfo] = React.useState('');

    return (
        <>
            <Portal>
                <ContactUs isModal={true} someInfo={info} isOrder={true} active={modalActive} setActive={setModalActive} />
            </Portal>
            {
                products.map((catalogItem, index) => {
                    return (
                        <div className="catalog__list-item" key={index}>
                            <img src={catalogItem.image} alt={catalogItem.title} className="catalog__list-item-img" />
                            <div className="catalog__list-item-body">
                                <span className="catalog__list-item-category">
                                    {categoryTitle}
                                </span>
                                <h3 className="catalog__list-item-name">{catalogItem.title}</h3>
                                {catalogItem.l && (
                                    <div className="catalog__list-item-specs" >
                                        <div className="catalog__list-item-specs-item">
                                            <span>Длина (L):</span> {catalogItem.l}мм
                                        </div>
                                        <div className="catalog__list-item-specs-item">
                                            <span>Ширина (B):</span> {catalogItem.b}мм
                                        </div>
                                        <div className="catalog__list-item-specs-item">
                                            <span>Толщина (s):</span> {catalogItem.s}мм
                                        </div>
                                        <div className="catalog__list-item-specs-item">
                                            <span>Диаметр отверстия (d):</span> {catalogItem.d}мм
                                        </div>
                                    </div>
                                )}
                                <button
                                    onClick={() => {
                                        setModalActive(true);
                                        setInfo(catalogItem.title)
                                    }}
                                    className="catalog__order-button">Заказать за <strong>{catalogItem.price}₽</strong></button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}