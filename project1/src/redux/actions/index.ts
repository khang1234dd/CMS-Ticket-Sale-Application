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
import database from "../../config/firebaseConfig";

export const getDataTableDSV = () => {
  return async (dispatch: any) => {
    const data: any = [];
    const querySnapshot = await getDocs(collection(database, "danhsachve"));

    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    const reads = data.map((data:any) => 
      getDoc(data.tensukien)
    )

    const results = await Promise.all(reads)

    results.map((v,index)=>data[index].tensukien = v.data().ten)

    console.log(data)

    dispatch({ type: "GET_DATA_TABLE_DSV", payload: data });
  };
};

export const addDataTableDSV = (dataTable: any) => {
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


