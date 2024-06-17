'use strict';
export const weekDayNames=[
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
];
export const monthNames=[
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dic"
];
export const getDate = (dateUnix,timezone)=>{
    const date = new Date((dateUnix+timezone)*1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()} ${monthName}`;
}
export const getTime = (timeUnix, timezone) => {
    const date = new Date((timeUnix +timezone)* 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";
    return `${hours % 12 || 12}:${minutes < 10 ? "0" : ""}${minutes} ${period}`;
};
export const getHours = (timeUnix, timezone) => {
    const date = new Date((timeUnix +timezone)* 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";
    return `${hours % 12 || 12} ${period}`;
};

/**
 * 
 * @param {number} mps metros por segundo
 * @returns {number} kilometros por hora
 */
export const mps_to_kmh=mps=>{
    const mph =mps * 3600;
    return mph / 1000;
}
export const aqiText ={
    1:{
        level : "Buena",
        message : "La calidad del aire se considera buena y la contaminación del aire representa poco o ningún riesgo."
    },
    2:{
        level : "Moderada",
        message : " La calidad del aire es aceptable en general; sin embargo, para algunas sustancias presentes en el aire, puede haber una preocupación moderada por la salud para un pequeño número de personas que son especialmente sensibles a estos componentes"
    },
    3:{
        level : "Regular",
        message : "La calidad del aire es aceptable; sin embargo, para algunos contaminantes, puede haber una preocupación moderada por la salud para un número muy pequeño de personas que son excepcionalmente sensibles a la contaminación del aire."
    },
    4:{
        level : "Mala",
        message : "La mayoria de las personas pueden comenzar a experimentar efectos en la salud; los miembros de grupos sensibles pueden experimentar efectos más graves en la salud."
    },
    5:{
        level : "Muy mala",
        message : "Advertencias de salud sobre condiciones de emergencia. Es más probable que toda la población se vea afectada."
    }
}