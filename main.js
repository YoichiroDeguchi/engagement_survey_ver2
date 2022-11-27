//次へボタンを押したら画面切り替え
$(function () {
    $(".next_btn").on("click", function () { //btnクラスをクリック後の関数処理
        $(this).closest("div").css("display", "none"); //質問画面にあたらる親要素divをdisplay:none;にする
        id = $(this).attr("href"); //次の質問hrefをidに格納
        $(id).addClass("fit").fadeIn("slow").show(); //次の質問にfitをつけて出力。
    });
});



//----------ローカルストレージへ保存----------

const allData = [];

// リロードする度にallDataにpushする
if (localStorage.getItem("allData")) {
    const jsonGetData = localStorage.getItem("allData");
    const GetData = JSON.parse(jsonGetData);
    for (let i = 0; i < GetData.length; i++) {
        allData.push(GetData[i]);
    }
    console.log(allData);
}

// 値の取得
$("#end_btn").on("click", function () {
    // 属性
    const GetDataGender = $('input:radio[name="gender"]:checked').val();
    const GetDataAge = $('input:radio[name="age"]:checked').val();
    const GetDataAffiliation = $('input:radio[name="affiliation"]:checked').val();
    const GetDataOccupation = $('input:radio[name="occupation"]:checked').val();
    const GetDataLength = $('input:radio[name="length"]:checked').val();
    // 設問 → 文字列を数値に変換
    const GetDataQ1 = Number($('input:radio[name="q1"]:checked').val());
    const GetDataQ2 = Number($('input:radio[name="q2"]:checked').val());
    const GetDataQ3 = Number($('input:radio[name="q3"]:checked').val());
    const GetDataQ4 = Number($('input:radio[name="q4"]:checked').val());
    const GetDataQ5 = Number($('input:radio[name="q5"]:checked').val());
    const GetDataQ6 = Number($('input:radio[name="q6"]:checked').val());
    const GetDataQ7 = Number($('input:radio[name="q7"]:checked').val());
    // まとめる
    const GetData = {
        GetDataGender: GetDataGender,
        GetDataAge: GetDataAge,
        GetDataAffiliation: GetDataAffiliation,
        GetDataOccupation: GetDataOccupation,
        GetDataLength: GetDataLength,
        GetDataQ1: GetDataQ1,
        GetDataQ2: GetDataQ2,
        GetDataQ3: GetDataQ3,
        GetDataQ4: GetDataQ4,
        GetDataQ5: GetDataQ5,
        GetDataQ6: GetDataQ6,
        GetDataQ7: GetDataQ7,
    };

    allData.push(GetData);
    console.log(GetData);

    // ローカルストレージへ保存
    const jsonGetData = JSON.stringify(allData);
    localStorage.setItem("allData", jsonGetData);
});



//----------ローカルストレージから情報を受け取る----------

