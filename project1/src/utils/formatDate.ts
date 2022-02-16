import moment from 'moment';

export const formatDate =(Date:Date)=>{
    return moment(Date).format("DD/MM/YYYY");
}

export const formatDate1 =(Date:Date)=>{
    moment.updateLocale('en', {
        months : [
            "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7",
            "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
        ]
    });
    return moment(Date).format("MMMM, YYYY");
}

export const formatTime =(Date:Date)=>{
    return moment(Date).format("HH:mm:ss");
}