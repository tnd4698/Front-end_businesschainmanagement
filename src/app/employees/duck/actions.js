import { default as types } from './types'

const getListRole = listRole => {
    return {
        type: types.GETLISTROLE,
        value: listRole
    }
}

const getListEmployee = listEmployee => {
    return {
        type: types.GETLISTEMPLOYEE,
        value: listEmployee
    }
}

export default {
    getListRole,
    getListEmployee
}