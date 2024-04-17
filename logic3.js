let fform = document.querySelector('#1form').textContent;
let sform = document.querySelector('#2form').textContent;
let tform = document.querySelector('#3form').textContent;
let stat = document.querySelector('.stat').innerHTML;
let c = 0;
if (fform == "23"){
    c += 1;
};
if (sform == "48"){
    c += 1;
};
if (tform == "18"){
    c += 1;
};
if (c == 0){
    let statistic = "0%";
}
else if (c == 1){
    statistic = "30%";
}
else if (c == 2){
    statistic = "65%";
}
else{
    statistic = "100%";
}
stat.innerHTML = 'Ваш результат' + statistic;