import validator from 'validator';

export const themGoiVeValidator = (tengoive: string,giavele:string,giavecombo:string, sove:string, check:Array<boolean>, tinhtrang:boolean | undefined) =>{
    const tengoiveEmpty =  validator.isEmpty(tengoive)
    const giaveleEmpty = validator.isEmpty(giavele)
    const giavecomboEmpty = validator.isEmpty(giavecombo)
    const soveEmpty = validator.isEmpty(sove)

    const giaveleNumber = validator.isNumeric(giavele)
    const giavecomboNumber = validator.isNumeric(giavecombo)
    const soveNumber = validator.isNumeric(sove)

    if(tengoiveEmpty){
        return {field: 'tengoive' , message: 'Tên gói vé không được để trống'}
    }

    if(giaveleEmpty && check[0]){
        return {field: 'giavele' , message: 'Giá vé của vé lẻ không được để trống'}
    }

    if(giavecomboEmpty && check[1]){
        return {field: 'giavecombo' , message: 'Giá vé của vé combo không được để trống'}
    }

    if(soveEmpty && check[1]){
        return {field: 'sove' , message: 'Số lượng vé không được để trống'}
    }

    if(!giaveleNumber && check[0]){
        return {field: 'giavele' , message: 'Giá vé của vé lẻ phải là một số'}
    }
    if(!giavecomboNumber && check[1]){
        return {field: 'giavecombo' , message: 'Giá vé của vé combo phải là một số'}
    }
    if(!soveNumber && check[1]){
        return {field: 'sove' , message: 'Số lượng vé phải là một số'}
    }
    if(giaveleNumber && !check[0]){
        return {field: 'giavele' , message: 'Giá trị giá vé lẻ chưa được xóa'}
    }
    if(giavecomboNumber && !check[1]){
        return {field: 'giavecombo' , message: 'Giá trị giá vé combo chưa được xóa'}
    }
    if(soveNumber && !check[1]){
        return {field: 'sove' , message: 'Giá trị số vé chưa được xóa'}
    }
    if(tinhtrang === undefined){
        return {field: 'tinhtrang' , message: 'Vui lòng chọn tình trạng'}
    }
    
    return {success: true}
} 

export const capNhatGoiVeValidator = (masukien:string,tensukien: string,giavele:string,giavecombo:string, sove:string, check:Array<boolean>, tinhtrang:boolean | undefined) =>{
    const masukienEmpty =  validator.isEmpty(masukien)
    const tensukienEmpty =  validator.isEmpty(tensukien)
    const giaveleEmpty = validator.isEmpty(giavele)
    const giavecomboEmpty = validator.isEmpty(giavecombo)
    const soveEmpty = validator.isEmpty(sove)

    const giaveleNumber = validator.isNumeric(giavele)
    const giavecomboNumber = validator.isNumeric(giavecombo)
    const soveNumber = validator.isNumeric(sove)

    if(masukienEmpty){
        return {field: 'masukien' , message: 'Mã sự kiện không được để trống'}
    }


    if(tensukienEmpty){
        return {field: 'tensukien' , message: 'Tên sự kiện không được để trống'}
    }

    if(giaveleEmpty && check[0]){
        return {field: 'giavele' , message: 'Giá vé của vé lẻ không được để trống'}
    }

    if(giavecomboEmpty && check[1]){
        return {field: 'giavecombo' , message: 'Giá vé của vé combo không được để trống'}
    }

    if(soveEmpty && check[1]){
        return {field: 'sove' , message: 'Số lượng vé không được để trống'}
    }

    if(!giaveleNumber && check[0]){
        return {field: 'giavele' , message: 'Giá vé của vé lẻ phải là một số'}
    }
    if(!giavecomboNumber && check[1]){
        return {field: 'giavecombo' , message: 'Giá vé của vé combo phải là một số'}
    }
    if(!soveNumber && check[1]){
        return {field: 'sove' , message: 'Số lượng vé phải là một số'}
    }
    if(giaveleNumber && !check[0]){
        return {field: 'giavele' , message: 'Giá trị giá vé lẻ chưa được xóa'}
    }
    if(giavecomboNumber && !check[1]){
        return {field: 'giavecombo' , message: 'Giá trị giá vé combo chưa được xóa'}
    }
    if(soveNumber && !check[1]){
        return {field: 'sove' , message: 'Giá trị số vé chưa được xóa'}
    }
    if(tinhtrang === undefined){
        return {field: 'tinhtrang' , message: 'Vui lòng chọn tình trạng'}
    }
    
    return {success: true}
} 