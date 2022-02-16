import React, { useEffect, useLayoutEffect, useState } from "react";
import "./style.scss";
import BoxMain from "../../common/BoxMain/index";
import BoxDate from "../../common/BoxDate";
import AreaChart from "../../AreaChart";
import DonutChart from "../../DonutChart";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { addDataTableDoanhThu, getDataTableDoanhThu, addDataTableSoVe, getDataTableSoVe } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import {formatNumber} from '../../../utils/formatNumber'

const StyleDiv = styled("div")({
  textAlign: "center",
  fontWeight: "bold",
});

const StyleBoxNote = styled("div")({
  width: 44,
  height: 20,
  backgroundColor: "#4F75FF",
  borderRadius: 4,
  marginRight: 8,
});
const Item = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  color: "#1E0D03",
});

const dataDonut1 = [13568, 56024];
const dataDonut2 = [28302, 30256];

const randomNumber = () =>{
  let min = Math.ceil(10000);
  let max = Math.floor(99999);
  return Math.floor(Math.random() * (max - min) + min);

}



// const dataDoanhThu = [
//   {
//     nam: 2023,
//     tuan1: [randomNumber(), randomNumber()],
//     tuan2: [randomNumber(), randomNumber()],
//     tuan3: [randomNumber(), randomNumber()],
//     tuan4: [randomNumber(), randomNumber()],
//     tuan5: [randomNumber(), randomNumber()],
//     tuan6: [randomNumber(), randomNumber()],
//     tuan7: [randomNumber(), randomNumber()],
//     tuan8: [randomNumber(), randomNumber()],
//     tuan9: [randomNumber(), randomNumber()],
//     tuan10: [randomNumber(), randomNumber()],
//     tuan11: [randomNumber(), randomNumber()],
//     tuan12: [randomNumber(), randomNumber()],
//     tuan13: [randomNumber(), randomNumber()],
//     tuan14: [randomNumber(), randomNumber()],
//     tuan15: [randomNumber(), randomNumber()],
//     tuan16: [randomNumber(), randomNumber()],
//     tuan17: [randomNumber(), randomNumber()],
//     tuan18: [randomNumber(), randomNumber()],
//     tuan19: [randomNumber(), randomNumber()],
//     tuan20: [randomNumber(), randomNumber()],
//     tuan21: [randomNumber(), randomNumber()],
//     tuan22: [randomNumber(), randomNumber()],
//     tuan23: [randomNumber(), randomNumber()],
//     tuan24: [randomNumber(), randomNumber()],
//     tuan25: [randomNumber(), randomNumber()],
//     tuan26: [randomNumber(), randomNumber()],
//     tuan27: [randomNumber(), randomNumber()],
//     tuan28: [randomNumber(), randomNumber()],
//     tuan29: [randomNumber(), randomNumber()],
//     tuan30: [randomNumber(), randomNumber()],
//     tuan31: [randomNumber(), randomNumber()],
//     tuan32: [randomNumber(), randomNumber()],
//     tuan33: [randomNumber(), randomNumber()],
//     tuan34: [randomNumber(), randomNumber()],
//     tuan35: [randomNumber(), randomNumber()],
//     tuan36: [randomNumber(), randomNumber()],
//     tuan37: [randomNumber(), randomNumber()],
//     tuan38: [randomNumber(), randomNumber()],
//     tuan39: [randomNumber(), randomNumber()],
//     tuan40: [randomNumber(), randomNumber()],
//     tuan41: [randomNumber(), randomNumber()],
//     tuan42: [randomNumber(), randomNumber()],
//     tuan43: [randomNumber(), randomNumber()],
//     tuan44: [randomNumber(), randomNumber()],
//     tuan45: [randomNumber(), randomNumber()],
//     tuan46: [randomNumber(), randomNumber()],
//     tuan47: [randomNumber(), randomNumber()],
//     tuan48: [randomNumber(), randomNumber()],
//     tuan49: [randomNumber(), randomNumber()],
//     tuan50: [randomNumber(), randomNumber()],
//     tuan51: [randomNumber(), randomNumber()],
//     tuan52: [randomNumber(), randomNumber()],
//   },
// ];


const totalArray = (array:Array<number>) =>{
  let total=0;
  array.forEach((e)=>{
    console.log('e',e)
    total = total + e
  })
  total = total * 1000000
  return total
}

const goiSuKien = (array:Array<number>) =>{
  const results:Array<number> = []
  array.forEach((e,index)=>{
    if(index===0){
      results.push(e + 3000*(1/100))
    }else {
      results.push(e + 3000*10)
    }
  })
  return results
}

const TrangChu = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.doanhthu.dataTable)
  const dataSoVe = useSelector((state: any) => state.doanhthu.dataTableSoVe)
  const date = useSelector((state: any) => state.time.dateSingle)
  const dateSoVe = useSelector((state: any) => state.time.dateSingleSoVe)
  const reload = useSelector((state: any) => state.time.reload)
  useLayoutEffect(() => {
    dispatch(getDataTableDoanhThu(date))
    dispatch(getDataTableSoVe(dateSoVe))

  },[reload, dispatch]);

  // useEffect(() => {
  //   dispatch(addDataTableSoVe(dataDoanhThu))
  // },[])
  
  return (
    <BoxMain header="Thống kê">
      <div className="subHeaderStyle">
        <div className="subHeaderStyle-subtext">Doanh thu</div>
        <div className="subHeaderStyle-date">
          <BoxDate type="single" useFormatDate></BoxDate>
        </div>
      </div>
      <div className="areaChartWrap">
        <AreaChart data={data} ></AreaChart>
      </div>
      <div className="sub2Text">Tổng doanh thu theo tuần</div>
      <h2>
        {formatNumber(totalArray(data))}
        <span style={{ fontWeight: 400, fontSize: "0.875rem" }}> đồng</span>
      </h2>
      <Grid
        container
        alignItems="center"
        spacing={2}
        sx={{ marginTop: "1rem" }}
      >
        <Grid item xs={2}>
          <BoxDate type="singleSoVe" useFormatDate></BoxDate>
        </Grid>
        <Grid item xs={3}>
          <StyleDiv>Gói gia đình</StyleDiv>
        </Grid>
        <Grid item xs={3}>
          <StyleDiv>Gói sự kiện</StyleDiv>
        </Grid>
        <Grid item xs>
          &nbsp;
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={2}></Grid>
        <Grid item xs={3}>
          <DonutChart data={dataSoVe}></DonutChart>
        </Grid>
        <Grid item xs={3}>
          <DonutChart data={goiSuKien(dataSoVe)}></DonutChart>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          item
          xs
        >
          <Grid item xs={2}>
            &nbsp;
          </Grid>
          <Grid item xs={2}>
            <Item>
              <StyleBoxNote></StyleBoxNote>
              Vé đã sử dụng
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <StyleBoxNote
                style={{ backgroundColor: "#FF8A48" }}
              ></StyleBoxNote>
              Vé chưa sử dụng
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </BoxMain>
  );
};

export default TrangChu;
