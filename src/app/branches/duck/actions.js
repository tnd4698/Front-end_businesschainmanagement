import { default as types } from './types'

const getListBranch = listBranch => {
    return {
        type: types.GETLISTBRANCH,
        value: listBranch
    }
}

export default {
    getListBranch
}