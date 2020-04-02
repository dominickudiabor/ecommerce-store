import sections from "../../components/directory/directory.data";

const INITIAL_STATE = {
  directoryItems: sections
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
       
        default:
         return state;
    }
 
};

export default directoryReducer;
