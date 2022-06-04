import { useReducer } from "react";
import { reducer } from '../hooks/UseReducerHook';


export const Header = () => {

    const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 10, g: 150, b: 200 })

    return (
        <div>
            <h1
                style={{
                    color: `rgb(${r}, ${g}, ${b})`
                }}> Меняем цвет
            </h1>

            <button onClick={() => dispatch({ type: 'CHANGE_COLOR' })}>+</button>
            <button onClick={() => dispatch({ type: 'CHANGE_COLOR_DOWN', payload: 40 })}>-</button>
        </div>
    )
}