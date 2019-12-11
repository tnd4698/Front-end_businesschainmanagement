import types from './types.js';

const getListStudent = listStudent => {
    return {
        type: types.GETLISTSTUDENT,
        value: listStudent
    }
}

export default {
    getListStudent
}