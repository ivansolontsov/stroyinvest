import React from 'react';

export const CombineFilter = ({ combines, setFilterCombines }) => {
    const [radioState, setRadioState] = React.useState(0);

    const handleRadio = event => {
        let clickedOption = Number(event.target.value)
        setRadioState(Number(clickedOption));
        setFilterCombines(Number(clickedOption));
    }

    return (
        <form className="catlaog__list-form">
            <h3>Выберите марку производителя комбайна</h3>
            <div className="catlaog__list-combines">
            {
                combines.map((combine, index) => {
                    return (
                        <label key={index} className={`catlaog__list-combines-item ${radioState === combine.id ? 'catlaog__list-combines-item_active' : ''}`}>
                            <input
                                type="radio"
                                value={combine.id}
                                checked={radioState === combine.id ? true : false}
                                onChange={handleRadio}
                                className="catlaog__list-combines-item-radio"
                            />
                            {combine.title}
                        </label>
                    )
                })
            }
            </div>
        </form>
    )
}