if (localStorage.getItem("allData")) {
    const jsonGetData = localStorage.getItem("allData");
    const GetData = JSON.parse(jsonGetData);
    console.log(GetData);

    // Q1
    const dataQ1Arr = [];
    GetData.forEach(elm => {
        console.log(elm); //elmはallDataの中のGetDataを取得
        const answerQ1 = elm.GetDataQ1; //GetDataの中のQ1の値を取得
        dataQ1Arr.push(answerQ1);
    });
    console.log(dataQ1Arr);
    // 平均点を取得
    let sumQ1 = dataQ1Arr.reduce((a, b) => { //回答の値の総和
        return a + b;
    });
    const averageQ1 = (sumQ1 / dataQ1Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
    console.log(averageQ1);
    // 結果画面への表示
    document.getElementById("GetDataQ1").innerHTML = averageQ1;

    // Q2
    const dataQ2Arr = [];
    GetData.forEach(elm => {
        console.log(elm); //elmはallDataの中のGetDataを取得
        const answerQ2 = elm.GetDataQ2; //GetDataの中のQ2の値を取得
        dataQ2Arr.push(answerQ2);
    });
    console.log(dataQ2Arr);
    // 平均点を取得
    let sumQ2 = dataQ2Arr.reduce((a, b) => { //回答の値の総和
        return a + b;
    });
    const averageQ2 = (sumQ2 / dataQ2Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
    console.log(averageQ2);
    // 結果画面への表示
    document.getElementById("GetDataQ2").innerHTML = averageQ2;

    // Q3
    const dataQ3Arr = [];
    GetData.forEach(elm => {
        console.log(elm); //elmはallDataの中のGetDataを取得
        const answerQ3 = elm.GetDataQ3; //GetDataの中のQ3の値を取得
        dataQ3Arr.push(answerQ3);
    });
    console.log(dataQ3Arr);
    // 平均点を取得
    let sumQ3 = dataQ3Arr.reduce((a, b) => { //回答の値の総和
        return a + b;
    });
    const averageQ3 = (sumQ3 / dataQ3Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
    console.log(averageQ3);
    // 結果画面への表示
    document.getElementById("GetDataQ3").innerHTML = averageQ3;

    // Q4
    const dataQ4Arr = [];
    GetData.forEach(elm => {
        console.log(elm); //elmはallDataの中のGetDataを取得
        const answerQ4 = elm.GetDataQ4; //GetDataの中のQ4の値を取得
        dataQ4Arr.push(answerQ4);
    });
    console.log(dataQ4Arr);
    // 平均点を取得
    let sumQ4 = dataQ4Arr.reduce((a, b) => { //回答の値の総和
        return a + b;
    });
    const averageQ4 = (sumQ4 / dataQ4Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
    console.log(averageQ4);
    // 結果画面への表示
    document.getElementById("GetDataQ4").innerHTML = averageQ4;

    // Q5
    const dataQ5Arr = [];
    GetData.forEach(elm => {
        console.log(elm); //elmはallDataの中のGetDataを取得
        const answerQ5 = elm.GetDataQ5; //GetDataの中のQ5の値を取得
        dataQ5Arr.push(answerQ5);
    });
    console.log(dataQ5Arr);
    // 平均点を取得
    let sumQ5 = dataQ5Arr.reduce((a, b) => { //回答の値の総和
        return a + b;
    });
    const averageQ5 = (sumQ5 / dataQ5Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
    console.log(averageQ5);
    // 結果画面への表示
    document.getElementById("GetDataQ5").innerHTML = averageQ5;

    // Q6
    const dataQ6Arr = [];
    GetData.forEach(elm => {
        console.log(elm); //elmはallDataの中のGetDataを取得
        const answerQ6 = elm.GetDataQ6; //GetDataの中のQ6の値を取得
        dataQ6Arr.push(answerQ6);
    });
    console.log(dataQ6Arr);
    // 平均点を取得
    let sumQ6 = dataQ6Arr.reduce((a, b) => { //回答の値の総和
        return a + b;
    });
    const averageQ6 = (sumQ6 / dataQ6Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
    console.log(averageQ6);
    // 結果画面への表示
    document.getElementById("GetDataQ6").innerHTML = averageQ6;

    // Q7
    const dataQ7Arr = [];
    GetData.forEach(elm => {
        console.log(elm); //elmはallDataの中のGetDataを取得
        const answerQ7 = elm.GetDataQ7; //GetDataの中のQ7の値を取得
        dataQ7Arr.push(answerQ7);
    });
    console.log(dataQ7Arr);
    // 平均点を取得
    let sumQ7 = dataQ7Arr.reduce((a, b) => { //回答の値の総和
        return a + b;
    });
    const averageQ7 = (sumQ7 / dataQ7Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
    console.log(averageQ7);
    // 結果画面への表示
    document.getElementById("GetDataQ7").innerHTML = averageQ7;

}



// -------------------------属性ごとにデータ取得-------------------------

// -----選択した属性ごとにグラフ表示-----
function change() {
    if (document.getElementById("optionBox")) {
        selboxValue = document.getElementById("optionBox").value;
        if (selboxValue == "optionFemale") {
            //女性を表示
            document.getElementById("genderFemaleBox").style.display = "";
            //それ以外を非表示
            document.getElementById("genderMaleBox").style.display = "none";
            document.getElementById("age20Box").style.display = "none";
            document.getElementById("age30Box").style.display = "none";
            document.getElementById("age40Box").style.display = "none";
            document.getElementById("age50Box").style.display = "none";
            document.getElementById("affiliationMatobaBox").style.display = "none";
            document.getElementById("affiliationJiromaruBox").style.display = "none";
            document.getElementById("occupationNurseBox").style.display = "none";
            document.getElementById("occupationTherapistBox").style.display = "none";
            document.getElementById("occupationClerkBox").style.display = "none";
            document.getElementById("length1Box").style.display = "none";
            document.getElementById("length12Box").style.display = "none";
            document.getElementById("length23Box").style.display = "none";
            document.getElementById("length3Box").style.display = "none";
        } else if (selboxValue == "optionMale") {
            //男性を表示
            document.getElementById("genderMaleBox").style.display = "";
            //それ以外を非表示
            document.getElementById("genderFemaleBox").style.display = "none";
            document.getElementById("age20Box").style.display = "none";
            document.getElementById("age30Box").style.display = "none";
            document.getElementById("age40Box").style.display = "none";
            document.getElementById("age50Box").style.display = "none";
            document.getElementById("affiliationMatobaBox").style.display = "none";
            document.getElementById("affiliationJiromaruBox").style.display = "none";
            document.getElementById("occupationNurseBox").style.display = "none";
            document.getElementById("occupationTherapistBox").style.display = "none";
            document.getElementById("occupationClerkBox").style.display = "none";
            document.getElementById("length1Box").style.display = "none";
            document.getElementById("length12Box").style.display = "none";
            document.getElementById("length23Box").style.display = "none";
            document.getElementById("length3Box").style.display = "none";
        } else if (selboxValue == "option20") {
            //20代を表示
            document.getElementById("age20Box").style.display = "";
            //それ以外を非表示
            document.getElementById("genderFemaleBox").style.display = "none";
            document.getElementById("genderMaleBox").style.display = "none";
            document.getElementById("age30Box").style.display = "none";
            document.getElementById("age40Box").style.display = "none";
            document.getElementById("age50Box").style.display = "none";
            document.getElementById("affiliationMatobaBox").style.display = "none";
            document.getElementById("affiliationJiromaruBox").style.display = "none";
            document.getElementById("occupationNurseBox").style.display = "none";
            document.getElementById("occupationTherapistBox").style.display = "none";
            document.getElementById("occupationClerkBox").style.display = "none";
            document.getElementById("length1Box").style.display = "none";
            document.getElementById("length12Box").style.display = "none";
            document.getElementById("length23Box").style.display = "none";
            document.getElementById("length3Box").style.display = "none";
        } else if (selboxValue == "option30") {
            //30代を表示
            document.getElementById("age30Box").style.display = "";
            //それ以外を非表示
            document.getElementById("genderFemaleBox").style.display = "none";
            document.getElementById("genderMaleBox").style.display = "none";
            document.getElementById("age20Box").style.display = "none";
            document.getElementById("age40Box").style.display = "none";
            document.getElementById("age50Box").style.display = "none";
            document.getElementById("affiliationMatobaBox").style.display = "none";
            document.getElementById("affiliationJiromaruBox").style.display = "none";
            document.getElementById("occupationNurseBox").style.display = "none";
            document.getElementById("occupationTherapistBox").style.display = "none";
            document.getElementById("occupationClerkBox").style.display = "none";
            document.getElementById("length1Box").style.display = "none";
            document.getElementById("length12Box").style.display = "none";
            document.getElementById("length23Box").style.display = "none";
            document.getElementById("length3Box").style.display = "none";
        } else if (selboxValue == "option40") {
            //40代を表示
            document.getElementById("age40Box").style.display = "";
            //それ以外を非表示
            document.getElementById("genderFemaleBox").style.display = "none";
            document.getElementById("genderMaleBox").style.display = "none";
            document.getElementById("age20Box").style.display = "none";
            document.getElementById("age30Box").style.display = "none";
            document.getElementById("age50Box").style.display = "none";
            document.getElementById("affiliationMatobaBox").style.display = "none";
            document.getElementById("affiliationJiromaruBox").style.display = "none";
            document.getElementById("occupationNurseBox").style.display = "none";
            document.getElementById("occupationTherapistBox").style.display = "none";
            document.getElementById("occupationClerkBox").style.display = "none";
            document.getElementById("length1Box").style.display = "none";
            document.getElementById("length12Box").style.display = "none";
            document.getElementById("length23Box").style.display = "none";
            document.getElementById("length3Box").style.display = "none";
        } else if (selboxValue == "option50") {
            //50代を表示
            document.getElementById("age50Box").style.display = "";
            //それ以外を非表示
            document.getElementById("genderFemaleBox").style.display = "none";
            document.getElementById("genderMaleBox").style.display = "none";
            document.getElementById("age20Box").style.display = "none";
            document.getElementById("age30Box").style.display = "none";
            document.getElementById("age40Box").style.display = "none";
            document.getElementById("affiliationMatobaBox").style.display = "none";
            document.getElementById("affiliationJiromaruBox").style.display = "none";
            document.getElementById("occupationNurseBox").style.display = "none";
            document.getElementById("occupationTherapistBox").style.display = "none";
            document.getElementById("occupationClerkBox").style.display = "none";
            document.getElementById("length1Box").style.display = "none";
            document.getElementById("length12Box").style.display = "none";
            document.getElementById("length23Box").style.display = "none";
            document.getElementById("length3Box").style.display = "none";
        } else if (selboxValue == "optionMatoba") {
            //的場店を表示
            document.getElementById("affiliationMatobaBox").style.display = "";
            //それ以外を非表示
            document.getElementById("genderFemaleBox").style.display = "none";
            document.getElementById("genderMaleBox").style.display = "none";
            document.getElementById("age20Box").style.display = "none";
            document.getElementById("age30Box").style.display = "none";
            document.getElementById("age40Box").style.display = "none";
            document.getElementById("age50Box").style.display = "none";
            document.getElementById("affiliationJiromaruBox").style.display = "none";
            document.getElementById("occupationNurseBox").style.display = "none";
            document.getElementById("occupationTherapistBox").style.display = "none";
            document.getElementById("occupationClerkBox").style.display = "none";
            document.getElementById("length1Box").style.display = "none";
            document.getElementById("length12Box").style.display = "none";
            document.getElementById("length23Box").style.display = "none";
            document.getElementById("length3Box").style.display = "none";
        } else if (selboxValue == "optionJiromaru") {
            //次郎丸店を表示
            document.getElementById("affiliationJiromaruBox").style.display = "";
            //それ以外を非表示
            document.getElementById("genderFemaleBox").style.display = "none";
            document.getElementById("genderMaleBox").style.display = "none";
            document.getElementById("age20Box").style.display = "none";
            document.getElementById("age30Box").style.display = "none";
            document.getElementById("age40Box").style.display = "none";
            document.getElementById("age50Box").style.display = "none";
            document.getElementById("affiliationMatobaBox").style.display = "none";
            document.getElementById("occupationNurseBox").style.display = "none";
            document.getElementById("occupationTherapistBox").style.display = "none";
            document.getElementById("occupationClerkBox").style.display = "none";
            document.getElementById("length1Box").style.display = "none";
            document.getElementById("length12Box").style.display = "none";
            document.getElementById("length23Box").style.display = "none";
            document.getElementById("length3Box").style.display = "none";
        } else if (selboxValue == "optionNurse") {
            //看護師を表示
            document.getElementById("occupationNurseBox").style.display = "";
            //それ以外を非表示
            document.getElementById("genderFemaleBox").style.display = "none";
            document.getElementById("genderMaleBox").style.display = "none";
            document.getElementById("age20Box").style.display = "none";
            document.getElementById("age30Box").style.display = "none";
            document.getElementById("age40Box").style.display = "none";
            document.getElementById("age50Box").style.display = "none";
            document.getElementById("affiliationMatobaBox").style.display = "none";
            document.getElementById("affiliationJiromaruBox").style.display = "none";
            document.getElementById("occupationTherapistBox").style.display = "none";
            document.getElementById("occupationClerkBox").style.display = "none";
            document.getElementById("length1Box").style.display = "none";
            document.getElementById("length12Box").style.display = "none";
            document.getElementById("length23Box").style.display = "none";
            document.getElementById("length3Box").style.display = "none";
        } else if (selboxValue == "optionTherapist") {
            //セラピストを表示
            document.getElementById("occupationTherapistBox").style.display = "";
            //それ以外を非表示
            document.getElementById("genderFemaleBox").style.display = "none";
            document.getElementById("genderMaleBox").style.display = "none";
            document.getElementById("age20Box").style.display = "none";
            document.getElementById("age30Box").style.display = "none";
            document.getElementById("age40Box").style.display = "none";
            document.getElementById("age50Box").style.display = "none";
            document.getElementById("affiliationMatobaBox").style.display = "none";
            document.getElementById("affiliationJiromaruBox").style.display = "none";
            document.getElementById("occupationNurseBox").style.display = "none";
            document.getElementById("occupationClerkBox").style.display = "none";
            document.getElementById("length1Box").style.display = "none";
            document.getElementById("length12Box").style.display = "none";
            document.getElementById("length23Box").style.display = "none";
            document.getElementById("length3Box").style.display = "none";
        } else if (selboxValue == "optionClerk") {
            //事務を表示
            document.getElementById("occupationClerkBox").style.display = "";
            //それ以外を非表示
            document.getElementById("genderFemaleBox").style.display = "none";
            document.getElementById("genderMaleBox").style.display = "none";
            document.getElementById("age20Box").style.display = "none";
            document.getElementById("age30Box").style.display = "none";
            document.getElementById("age40Box").style.display = "none";
            document.getElementById("age50Box").style.display = "none";
            document.getElementById("affiliationMatobaBox").style.display = "none";
            document.getElementById("affiliationJiromaruBox").style.display = "none";
            document.getElementById("occupationNurseBox").style.display = "none";
            document.getElementById("occupationTherapistBox").style.display = "none";
            document.getElementById("length1Box").style.display = "none";
            document.getElementById("length12Box").style.display = "none";
            document.getElementById("length23Box").style.display = "none";
            document.getElementById("length3Box").style.display = "none";
        } else if (selboxValue == "optionLength1") {
            //1年未満を表示
            document.getElementById("length1Box").style.display = "";
            //それ以外を非表示
            document.getElementById("genderFemaleBox").style.display = "none";
            document.getElementById("genderMaleBox").style.display = "none";
            document.getElementById("age20Box").style.display = "none";
            document.getElementById("age30Box").style.display = "none";
            document.getElementById("age40Box").style.display = "none";
            document.getElementById("age50Box").style.display = "none";
            document.getElementById("affiliationMatobaBox").style.display = "none";
            document.getElementById("affiliationJiromaruBox").style.display = "none";
            document.getElementById("occupationNurseBox").style.display = "none";
            document.getElementById("occupationTherapistBox").style.display = "none";
            document.getElementById("occupationClerkBox").style.display = "none";
            document.getElementById("length12Box").style.display = "none";
            document.getElementById("length23Box").style.display = "none";
            document.getElementById("length3Box").style.display = "none";
        } else if (selboxValue == "optionLength12") {
            //1-2年を表示
            document.getElementById("length12Box").style.display = "";
            //それ以外を非表示
            document.getElementById("genderFemaleBox").style.display = "none";
            document.getElementById("genderMaleBox").style.display = "none";
            document.getElementById("age20Box").style.display = "none";
            document.getElementById("age30Box").style.display = "none";
            document.getElementById("age40Box").style.display = "none";
            document.getElementById("age50Box").style.display = "none";
            document.getElementById("affiliationMatobaBox").style.display = "none";
            document.getElementById("affiliationJiromaruBox").style.display = "none";
            document.getElementById("occupationNurseBox").style.display = "none";
            document.getElementById("occupationTherapistBox").style.display = "none";
            document.getElementById("occupationClerkBox").style.display = "none";
            document.getElementById("length1Box").style.display = "none";
            document.getElementById("length23Box").style.display = "none";
            document.getElementById("length3Box").style.display = "none";
        } else if (selboxValue == "optionLength23") {
            //2-3年を表示
            document.getElementById("length23Box").style.display = "";
            //それ以外を非表示
            document.getElementById("genderFemaleBox").style.display = "none";
            document.getElementById("genderMaleBox").style.display = "none";
            document.getElementById("age20Box").style.display = "none";
            document.getElementById("age30Box").style.display = "none";
            document.getElementById("age40Box").style.display = "none";
            document.getElementById("age50Box").style.display = "none";
            document.getElementById("affiliationMatobaBox").style.display = "none";
            document.getElementById("affiliationJiromaruBox").style.display = "none";
            document.getElementById("occupationNurseBox").style.display = "none";
            document.getElementById("occupationTherapistBox").style.display = "none";
            document.getElementById("occupationClerkBox").style.display = "none";
            document.getElementById("length1Box").style.display = "none";
            document.getElementById("length12Box").style.display = "none";
            document.getElementById("length3Box").style.display = "none";
        } else if (selboxValue == "optionLength3") {
            //3年を表示
            document.getElementById("length3Box").style.display = "";
            //それ以外を非表示
            document.getElementById("genderFemaleBox").style.display = "none";
            document.getElementById("genderMaleBox").style.display = "none";
            document.getElementById("age20Box").style.display = "none";
            document.getElementById("age30Box").style.display = "none";
            document.getElementById("age40Box").style.display = "none";
            document.getElementById("age50Box").style.display = "none";
            document.getElementById("affiliationMatobaBox").style.display = "none";
            document.getElementById("affiliationJiromaruBox").style.display = "none";
            document.getElementById("occupationNurseBox").style.display = "none";
            document.getElementById("occupationTherapistBox").style.display = "none";
            document.getElementById("occupationClerkBox").style.display = "none";
            document.getElementById("length1Box").style.display = "none";
            document.getElementById("length12Box").style.display = "none";
            document.getElementById("length23Box").style.display = "none";
        }
    }
}

// -----性別_女性-----

const femaleData = [];

// Q2_労働時間
const femaleDataQ2Arr = []; //femaleDataのQ2を入れる箱
allData.forEach(x => {
    if (x.GetDataGender === "女性") {
        femaleData.push(x);  //"女性"を選択した回答者のデータ取り出し
        const femaleAnswerQ2 = x.GetDataQ2; //femaleDataの中のQ2の値を取得
        femaleDataQ2Arr.push(femaleAnswerQ2);
    }
});
console.log(femaleDataQ2Arr);
let sumFemaleQ2 = femaleDataQ2Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageFemaleQ2 = (sumFemaleQ2 / femaleDataQ2Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageFemaleQ2);
document.getElementById("genderFemaleDataQ2").innerHTML = averageFemaleQ2; // 結果画面への表示


// Q3_報酬
const femaleDataQ3Arr = []; //femaleDataのQ3を入れる箱
allData.forEach(x => {
    if (x.GetDataGender === "女性") {
        femaleData.push(x);  //"女性"を選択した回答者のデータ取り出し
        const femaleAnswerQ3 = x.GetDataQ3; //femaleDataの中のQ3の値を取得
        femaleDataQ3Arr.push(femaleAnswerQ3);
    }
});
console.log(femaleDataQ3Arr);
let sumFemaleQ3 = femaleDataQ3Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageFemaleQ3 = (sumFemaleQ3 / femaleDataQ3Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageFemaleQ3);
document.getElementById("genderFemaleDataQ3").innerHTML = averageFemaleQ3; // 結果画面への表示


// Q4_仕事のやりがい
const femaleDataQ4Arr = []; //femaleDataのQ4を入れる箱
allData.forEach(x => {
    if (x.GetDataGender === "女性") {
        femaleData.push(x);  //"女性"を選択した回答者のデータ取り出し
        const femaleAnswerQ4 = x.GetDataQ4; //femaleDataの中のQ4の値を取得
        femaleDataQ4Arr.push(femaleAnswerQ4);
    }
});
console.log(femaleDataQ4Arr);
let sumFemaleQ4 = femaleDataQ4Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageFemaleQ4 = (sumFemaleQ4 / femaleDataQ4Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageFemaleQ4);
document.getElementById("genderFemaleDataQ4").innerHTML = averageFemaleQ4; // 結果画面への表示


// Q5_自己成長
const femaleDataQ5Arr = []; //femaleDataのQ5を入れる箱
allData.forEach(x => {
    if (x.GetDataGender === "女性") {
        femaleData.push(x);  //"女性"を選択した回答者のデータ取り出し
        const femaleAnswerQ5 = x.GetDataQ5; //femaleDataの中のQ5の値を取得
        femaleDataQ5Arr.push(femaleAnswerQ5);
    }
});
console.log(femaleDataQ5Arr);
let sumFemaleQ5 = femaleDataQ5Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageFemaleQ5 = (sumFemaleQ5 / femaleDataQ5Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageFemaleQ5);
document.getElementById("genderFemaleDataQ5").innerHTML = averageFemaleQ5; // 結果画面への表示


// Q6_人間関係
const femaleDataQ6Arr = []; //femaleDataのQ6を入れる箱
allData.forEach(x => {
    if (x.GetDataGender === "女性") {
        femaleData.push(x);  //"女性"を選択した回答者のデータ取り出し
        const femaleAnswerQ6 = x.GetDataQ6; //femaleDataの中のQ5の値を取得
        femaleDataQ6Arr.push(femaleAnswerQ6);
    }
});
console.log(femaleDataQ6Arr);
let sumFemaleQ6 = femaleDataQ6Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageFemaleQ6 = (sumFemaleQ6 / femaleDataQ6Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageFemaleQ6);
document.getElementById("genderFemaleDataQ6").innerHTML = averageFemaleQ6; // 結果画面への表示


// Q7_理念への共感
const femaleDataQ7Arr = []; //femaleDataのQ7を入れる箱
allData.forEach(x => {
    if (x.GetDataGender === "女性") {
        femaleData.push(x);  //"女性"を選択した回答者のデータ取り出し
        const femaleAnswerQ7 = x.GetDataQ7; //femaleDataの中のQ5の値を取得
        femaleDataQ7Arr.push(femaleAnswerQ7);
    }
});
console.log(femaleDataQ7Arr);
let sumFemaleQ7 = femaleDataQ7Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageFemaleQ7 = (sumFemaleQ7 / femaleDataQ7Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageFemaleQ7);
document.getElementById("genderFemaleDataQ7").innerHTML = averageFemaleQ7; // 結果画面への表示





// -----性別_男性-----

const maleData = [];

// Q2_労働時間
const maleDataQ2Arr = []; //maleDataのQ2を入れる箱
allData.forEach(x => {
    if (x.GetDataGender === "男性") {
        maleData.push(x);  //"男性"を選択した回答者のデータ取り出し
        const maleAnswerQ2 = x.GetDataQ2; //maleDataの中のQ2の値を取得
        maleDataQ2Arr.push(maleAnswerQ2);
    }
});
console.log(maleDataQ2Arr);
let sumMaleQ2 = maleDataQ2Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageMaleQ2 = (sumMaleQ2 / maleDataQ2Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageMaleQ2);
document.getElementById("genderMaleDataQ2").innerHTML = averageMaleQ2; // 結果画面への表示


// Q3_報酬
const maleDataQ3Arr = []; //maleDataのQ3を入れる箱
allData.forEach(x => {
    if (x.GetDataGender === "男性") {
        maleData.push(x);  //"男性"を選択した回答者のデータ取り出し
        const maleAnswerQ3 = x.GetDataQ3; //maleDataの中のQ3の値を取得
        maleDataQ3Arr.push(maleAnswerQ3);
    }
});
console.log(maleDataQ3Arr);
let sumMaleQ3 = maleDataQ3Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageMaleQ3 = (sumMaleQ3 / maleDataQ3Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageMaleQ3);
document.getElementById("genderMaleDataQ3").innerHTML = averageMaleQ3; // 結果画面への表示


// Q4_仕事のやりがい
const maleDataQ4Arr = []; //maleDataのQ4を入れる箱
allData.forEach(x => {
    if (x.GetDataGender === "男性") {
        maleData.push(x);  //"男性"を選択した回答者のデータ取り出し
        const maleAnswerQ4 = x.GetDataQ4; //maleDataの中のQ4の値を取得
        maleDataQ4Arr.push(maleAnswerQ4);
    }
});
console.log(maleDataQ4Arr);
let sumMaleQ4 = maleDataQ4Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageMaleQ4 = (sumMaleQ4 / maleDataQ4Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageMaleQ4);
document.getElementById("genderMaleDataQ4").innerHTML = averageMaleQ4; // 結果画面への表示


// Q5_自己成長
const maleDataQ5Arr = []; //maleDataのQ5を入れる箱
allData.forEach(x => {
    if (x.GetDataGender === "男性") {
        maleData.push(x);  //"男性"を選択した回答者のデータ取り出し
        const maleAnswerQ5 = x.GetDataQ5; //maleDataの中のQ5の値を取得
        maleDataQ5Arr.push(maleAnswerQ5);
    }
});
console.log(maleDataQ5Arr);
let sumMaleQ5 = maleDataQ5Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageMaleQ5 = (sumMaleQ5 / maleDataQ5Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageMaleQ5);
document.getElementById("genderMaleDataQ5").innerHTML = averageMaleQ5; // 結果画面への表示


// Q6_人間関係
const maleDataQ6Arr = []; //maleDataのQ6を入れる箱
allData.forEach(x => {
    if (x.GetDataGender === "男性") {
        maleData.push(x);  //"男性"を選択した回答者のデータ取り出し
        const maleAnswerQ6 = x.GetDataQ6; //maleDataの中のQ6の値を取得
        maleDataQ6Arr.push(maleAnswerQ6);
    }
});
console.log(maleDataQ6Arr);
let sumMaleQ6 = maleDataQ6Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageMaleQ6 = (sumMaleQ6 / maleDataQ6Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageMaleQ6);
document.getElementById("genderMaleDataQ6").innerHTML = averageMaleQ6; // 結果画面への表示


// Q7_理念への共感
const maleDataQ7Arr = []; //maleDataのQ7を入れる箱
allData.forEach(x => {
    if (x.GetDataGender === "男性") {
        maleData.push(x);  //"男性"を選択した回答者のデータ取り出し
        const maleAnswerQ7 = x.GetDataQ7; //maleDataの中のQ7の値を取得
        maleDataQ7Arr.push(maleAnswerQ7);
    }
});
console.log(maleDataQ7Arr);
let sumMaleQ7 = maleDataQ7Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageMaleQ7 = (sumMaleQ7 / maleDataQ7Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageMaleQ7);
document.getElementById("genderMaleDataQ7").innerHTML = averageMaleQ7; // 結果画面への表示





// -----年齢_20代-----

const age20Data = [];

// Q2_労働時間
const age20DataQ2Arr = []; //age20DataのQ2を入れる箱
allData.forEach(x => {
    if (x.GetDataAge === "20代") {
        age20Data.push(x);  //"20代"を選択した回答者のデータ取り出し
        const age20AnswerQ2 = x.GetDataQ2; //ageDataの中のQ2の値を取得
        age20DataQ2Arr.push(age20AnswerQ2);
    }
});
console.log(age20DataQ2Arr);
let sumAge20Q2 = age20DataQ2Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAge20Q2 = (sumAge20Q2 / age20DataQ2Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAge20Q2);
document.getElementById("age20DataQ2").innerHTML = averageAge20Q2; // 結果画面への表示


// Q3_報酬
const age20DataQ3Arr = []; //age20DataのQ3を入れる箱
allData.forEach(x => {
    if (x.GetDataAge === "20代") {
        age20Data.push(x);  //"20代"を選択した回答者のデータ取り出し
        const age20AnswerQ3 = x.GetDataQ3; //ageDataの中のQ3の値を取得
        age20DataQ3Arr.push(age20AnswerQ3);
    }
});
console.log(age20DataQ3Arr);
let sumAge20Q3 = age20DataQ3Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAge20Q3 = (sumAge20Q3 / age20DataQ3Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAge20Q3);
document.getElementById("age20DataQ3").innerHTML = averageAge20Q3; // 結果画面への表示


// Q4_仕事のやりがい
const age20DataQ4Arr = []; //age20DataのQ4を入れる箱
allData.forEach(x => {
    if (x.GetDataAge === "20代") {
        age20Data.push(x);  //"20代"を選択した回答者のデータ取り出し
        const age20AnswerQ4 = x.GetDataQ4; //ageDataの中のQ4の値を取得
        age20DataQ4Arr.push(age20AnswerQ4);
    }
});
console.log(age20DataQ4Arr);
let sumAge20Q4 = age20DataQ4Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAge20Q4 = (sumAge20Q4 / age20DataQ4Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAge20Q4);
document.getElementById("age20DataQ4").innerHTML = averageAge20Q4; // 結果画面への表示



// Q5_自己成長
const age20DataQ5Arr = []; //age20DataのQ5を入れる箱
allData.forEach(x => {
    if (x.GetDataAge === "20代") {
        age20Data.push(x);  //"20代"を選択した回答者のデータ取り出し
        const age20AnswerQ5 = x.GetDataQ5; //ageDataの中のQ5の値を取得
        age20DataQ5Arr.push(age20AnswerQ5);
    }
});
console.log(age20DataQ5Arr);
let sumAge20Q5 = age20DataQ5Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAge20Q5 = (sumAge20Q5 / age20DataQ5Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAge20Q5);
document.getElementById("age20DataQ5").innerHTML = averageAge20Q5; // 結果画面への表示


// Q6_人間関係
const age20DataQ6Arr = []; //age20DataのQ6を入れる箱
allData.forEach(x => {
    if (x.GetDataAge === "20代") {
        age20Data.push(x);  //"20代"を選択した回答者のデータ取り出し
        const age20AnswerQ6 = x.GetDataQ6; //ageDataの中のQ6の値を取得
        age20DataQ6Arr.push(age20AnswerQ6);
    }
});
console.log(age20DataQ6Arr);
let sumAge20Q6 = age20DataQ6Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAge20Q6 = (sumAge20Q6 / age20DataQ6Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAge20Q6);
document.getElementById("age20DataQ6").innerHTML = averageAge20Q6; // 結果画面への表示


// Q7_理念への共感
const age20DataQ7Arr = []; //age20DataのQ7を入れる箱
allData.forEach(x => {
    if (x.GetDataAge === "20代") {
        age20Data.push(x);  //"20代"を選択した回答者のデータ取り出し
        const age20AnswerQ7 = x.GetDataQ7; //ageDataの中のQ7の値を取得
        age20DataQ7Arr.push(age20AnswerQ7);
    }
});
console.log(age20DataQ7Arr);
let sumAge20Q7 = age20DataQ7Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAge20Q7 = (sumAge20Q7 / age20DataQ7Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAge20Q7);
document.getElementById("age20DataQ7").innerHTML = averageAge20Q7; // 結果画面への表示





// -----年齢_30代-----

const age30Data = [];

// Q2_労働時間
const age30DataQ2Arr = []; //age30DataのQ2を入れる箱
allData.forEach(x => {
    if (x.GetDataAge === "30代") {
        age30Data.push(x);  //"30代"を選択した回答者のデータ取り出し
        const age30AnswerQ2 = x.GetDataQ2; //ageDataの中のQ2の値を取得
        age30DataQ2Arr.push(age30AnswerQ2);
    }
});
console.log(age30DataQ2Arr);
let sumAge30Q2 = age30DataQ2Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAge30Q2 = (sumAge30Q2 / age30DataQ2Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAge30Q2);
document.getElementById("age30DataQ2").innerHTML = averageAge30Q2; // 結果画面への表示


// Q3_報酬
const age30DataQ3Arr = []; //age30DataのQ3を入れる箱
allData.forEach(x => {
    if (x.GetDataAge === "30代") {
        age30Data.push(x);  //"30代"を選択した回答者のデータ取り出し
        const age30AnswerQ3 = x.GetDataQ3; //ageDataの中のQ3の値を取得
        age30DataQ3Arr.push(age30AnswerQ3);
    }
});
console.log(age30DataQ3Arr);
let sumAge30Q3 = age30DataQ3Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAge30Q3 = (sumAge30Q3 / age30DataQ3Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAge30Q3);
document.getElementById("age30DataQ3").innerHTML = averageAge30Q3; // 結果画面への表示


// Q4_仕事のやりがい
const age30DataQ4Arr = []; //age30DataのQ4を入れる箱
allData.forEach(x => {
    if (x.GetDataAge === "30代") {
        age30Data.push(x);  //"30代"を選択した回答者のデータ取り出し
        const age30AnswerQ4 = x.GetDataQ4; //ageDataの中のQ4の値を取得
        age30DataQ4Arr.push(age30AnswerQ4);
    }
});
console.log(age30DataQ4Arr);
let sumAge30Q4 = age30DataQ4Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAge30Q4 = (sumAge30Q4 / age30DataQ4Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAge30Q4);
document.getElementById("age30DataQ4").innerHTML = averageAge30Q4; // 結果画面への表示


// Q5_自己成長
const age30DataQ5Arr = []; //age30DataのQ5を入れる箱
allData.forEach(x => {
    if (x.GetDataAge === "30代") {
        age30Data.push(x);  //"30代"を選択した回答者のデータ取り出し
        const age30AnswerQ5 = x.GetDataQ5; //ageDataの中のQ5の値を取得
        age30DataQ5Arr.push(age30AnswerQ5);
    }
});
console.log(age30DataQ5Arr);
let sumAge30Q5 = age30DataQ5Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAge30Q5 = (sumAge30Q5 / age30DataQ5Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAge30Q5);
document.getElementById("age30DataQ5").innerHTML = averageAge30Q5; // 結果画面への表示


// Q6_人間関係
const age30DataQ6Arr = []; //age30DataのQ6を入れる箱
allData.forEach(x => {
    if (x.GetDataAge === "30代") {
        age30Data.push(x);  //"30代"を選択した回答者のデータ取り出し
        const age30AnswerQ6 = x.GetDataQ6; //ageDataの中のQ6の値を取得
        age30DataQ6Arr.push(age30AnswerQ6);
    }
});
console.log(age30DataQ6Arr);
let sumAge30Q6 = age30DataQ6Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAge30Q6 = (sumAge30Q6 / age30DataQ6Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAge30Q6);
document.getElementById("age30DataQ6").innerHTML = averageAge30Q6; // 結果画面への表示


// Q7_理念への共感
const age30DataQ7Arr = []; //age30DataのQ7を入れる箱
allData.forEach(x => {
    if (x.GetDataAge === "30代") {
        age30Data.push(x);  //"30代"を選択した回答者のデータ取り出し
        const age30AnswerQ7 = x.GetDataQ7; //ageDataの中のQ7の値を取得
        age30DataQ7Arr.push(age30AnswerQ7);
    }
});
console.log(age30DataQ7Arr);
let sumAge30Q7 = age30DataQ7Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAge30Q7 = (sumAge30Q7 / age30DataQ7Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAge30Q7);
document.getElementById("age30DataQ7").innerHTML = averageAge30Q7; // 結果画面への表示





// -----年齢_40代-----

const age40Data = [];

// Q2_労働時間
const age40DataQ2Arr = []; //age40DataのQ2を入れる箱
allData.forEach(x => {
    if (x.GetDataAge === "40代") {
        age40Data.push(x);  //"40代"を選択した回答者のデータ取り出し
        const age40AnswerQ2 = x.GetDataQ2; //ageDataの中のQ2の値を取得
        age40DataQ2Arr.push(age40AnswerQ2);
    }
});
console.log(age40DataQ2Arr);
let sumAge40Q2 = age40DataQ2Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAge40Q2 = (sumAge40Q2 / age40DataQ2Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAge40Q2);
document.getElementById("age40DataQ2").innerHTML = averageAge40Q2; // 結果画面への表示


// Q3_報酬
const age40DataQ3Arr = []; //age40DataのQ3を入れる箱
allData.forEach(x => {
    if (x.GetDataAge === "40代") {
        age40Data.push(x);  //"40代"を選択した回答者のデータ取り出し
        const age40AnswerQ3 = x.GetDataQ3; //ageDataの中のQ3の値を取得
        age40DataQ3Arr.push(age40AnswerQ3);
    }
});
console.log(age40DataQ3Arr);
let sumAge40Q3 = age40DataQ3Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAge40Q3 = (sumAge40Q3 / age40DataQ3Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAge40Q3);
document.getElementById("age40DataQ3").innerHTML = averageAge40Q3; // 結果画面への表示


// Q4_仕事のやりがい
const age40DataQ4Arr = []; //age40DataのQ4を入れる箱
allData.forEach(x => {
    if (x.GetDataAge === "40代") {
        age40Data.push(x);  //"40代"を選択した回答者のデータ取り出し
        const age40AnswerQ4 = x.GetDataQ4; //ageDataの中のQ4の値を取得
        age40DataQ4Arr.push(age40AnswerQ4);
    }
});
console.log(age40DataQ4Arr);
let sumAge40Q4 = age40DataQ4Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAge40Q4 = (sumAge40Q4 / age40DataQ4Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAge40Q4);
document.getElementById("age40DataQ4").innerHTML = averageAge40Q4; // 結果画面への表示


// Q5_自己成長
const age40DataQ5Arr = []; //age40DataのQ5を入れる箱
allData.forEach(x => {
    if (x.GetDataAge === "40代") {
        age40Data.push(x);  //"40代"を選択した回答者のデータ取り出し
        const age40AnswerQ5 = x.GetDataQ5; //ageDataの中のQ5の値を取得
        age40DataQ5Arr.push(age40AnswerQ5);
    }
});
console.log(age40DataQ5Arr);
let sumAge40Q5 = age40DataQ5Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAge40Q5 = (sumAge40Q5 / age40DataQ5Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAge40Q5);
document.getElementById("age40DataQ5").innerHTML = averageAge40Q5; // 結果画面への表示


// Q6_人間関係
const age40DataQ6Arr = []; //age40DataのQ6を入れる箱
allData.forEach(x => {
    if (x.GetDataAge === "40代") {
        age40Data.push(x);  //"40代"を選択した回答者のデータ取り出し
        const age40AnswerQ6 = x.GetDataQ6; //ageDataの中のQ6の値を取得
        age40DataQ6Arr.push(age40AnswerQ6);
    }
});
console.log(age40DataQ6Arr);
let sumAge40Q6 = age40DataQ6Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAge40Q6 = (sumAge40Q6 / age40DataQ6Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAge40Q6);
document.getElementById("age40DataQ6").innerHTML = averageAge40Q6; // 結果画面への表示


// Q7_理念への共感
const age40DataQ7Arr = []; //age40DataのQ7を入れる箱
allData.forEach(x => {
    if (x.GetDataAge === "40代") {
        age40Data.push(x);  //"40代"を選択した回答者のデータ取り出し
        const age40AnswerQ7 = x.GetDataQ7; //ageDataの中のQ7の値を取得
        age40DataQ7Arr.push(age40AnswerQ7);
    }
});
console.log(age40DataQ7Arr);
let sumAge40Q7 = age40DataQ7Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAge40Q7 = (sumAge40Q7 / age40DataQ7Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAge40Q7);
document.getElementById("age40DataQ7").innerHTML = averageAge40Q7; // 結果画面への表示





// -----年齢_50代-----

const age50Data = [];

// Q2_労働時間
const age50DataQ2Arr = []; //age50DataのQ2を入れる箱
allData.forEach(x => {
    if (x.GetDataAge === "50代") {
        age50Data.push(x);  //"50代"を選択した回答者のデータ取り出し
        const age50AnswerQ2 = x.GetDataQ2; //ageDataの中のQ2の値を取得
        age50DataQ2Arr.push(age50AnswerQ2);
    }
});
console.log(age50DataQ2Arr);
let sumAge50Q2 = age50DataQ2Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAge50Q2 = (sumAge50Q2 / age50DataQ2Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAge50Q2);
document.getElementById("age50DataQ2").innerHTML = averageAge50Q2; // 結果画面への表示


// Q3_報酬
const age50DataQ3Arr = []; //age50DataのQ3を入れる箱
allData.forEach(x => {
    if (x.GetDataAge === "50代") {
        age50Data.push(x);  //"50代"を選択した回答者のデータ取り出し
        const age50AnswerQ3 = x.GetDataQ3; //ageDataの中のQ3の値を取得
        age50DataQ3Arr.push(age50AnswerQ3);
    }
});
console.log(age50DataQ3Arr);
let sumAge50Q3 = age50DataQ3Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAge50Q3 = (sumAge50Q3 / age50DataQ3Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAge50Q3);
document.getElementById("age50DataQ3").innerHTML = averageAge50Q3; // 結果画面への表示


// Q4_仕事のやりがい
const age50DataQ4Arr = []; //age50DataのQ4を入れる箱
allData.forEach(x => {
    if (x.GetDataAge === "50代") {
        age50Data.push(x);  //"50代"を選択した回答者のデータ取り出し
        const age50AnswerQ4 = x.GetDataQ4; //ageDataの中のQ4の値を取得
        age50DataQ4Arr.push(age50AnswerQ4);
    }
});
console.log(age50DataQ4Arr);
let sumAge50Q4 = age50DataQ4Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAge50Q4 = (sumAge50Q4 / age50DataQ4Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAge50Q4);
document.getElementById("age50DataQ4").innerHTML = averageAge50Q4; // 結果画面への表示


// Q5_自己成長
const age50DataQ5Arr = []; //age50DataのQ5を入れる箱
allData.forEach(x => {
    if (x.GetDataAge === "50代") {
        age50Data.push(x);  //"50代"を選択した回答者のデータ取り出し
        const age50AnswerQ5 = x.GetDataQ5; //ageDataの中のQ5の値を取得
        age50DataQ5Arr.push(age50AnswerQ5);
    }
});
console.log(age50DataQ5Arr);
let sumAge50Q5 = age50DataQ5Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAge50Q5 = (sumAge50Q5 / age50DataQ5Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAge50Q5);
document.getElementById("age50DataQ5").innerHTML = averageAge50Q5; // 結果画面への表示


// Q6_人間関係
const age50DataQ6Arr = []; //age50DataのQ6を入れる箱
allData.forEach(x => {
    if (x.GetDataAge === "50代") {
        age50Data.push(x);  //"50代"を選択した回答者のデータ取り出し
        const age50AnswerQ6 = x.GetDataQ6; //ageDataの中のQ6の値を取得
        age50DataQ6Arr.push(age50AnswerQ6);
    }
});
console.log(age50DataQ6Arr);
let sumAge50Q6 = age50DataQ6Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAge50Q6 = (sumAge50Q6 / age50DataQ6Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAge50Q6);
document.getElementById("age50DataQ6").innerHTML = averageAge50Q6; // 結果画面への表示


// Q7_理念への共感
const age50DataQ7Arr = []; //age50DataのQ7を入れる箱
allData.forEach(x => {
    if (x.GetDataAge === "50代") {
        age50Data.push(x);  //"50代"を選択した回答者のデータ取り出し
        const age50AnswerQ7 = x.GetDataQ7; //ageDataの中のQ7の値を取得
        age50DataQ7Arr.push(age50AnswerQ7);
    }
});
console.log(age50DataQ7Arr);
let sumAge50Q7 = age50DataQ7Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAge50Q7 = (sumAge50Q7 / age50DataQ7Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAge50Q7);
document.getElementById("age50DataQ7").innerHTML = averageAge50Q7; // 結果画面への表示



// -----所属_的場店-----

const affiliationMatobaData = [];

// Q2_労働時間
const affiliationMatobaDataQ2Arr = []; //affiliationMatobaDataのQ2を入れる箱
allData.forEach(x => {
    if (x.GetDataAffiliation === "的場店") {
        affiliationMatobaData.push(x);  //"的場店"を選択した回答者のデータ取り出し
        const affiliationMatobaAnswerQ2 = x.GetDataQ2; //ageDataの中のQ2の値を取得
        affiliationMatobaDataQ2Arr.push(affiliationMatobaAnswerQ2);
    }
});
console.log(affiliationMatobaDataQ2Arr);
let sumAffiliationMatobaQ2 = affiliationMatobaDataQ2Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAffiliationMatobaQ2 = (sumAffiliationMatobaQ2 / affiliationMatobaDataQ2Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAffiliationMatobaQ2);
document.getElementById("affiliationMatobaDataQ2").innerHTML = averageAffiliationMatobaQ2; // 結果画面への表示


// Q3_報酬
const affiliationMatobaDataQ3Arr = []; //affiliationMatobaDataのQ3を入れる箱
allData.forEach(x => {
    if (x.GetDataAffiliation === "的場店") {
        affiliationMatobaData.push(x);  //"的場店"を選択した回答者のデータ取り出し
        const affiliationMatobaAnswerQ3 = x.GetDataQ3; //ageDataの中のQ3の値を取得
        affiliationMatobaDataQ3Arr.push(affiliationMatobaAnswerQ3);
    }
});
console.log(affiliationMatobaDataQ3Arr);
let sumAffiliationMatobaQ3 = affiliationMatobaDataQ3Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAffiliationMatobaQ3 = (sumAffiliationMatobaQ3 / affiliationMatobaDataQ3Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAffiliationMatobaQ3);
document.getElementById("affiliationMatobaDataQ3").innerHTML = averageAffiliationMatobaQ3; // 結果画面への表示


// Q4_仕事のやりがい
const affiliationMatobaDataQ4Arr = []; //affiliationMatobaDataのQ4を入れる箱
allData.forEach(x => {
    if (x.GetDataAffiliation === "的場店") {
        affiliationMatobaData.push(x);  //"的場店"を選択した回答者のデータ取り出し
        const affiliationMatobaAnswerQ4 = x.GetDataQ4; //ageDataの中のQ4の値を取得
        affiliationMatobaDataQ4Arr.push(affiliationMatobaAnswerQ4);
    }
});
console.log(affiliationMatobaDataQ4Arr);
let sumAffiliationMatobaQ4 = affiliationMatobaDataQ4Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAffiliationMatobaQ4 = (sumAffiliationMatobaQ4 / affiliationMatobaDataQ4Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAffiliationMatobaQ4);
document.getElementById("affiliationMatobaDataQ4").innerHTML = averageAffiliationMatobaQ4; // 結果画面への表示


// Q5_自己成長
const affiliationMatobaDataQ5Arr = []; //affiliationMatobaDataのQ5を入れる箱
allData.forEach(x => {
    if (x.GetDataAffiliation === "的場店") {
        affiliationMatobaData.push(x);  //"的場店"を選択した回答者のデータ取り出し
        const affiliationMatobaAnswerQ5 = x.GetDataQ5; //ageDataの中のQ5の値を取得
        affiliationMatobaDataQ5Arr.push(affiliationMatobaAnswerQ5);
    }
});
console.log(affiliationMatobaDataQ5Arr);
let sumAffiliationMatobaQ5 = affiliationMatobaDataQ5Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAffiliationMatobaQ5 = (sumAffiliationMatobaQ5 / affiliationMatobaDataQ5Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAffiliationMatobaQ5);
document.getElementById("affiliationMatobaDataQ5").innerHTML = averageAffiliationMatobaQ5; // 結果画面への表示


// Q6_人間関係
const affiliationMatobaDataQ6Arr = []; //affiliationMatobaDataのQ6を入れる箱
allData.forEach(x => {
    if (x.GetDataAffiliation === "的場店") {
        affiliationMatobaData.push(x);  //"的場店"を選択した回答者のデータ取り出し
        const affiliationMatobaAnswerQ6 = x.GetDataQ6; //ageDataの中のQ6の値を取得
        affiliationMatobaDataQ6Arr.push(affiliationMatobaAnswerQ6);
    }
});
console.log(affiliationMatobaDataQ6Arr);
let sumAffiliationMatobaQ6 = affiliationMatobaDataQ6Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAffiliationMatobaQ6 = (sumAffiliationMatobaQ6 / affiliationMatobaDataQ6Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAffiliationMatobaQ6);
document.getElementById("affiliationMatobaDataQ6").innerHTML = averageAffiliationMatobaQ6; // 結果画面への表示


// Q7_理念への共感
const affiliationMatobaDataQ7Arr = []; //affiliationMatobaDataのQ7を入れる箱
allData.forEach(x => {
    if (x.GetDataAffiliation === "的場店") {
        affiliationMatobaData.push(x);  //"的場店"を選択した回答者のデータ取り出し
        const affiliationMatobaAnswerQ7 = x.GetDataQ7; //ageDataの中のQ7の値を取得
        affiliationMatobaDataQ7Arr.push(affiliationMatobaAnswerQ7);
    }
});
console.log(affiliationMatobaDataQ7Arr);
let sumAffiliationMatobaQ7 = affiliationMatobaDataQ7Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAffiliationMatobaQ7 = (sumAffiliationMatobaQ7 / affiliationMatobaDataQ7Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAffiliationMatobaQ7);
document.getElementById("affiliationMatobaDataQ7").innerHTML = averageAffiliationMatobaQ7; // 結果画面への表示



// -----所属_次郎丸店-----

const affiliationJiromaruData = [];

// Q2_労働時間
const affiliationJiromaruDataQ2Arr = []; //affiliationJiromaruDataのQ2を入れる箱
allData.forEach(x => {
    if (x.GetDataAffiliation === "次郎丸店") {
        affiliationJiromaruData.push(x);  //"的場店"を選択した回答者のデータ取り出し
        const affiliationJiromaruAnswerQ2 = x.GetDataQ2; //ageDataの中のQ2の値を取得
        affiliationJiromaruDataQ2Arr.push(affiliationJiromaruAnswerQ2);
    }
});
console.log(affiliationJiromaruDataQ2Arr);
let sumAffiliationJiromaruQ2 = affiliationJiromaruDataQ2Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAffiliationJiromaruQ2 = (sumAffiliationJiromaruQ2 / affiliationJiromaruDataQ2Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAffiliationJiromaruQ2);
document.getElementById("affiliationJiromaruDataQ2").innerHTML = averageAffiliationJiromaruQ2; // 結果画面への表示


// Q3_報酬
const affiliationJiromaruDataQ3Arr = []; //affiliationJiromaruDataのQ3を入れる箱
allData.forEach(x => {
    if (x.GetDataAffiliation === "次郎丸店") {
        affiliationJiromaruData.push(x);  //"的場店"を選択した回答者のデータ取り出し
        const affiliationJiromaruAnswerQ3 = x.GetDataQ3; //ageDataの中のQ3の値を取得
        affiliationJiromaruDataQ3Arr.push(affiliationJiromaruAnswerQ3);
    }
});
console.log(affiliationJiromaruDataQ3Arr);
let sumAffiliationJiromaruQ3 = affiliationJiromaruDataQ3Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAffiliationJiromaruQ3 = (sumAffiliationJiromaruQ3 / affiliationJiromaruDataQ3Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAffiliationJiromaruQ3);
document.getElementById("affiliationJiromaruDataQ3").innerHTML = averageAffiliationJiromaruQ3; // 結果画面への表示


// Q4_仕事のやりがい
const affiliationJiromaruDataQ4Arr = []; //affiliationJiromaruDataのQ4を入れる箱
allData.forEach(x => {
    if (x.GetDataAffiliation === "次郎丸店") {
        affiliationJiromaruData.push(x);  //"的場店"を選択した回答者のデータ取り出し
        const affiliationJiromaruAnswerQ4 = x.GetDataQ4; //ageDataの中のQ4の値を取得
        affiliationJiromaruDataQ4Arr.push(affiliationJiromaruAnswerQ4);
    }
});
console.log(affiliationJiromaruDataQ4Arr);
let sumAffiliationJiromaruQ4 = affiliationJiromaruDataQ4Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAffiliationJiromaruQ4 = (sumAffiliationJiromaruQ4 / affiliationJiromaruDataQ4Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAffiliationJiromaruQ4);
document.getElementById("affiliationJiromaruDataQ4").innerHTML = averageAffiliationJiromaruQ4; // 結果画面への表示


// Q5_自己成長
const affiliationJiromaruDataQ5Arr = []; //affiliationJiromaruDataのQ5を入れる箱
allData.forEach(x => {
    if (x.GetDataAffiliation === "次郎丸店") {
        affiliationJiromaruData.push(x);  //"的場店"を選択した回答者のデータ取り出し
        const affiliationJiromaruAnswerQ5 = x.GetDataQ5; //ageDataの中のQ5の値を取得
        affiliationJiromaruDataQ5Arr.push(affiliationJiromaruAnswerQ5);
    }
});
console.log(affiliationJiromaruDataQ5Arr);
let sumAffiliationJiromaruQ5 = affiliationJiromaruDataQ5Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAffiliationJiromaruQ5 = (sumAffiliationJiromaruQ5 / affiliationJiromaruDataQ5Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAffiliationJiromaruQ5);
document.getElementById("affiliationJiromaruDataQ5").innerHTML = averageAffiliationJiromaruQ5; // 結果画面への表示


// Q6_人間関係
const affiliationJiromaruDataQ6Arr = []; //affiliationJiromaruDataのQ6を入れる箱
allData.forEach(x => {
    if (x.GetDataAffiliation === "次郎丸店") {
        affiliationJiromaruData.push(x);  //"的場店"を選択した回答者のデータ取り出し
        const affiliationJiromaruAnswerQ6 = x.GetDataQ6; //ageDataの中のQ6の値を取得
        affiliationJiromaruDataQ6Arr.push(affiliationJiromaruAnswerQ6);
    }
});
console.log(affiliationJiromaruDataQ6Arr);
let sumAffiliationJiromaruQ6 = affiliationJiromaruDataQ6Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAffiliationJiromaruQ6 = (sumAffiliationJiromaruQ6 / affiliationJiromaruDataQ6Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAffiliationJiromaruQ6);
document.getElementById("affiliationJiromaruDataQ6").innerHTML = averageAffiliationJiromaruQ6; // 結果画面への表示


// Q7_理念への共感
const affiliationJiromaruDataQ7Arr = []; //affiliationJiromaruDataのQ7を入れる箱
allData.forEach(x => {
    if (x.GetDataAffiliation === "次郎丸店") {
        affiliationJiromaruData.push(x);  //"的場店"を選択した回答者のデータ取り出し
        const affiliationJiromaruAnswerQ7 = x.GetDataQ7; //ageDataの中のQ7の値を取得
        affiliationJiromaruDataQ7Arr.push(affiliationJiromaruAnswerQ7);
    }
});
console.log(affiliationJiromaruDataQ7Arr);
let sumAffiliationJiromaruQ7 = affiliationJiromaruDataQ7Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageAffiliationJiromaruQ7 = (sumAffiliationJiromaruQ7 / affiliationJiromaruDataQ7Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageAffiliationJiromaruQ7);
document.getElementById("affiliationJiromaruDataQ7").innerHTML = averageAffiliationJiromaruQ7; // 結果画面への表示



// -----職種_看護師-----

const occupationNurseData = [];

// Q2_労働時間
const occupationNurseDataQ2Arr = []; //occupationNurseDataのQ2を入れる箱
allData.forEach(x => {
    if (x.GetDataOccupation === "看護師") {
        occupationNurseData.push(x);  //"看護師"を選択した回答者のデータ取り出し
        const occupationNurseAnswerQ2 = x.GetDataQ2; //ageDataの中のQ2の値を取得
        occupationNurseDataQ2Arr.push(occupationNurseAnswerQ2);
    }
});
console.log(occupationNurseDataQ2Arr);
let sumOccupationNurseQ2 = occupationNurseDataQ2Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageOccupationNurseQ2 = (sumOccupationNurseQ2 / occupationNurseDataQ2Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageOccupationNurseQ2);
document.getElementById("occupationNurseDataQ2").innerHTML = averageOccupationNurseQ2; // 結果画面への表示


// Q3_報酬
const occupationNurseDataQ3Arr = []; //occupationNurseDataのQ3を入れる箱
allData.forEach(x => {
    if (x.GetDataOccupation === "看護師") {
        occupationNurseData.push(x);  //"看護師"を選択した回答者のデータ取り出し
        const occupationNurseAnswerQ3 = x.GetDataQ3; //ageDataの中のQ3の値を取得
        occupationNurseDataQ3Arr.push(occupationNurseAnswerQ3);
    }
});
console.log(occupationNurseDataQ3Arr);
let sumOccupationNurseQ3 = occupationNurseDataQ3Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageOccupationNurseQ3 = (sumOccupationNurseQ3 / occupationNurseDataQ3Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageOccupationNurseQ3);
document.getElementById("occupationNurseDataQ3").innerHTML = averageOccupationNurseQ3; // 結果画面への表示


// Q4_仕事のやりがい
const occupationNurseDataQ4Arr = []; //occupationNurseDataのQ4を入れる箱
allData.forEach(x => {
    if (x.GetDataOccupation === "看護師") {
        occupationNurseData.push(x);  //"看護師"を選択した回答者のデータ取り出し
        const occupationNurseAnswerQ4 = x.GetDataQ4; //ageDataの中のQ4の値を取得
        occupationNurseDataQ4Arr.push(occupationNurseAnswerQ4);
    }
});
console.log(occupationNurseDataQ4Arr);
let sumOccupationNurseQ4 = occupationNurseDataQ4Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageOccupationNurseQ4 = (sumOccupationNurseQ4 / occupationNurseDataQ4Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageOccupationNurseQ4);
document.getElementById("occupationNurseDataQ4").innerHTML = averageOccupationNurseQ4; // 結果画面への表示


// Q5_自己成長
const occupationNurseDataQ5Arr = []; //occupationNurseDataのQ5を入れる箱
allData.forEach(x => {
    if (x.GetDataOccupation === "看護師") {
        occupationNurseData.push(x);  //"看護師"を選択した回答者のデータ取り出し
        const occupationNurseAnswerQ5 = x.GetDataQ5; //ageDataの中のQ5の値を取得
        occupationNurseDataQ5Arr.push(occupationNurseAnswerQ5);
    }
});
console.log(occupationNurseDataQ5Arr);
let sumOccupationNurseQ5 = occupationNurseDataQ5Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageOccupationNurseQ5 = (sumOccupationNurseQ5 / occupationNurseDataQ5Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageOccupationNurseQ5);
document.getElementById("occupationNurseDataQ5").innerHTML = averageOccupationNurseQ5; // 結果画面への表示


// Q6_人間関係
const occupationNurseDataQ6Arr = []; //occupationNurseDataのQ6を入れる箱
allData.forEach(x => {
    if (x.GetDataOccupation === "看護師") {
        occupationNurseData.push(x);  //"看護師"を選択した回答者のデータ取り出し
        const occupationNurseAnswerQ6 = x.GetDataQ6; //ageDataの中のQ6の値を取得
        occupationNurseDataQ6Arr.push(occupationNurseAnswerQ6);
    }
});
console.log(occupationNurseDataQ6Arr);
let sumOccupationNurseQ6 = occupationNurseDataQ6Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageOccupationNurseQ6 = (sumOccupationNurseQ6 / occupationNurseDataQ6Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageOccupationNurseQ6);
document.getElementById("occupationNurseDataQ6").innerHTML = averageOccupationNurseQ6; // 結果画面への表示


// Q7_理念への共感
const occupationNurseDataQ7Arr = []; //occupationNurseDataのQ7を入れる箱
allData.forEach(x => {
    if (x.GetDataOccupation === "看護師") {
        occupationNurseData.push(x);  //"看護師"を選択した回答者のデータ取り出し
        const occupationNurseAnswerQ7 = x.GetDataQ7; //ageDataの中のQ7の値を取得
        occupationNurseDataQ7Arr.push(occupationNurseAnswerQ7);
    }
});
console.log(occupationNurseDataQ7Arr);
let sumOccupationNurseQ7 = occupationNurseDataQ7Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageOccupationNurseQ7 = (sumOccupationNurseQ7 / occupationNurseDataQ7Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageOccupationNurseQ7);
document.getElementById("occupationNurseDataQ7").innerHTML = averageOccupationNurseQ7; // 結果画面への表示



// -----職種_セラピスト-----

const occupationTherapistData = [];

// Q2_労働時間
const occupationTherapistDataQ2Arr = []; //occupationTherapistDataのQ2を入れる箱
allData.forEach(x => {
    if (x.GetDataOccupation === "セラピスト") {
        occupationTherapistData.push(x);  //"セラピスト"を選択した回答者のデータ取り出し
        const occupationTherapistAnswerQ2 = x.GetDataQ2; //ageDataの中のQ2の値を取得
        occupationTherapistDataQ2Arr.push(occupationTherapistAnswerQ2);
    }
});
console.log(occupationTherapistDataQ2Arr);
let sumOccupationTherapistQ2 = occupationTherapistDataQ2Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageOccupationTherapistQ2 = (sumOccupationTherapistQ2 / occupationTherapistDataQ2Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageOccupationTherapistQ2);
document.getElementById("occupationTherapistDataQ2").innerHTML = averageOccupationTherapistQ2; // 結果画面への表示


// Q3_報酬
const occupationTherapistDataQ3Arr = []; //occupationTherapistDataのQ3を入れる箱
allData.forEach(x => {
    if (x.GetDataOccupation === "セラピスト") {
        occupationTherapistData.push(x);  //"セラピスト"を選択した回答者のデータ取り出し
        const occupationTherapistAnswerQ3 = x.GetDataQ3; //ageDataの中のQ3の値を取得
        occupationTherapistDataQ3Arr.push(occupationTherapistAnswerQ3);
    }
});
console.log(occupationTherapistDataQ3Arr);
let sumOccupationTherapistQ3 = occupationTherapistDataQ3Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageOccupationTherapistQ3 = (sumOccupationTherapistQ3 / occupationTherapistDataQ3Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageOccupationTherapistQ3);
document.getElementById("occupationTherapistDataQ3").innerHTML = averageOccupationTherapistQ3; // 結果画面への表示


// Q4_仕事のやりがい
const occupationTherapistDataQ4Arr = []; //occupationTherapistDataのQ4を入れる箱
allData.forEach(x => {
    if (x.GetDataOccupation === "セラピスト") {
        occupationTherapistData.push(x);  //"セラピスト"を選択した回答者のデータ取り出し
        const occupationTherapistAnswerQ4 = x.GetDataQ4; //ageDataの中のQ4の値を取得
        occupationTherapistDataQ4Arr.push(occupationTherapistAnswerQ4);
    }
});
console.log(occupationTherapistDataQ4Arr);
let sumOccupationTherapistQ4 = occupationTherapistDataQ4Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageOccupationTherapistQ4 = (sumOccupationTherapistQ4 / occupationTherapistDataQ4Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageOccupationTherapistQ4);
document.getElementById("occupationTherapistDataQ4").innerHTML = averageOccupationTherapistQ4; // 結果画面への表示


// Q5_自己成長
const occupationTherapistDataQ5Arr = []; //occupationTherapistDataのQ5を入れる箱
allData.forEach(x => {
    if (x.GetDataOccupation === "セラピスト") {
        occupationTherapistData.push(x);  //"セラピスト"を選択した回答者のデータ取り出し
        const occupationTherapistAnswerQ5 = x.GetDataQ5; //ageDataの中のQ5の値を取得
        occupationTherapistDataQ5Arr.push(occupationTherapistAnswerQ5);
    }
});
console.log(occupationTherapistDataQ5Arr);
let sumOccupationTherapistQ5 = occupationTherapistDataQ5Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageOccupationTherapistQ5 = (sumOccupationTherapistQ5 / occupationTherapistDataQ5Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageOccupationTherapistQ5);
document.getElementById("occupationTherapistDataQ5").innerHTML = averageOccupationTherapistQ5; // 結果画面への表示


// Q6_人間関係
const occupationTherapistDataQ6Arr = []; //occupationTherapistDataのQ6を入れる箱
allData.forEach(x => {
    if (x.GetDataOccupation === "セラピスト") {
        occupationTherapistData.push(x);  //"セラピスト"を選択した回答者のデータ取り出し
        const occupationTherapistAnswerQ6 = x.GetDataQ6; //ageDataの中のQ6の値を取得
        occupationTherapistDataQ6Arr.push(occupationTherapistAnswerQ6);
    }
});
console.log(occupationTherapistDataQ6Arr);
let sumOccupationTherapistQ6 = occupationTherapistDataQ6Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageOccupationTherapistQ6 = (sumOccupationTherapistQ6 / occupationTherapistDataQ6Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageOccupationTherapistQ6);
document.getElementById("occupationTherapistDataQ6").innerHTML = averageOccupationTherapistQ6; // 結果画面への表示


// Q7_理念への共感
const occupationTherapistDataQ7Arr = []; //occupationTherapistDataのQ7を入れる箱
allData.forEach(x => {
    if (x.GetDataOccupation === "セラピスト") {
        occupationTherapistData.push(x);  //"セラピスト"を選択した回答者のデータ取り出し
        const occupationTherapistAnswerQ7 = x.GetDataQ7; //ageDataの中のQ7の値を取得
        occupationTherapistDataQ7Arr.push(occupationTherapistAnswerQ7);
    }
});
console.log(occupationTherapistDataQ7Arr);
let sumOccupationTherapistQ7 = occupationTherapistDataQ7Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageOccupationTherapistQ7 = (sumOccupationTherapistQ7 / occupationTherapistDataQ7Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageOccupationTherapistQ7);
document.getElementById("occupationTherapistDataQ7").innerHTML = averageOccupationTherapistQ7; // 結果画面への表示



// -----職種_事務-----

const occupationClerkData = [];

// Q2_労働時間
const occupationClerkDataQ2Arr = []; //occupationClerkDataのQ2を入れる箱
allData.forEach(x => {
    if (x.GetDataOccupation === "事務") {
        occupationClerkData.push(x);  //"事務"を選択した回答者のデータ取り出し
        const occupationClerkAnswerQ2 = x.GetDataQ2; //ageDataの中のQ2の値を取得
        occupationClerkDataQ2Arr.push(occupationClerkAnswerQ2);
    }
});
console.log(occupationClerkDataQ2Arr);
let sumOccupationClerkQ2 = occupationClerkDataQ2Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageOccupationClerkQ2 = (sumOccupationClerkQ2 / occupationClerkDataQ2Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageOccupationClerkQ2);
document.getElementById("occupationClerkDataQ2").innerHTML = averageOccupationClerkQ2; // 結果画面への表示


// Q3_報酬
const occupationClerkDataQ3Arr = []; //occupationClerkDataのQ3を入れる箱
allData.forEach(x => {
    if (x.GetDataOccupation === "事務") {
        occupationClerkData.push(x);  //"事務"を選択した回答者のデータ取り出し
        const occupationClerkAnswerQ3 = x.GetDataQ3; //ageDataの中のQ3の値を取得
        occupationClerkDataQ3Arr.push(occupationClerkAnswerQ3);
    }
});
console.log(occupationClerkDataQ3Arr);
let sumOccupationClerkQ3 = occupationClerkDataQ3Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageOccupationClerkQ3 = (sumOccupationClerkQ3 / occupationClerkDataQ3Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageOccupationClerkQ3);
document.getElementById("occupationClerkDataQ3").innerHTML = averageOccupationClerkQ3; // 結果画面への表示


// Q4_仕事のやりがい
const occupationClerkDataQ4Arr = []; //occupationClerkDataのQ4を入れる箱
allData.forEach(x => {
    if (x.GetDataOccupation === "事務") {
        occupationClerkData.push(x);  //"事務"を選択した回答者のデータ取り出し
        const occupationClerkAnswerQ4 = x.GetDataQ4; //ageDataの中のQ4の値を取得
        occupationClerkDataQ4Arr.push(occupationClerkAnswerQ4);
    }
});
console.log(occupationClerkDataQ4Arr);
let sumOccupationClerkQ4 = occupationClerkDataQ4Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageOccupationClerkQ4 = (sumOccupationClerkQ4 / occupationClerkDataQ4Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageOccupationClerkQ4);
document.getElementById("occupationClerkDataQ4").innerHTML = averageOccupationClerkQ4; // 結果画面への表示


// Q5_自己成長
const occupationClerkDataQ5Arr = []; //occupationClerkDataのQ5を入れる箱
allData.forEach(x => {
    if (x.GetDataOccupation === "事務") {
        occupationClerkData.push(x);  //"事務"を選択した回答者のデータ取り出し
        const occupationClerkAnswerQ5 = x.GetDataQ5; //ageDataの中のQ5の値を取得
        occupationClerkDataQ5Arr.push(occupationClerkAnswerQ5);
    }
});
console.log(occupationClerkDataQ5Arr);
let sumOccupationClerkQ5 = occupationClerkDataQ5Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageOccupationClerkQ5 = (sumOccupationClerkQ5 / occupationClerkDataQ5Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageOccupationClerkQ5);
document.getElementById("occupationClerkDataQ5").innerHTML = averageOccupationClerkQ5; // 結果画面への表示


// Q6_人間関係
const occupationClerkDataQ6Arr = []; //occupationClerkDataのQ6を入れる箱
allData.forEach(x => {
    if (x.GetDataOccupation === "事務") {
        occupationClerkData.push(x);  //"事務"を選択した回答者のデータ取り出し
        const occupationClerkAnswerQ6 = x.GetDataQ6; //ageDataの中のQ6の値を取得
        occupationClerkDataQ6Arr.push(occupationClerkAnswerQ6);
    }
});
console.log(occupationClerkDataQ6Arr);
let sumOccupationClerkQ6 = occupationClerkDataQ6Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageOccupationClerkQ6 = (sumOccupationClerkQ6 / occupationClerkDataQ6Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageOccupationClerkQ6);
document.getElementById("occupationClerkDataQ6").innerHTML = averageOccupationClerkQ6; // 結果画面への表示


// Q7_理念への共感
const occupationClerkDataQ7Arr = []; //occupationClerkDataのQ7を入れる箱
allData.forEach(x => {
    if (x.GetDataOccupation === "事務") {
        occupationClerkData.push(x);  //"事務"を選択した回答者のデータ取り出し
        const occupationClerkAnswerQ7 = x.GetDataQ7; //ageDataの中のQ7の値を取得
        occupationClerkDataQ7Arr.push(occupationClerkAnswerQ7);
    }
});
console.log(occupationClerkDataQ7Arr);
let sumOccupationClerkQ7 = occupationClerkDataQ7Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageOccupationClerkQ7 = (sumOccupationClerkQ7 / occupationClerkDataQ7Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageOccupationClerkQ7);
document.getElementById("occupationClerkDataQ7").innerHTML = averageOccupationClerkQ7; // 結果画面への表示





// -----勤続年数_半年未満-----

const length1Data = [];

// Q2_労働時間
const length1DataQ2Arr = []; //length1DataのQ2を入れる箱
allData.forEach(x => {
    if (x.GetDataLength === "1年未満") {
        length1Data.push(x);  //"1年未満"を選択した回答者のデータ取り出し
        const length1AnswerQ2 = x.GetDataQ2; //ageDataの中のQ2の値を取得
        length1DataQ2Arr.push(length1AnswerQ2);
    }
});
console.log(length1DataQ2Arr);
let sumLength1Q2 = length1DataQ2Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageLength1Q2 = (sumLength1Q2 / length1DataQ2Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageLength1Q2);
document.getElementById("length1DataQ2").innerHTML = averageLength1Q2; // 結果画面への表示


// Q3_報酬
const length1DataQ3Arr = []; //length1DataのQ3を入れる箱
allData.forEach(x => {
    if (x.GetDataLength === "1年未満") {
        length1Data.push(x);  //"1年未満"を選択した回答者のデータ取り出し
        const length1AnswerQ3 = x.GetDataQ3; //ageDataの中のQ3の値を取得
        length1DataQ3Arr.push(length1AnswerQ3);
    }
});
console.log(length1DataQ3Arr);
let sumLength1Q3 = length1DataQ3Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageLength1Q3 = (sumLength1Q3 / length1DataQ3Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageLength1Q3);
document.getElementById("length1DataQ3").innerHTML = averageLength1Q3; // 結果画面への表示


// Q4_仕事のやりがい
const length1DataQ4Arr = []; //length1DataのQ4を入れる箱
allData.forEach(x => {
    if (x.GetDataLength === "1年未満") {
        length1Data.push(x);  //"1年未満"を選択した回答者のデータ取り出し
        const length1AnswerQ4 = x.GetDataQ4; //ageDataの中のQ4の値を取得
        length1DataQ4Arr.push(length1AnswerQ4);
    }
});
console.log(length1DataQ4Arr);
let sumLength1Q4 = length1DataQ4Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageLength1Q4 = (sumLength1Q4 / length1DataQ4Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageLength1Q4);
document.getElementById("length1DataQ4").innerHTML = averageLength1Q4; // 結果画面への表示


// Q5_自己成長
const length1DataQ5Arr = []; //length1DataのQ5を入れる箱
allData.forEach(x => {
    if (x.GetDataLength === "1年未満") {
        length1Data.push(x);  //"1年未満"を選択した回答者のデータ取り出し
        const length1AnswerQ5 = x.GetDataQ5; //ageDataの中のQ5の値を取得
        length1DataQ5Arr.push(length1AnswerQ5);
    }
});
console.log(length1DataQ5Arr);
let sumLength1Q5 = length1DataQ5Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageLength1Q5 = (sumLength1Q5 / length1DataQ5Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageLength1Q5);
document.getElementById("length1DataQ5").innerHTML = averageLength1Q5; // 結果画面への表示


// Q6_人間関係
const length1DataQ6Arr = []; //length1DataのQ6を入れる箱
allData.forEach(x => {
    if (x.GetDataLength === "1年未満") {
        length1Data.push(x);  //"1年未満"を選択した回答者のデータ取り出し
        const length1AnswerQ6 = x.GetDataQ6; //ageDataの中のQ6の値を取得
        length1DataQ6Arr.push(length1AnswerQ6);
    }
});
console.log(length1DataQ6Arr);
let sumLength1Q6 = length1DataQ6Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageLength1Q6 = (sumLength1Q6 / length1DataQ6Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageLength1Q6);
document.getElementById("length1DataQ6").innerHTML = averageLength1Q6; // 結果画面への表示


// Q7_理念への共感
const length1DataQ7Arr = []; //length1DataのQ7を入れる箱
allData.forEach(x => {
    if (x.GetDataLength === "1年未満") {
        length1Data.push(x);  //"1年未満"を選択した回答者のデータ取り出し
        const length1AnswerQ7 = x.GetDataQ7; //ageDataの中のQ7の値を取得
        length1DataQ7Arr.push(length1AnswerQ7);
    }
});
console.log(length1DataQ7Arr);
let sumLength1Q7 = length1DataQ7Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageLength1Q7 = (sumLength1Q7 / length1DataQ7Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageLength1Q7);
document.getElementById("length1DataQ7").innerHTML = averageLength1Q7; // 結果画面への表示



// -----勤続年数_1-2年-----

const length12Data = [];

// Q2_労働時間
const length12DataQ2Arr = []; //length12DataのQ2を入れる箱
allData.forEach(x => {
    if (x.GetDataLength === "1-2年") {
        length12Data.push(x);  //"1-2年"を選択した回答者のデータ取り出し
        const length12AnswerQ2 = x.GetDataQ2; //ageDataの中のQ2の値を取得
        length12DataQ2Arr.push(length12AnswerQ2);
    }
});
console.log(length12DataQ2Arr);
let sumLength12Q2 = length12DataQ2Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageLength12Q2 = (sumLength12Q2 / length12DataQ2Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageLength12Q2);
document.getElementById("length12DataQ2").innerHTML = averageLength12Q2; // 結果画面への表示


// Q3_報酬
const length12DataQ3Arr = []; //length12DataのQ3を入れる箱
allData.forEach(x => {
    if (x.GetDataLength === "1-2年") {
        length12Data.push(x);  //"1-2年"を選択した回答者のデータ取り出し
        const length12AnswerQ3 = x.GetDataQ3; //ageDataの中のQ3の値を取得
        length12DataQ3Arr.push(length12AnswerQ3);
    }
});
console.log(length12DataQ3Arr);
let sumLength12Q3 = length12DataQ3Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageLength12Q3 = (sumLength12Q3 / length12DataQ3Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageLength12Q3);
document.getElementById("length12DataQ3").innerHTML = averageLength12Q3; // 結果画面への表示


// Q4_仕事のやりがい
const length12DataQ4Arr = []; //length12DataのQ4を入れる箱
allData.forEach(x => {
    if (x.GetDataLength === "1-2年") {
        length12Data.push(x);  //"1-2年"を選択した回答者のデータ取り出し
        const length12AnswerQ4 = x.GetDataQ4; //ageDataの中のQ4の値を取得
        length12DataQ4Arr.push(length12AnswerQ4);
    }
});
console.log(length12DataQ4Arr);
let sumLength12Q4 = length12DataQ4Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageLength12Q4 = (sumLength12Q4 / length12DataQ4Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageLength12Q4);
document.getElementById("length12DataQ4").innerHTML = averageLength12Q4; // 結果画面への表示


// Q5_自己成長
const length12DataQ5Arr = []; //length12DataのQ5を入れる箱
allData.forEach(x => {
    if (x.GetDataLength === "1-2年") {
        length12Data.push(x);  //"1-2年"を選択した回答者のデータ取り出し
        const length12AnswerQ5 = x.GetDataQ5; //ageDataの中のQ5の値を取得
        length12DataQ5Arr.push(length12AnswerQ5);
    }
});
console.log(length12DataQ5Arr);
let sumLength12Q5 = length12DataQ5Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageLength12Q5 = (sumLength12Q5 / length12DataQ5Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageLength12Q5);
document.getElementById("length12DataQ5").innerHTML = averageLength12Q5; // 結果画面への表示


// Q6_人間関係
const length12DataQ6Arr = []; //length12DataのQ6を入れる箱
allData.forEach(x => {
    if (x.GetDataLength === "1-2年") {
        length12Data.push(x);  //"1-2年"を選択した回答者のデータ取り出し
        const length12AnswerQ6 = x.GetDataQ6; //ageDataの中のQ6の値を取得
        length12DataQ6Arr.push(length12AnswerQ6);
    }
});
console.log(length12DataQ6Arr);
let sumLength12Q6 = length12DataQ6Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageLength12Q6 = (sumLength12Q6 / length12DataQ6Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageLength12Q6);
document.getElementById("length12DataQ6").innerHTML = averageLength12Q6; // 結果画面への表示


// Q7_理念への共感
const length12DataQ7Arr = []; //length12DataのQ7を入れる箱
allData.forEach(x => {
    if (x.GetDataLength === "1-2年") {
        length12Data.push(x);  //"1-2年"を選択した回答者のデータ取り出し
        const length12AnswerQ7 = x.GetDataQ7; //ageDataの中のQ7の値を取得
        length12DataQ7Arr.push(length12AnswerQ7);
    }
});
console.log(length12DataQ7Arr);
let sumLength12Q7 = length12DataQ7Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageLength12Q7 = (sumLength12Q7 / length12DataQ7Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageLength12Q7);
document.getElementById("length12DataQ7").innerHTML = averageLength12Q7; // 結果画面への表示



// -----勤続年数_2-3年-----

const length23Data = [];

// Q2_労働時間
const length23DataQ2Arr = []; //length23DataのQ2を入れる箱
allData.forEach(x => {
    if (x.GetDataLength === "2-3年") {
        length23Data.push(x);  //"2-3年"を選択した回答者のデータ取り出し
        const length23AnswerQ2 = x.GetDataQ2; //ageDataの中のQ2の値を取得
        length23DataQ2Arr.push(length23AnswerQ2);
    }
});
console.log(length23DataQ2Arr);
let sumLength23Q2 = length23DataQ2Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageLength23Q2 = (sumLength23Q2 / length23DataQ2Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageLength23Q2);
document.getElementById("length23DataQ2").innerHTML = averageLength23Q2; // 結果画面への表示


// Q3_報酬
const length23DataQ3Arr = []; //length23DataのQ3を入れる箱
allData.forEach(x => {
    if (x.GetDataLength === "2-3年") {
        length23Data.push(x);  //"2-3年"を選択した回答者のデータ取り出し
        const length23AnswerQ3 = x.GetDataQ3; //ageDataの中のQ3の値を取得
        length23DataQ3Arr.push(length23AnswerQ3);
    }
});
console.log(length23DataQ3Arr);
let sumLength23Q3 = length23DataQ3Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageLength23Q3 = (sumLength23Q3 / length23DataQ3Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageLength23Q3);
document.getElementById("length23DataQ3").innerHTML = averageLength23Q3; // 結果画面への表示


// Q4_仕事のやりがい
const length23DataQ4Arr = []; //length23DataのQ4を入れる箱
allData.forEach(x => {
    if (x.GetDataLength === "2-3年") {
        length23Data.push(x);  //"2-3年"を選択した回答者のデータ取り出し
        const length23AnswerQ4 = x.GetDataQ4; //ageDataの中のQ4の値を取得
        length23DataQ4Arr.push(length23AnswerQ4);
    }
});
console.log(length23DataQ4Arr);
let sumLength23Q4 = length23DataQ4Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageLength23Q4 = (sumLength23Q4 / length23DataQ4Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageLength23Q4);
document.getElementById("length23DataQ4").innerHTML = averageLength23Q4; // 結果画面への表示


// Q5_自己成長
const length23DataQ5Arr = []; //length23DataのQ5を入れる箱
allData.forEach(x => {
    if (x.GetDataLength === "2-3年") {
        length23Data.push(x);  //"2-3年"を選択した回答者のデータ取り出し
        const length23AnswerQ5 = x.GetDataQ5; //ageDataの中のQ5の値を取得
        length23DataQ5Arr.push(length23AnswerQ5);
    }
});
console.log(length23DataQ5Arr);
let sumLength23Q5 = length23DataQ5Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageLength23Q5 = (sumLength23Q5 / length23DataQ5Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageLength23Q5);
document.getElementById("length23DataQ5").innerHTML = averageLength23Q5; // 結果画面への表示


// Q6_人間関係
const length23DataQ6Arr = []; //length23DataのQ6を入れる箱
allData.forEach(x => {
    if (x.GetDataLength === "2-3年") {
        length23Data.push(x);  //"2-3年"を選択した回答者のデータ取り出し
        const length23AnswerQ6 = x.GetDataQ6; //ageDataの中のQ6の値を取得
        length23DataQ6Arr.push(length23AnswerQ6);
    }
});
console.log(length23DataQ6Arr);
let sumLength23Q6 = length23DataQ6Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageLength23Q6 = (sumLength23Q6 / length23DataQ6Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageLength23Q6);
document.getElementById("length23DataQ6").innerHTML = averageLength23Q6; // 結果画面への表示


// Q7_理念への共感
const length23DataQ7Arr = []; //length23DataのQ7を入れる箱
allData.forEach(x => {
    if (x.GetDataLength === "2-3年") {
        length23Data.push(x);  //"2-3年"を選択した回答者のデータ取り出し
        const length23AnswerQ7 = x.GetDataQ7; //ageDataの中のQ7の値を取得
        length23DataQ7Arr.push(length23AnswerQ7);
    }
});
console.log(length23DataQ7Arr);
let sumLength23Q7 = length23DataQ7Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageLength23Q7 = (sumLength23Q7 / length23DataQ7Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageLength23Q7);
document.getElementById("length23DataQ7").innerHTML = averageLength23Q7; // 結果画面への表示



// -----勤続年数_3年以上-----

const length3Data = [];

// Q2_労働時間
const length3DataQ2Arr = []; //length3DataのQ2を入れる箱
allData.forEach(x => {
    if (x.GetDataLength === "3年以上") {
        length3Data.push(x);  //"3年以上"を選択した回答者のデータ取り出し
        const length3AnswerQ2 = x.GetDataQ2; //ageDataの中のQ2の値を取得
        length3DataQ2Arr.push(length3AnswerQ2);
    }
});
console.log(length3DataQ2Arr);
let sumLength3Q2 = length3DataQ2Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageLength3Q2 = (sumLength3Q2 / length3DataQ2Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageLength3Q2);
document.getElementById("length3DataQ2").innerHTML = averageLength3Q2; // 結果画面への表示


// Q3_報酬
const length3DataQ3Arr = []; //length3DataのQ3を入れる箱
allData.forEach(x => {
    if (x.GetDataLength === "3年以上") {
        length3Data.push(x);  //"3年以上"を選択した回答者のデータ取り出し
        const length3AnswerQ3 = x.GetDataQ3; //ageDataの中のQ3の値を取得
        length3DataQ3Arr.push(length3AnswerQ3);
    }
});
console.log(length3DataQ3Arr);
let sumLength3Q3 = length3DataQ3Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageLength3Q3 = (sumLength3Q3 / length3DataQ3Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageLength3Q3);
document.getElementById("length3DataQ3").innerHTML = averageLength3Q3; // 結果画面への表示


// Q4_仕事のやりがい
const length3DataQ4Arr = []; //length3DataのQ4を入れる箱
allData.forEach(x => {
    if (x.GetDataLength === "3年以上") {
        length3Data.push(x);  //"3年以上"を選択した回答者のデータ取り出し
        const length3AnswerQ4 = x.GetDataQ4; //ageDataの中のQ4の値を取得
        length3DataQ4Arr.push(length3AnswerQ4);
    }
});
console.log(length3DataQ4Arr);
let sumLength3Q4 = length3DataQ4Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageLength3Q4 = (sumLength3Q4 / length3DataQ4Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageLength3Q4);
document.getElementById("length3DataQ4").innerHTML = averageLength3Q4; // 結果画面への表示


// Q5_自己成長
const length3DataQ5Arr = []; //length3DataのQ5を入れる箱
allData.forEach(x => {
    if (x.GetDataLength === "3年以上") {
        length3Data.push(x);  //"3年以上"を選択した回答者のデータ取り出し
        const length3AnswerQ5 = x.GetDataQ5; //ageDataの中のQ5の値を取得
        length3DataQ5Arr.push(length3AnswerQ5);
    }
});
console.log(length3DataQ5Arr);
let sumLength3Q5 = length3DataQ5Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageLength3Q5 = (sumLength3Q5 / length3DataQ5Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageLength3Q5);
document.getElementById("length3DataQ5").innerHTML = averageLength3Q5; // 結果画面への表示


// Q6_人間関係
const length3DataQ6Arr = []; //length3DataのQ6を入れる箱
allData.forEach(x => {
    if (x.GetDataLength === "3年以上") {
        length3Data.push(x);  //"3年以上"を選択した回答者のデータ取り出し
        const length3AnswerQ6 = x.GetDataQ6; //ageDataの中のQ6の値を取得
        length3DataQ6Arr.push(length3AnswerQ6);
    }
});
console.log(length3DataQ6Arr);
let sumLength3Q6 = length3DataQ6Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageLength3Q6 = (sumLength3Q6 / length3DataQ6Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageLength3Q6);
document.getElementById("length3DataQ6").innerHTML = averageLength3Q6; // 結果画面への表示


// Q7_理念への共感
const length3DataQ7Arr = []; //length3DataのQ7を入れる箱
allData.forEach(x => {
    if (x.GetDataLength === "3年以上") {
        length3Data.push(x);  //"3年以上"を選択した回答者のデータ取り出し
        const length3AnswerQ7 = x.GetDataQ7; //ageDataの中のQ7の値を取得
        length3DataQ7Arr.push(length3AnswerQ7);
    }
});
console.log(length3DataQ7Arr);
let sumLength3Q7 = length3DataQ7Arr.reduce((a, b) => { //回答の値の総和
    return a + b;
});
const averageLength3Q7 = (sumLength3Q7 / length3DataQ7Arr.length).toFixed(1) //平均点の算出&小数第1位までで四捨五入
console.log(averageLength3Q7);
document.getElementById("length3DataQ7").innerHTML = averageLength3Q7; // 結果画面への表示
