

//------------------------------総合満足度------------------------------

// グラフdata用
const GetDataQ2 = document.getElementById("GetDataQ2").textContent;
const GetDataQ3 = document.getElementById("GetDataQ3").textContent;
const GetDataQ4 = document.getElementById("GetDataQ4").textContent;
const GetDataQ5 = document.getElementById("GetDataQ5").textContent;
const GetDataQ6 = document.getElementById("GetDataQ6").textContent;
const GetDataQ7 = document.getElementById("GetDataQ7").textContent;

// グラフ
const ctx = document.getElementById('chart1');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['労働時間', '報酬', '仕事のやりがい', '自己成長', '人間関係', '理念への共感'],
        datasets: [{
            label: '総合満足度',
            data: [GetDataQ2, GetDataQ3, GetDataQ4, GetDataQ5, GetDataQ6, GetDataQ7],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                max: 10
            }
        }
    }
});



//------------------------------属性ごとの満足度------------------------------

// ----------性別_女性----------
// グラフdata用
const genderFemaleDataQ2 = document.getElementById("genderFemaleDataQ2").textContent;
const genderFemaleDataQ3 = document.getElementById("genderFemaleDataQ3").textContent;
const genderFemaleDataQ4 = document.getElementById("genderFemaleDataQ4").textContent;
const genderFemaleDataQ5 = document.getElementById("genderFemaleDataQ5").textContent;
const genderFemaleDataQ6 = document.getElementById("genderFemaleDataQ6").textContent;
const genderFemaleDataQ7 = document.getElementById("genderFemaleDataQ7").textContent;

// グラフ
const ctx2 = document.getElementById('chartFemale');
new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['労働時間', '報酬', '仕事のやりがい', '自己成長', '人間関係', '理念への共感'],
        datasets: [{
            label: '女性',
            data: [genderFemaleDataQ2, genderFemaleDataQ3, genderFemaleDataQ4, genderFemaleDataQ5, genderFemaleDataQ6, genderFemaleDataQ7],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                max: 10
            }
        }
    }
});



// ----------性別_男性----------
// グラフdata用
const genderMaleDataQ2 = document.getElementById("genderMaleDataQ2").textContent;
const genderMaleDataQ3 = document.getElementById("genderMaleDataQ3").textContent;
const genderMaleDataQ4 = document.getElementById("genderMaleDataQ4").textContent;
const genderMaleDataQ5 = document.getElementById("genderMaleDataQ5").textContent;
const genderMaleDataQ6 = document.getElementById("genderMaleDataQ6").textContent;
const genderMaleDataQ7 = document.getElementById("genderMaleDataQ7").textContent;

// グラフ
const ctx3 = document.getElementById('chartMale');
new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['労働時間', '報酬', '仕事のやりがい', '自己成長', '人間関係', '理念への共感'],
        datasets: [{
            label: '男性',
            data: [genderMaleDataQ2, genderMaleDataQ3, genderMaleDataQ4, genderMaleDataQ5, genderMaleDataQ6, genderMaleDataQ7],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                max: 10
            }
        }
    }
});



// ----------年齢_20代----------
// グラフdata用
const age20DataQ2 = document.getElementById("age20DataQ2").textContent;
const age20DataQ3 = document.getElementById("age20DataQ3").textContent;
const age20DataQ4 = document.getElementById("age20DataQ4").textContent;
const age20DataQ5 = document.getElementById("age20DataQ5").textContent;
const age20DataQ6 = document.getElementById("age20DataQ6").textContent;
const age20DataQ7 = document.getElementById("age20DataQ7").textContent;

// グラフ
const ctx4 = document.getElementById('chart20');
new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['労働時間', '報酬', '仕事のやりがい', '自己成長', '人間関係', '理念への共感'],
        datasets: [{
            label: '20代',
            data: [age20DataQ2, age20DataQ3, age20DataQ4, age20DataQ5, age20DataQ6, age20DataQ7],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                max: 10
            }
        }
    }
});



