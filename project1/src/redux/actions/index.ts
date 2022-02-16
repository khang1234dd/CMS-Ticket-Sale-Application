import {
  collection,
  query,
  doc,
  addDoc,
  setDoc,
  getDocs,
  where,
  documentId,
  getDoc,
  Timestamp,
  updateDoc,
  arrayUnion,
  orderBy,
} from "firebase/firestore";
import { ThunkAction } from "redux-thunk";
import database from "../../config/firebaseConfig";
import { QuerryDataDoanhThu,checkCong,checkTTSD, checkTTDS, PaginationData, randomNumber, checkDoiSoat } from "../../utils/queryData";
import { RootState } from "../store";

export const addTimeRangeFirst = (payload:Object) => {
  return {
    type: "ADD_TIME_RANGE_FIRST", 
    payload: payload,
  }
}
export const addTimeRangeLast = (payload:Object) => {
  return {
    type: "ADD_TIME_RANGE_LAST", 
    payload: payload,
  }
}
export const addTimeSingle = (payload:Object) => {
  return {
    type: "ADD_TIME_SINGLE", 
    payload: payload,
  }
}
export const addDateSingle = (payload:Object) => {
  return {
    type: "ADD_DATE_SINGLE", 
    payload: payload,
  }
}
export const addDateSingleSoVe = (payload:Object) => {
  return {
    type: "ADD_DATE_SINGLE_SOVE", 
    payload: payload,
  }
}

export const addDateTuNgayDSV = (payload:Object) => {
  return {
    type: "ADD_DATE_TUNGAY_DSV", 
    payload: payload,
  }
}

export const addDateDenNgayDSV = (payload:Object) => {
  return {
    type: "ADD_DATE_DENNGAY_DSV", 
    payload: payload,
  }
}

export const addDateTuNgayDoiSoat = (payload:Object) => {
  return {
    type: "ADD_DATE_TUNGAY_DOISOAT", 
    payload: payload,
  }
}

export const addDateDenNgayDoiSoat = (payload:Object) => {
  return {
    type: "ADD_DATE_DENNGAY_DOISOAT", 
    payload: payload,
  }
}

export const addDateDoiSoatAction = () => {
  return {
    type: "ADD_DATE_DOISOAT_ACTION",
  }
}
export const addDateDSVAction = () => {
  return {
    type: "ADD_DATE_DSV_ACTION",
  }
}


export const addDateRangeFirst = (payload:Object) => {
  return {
    type: "ADD_DATE_RANGE_FIRST", 
    payload: payload,
  }
}
export const addDateRangeLast = (payload:Object) => {
  return {
    type: "ADD_DATE_RANGE_LAST", 
    payload: payload,
  }
}

export const changePageDSV = (payload:Object) => {
  return {
    type: "CHANGE_PAGE_DSV", 
    payload: payload,
  }
}
export const changePageDoiSoat = (payload:Object) => {
  return {
    type: "CHANGE_PAGE_DOISOAT", 
    payload: payload,
  }
}

export const locVe = (payload:Object) => {
  return {
    type: "LOC_VE", 
    payload: payload,
  }
}

export const locVeDoiSoat = (payload:Object) => {
  return {
    type: "LOC_VE_DOISOAT", 
    payload: payload,
  }
}

export const changeSelectLocVe = (payload:Object) => {
  return {
    type: "CHANGE_SELECT_LOCVE", 
    payload: payload,
  }
}
export const changeSelectLocVeAction = () => {
  return {
    type: "CHANGE_SELECT_LOCVE_ACTION", 
  }
}

export const changeSelectTinhTrang = (payload:Object) => {
  return {
    type: "CHANGE_SELECT_TINHTRANG", 
    payload: payload,
  }
}

export const updateDataSearchDSV = (payload:Object) => {
  return {
    type: "UPDATE_DATA_SEARCH_DSV", 
    payload: payload,
  }
}

export const updateDataSearchDoiSoat = (payload:Object) => {
  return {
    type: "UPDATE_DATA_SEARCH_DOISOAT", 
    payload: payload,
  }
}

export const updateDataSearchCaiDat = (payload:Object) => {
  return {
    type: "UPDATE_DATA_SEARCH_CAIDAT", 
    payload: payload,
  }
}




// export const changeSearchDSV = (payload:Object) => {
//   return {
//     type: "CHANGE_SEARCH_DSV", 
//     payload: payload,
//   }
// }




