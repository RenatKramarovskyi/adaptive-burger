import React from 'react';
import './burger.css'
const Burger = ({header, items, active, setActive}) => {
    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className={'blur'}></div>
            <div className="menu__content" onClick={(e) => e.stopPropagation()} >
                <div className="menu__header">
                    {header}
                </div>
                <ul>
                    {items.map((item, index) =>
                        <li key={index}>
                            <a href={item.href}>
                                {item.value}
                            </a>

                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Burger;