// ----------年齢_30代----------
// グラフdata用
const age30DataQ2 = document.getElementById("age30DataQ2").textContent;
const age30DataQ3 = document.getElementById("age30DataQ3").textContent;
const age30DataQ4 = document.getElementById("age30DataQ4").textContent;
const age30DataQ5 = document.getElementById("age30DataQ5").textContent;
const age30DataQ6 = document.getElementById("age30DataQ6").textContent;
const age30DataQ7 = document.getElementById("age30DataQ7").textContent;

// グラフ
const ctx5 = document.getElementById('chart30');
new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['労働時間', '報酬', '仕事のやりがい', '自己成長', '人間関係', '理念への共感'],
        datasets: [{
            label: '30代',
            data: [age30DataQ2, age30DataQ3, age30DataQ4, age30DataQ5, age30DataQ6, age30DataQ7],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                max: 10
            }
        }
    }
});



// ----------年齢_40代----------
// グラフdata用
const age40DataQ2 = document.getElementById("age40DataQ2").textContent;
const age40DataQ3 = document.getElementById("age40DataQ3").textContent;
const age40DataQ4 = document.getElementById("age40DataQ4").textContent;
const age40DataQ5 = document.getElementById("age40DataQ5").textContent;
const age40DataQ6 = document.getElementById("age40DataQ6").textContent;
const age40DataQ7 = document.getElementById("age40DataQ7").textContent;

// グラフ
const ctx6 = document.getElementById('chart40');
new Chart(ctx6, {
    type: 'bar',
    data: {
        labels: ['労働時間', '報酬', '仕事のやりがい', '自己成長', '人間関係', '理念への共感'],
        datasets: [{
            label: '40代',
            data: [age40DataQ2, age40DataQ3, age40DataQ4, age40DataQ5, age40DataQ6, age40DataQ7],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                max: 10
            }
        }
    }
});



// ----------年齢_50代----------
// グラフdata用
const age50DataQ2 = document.getElementById("age50DataQ2").textContent;
const age50DataQ3 = document.getElementById("age50DataQ3").textContent;
const age50DataQ4 = document.getElementById("age50DataQ4").textContent;
const age50DataQ5 = document.getElementById("age50DataQ5").textContent;
const age50DataQ6 = document.getElementById("age50DataQ6").textContent;
const age50DataQ7 = document.getElementById("age50DataQ7").textContent;

// グラフ
const ctx7 = document.getElementById('chart50');
new Chart(ctx7, {
    type: 'bar',
    data: {
        labels: ['労働時間', '報酬', '仕事のやりがい', '自己成長', '人間関係', '理念への共感'],
        datasets: [{
            label: '50代',
            data: [age50DataQ2, age50DataQ3, age50DataQ4, age50DataQ5, age50DataQ6, age50DataQ7],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                max: 10
            }
        }
    }
});



// ----------所属_的場店----------
// グラフdata用
const affiliationMatobaDataQ2 = document.getElementById("affiliationMatobaDataQ2").textContent;
const affiliationMatobaDataQ3 = document.getElementById("affiliationMatobaDataQ3").textContent;
const affiliationMatobaDataQ4 = document.getElementById("affiliationMatobaDataQ4").textContent;
const affiliationMatobaDataQ5 = document.getElementById("affiliationMatobaDataQ5").textContent;
const affiliationMatobaDataQ6 = document.getElementById("affiliationMatobaDataQ6").textContent;
const affiliationMatobaDataQ7 = document.getElementById("affiliationMatobaDataQ7").textContent;

// グラフ
const ctx8 = document.getElementById('chartMatoba');
new Chart(ctx8, {
    type: 'bar',
    data: {
        labels: ['労働時間', '報酬', '仕事のやりがい', '自己成長', '人間関係', '理念への共感'],
        datasets: [{
            label: '的場店',
            data: [affiliationMatobaDataQ2, affiliationMatobaDataQ3, affiliationMatobaDataQ4, affiliationMatobaDataQ5, affiliationMatobaDataQ6, affiliationMatobaDataQ7],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                max: 10
            }
        }
    }
});



// ----------所属_次郎丸店----------
// グラフdata用
const affiliationJiromaruDataQ2 = document.getElementById("affiliationJiromaruDataQ2").textContent;
const affiliationJiromaruDataQ3 = document.getElementById("affiliationJiromaruDataQ3").textContent;
const affiliationJiromaruDataQ4 = document.getElementById("affiliationJiromaruDataQ4").textContent;
const affiliationJiromaruDataQ5 = document.getElementById("affiliationJiromaruDataQ5").textContent;
const affiliationJiromaruDataQ6 = document.getElementById("affiliationJiromaruDataQ6").textContent;
const affiliationJiromaruDataQ7 = document.getElementById("affiliationJiromaruDataQ7").textContent;

