interface doanhthuState {
  dataTable: Array<number>;
  dataTableSoVe: Array<number>;
}

const initialState: doanhthuState = {
  dataTable: [],
  dataTableSoVe:[],
};

const doanhthuReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_DATA_TABLE_DOANHTHU": {
      const newDataTable = action.payload;

      return {
        ...state,
        dataTable: newDataTable,
      };
    }
    case "GET_DATA_TABLE_SOVE": {
      const newDataTable = action.payload;

      return {
        ...state,
        dataTableSoVe: newDataTable,
      };
    }
    case "ADD_DATA_TABLE_DOANHTHU": {
      return {
        ...state,
      };
    }
    case "ADD_DATA_TABLE_SOVE": {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
  // return state
};

export default doanhthuReducer;
