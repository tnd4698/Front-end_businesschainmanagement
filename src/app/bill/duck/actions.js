import types from './types.js';

const fetchN = (value) => {
    return {
        type: types.TOGGLE,
        value: value
    };
}

export default {
    fetchN
}