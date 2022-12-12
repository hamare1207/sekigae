function cchb(){
    // check_checkbox
    const pair = document.getElementById("pair");
    if (pair.checked){
        for(let i = 0; i < nums.length; i++){
            var j = document.getElementById(nums[i]);
            switch(Number(nums[i])){
                case 14:
                case 15:
                case 31:
                case 41:
                    j.style.border = "3px solid #6BCB77";
                    break;
                case 12:
                case 13:
                case 51:
                case 61:
                    j.style.border = "3px solid #FFD93D";
                    break;
                case 22:
                case 32:
                case 43:
                case 53:
                case 24:
                case 34:
                case 26:
                case 36:
                case 45:
                case 55:
                case 62:
                case 72:
                case 64:
                case 74:
                case 66:
                case 76:
                    j.style.border = "3px solid #FF6B6B";
                    break;
                case 23:
                case 33:
                case 25:
                case 35:
                case 42:
                case 52:
                case 44:
                case 54:
                case 46:
                case 56:
                case 63:
                case 73:
                case 65:
                case 75:
                    j.style.border = "3px solid #4D96FF";
                    break;
                default:
                    j.style.border = "3px solid #FFFFFF";
                    break;
            }
        }
    }else{
        for(let i = 0; i < nums.length; i++){
            var j = document.getElementById(nums[i]);
            j.style.border = "3px solid #0BB3BF";
        }
    }
}
