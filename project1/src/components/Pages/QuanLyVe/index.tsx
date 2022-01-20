import React from 'react';
import './style.scss'
import BoxMain from '../../common/BoxMain/index'
import BoxDate from '../../common/BoxDate';
import Search from '../../Search';
import ButtonOutLine from '../../common/ButtonOutLine';
import {ReactComponent as Filter} from '../../../assets/svg/filter.svg'

const index = () => {
  return (
    <BoxMain header="Danh sách vé">
        <div className="subHeaderStyle">
            <Search name="Tìm bằng số vé"></Search>
            <div className="subHeaderStyle-btStyle">
                <ButtonOutLine>
                    <Filter></Filter>
                    <div style={{marginLeft:'6px'}}>Lọc vé</div>
                </ButtonOutLine>
                <ButtonOutLine>
                    <h4>Xuất file (.csv)</h4>
                </ButtonOutLine>
            </div>
        </div>
    </BoxMain>
  );
};

export default index;