export const SELECT_DATA = 'SELECT_DATA'
export const FILTERED_DATA = 'FILTERED_DATA'
export const selectData = (id) => ({
    type: SELECT_DATA,
    dataID: id
})
export const filteredData = (id) => ({
    type:FILTERED_DATA,
    categoryID:id
})