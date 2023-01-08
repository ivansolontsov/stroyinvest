import React from 'react';
import { CombineFilter } from './CombineFilter';
import { ProductCard } from './ProductCard';

export const CatalogItem = ({ title, subtitle, products, categoryId }) => {

    products = products.filter(product => product.category === categoryId);

    const [openState, setOpenState] = React.useState(false);
    const [filterCombines, setFilterCombines] = React.useState(0);

    const combines = [
        { id: 0, title: 'Все' },
        { id: 1, title: 'Claas' },
        { id: 2, title: 'Case' },
        { id: 3, title: 'Tucano' },
        { id: 4, title: 'Mega' },
        { id: 5, title: 'Lexion' },
        { id: 6, title: 'New Holland' },
        { id: 7, title: 'Акрос' },
        { id: 8, title: 'Вектор' },
        { id: 9, title: 'Торум' },
    ]

    if(categoryId === 0 && filterCombines !== 0) {
        products = products.filter(product => product.combine.includes(filterCombines))
    }
        
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
                {categoryId === 0 && (
                    <CombineFilter combines={combines} setFilterCombines={setFilterCombines} />
                )}
                <ProductCard products={products} categoryTitle={title} />
            </div>
        </section>
    )
}