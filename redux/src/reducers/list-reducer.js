import { lists as default_lists } from "../normalized-state";

const listsReducer = (lists = default_lists, action) => {
    console.log(lists, action);
    return lists;
};

export default listsReducer;
