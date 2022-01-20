import * as React from 'react';
import "./style.scss"
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, useNavigate as sdNavigate, useParams } from 'react-router-dom';
import logo from "../../assets/images/logo.png"
import { makeStyles } from '@mui/styles';
import { ReactComponent as Trangchu }  from '../../assets/svg/trangchu.svg'
import { ReactComponent as Qlve }  from '../../assets/svg/qlve.svg'
import { ReactComponent as Dsve }  from '../../assets/svg/dsve.svg'
import { ReactComponent as Dssukien }  from '../../assets/svg/dssukien.svg'
import { ReactComponent as Qlthietbi }  from '../../assets/svg/qlthietbi.svg'
import { ReactComponent as Caidat }  from '../../assets/svg/caidat.svg'


type NavLeftProps ={
    other: React.CSSProperties
}


const categories = [
  {
    id: 'Menu',
    children: [
      { id: 'Trang chủ', icon:  <Trangchu />},
      { id: 'Quản lý vé', icon: <Qlve /> },
      { id: 'Đối soát vé', icon: <Dsve />},
      { id: 'Cài đặt', icon: <Caidat/>},
    ],
  },
];

const item = {
  // py: '2px',
  px: '27px',
  mx: '33px',
  minHeight: '56px',
  minWidth: '250px',
  borderRadius: "8px",
  color: '#1E0D03',
  transition: 'transform 0.5s',
  '&:hover, &:focus': {
    bgcolor: '#FFB800',
    color: '#fff',
    fontWeight: 'bold',
    transform: 'scale(1.07,1.07)'
  },
};
const itemSub = {
  // py: '2px',
  pt:'0',
  mt: '0',
  textAlign:'center',
  minHeight: '56px',
  minWidth: '250px',
  borderRadius: "8px",
  color: '#1E0D03',
};

const boxStyle = {
  pt: '40px',
  bgcolor: "#F9F6F4",
};
const boxSubStyle = {
  bgcolor: "#F9F6F4",
};

const boxIcon = {
  mr:"15px",
  minWidth:"auto",
  width:'24px',
  color: 'currentColor'
}

const boxText = {
  color: "currentColor",
  m:'0 0',
}

const drawerStyle = makeStyles({
      paper: {
        backgroundColor: "#F9F6F4",
        width: '20%',
        maxWidth: '300px',
        border: 'none'
      },
      boxIcon:{
        "&: .MuiListItemIcon-root":{
          width: 'auto',
        },
      },
      boxText:{
        "&: .MuiListItemText-root":{
          fontFamily:'Montserrat, sans-serif',
        },
      }
  });


const index = () => {
  const navigate = sdNavigate();
  const classes = drawerStyle();
  const handleClick = (e:any) => {
    const link = e.target.innerHTML;
    switch (link){
      case 'Trang chủ':
        return navigate("/")
      case 'Quản lý vé':
        return navigate("/qlve")
      case 'Đối soát vé':
        return navigate("/dsve")
      case 'Cài đặt':
        return navigate("/caidat")
      default: return 
    }
  };
 

  return (
    <Drawer variant="permanent" classes={{paper:classes.paper}}>
      <List disablePadding >
        <div className="image-w">
            <img src={logo} alt="logo" className="image-w-100"></img>
        </div>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={boxStyle}>
            {children.map(({ id: childId, icon, active }:any) => (
              <ListItem disablePadding key={childId} >
                <ListItemButton onClick={handleClick} sx={item}>
                  <ListItemIcon className={classes.boxIcon} sx={boxIcon}>{icon}</ListItemIcon>
                  <ListItemText className={classes.boxText} sx={boxText}>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </Box>
        ))}
        <Box sx={boxSubStyle}>
          <ListItemButton onClick={handleClick} sx={itemSub} >
            <ListItemText className={classes.boxText} sx={boxText}>Gói dịch vụ</ListItemText>
          </ListItemButton>
        </Box>
      </List>
    </Drawer>
  );
};

export default index;
