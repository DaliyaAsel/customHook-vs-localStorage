const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);
const step = 25;


export const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {
                ...state,
                r: limitRGB(state.r + step)
            };
            case 'CHANGE_COLOR_DOWN':
                return {
                    ...state,
                    g: limitRGB(state.g - action.payload)
                };
        default:
            return state
    }
}