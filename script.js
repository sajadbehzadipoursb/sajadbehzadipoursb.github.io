let id = document.getElementById("id")
let msg = document.getElementById("msg")
let msg1 = document.getElementById("msg1")
let btn = document.getElementById("btn")
btn.onclick = function(){
    let l = id.value.length
    if (l != 10){
        msg.innerHTML =
        msg.value = "!کد ملی نادرست است"
        msg1.innerHTML =
        msg1.value = ""
    } else {
        let r = 0
        let a = (id.value.substr(0,1))*10
        let b = (id.value.substr(1,1))*9
        let c = (id.value.substr(2,1))*8
        let d = (id.value.substr(3,1))*7
        let e = (id.value.substr(4,1))*6
        let f = (id.value.substr(5,1))*5
        let g = (id.value.substr(6,1))*4
        let h = (id.value.substr(7,1))*3
        let i = (id.value.substr(8,1))*2
        let all = ((a*1)+(b*1)+(c*1)+(d*1)+(e*1)+(f*1)+(g*1)+(h*1)+(i*1))*1
        let all11 = all%11
        if (all11 >= 2){
            r=11-all11
        } else {
            r = all11
        }
        if (r != id.value.substr(9,1)){
            msg.innerHTML =
            msg.value = "!کد ملی نادرست است"
            msg1.innerHTML =
            msg1.value = ""         
        } else {
            msg.innerHTML =
            msg.value = "!کد ملی درست است"
            // استان تهران
            if(id.value.substr(0,1)==0, id.value.substr(1,1)==2, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: تهران"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==0, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: تهران"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==0, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: تهران"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==0, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: تهران"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==0, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: تهران"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==0, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: تهران"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==0, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: تهران"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==0, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: تهران"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==1, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: تهران"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==2, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: تهران"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==1, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: تهران"
            }
            // استان آذربایجان شرقی
            else if (id.value.substr(0,1)==1, id.value.substr(1,1)==6, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==7, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==4, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==5, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==7, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==6, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==3, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==3, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==3, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==4, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==0, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==3, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==6, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==6, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==7, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==2, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==0, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==1, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==5, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==5, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==6, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==7, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==5, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==6, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==0, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان شرقی"
            }
            // استان آذربایجان غربی
            else if (id.value.substr(0,1)==2, id.value.substr(1,1)==7, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==7, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==9, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==3, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==9, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==9, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==8, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==7, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==9, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==9, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==7, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==8, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==8, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==8, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==8, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==3, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==9, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==4, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==9, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==7, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==8, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==8, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==8, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==8, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==9, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==9, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==9, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: آذربایجان غربی"
            }
            // استان همدان
            else if (id.value.substr(0,1)==4, id.value.substr(1,1)==0, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: همدان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==0, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: همدان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==0, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: همدان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==0, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: همدان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==9, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: همدان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==9, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: همدان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==9, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: همدان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==4, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: همدان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==0, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: همدان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==8, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: همدان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==0, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: همدان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==0, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: همدان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==9, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: همدان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==9, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: همدان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==9, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: همدان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==9, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: همدان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==8, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: همدان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==8, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: همدان"
            }
            // استان یزد
            else if (id.value.substr(0,1)==5, id.value.substr(1,1)==0, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: یزد"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==4, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: یزد"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==5, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: یزد"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==4, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: یزد"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==6, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: یزد"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==4, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: یزد"
            } else if (id.value.substr(0,1)==7, id.value.substr(1,1)==1, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: یزد"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==8, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: یزد"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==4, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: یزد"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==4, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: یزد"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==5, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: یزد"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==4, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: یزد"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==4, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: یزد"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==4, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: یزد"
            }
            // استان مرکزی
            else if (id.value.substr(0,1)==0, id.value.substr(1,1)==5, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: مرکزی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==5, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: مرکزی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==5, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: مرکزی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==5, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: مرکزی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==5, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: مرکزی"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==1, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: مرکزی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==5, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: مرکزی"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==1, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: مرکزی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==5, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: مرکزی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==6, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: مرکزی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==6, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: مرکزی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==6, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: مرکزی"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==4, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: مرکزی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==5, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: مرکزی"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==7, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: مرکزی"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==9, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: مرکزی"
            }
            // استان هرمزگان
            else if (id.value.substr(0,1)==6, id.value.substr(1,1)==6, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: هرمزگان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==4, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: هرمزگان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==8, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: هرمزگان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==3, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: هرمزگان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==3, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: هرمزگان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==4, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: هرمزگان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==4, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: هرمزگان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==4, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: هرمزگان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==3, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: هرمزگان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==5, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: هرمزگان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==6, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: هرمزگان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==3, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: هرمزگان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==4, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: هرمزگان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==7, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: هرمزگان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==4, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: هرمزگان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==4, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: هرمزگان"
            }
            // استان: لرستان
            else if (id.value.substr(0,1)==4, id.value.substr(1,1)==8, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: لرستان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==8, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: لرستان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==5, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: لرستان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==1, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: لرستان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==1, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: لرستان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==1, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: لرستان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==1, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: لرستان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==1, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: لرستان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==9, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: لرستان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==1, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: لرستان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==1, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: لرستان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==0, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: لرستان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==0, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: لرستان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==2, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: لرستان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==9, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: لرستان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==1, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: لرستان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==8, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: لرستان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==2, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: لرستان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==2, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: لرستان"
            }
            // استان مازندران
            else if (id.value.substr(0,1)==2, id.value.substr(1,1)==1, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==1, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==0, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==0, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==9, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==6, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==7, id.value.substr(1,1)==1, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==1, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==1, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==2, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==8, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==8, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==2, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==7, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==7, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==2, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==0, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==0, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==2, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==7, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==7, id.value.substr(1,1)==1, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==1, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==1, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==2, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==2, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==7, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==7, id.value.substr(1,1)==1, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==9, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==2, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==1, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==2, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==0, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==0, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: مازندران"
            }
            // استان گلستان
            else if (id.value.substr(0,1)==6, id.value.substr(1,1)==2, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: گلستان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==9, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: گلستان"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==2, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: گلستان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==8, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: گلستان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==8, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: گلستان"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==2, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: گلستان"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==2, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: گلستان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==8, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: گلستان"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==1, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: گلستان"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==1, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: گلستان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==2, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: گلستان"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==0, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: گلستان"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==0, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: گلستان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==3, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: گلستان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==8, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: گلستان"
            }
            // استان گیلان
            else if (id.value.substr(0,1)==2, id.value.substr(1,1)==6, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==7, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==3, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==6, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==1, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==3, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==5, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==5, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==7, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==5, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==6, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==6, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==5, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==1, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==6, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==6, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==6, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==6, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==9, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==6, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==9, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==7, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==7, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==9, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==7, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==1, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: گیلان"
            }
            // استان کرمانشاه
            else if (id.value.substr(0,1)==3, id.value.substr(1,1)==3, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: کرمانشاه"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==3, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: کرمانشاه"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==9, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: کرمانشاه"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==2, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: کرمانشاه"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==2, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: کرمانشاه"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==9, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: کرمانشاه"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==9, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: کرمانشاه"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==4, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: کرمانشاه"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==9, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: کرمانشاه"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==3, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: کرمانشاه"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==3, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: کرمانشاه"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==9, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: کرمانشاه"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==3, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: کرمانشاه"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==2, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: کرمانشاه"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==2, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: کرمانشاه"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==9, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: کرمانشاه"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==3, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: کرمانشاه"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==3, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: کرمانشاه"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==3, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: کرمانشاه"
            }
            // استان کهکیلویه و بویراحمد
            else if (id.value.substr(0,1)==6, id.value.substr(1,1)==8, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: کهکیلویه و بویراحمد"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==2, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: کهکیلویه و بویراحمد"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==2, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: کهکیلویه و بویراحمد"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==9, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: کهکیلویه و بویراحمد"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==0, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: کهکیلویه و بویراحمد"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==8, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: کهکیلویه و بویراحمد"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==2, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: کهکیلویه و بویراحمد"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==2, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: کهکیلویه و بویراحمد"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==2, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: کهکیلویه و بویراحمد"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==5, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: کهکیلویه و بویراحمد"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==9, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: کهکیلویه و بویراحمد"
            }
            // استان کردستان
            else if (id.value.substr(0,1)==3, id.value.substr(1,1)==8, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: کردستان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==7, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: کردستان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==7, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: کردستان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==5, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: کردستان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==8, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: کردستان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==4, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: کردستان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==7, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: کردستان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==7, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: کردستان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==7, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: کردستان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==7, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: کردستان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==7, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: کردستان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==8, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: کردستان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==8, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: کردستان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==7, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: کردستان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==8, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: کردستان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==8, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: کردستان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==7, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: کردستان"
            }
            // استان کرمان
            else if (id.value.substr(0,1)==7, id.value.substr(1,1)==2, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==4, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==1, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==1, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==1, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==1, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==1, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==0, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==0, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==8, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==2, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==8, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==0, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==0, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==3, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==0, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==0, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==0, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==0, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==0, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==1, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==1, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==1, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==0, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==2, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==9, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==9, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==9, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==3, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==1, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==1, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==1, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==0, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==0, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: کرمان"
            }
            // استان قزوین
            else if (id.value.substr(0,1)==5, id.value.substr(1,1)==0, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: قزوین"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==3, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: قزوین"
            } else if (id.value.substr(0,1)==7, id.value.substr(1,1)==2, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: قزوین"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==0, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: قزوین"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==3, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: قزوین"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==3, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: قزوین"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==8, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: قزوین"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==9, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: قزوین"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==5, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: قزوین"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==8, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: قزوین"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==3, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: قزوین"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==3, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: قزوین"
            }
            // استان قم
            else if (id.value.substr(0,1)==0, id.value.substr(1,1)==3, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: قم"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==3, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: قم"
            } else if (id.value.substr(0,1)==7, id.value.substr(1,1)==0, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: قم"
            }
            // استان فارس
            else if (id.value.substr(0,1)==2, id.value.substr(1,1)==4, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==4, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==7, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==4, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==5, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==7, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==5, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==4, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==1, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==4, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==7, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==4, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==4, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==5, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==4, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==4, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==5, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==4, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==4, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==5, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==1, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==6, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==7, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==2, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==2, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==3, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==7, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==5, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==5, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==4, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==4, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==8, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==7, id.value.substr(1,1)==2, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==3, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==3, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==8, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==5, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==5, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==5, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==1, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==4, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==4, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==3, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==3, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==5, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==5, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: فارس"
            }
            // استان سمنان
            else if (id.value.substr(0,1)==6, id.value.substr(1,1)==8, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: سمنان"
            } else if (id.value.substr(0,1)==7, id.value.substr(1,1)==0, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: سمنان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==4, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: سمنان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==5, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: سمنان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==5, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: سمنان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==5, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: سمنان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==5, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: سمنان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==6, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: سمنان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==3, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: سمنان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==2, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: سمنان"
            }
            // استان سیستان و بلوچستان
            else if (id.value.substr(0,1)==3, id.value.substr(1,1)==5, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==5, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==8, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==7, id.value.substr(1,1)==0, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==6, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==6, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==7, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==7, id.value.substr(1,1)==0, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==7, id.value.substr(1,1)==2, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==6, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==6, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==7, id.value.substr(1,1)==0, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==6, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==6, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==6, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==3, id.value.substr(1,1)==7, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==3, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==6, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==3, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==7, id.value.substr(1,1)==0, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==9, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==6, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==7, id.value.substr(1,1)==2, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==9, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==1, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==2, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: سیستان و بلوچستان"
            }
            // استان خوزستان
            else if (id.value.substr(0,1)==1, id.value.substr(1,1)==8, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==2, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==8, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==8, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==6, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==9, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==9, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==7, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==7, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==8, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==8, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==4, id.value.substr(1,1)==8, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==7, id.value.substr(1,1)==0, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==9, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==9, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==8, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==8, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==8, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==9, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==2, id.value.substr(1,1)==0, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==9, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==6, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==9, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==9, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==9, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==8, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==7, id.value.substr(1,1)==0, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==2, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==8, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==8, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==7, id.value.substr(1,1)==2, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==7, id.value.substr(1,1)==3, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==9, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==9, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==6, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==8, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: خوزستان"
            }
            // استان خراسان رضوی
            else if (id.value.substr(0,1)==6, id.value.substr(1,1)==4, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==6, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==7, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==7, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==4, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==7, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==7, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==6, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==7, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==2, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==7, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==2, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==7, id.value.substr(1,1)==2, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==7, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==7, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==5, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==7, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==7, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==7, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==8, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==8, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==5, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==8, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==8, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==8, id.value.substr(2,1)==9){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==9, id.value.substr(2,1)==0){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==5, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==9, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==9, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==9, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==9, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==9, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==9, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==9, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==0, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            } else if (id.value.substr(0,1)==1, id.value.substr(1,1)==0, id.value.substr(2,1)==6){
                msg1.innerHTML =
                msg1.value = "استان: خراسان رضوی"
            }
            // استان خراسان شمالی
            else if (id.value.substr(0,1)==0, id.value.substr(1,1)==6, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: خراسان شمالی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==6, id.value.substr(2,1)==7){
                msg1.innerHTML =
                msg1.value = "استان: خراسان شمالی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==6, id.value.substr(2,1)==8){
                msg1.innerHTML =
                msg1.value = "استان: خراسان شمالی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==7, id.value.substr(2,1)==5){
                msg1.innerHTML =
                msg1.value = "استان: خراسان شمالی"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==9, id.value.substr(2,1)==1){
                msg1.innerHTML =
                msg1.value = "استان: خراسان شمالی"
            } else if (id.value.substr(0,1)==0, id.value.substr(1,1)==8, id.value.substr(2,1)==2){
                msg1.innerHTML =
                msg1.value = "استان: خراسان شمالی"
            } else if (id.value.substr(0,1)==6, id.value.substr(1,1)==5, id.value.substr(2,1)==3){
                msg1.innerHTML =
                msg1.value = "استان: خراسان شمالی"
            } else if (id.value.substr(0,1)==5, id.value.substr(1,1)==2, id.value.substr(2,1)==4){
                msg1.innerHTML =
                msg1.value = "استان: خراسان شمالی"
            }
            // استان چهارمحال و بختیاری
            else{
                msg1.innerHTML =
                msg1.value = ""
            }
        }
    }
}