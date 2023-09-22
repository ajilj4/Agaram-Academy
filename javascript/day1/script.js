var a="ajil";
console.log(typeof(a))
var b=5;
console.log(typeof(b))
var c=true;
console.log(typeof(c))
var d=0.03;
console.log(typeof(d))

my_resume=
    {
        name:"Ajil",
        email:"ajilj4@gmail.com",
        mobile:9361677048,
        soft_skills:["teamwork","communication"],
        hard_skills:["typing","photoshop"],
        education : [
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
            }],
        projects:"nil",
        experience:"fresher",
        hobbies:["playing","reading"],
        personal_details:{
            fathers_name:"Jayapaul",
            languages_known:["tamil","english"],
            dob:"19-11-2001",
            gender:"male",
            martial_status:"unmarried",
            address:"arasumood,kulasekharam,kanyakumari_dist"
        }
    }
    
my_resume.personal_details.languages_known[2]="malayalam"    
my_resume.state="tamilnadu" 
console.log(my_resume)

for (i=0;i<my_resume.education.length;i++){
    console.log(my_resume.education[i].place)
}

function resume(f){
    for(i=0;i<f.length;i++){
        console.log(i+1+".",f[i].level)
    }
}
resume(my_resume.education)


function resume(f){
    for(i=f.length-1;i>=0;i--){
        console.log(i+1+".",f[i].level)
    }
}
resume(my_resume.education)

// function resume(f,g){
//     for(i=0;i<f.length;i++){
//         console.log(i+1+".",f[i].g)
//     }
// }
// resume(my_resume.education,my_resume.education[i].level)
// var a=["mon","tue","wed"]
// console.log(a[3])
// console.log(a.length)
// console.log(a[a.length-1]) /*o/p wed*/ 
// a.pop();
// console.log(a)
// for(i=0;i<a.length;i++){
//     console.log(a[i])
// }


// for (var i=0;i>-10;i--){
//     console.log(i)
// }

localStorage.setItem("name",001);
// SessionStorage.setItem("name","ajil")
console.log(typeof(localStorage.getItem("name")));