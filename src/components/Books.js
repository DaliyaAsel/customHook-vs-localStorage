import React, { useContext } from 'react';
import { ContextHook } from '../hooks/ContextHook';
import { Header } from './Header';

import {Wrapper} from './LocalStorage'

export const Books = () => {
    const { books = [], removeBook } = useContext(ContextHook);
    

    return (
        <Wrapper className='books-list'>
            {
                books.map(item => {
                    return <h2 key={item.id} onClick={() => removeBook(item.id)}>{item.title}</h2>
                })
            }

            <Header />
        </Wrapper>

    )
}