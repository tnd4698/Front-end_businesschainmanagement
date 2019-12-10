import types from './types.js';

const getMenuItem = (listMenuItem) => {
    return {
        type: types.GETMENUITEM,
        value: listMenuItem
    }
}


export default {
    getMenuItem
}