// グラフ
const ctx9 = document.getElementById('chartJiromaru');
new Chart(ctx9, {
    type: 'bar',
    data: {
        labels: ['労働時間', '報酬', '仕事のやりがい', '自己成長', '人間関係', '理念への共感'],
        datasets: [{
            label: '次郎丸店',
            data: [affiliationJiromaruDataQ2, affiliationJiromaruDataQ3, affiliationJiromaruDataQ4, affiliationJiromaruDataQ5, affiliationJiromaruDataQ6, affiliationJiromaruDataQ7],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                max: 10
            }
        }
    }
});



// ----------職種_看護師----------
// グラフdata用
const occupationNurseDataQ2 = document.getElementById("occupationNurseDataQ2").textContent;
const occupationNurseDataQ3 = document.getElementById("occupationNurseDataQ3").textContent;
const occupationNurseDataQ4 = document.getElementById("occupationNurseDataQ4").textContent;
const occupationNurseDataQ5 = document.getElementById("occupationNurseDataQ5").textContent;
const occupationNurseDataQ6 = document.getElementById("occupationNurseDataQ6").textContent;
const occupationNurseDataQ7 = document.getElementById("occupationNurseDataQ7").textContent;

// グラフ
const ctx10 = document.getElementById('chartNurse');
new Chart(ctx10, {
    type: 'bar',
    data: {
        labels: ['労働時間', '報酬', '仕事のやりがい', '自己成長', '人間関係', '理念への共感'],
        datasets: [{
            label: '看護師',
            data: [occupationNurseDataQ2, occupationNurseDataQ3, occupationNurseDataQ4, occupationNurseDataQ5, occupationNurseDataQ6, occupationNurseDataQ7],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                max: 10
            }
        }
    }
});



// ----------職種_セラピスト----------
// グラフdata用
const occupationTherapistDataQ2 = document.getElementById("occupationTherapistDataQ2").textContent;
const occupationTherapistDataQ3 = document.getElementById("occupationTherapistDataQ3").textContent;
const occupationTherapistDataQ4 = document.getElementById("occupationTherapistDataQ4").textContent;
const occupationTherapistDataQ5 = document.getElementById("occupationTherapistDataQ5").textContent;
const occupationTherapistDataQ6 = document.getElementById("occupationTherapistDataQ6").textContent;
const occupationTherapistDataQ7 = document.getElementById("occupationTherapistDataQ7").textContent;

// グラフ
const ctx11 = document.getElementById('chartTherapist');
new Chart(ctx11, {
    type: 'bar',
    data: {
        labels: ['労働時間', '報酬', '仕事のやりがい', '自己成長', '人間関係', '理念への共感'],
        datasets: [{
            label: 'セラピスト',
            data: [occupationTherapistDataQ2, occupationTherapistDataQ3, occupationTherapistDataQ4, occupationTherapistDataQ5, occupationTherapistDataQ6, occupationTherapistDataQ7],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                max: 10
            }
        }
    }
});



// ----------職種_事務----------
// グラフdata用
const occupationClerkDataQ2 = document.getElementById("occupationClerkDataQ2").textContent;
const occupationClerkDataQ3 = document.getElementById("occupationClerkDataQ3").textContent;
const occupationClerkDataQ4 = document.getElementById("occupationClerkDataQ4").textContent;
const occupationClerkDataQ5 = document.getElementById("occupationClerkDataQ5").textContent;
const occupationClerkDataQ6 = document.getElementById("occupationClerkDataQ6").textContent;
const occupationClerkDataQ7 = document.getElementById("occupationClerkDataQ7").textContent;

// グラフ
const ctx12 = document.getElementById('chartClerk');
new Chart(ctx12, {
    type: 'bar',
    data: {
        labels: ['労働時間', '報酬', '仕事のやりがい', '自己成長', '人間関係', '理念への共感'],
        datasets: [{
            label: '事務',
            data: [occupationClerkDataQ2, occupationClerkDataQ3, occupationClerkDataQ4, occupationClerkDataQ5, occupationClerkDataQ6, occupationClerkDataQ7],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                max: 10
            }
        }
    }
});



