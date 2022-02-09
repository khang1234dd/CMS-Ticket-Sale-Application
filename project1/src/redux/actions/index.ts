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
} from "firebase/firestore";
import { ThunkAction } from "redux-thunk";
import database from "../../config/firebaseConfig";
import { RootState } from "../store";

export const getDataTableDSV = (): ThunkAction<void, RootState, null, any> => {
  return async (dispatch: any) => {
    const data: any = [];
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

    console.log(data);

    dispatch({ type: "GET_DATA_TABLE_DSV", payload: data });
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
      data.push(doc.data());
    });

    data.map((v: any, index: any) => {
      data[index].ngayapdung = data[index].ngayapdung.toDate();
      data[index].ngayhethan = data[index].ngayhethan.toDate();
    });

    console.log(data);

    dispatch({ type: "GET_DATA_TABLE_GOIVE", payload: data });
  };
};