export const getDataTableDSV = (ttsd:number,tungay:Date,denngay:Date,congCheckIn:Array<boolean>): ThunkAction<void, RootState, null, any> => {
  return async (dispatch: any) => {
    const data: any = [];
    const kqTTSD = checkTTSD(ttsd)
    const kqCong = checkCong(congCheckIn)
    const querySnapshot = await getDocs(collection(database, "danhsachve"));
    
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });

    const reads = data.map((data: any) => getDoc(data.tensukien));

    const results = await Promise.all(reads);

    results.map((v, index) => {
      data[index].tensukien = v.data().ten;
      data[index].ngaysudung = data[index].ngaysudung.toDate();
      data[index].ngayxuatve = data[index].ngayxuatve.toDate();
    });

    const newData = data.filter((item:any) => {
      if(kqTTSD.includes(item.ttsd) && kqCong.includes(item.cong) && tungay<=item.ngayxuatve && denngay>=item.ngaysudung){
        return true
      }
      return false
    })

    const object = {data:newData ,totalRows: newData.length }

    dispatch({ type: "GET_DATA_TABLE_DSV", payload: object });
  };
};

export const getDataTablePaginationDSV = (array:Array<Object>,page:number,limit:number): ThunkAction<void, RootState, null, any> => {
  return (dispatch: any) => {
    const results = PaginationData(array,page,limit)
    dispatch({ type: "GET_DATA_TABLE_PAGINATION_DSV", payload: results });
  };
};

export const getDataTablePaginationDoiSoat = (array:Array<Object>,page:number,limit:number): ThunkAction<void, RootState, null, any> => {
  return (dispatch: any) => {
    const results = PaginationData(array,page,limit)
    console.log(results)
    const check=checkDoiSoat(results.data)
    dispatch({ type: "GET_DATA_TABLE_PAGINATION_DOISOAT", payload: {...results,showChotDoiSoat: check} });
  };
};

export const getDataTableDoiSoat = (tensukien:string |null,tungay:Date,denngay:Date,ttds:number): ThunkAction<void, RootState, null, any> => {
  return async (dispatch: any) => {
    const data: any = [];
    const kqTTDS = checkTTDS(ttds)

    const querySnapshot = await getDocs(query(collection(database, "danhsachve"),orderBy("sove")));
    
    querySnapshot.forEach((doc) => {
      data.push({...doc.data(),id: doc.id});
    });

    const reads = data.map((data: any) => getDoc(data.tensukien));

    const results = await Promise.all(reads);

    results.map((v, index) => {
      data[index].tensukien = v.data().ten;
      data[index].ngaysudung = data[index].ngaysudung.toDate();
      data[index].ngayxuatve = data[index].ngayxuatve.toDate();
    });

    console.log("tensukien",tensukien)
    
    const newData = data.filter((item:any) => {

      if(kqTTDS.includes(item.doisoat)  && tungay<=item.ngayxuatve && denngay>=item.ngaysudung && (item.tensukien === tensukien || tensukien==="")){
        return true
      }
      return false
    })

    console.log(newData)

    const object = {data:newData ,totalRows: newData.length }

    dispatch({ type: "GET_DATA_TABLE_DOISOAT", payload: object });
  };
};

export const addDataTableDSV = (
  dataTable: any
): ThunkAction<void, RootState, null, any> => {
  return (dispatch: any) => {
    // const newData:any = [];
    let data: any = [];

    dataTable.forEach(async (element: any) => {
      data = await addDoc(collection(database, "danhsachve"), element);
      console.log("element =>", element);
    });

    dispatch({ type: "ADD_DATA_TABLE_DSV", payload: data });
  };
};

export const getDataTableGoiVe = (): ThunkAction<
  void,
  RootState,
  null,
  any
> => {
  return async (dispatch) => {
    const data: any = [];
    const querySnapshot = await getDocs(collection(database, "goive"));

    querySnapshot.forEach((doc) => {
      data.push({...doc.data(), id: doc.id});
    });

    data.map((v: any, index: any) => {
      data[index].ngayapdung = data[index].ngayapdung.toDate();
      data[index].ngayhethan = data[index].ngayhethan.toDate();
    });

    console.log(data);

    dispatch({ type: "GET_DATA_TABLE_GOIVE", payload: data });
  };
};

export const addDataTableDoanhThu = (
  dataTable: any
): ThunkAction<void, RootState, null, any> => {
  return (dispatch: any) => {
    // const newData:any = [];
    let data: any = [];

    dataTable.forEach(async (element: any) => {
      data = await addDoc(collection(database, "doanhthu"), element);
      console.log("element =>", element);
    });

    dispatch({ type: "ADD_DATA_TABLE_DOANHTHU", payload: data });
  };
};

