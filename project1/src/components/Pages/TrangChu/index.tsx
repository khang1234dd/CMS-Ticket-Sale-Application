import React from "react";
import "./style.scss";
import BoxMain from "../../common/BoxMain/index";
import BoxDate from "../../common/BoxDate";
import AreaChart from "../../AreaChart";
import DonutChart from "../../DonutChart";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

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
  display:'flex',
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  color:'#1E0D03'
});

const dataDonut1 = [13568,56024]
const dataDonut2 = [28302,30256]

const index = () => {
  return (
    <BoxMain header="Thống kê">
      <div className="subHeaderStyle">
        <div className="subHeaderStyle-subtext">Doanh thu</div>
        <div className="subHeaderStyle-date">
          <BoxDate></BoxDate>
        </div>
      </div>
      <div className="areaChartWrap">
        <AreaChart></AreaChart>
      </div>
      <div className="sub2Text">Tổng doanh thu theo tuần</div>
      <h2>
        525.145.000
        <span style={{ fontWeight: 400, fontSize: "0.875rem" }}> đồng</span>
      </h2>
      <Grid
        container
        alignItems="center"
        spacing={2}
        sx={{ marginTop: "1rem" }}
      >
        <Grid item xs={2}>
          <BoxDate></BoxDate>
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
          <DonutChart data={dataDonut1}></DonutChart>
        </Grid>
        <Grid item xs={3}>
          <DonutChart data={dataDonut2}></DonutChart>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          item
          xs
        >
          <Grid item xs={2} >
            &nbsp;
          </Grid>
          <Grid item xs={2} >
            <Item>
            <StyleBoxNote></StyleBoxNote>
             Vé đã sử dụng
            </Item>
          </Grid>
          <Grid item xs >
            <Item>
            <StyleBoxNote style={{backgroundColor: '#FF8A48'}}></StyleBoxNote>
            Vé chưa sử dụng
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </BoxMain>
  );
};

export default index;
