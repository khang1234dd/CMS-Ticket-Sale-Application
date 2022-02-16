import moment from "moment";

export const QuerryDataDoanhThu = (data: any, date: any) => {
  const newDate = moment(date);
  let results: Array<number> = [];
  data.forEach((value: any) => {
    if (value.nam.toString() === newDate.year().toString()) {
      results = value[`tuan${newDate.isoWeek()}`];
      console.log("oke!", value[`tuan${newDate.isoWeek()}`]);
    }
  });
  return results;
};

export const checkTTSD = (ttsd: number) => {
  if (ttsd === 1) {
    return ["dasudung"];
  } else if (ttsd === 2) {
    return ["chuasudung"];
  } else if (ttsd === 3) {
    return ["hethan"];
  } else {
    return ["dasudung", "chuasudung", "hethan"];
  }
};

export const checkCong = (congCheckIn: Array<boolean>) => {
  let results: string[] = [];
  congCheckIn.forEach((item, index) => {
    if (item === true && index !== 0) {
      results.push(`Cổng ${index}`);
    } else if (item === true && index === 0) {
      for (let i = 1; i <= 5; i++) {
        results.push(`Cổng ${i}`);
      }
    }
  });
  return results;
};

export const checkTTDS = (ttds: number) => {
  if (ttds === 1) {
    return [true];
  } else if (ttds === 2) {
    return [false];
  } else {
    return [true, false];
  }
};

export const PaginationData = (array:Array<Object>,page:number,limit:number) => {
  const pageLast = page * limit;
  const pageFirst = pageLast - limit;
  const data = array.slice(pageFirst, pageLast);
  const object = { data, page: page };
  return object
};

export const randomNumber = (minNumber:number,maxNumber:number) =>{
  let min = Math.ceil(minNumber);
  let max = Math.floor(maxNumber);
  return Math.floor(Math.random() * (max - min) + min);

}

export const checkDoiSoat = (array: Array<any>) => {
  const result = array.filter((item) => item.doisoat === true);
  if (result.length < array.length) {
    return true;
  } else return false;

  
};