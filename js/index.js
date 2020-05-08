let d = new Date(),
    // day = d.getDate(),
    month = d.getMonth() + 1,
    year = d.getFullYear() + 543,
    monthArr = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤษจิกายน', 'ธันวาคม'];


const spanYear = document.querySelectorAll('.year');

for (let element = 0; element < spanYear.length; element++) {
    spanYear[element].innerHTML = year.toString()
}

const spanMonthAndYear = document.querySelectorAll('.month-year');

for (let item = 0; item < spanMonthAndYear.length; item++) {
    spanMonthAndYear[item].innerHTML = monthArr[month - 1] + ' ' + year
}
const spanMonthAndYear2 = document.querySelectorAll('.month-year-2');

for (let i = 0; i < spanMonthAndYear2.length; i++) {
    spanMonthAndYear2[i].innerHTML = monthArr[month - 1] + ' ' + year
}

const spanDateAndMonth = document.querySelectorAll('.date-month');

for (let count = 0; count < spanDateAndMonth.length; count++) {
    spanDateAndMonth[count].innerHTML = d.getDate() + ' ' + monthArr[d.getMonth()]
}

const spanMonth = document.querySelectorAll('.month');

for (let m = 0; m < spanMonth.length; m++) {
    spanMonth[m].innerHTML = monthArr[d.getMonth()]
}

window.onload = function () {

    const linksJSON = {
        'ariesLink': 'pages/index1.html',
        'calfLink': 'pages/index2.html',
        'twinsLink': 'pages/index3.html',
        'crawfishLink': 'pages/index4.html',
        'lionLink': 'pages/index5.html',
        'virgoLink': 'pages/index6.html',
        'libraLink': 'pages/index7.html',
        'scorpioLink': 'pages/index8.html',
        'sagittariusLink': 'pages/index9.html',
        'capricornLink': 'pages/index10.html',
        'aquariusLink': 'pages/index11.html',
        'fishLink': 'pages/index12.html'
    };

    localStorage.setItem('mainLinks', JSON.stringify(linksJSON));

    const gorLinks = document.querySelectorAll('.gor__link'),
          objectLinks = JSON.parse(localStorage.getItem('mainLinks'));

    for (let element = 0; element < gorLinks.length; element++) {
        for (let keyId in objectLinks) {
            gorLinks[element].id === keyId.toString()
                ? gorLinks[element].setAttribute('href', objectLinks[keyId])
                : false
        }
    }
};

