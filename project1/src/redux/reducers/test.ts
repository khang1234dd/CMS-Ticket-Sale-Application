const test = (state=false ,action:any)=>{
    switch(action.type){
        case 'SIGNIN':{
            return state=true;
        }
        case 'LOGOUT':{
            return state=false;
        }
        default: return state
    }
}
export default test