// ----------勤続年数_1年未満----------
// グラフdata用
const length1DataQ2 = document.getElementById("length1DataQ2").textContent;
const length1DataQ3 = document.getElementById("length1DataQ3").textContent;
const length1DataQ4 = document.getElementById("length1DataQ4").textContent;
const length1DataQ5 = document.getElementById("length1DataQ5").textContent;
const length1DataQ6 = document.getElementById("length1DataQ6").textContent;
const length1DataQ7 = document.getElementById("length1DataQ7").textContent;

// グラフ
const ctx13 = document.getElementById('chartLength1');
new Chart(ctx13, {
    type: 'bar',
    data: {
        labels: ['労働時間', '報酬', '仕事のやりがい', '自己成長', '人間関係', '理念への共感'],
        datasets: [{
            label: '1年未満',
            data: [length1DataQ2, length1DataQ3, length1DataQ4, length1DataQ5, length1DataQ6, length1DataQ7],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                max: 10
            }
        }
    }
});



// ----------勤続年数_1-2年----------
// グラフdata用
const length12DataQ2 = document.getElementById("length12DataQ2").textContent;
const length12DataQ3 = document.getElementById("length12DataQ3").textContent;
const length12DataQ4 = document.getElementById("length12DataQ4").textContent;
const length12DataQ5 = document.getElementById("length12DataQ5").textContent;
const length12DataQ6 = document.getElementById("length12DataQ6").textContent;
const length12DataQ7 = document.getElementById("length12DataQ7").textContent;

// グラフ
const ctx14 = document.getElementById('chartLength12');
new Chart(ctx14, {
    type: 'bar',
    data: {
        labels: ['労働時間', '報酬', '仕事のやりがい', '自己成長', '人間関係', '理念への共感'],
        datasets: [{
            label: '1-2年',
            data: [length12DataQ2, length12DataQ3, length12DataQ4, length12DataQ5, length12DataQ6, length12DataQ7],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                max: 10
            }
        }
    }
});



// ----------勤続年数_2-3年----------
// グラフdata用
const length23DataQ2 = document.getElementById("length23DataQ2").textContent;
const length23DataQ3 = document.getElementById("length23DataQ3").textContent;
const length23DataQ4 = document.getElementById("length23DataQ4").textContent;
const length23DataQ5 = document.getElementById("length23DataQ5").textContent;
const length23DataQ6 = document.getElementById("length23DataQ6").textContent;
const length23DataQ7 = document.getElementById("length23DataQ7").textContent;

// グラフ
const ctx15 = document.getElementById('chartLength23');
new Chart(ctx15, {
    type: 'bar',
    data: {
        labels: ['労働時間', '報酬', '仕事のやりがい', '自己成長', '人間関係', '理念への共感'],
        datasets: [{
            label: '2-3年',
            data: [length23DataQ2, length23DataQ3, length23DataQ4, length23DataQ5, length23DataQ6, length23DataQ7],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                max: 10
            }
        }
    }
});



// ----------勤続年数_3年以上----------
// グラフdata用
const length3DataQ2 = document.getElementById("length3DataQ2").textContent;
const length3DataQ3 = document.getElementById("length3DataQ3").textContent;
const length3DataQ4 = document.getElementById("length3DataQ4").textContent;
const length3DataQ5 = document.getElementById("length3DataQ5").textContent;
const length3DataQ6 = document.getElementById("length3DataQ6").textContent;
const length3DataQ7 = document.getElementById("length3DataQ7").textContent;

// グラフ
const ctx16 = document.getElementById('chartLength3');
new Chart(ctx16, {
    type: 'bar',
    data: {
        labels: ['労働時間', '報酬', '仕事のやりがい', '自己成長', '人間関係', '理念への共感'],
        datasets: [{
            label: '3年以上',
            data: [length3DataQ2, length3DataQ3, length3DataQ4, length3DataQ5, length3DataQ6, length3DataQ7],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                max: 10
            }
        }
    }
});
