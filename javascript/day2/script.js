// localStorage.setItem("name",001);
// // SessionStorage.setItem("name","ajil")
// console.log(typeof(localStorage.getItem("name")));


education= [
    {
        level : '10th',
        ins_name : 'AHSS',
        passout : 2017,
        mark_per : 82,
        place : 'kul'
    },
    {
        level : '12th',
        ins_name : 'AHSS',
        passout : 2024,
        mark_per : 75,
        place : 'kulasekharam'

    },
    {
        level : 'B.E',
        ins_name : 'Ponjesly',
        passout : 2026,
        mark_per : 80,
        place : 'nagercoil'
    }]
    var conv=JSON.stringify(education);
    localStorage.setItem("list",conv);
    console.log(localStorage.getItem("list"));


    var list=["a","b","c"];
    var string_list=JSON.stringify(list);
    localStorage.setItem("alp",string_list);
    console.log(localStorage.getItem("alp"));

    var list_1=localStorage.getItem("alp");
    var conv_list=JSON.parse(list_1);
    console.log(conv_list[1])