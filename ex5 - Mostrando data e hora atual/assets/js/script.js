const container = document.querySelector('.container');
const getDados = new Date();

function getDayWeek(dayWeek){
    let dayWeekText;
    switch (dayWeek) {
        case 0:
            dayWeekText = 'Domingo';
            return dayWeekText;

        case 1:
            dayWeekText = 'Segunda-Feira';
            return dayWeekText;

        case 2:
            dayWeekText = 'Terça-Feira';
            return dayWeekText;

        case 3:
            dayWeekText = 'Quarta-Feira';
            return dayWeekText;

        case 4:
            dayWeekText = 'Quinta-Feira';
            return dayWeekText;

        case 5:
            dayWeekText = 'Sexta-Feira';
            return dayWeekText;
    
        case 6:
            dayWeekText = 'Sábado';
            return dayWeekText;

        default:
            dayWeekText = 'Error DayWeek';
            return dayWeekText;
    }
}

function getMonth(month){
    let monthText;
    switch (month) {
        case 0:
            monthText = 'Janeiro';
            return monthText;

        case 1:
            monthText = 'Fevereiro';
            return monthText;

        case 2:
            monthText = 'Março';
            return monthText;

        case 3:
            monthText = 'Abril';
            return monthText;

        case 4:
            monthText = 'Maio';
            return monthText;

        case 5:
            monthText = 'Junho';
            return monthText;
    
        case 6:
            monthText = 'Julho';
            return monthText;

        case 7:
            monthText = 'Agosto';
            return monthText;

        case 8:
            monthText = 'Setembro';
            return monthText;

        case 9:
            monthText = 'Outubro';
            return monthText;

        case 10:
            monthText = 'Novembro';
            return monthText;

        case 11:
            monthText = 'Dezembro';
            return monthText;

        default:
            monthText = 'Erro Month';
            return monthText;
    }
}

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function displaying(){
    const dataAtual = document.querySelector('#dataAtual');
    dataAtual.innerHTML = '';

    const dayWeek = getDayWeek(getDados.getDay());
    const dayMonth = getDados.getDate();
    const month = getMonth(getDados.getMonth());
    const year = getDados.getFullYear();
    const hours = zeroAEsquerda(getDados.getHours());
    const minutes = zeroAEsquerda(getDados.getMinutes());  

    dataAtual.innerHTML += `${dayWeek}, ${dayMonth} de ${month} de ${year} ${hours}:${minutes}`;
}

displaying();