export const addDataTableSoVe = (
  dataTable: any
): ThunkAction<void, RootState, null, any> => {
  return (dispatch: any) => {
    // const newData:any = [];
    let data: any = [];

    dataTable.forEach(async (element: any) => {
      data = await addDoc(collection(database, "sove"), element);
      console.log("element =>", element);
    });

    dispatch({ type: "ADD_DATA_TABLE_SOVE", payload: data });
  };
};


export const getDataTableDoanhThu = (dataDate:any): ThunkAction<
  void,
  RootState,
  null,
  any
> => {
  return async (dispatch) => {
    const data: any = [];
    const querySnapshot = await getDocs(collection(database, "doanhthu"));

    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    
    const results =QuerryDataDoanhThu(data,dataDate)

    dispatch({ type: "GET_DATA_TABLE_DOANHTHU", payload: results });
  };
};

export const getDataTableSoVe = (dataDate:any): ThunkAction<
  void,
  RootState,
  null,
  any
> => {
  return async (dispatch) => {
    const data: any = [];
    const querySnapshot = await getDocs(collection(database, "sove"));

    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    
    const results =QuerryDataDoanhThu(data,dataDate)

    dispatch({ type: "GET_DATA_TABLE_SOVE", payload: results });
  };
};

export const getDataTableSuKien = (): ThunkAction<
  void,
  RootState,
  null,
  any
> => {
  return async (dispatch) => {
    const data: any = [];
    const querySnapshot = await getDocs(collection(database, "sukien"));

    querySnapshot.forEach((doc) => {
      data.push(doc.data().ten);
    });

    dispatch({ type: "GET_DATA_SUKIEN", payload: data });
  };
};

export const addDataTableGoiVe = (
  data:any
): ThunkAction<void, RootState, null, any> => {
  return async (dispatch: any) => {
    // const newData:any = [];
    const maGoiVe= "ALT" + randomNumber(10000000,29999999).toString()
    console.log(data)
    const result = {...data,ma: maGoiVe,giave:Number(data.giave),giacombo: Number(data.giacombo),sove:Number(data.sove),ngayapdung: Timestamp.fromDate(data.ngayapdung),ngayhethan: Timestamp.fromDate(data.ngayhethan)}
    // console.log(result)
    // const object = {ten:data.tenGoiVe, giave:  data.giaVeLe,giacombo: data.giaVeCombo,sove: data.soVe, ngayapdung: Timestamp.fromDate(data.tungay),ngayhethan: Timestamp.fromDate(data.dengay),tinhtrang:data.tinhtrang}
    // console.log(object)
    await addDoc(collection(database, "goive"), result);

    dispatch({ type: "ADD_DATA_TABLE_GOIVE", payload: result });
  };
};

export const updateDataTableGoiVe = (
  data:any
): ThunkAction<void, RootState, null, any> => {
  return async (dispatch: any) => {
    // const newData:any = [];
    // const 
    const itemDocRef = doc(database, "goive", data.id);

    const result = {giave:Number(data.giave),giacombo: Number(data.giacombo),sove:Number(data.sove),ngayapdung: Timestamp.fromDate(data.ngayapdung),ngayhethan: Timestamp.fromDate(data.ngayhethan)}
    // console.log(result)
    // const object = {ten:data.tenGoiVe, giave:  data.giaVeLe,giacombo: data.giaVeCombo,sove: data.soVe, ngayapdung: Timestamp.fromDate(data.tungay),ngayhethan: Timestamp.fromDate(data.dengay),tinhtrang:data.tinhtrang}
    // console.log(object)
    // await updateDoc(collection(database, "goive"), itemDocRef);
    await updateDoc(itemDocRef,{...result, masukien: arrayUnion(data.ma)});
    await addDoc(collection(database, "sukien"), {ma:data.ma,ten:data.ten});

    dispatch({ type: "UPDATE_DATA_TABLE_GOIVE", payload: result });
  };
};

export const chotDoiSoat = (
  data:any
): ThunkAction<void, RootState, null, any> => {
  return async (dispatch: any) => {
    
    data.forEach(async (element:any) => {
      const itemDocRef = doc(database, "danhsachve", element.id);
      await updateDoc(itemDocRef,{doisoat: true});

    })
    dispatch({ type: "CHOT_DOI_SOAT", payload: data });
  };
};



