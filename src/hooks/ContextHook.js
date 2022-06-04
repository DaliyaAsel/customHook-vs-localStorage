import { createContext, useState } from "react";


export const ContextHook = createContext();


export const ContextBookComponent = (props) => {
    const [books, setBooks] = useState([
        { id: 1, title: 'JS' },
        { id: 2, title: 'React' },
        { id: 3, title: 'TS' },
        { id: 4, title: 'Gql' },
    ]);

    const addBooks = (book) => {
        setBooks([...books, book]);
    }

    const removeBook = (id) => {
         setBooks(books.filter(item => item.id !==id));
    }

    const value = {
        books,
        addBooks,
        removeBook,
    }

    return <ContextHook.Provider value={value}>
        {props.children}
    </ContextHook.Provider>
}