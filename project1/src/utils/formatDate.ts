import moment from 'moment';

export const formatDate =(Date:Date)=>{
    return moment(Date).format("DD/MM/YYYY");
}
export const formatTime =(Date:Date)=>{
    return moment(Date).format("HH:mm:ss");
}