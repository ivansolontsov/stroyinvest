import React from 'react';
import { ProductCard } from './ProductCard';

export const CatalogItem = ({title, subtitle, products, categoryId}) => {
    
    const [openState, setOpenState] = React.useState(false);
    
    return (
        <section className="catalog">
            <div className="catalog__header">
                <div className="catalog__header-title">
                    <h2 className="catalog__title">{title}</h2>
                    <p className="catalog__subtitle">
                        {subtitle}
                    </p>
                </div>
                <button className="catalog__header-button" onClick={() => { setOpenState(!openState) }}>
                    {openState ? 'ЗАКРЫТЬ' : 'ОТКРЫТЬ'}
                </button>
            </div>
            <div className={`catalog__list ${openState ? 'catalog__list_open' : ''}`}>
                <ProductCard products={products} categoryId={categoryId} categoryTitle={title} />
            </div>
        </section>
    )
}