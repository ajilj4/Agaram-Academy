let resume_user= {};
let temp={};

function getdata(user,user_data){
    if(user_data){
        if(resume_user[user_data]){
            resume_user[user_data]={...resume_user[user_data]}
        }
        else{
            resume_user[user_data]={}
        }
        resume_user[user_data][user.name]=user.value
    }
    else{
        resume_user[user.name]=user.value
    }
    display()
}

function addmultidata(name,id,tbl_id,ary_obj){
    if(ary_obj){
        console.log("ok")
        if(!resume_user[ary_obj]){
            resume_user[ary_obj]=[]
        }
        resume_user[ary_obj].push(temp)
        console.log(resume_user)
        let keys=Object.keys(temp)
        for(i=0;i<keys.length;i++){
            document.getElementById(keys[i]).value=""
        }
        temp={}
        display()
        htmldata=""
        for(i=0;i<resume_user[ary_obj].length;i++){
            console.log(resume_user[ary_obj][i])
            htmldata=htmldata+`<div id="${resume_user[ary_obj][i]}"><button type="button" onclick="delet('${[i]}','${ary_obj}')" class="btn btn-primary">
            remove</button><li style="display:inline-block;padding:10px">${resume_user[ary_obj][i]}</li></div>`
        }
        console.log(htmldata)
        document.getElementById(tbl_id).innerHTML=htmldata
    }
    else{
        if(!resume_user[name]){
            resume_user[name]=[]
        }
        resume_user[name].push(document.getElementById(id).value)
        document.getElementById(id).value=""
        display()
        htmldata=""
        for(i=0;i<resume_user[name].length;i++){
            htmldata=htmldata+`<div id="${name[i]}"><button type="button" onclick="delet('${[i]}','${name}')" class="btn btn-primary">
            remove</button><li style="display:inline-block;padding:10px">${resume_user[name][i]}</li></div>`
        }
        console.log(htmldata)
        document.getElementById(tbl_id).innerHTML=htmldata}
}

function delet(i,name){
    // console.log(name)
    resume_user[name].splice(i,1)
    opt=document.getElementById(`${name[i]}`)
    opt.remove()
    display()
}

function getmultdata(item){
    temp[item.name]=item.value
}

function display(){
    document.getElementById("display").innerHTML=JSON.stringify(resume_user,undefined,2)
}

function prnt(){
    window.print()
}