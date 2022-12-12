function iset(){
    let echr = document.getElementsByClassName("chair");
    let k = 0;
    for(let i = 1; i < 7; i++){
        for(let j = 1;j < 8; j++){
            echr[k].setAttribute("id", i+j*10);
            k++;
        }
    }
}

function cclr(){
    for(let i = 0; i < nums.length; i++){
        document.getElementById(nums[i]).value = "";
        document.getElementById(nums[i]).removeAttribute("disabled");
    }
}

function tset(x, y){
    if(!(document.getElementById(x).value)){
        let i = "";
        for(let j = 0; j < y.length; j++){
            i = i + y[j] + "\n";
        }
        document.getElementById(x).value = i;
    }
}

function agen(x){
    let t  = document.getElementById(x).value.replace(/\r\n|\r/g, "\n");
    let l = t.split( '\n' );
    let o = new Array();
    for (let i = 0; i < l.length; i++ ) {
        if ( l[i] == '' ) {
            continue;
        }
        o.push( l[i] );
    }
    return o;
}

function cset(){
    let temp = agen("name");
    for(let i = 0; i < temp.length; i++){
        if(temp[i] == "None"){
            var b = temp[i+1];
            var a = document.getElementById(b);
            a.value = "None";
            a.setAttribute("disabled", "disabled");
        }else{
            var b = temp[i+1];
            var a = document.getElementById(b);
            a.value = temp[i];
            // a.setAttribute("disabled", "disabled");
        }
        i++;
    }
}

function set(){
    // 名簿をセット
    tset("list", list);

    // 除外をセット
    tset("name", excl);

    // 初期化と設定の適応
    res();
    cset();
}

function res(){
    // 座標を設定
    iset();

    // 教室をクリア
    cclr();
}
