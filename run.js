
const list = new Array("植村", "大坪", "大野", "壽", "定金", "佐藤", "杉本", "洲本", "髙田", "田中", "中野", "西山", "原田 た", "平川", "松浦", "守屋", "安原", "山崎", "山下 え", "山下 そ", "安達", "石田", "大室", "岡田", "河合", "国米", "三田", "竹内", "土井", "野田", "橋本", "服部", "原田 み", "三宅", "村上", "森山", "横田", "横山");
const nums = new Array("11", "12", "13", "14", "15", "16", "21", "22", "23", "24", "25", "26", "31", "32", "33", "34", "35", "36", "41", "42", "43", "44", "45", "46", "51", "52", "53", "54", "55", "56", "61", "62", "63", "64", "65", "66", "71", "72", "73", "74", "75", "76");
const excl = new Array("None", "11", "None", "21", "None", "71", "None", "16", "安原", "25", "髙田", "33", "大坪", "42", "壽", "45", "岡田", "54", "山崎", "76"); 

function mary(){
    let x = agen("list");
    x = x.filter(i => agen("name").indexOf(i) == -1);
    let y = nums;
    y = y.filter(i => agen("name").indexOf(i) == -1);
    return [x, y];
}

function lnch(x, y){
    for(let i = 0; i < x.length; i++){
        let j = Math.floor(Math.random()*y.length);
        let k = document.getElementById(y[j]);
        k.value = x[i];
        y.splice(j, 1);
    }
}

function run(){
    // 初期化と設定適応
    res();
    cset();

    // 選択先の配列を生成
    let a = mary();

    // 実行
    lnch(a[0], a[1]);

    // 検証用
    // dev();
}
