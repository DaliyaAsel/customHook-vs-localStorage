import { useRef, useState } from 'react';
import { useLocalStorage } from '../hooks/CustomHook.js';

import styled  from 'styled-components';

export const LocalStorage = (props) => {
    const [name, setName] = useLocalStorage('Asel', 'keyName');
    const nameRef = useRef(name);

    return (
        <Wrapper>
            <h2>Введите ваше имя</h2>
            <input type="text" ref={nameRef} />
            <button onClick={() => setName(nameRef.current.value)}>Показать имя</button>
            <p>{name}</p>
        </Wrapper>
    )
}

export const Wrapper = styled.div`
   dispaly: flex;
   background: green;
   color: white;
   padding-left: 50px;

   p {
       font-weight: bold;
   }
`