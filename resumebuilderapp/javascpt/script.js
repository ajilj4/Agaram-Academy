

let resume_users = {};
let each_tmp={}

function inp(a, detail) {
    if (detail) {
        if (resume_users[detail]) {
            resume_users[detail] = { ...resume_users[detail] }
        }
        else {
            resume_users[detail] = {}
        }
        resume_users[detail][a.name] = a.value
    }
    else {
        resume_users[a.name] = a.value
    }

    dispaly()
}

function adds(name, id,outputid) {
    console.log(id)
    if (!resume_users[name]) {
        resume_users[name] = []
    }
    resume_users[name].push(document.getElementById(id).value)
    document.getElementById(id).value = ""
    dispaly()

    let listing = "";
    for (i = 0; i < resume_users[name].length; i++) {
        listing = listing + `<p id="id+'${id[i]}'">${resume_users[name][i]}<button type="button" onclick=remove('${resume_users[name]}','${i}','${id}')>x</button></p>`
    }

    document.getElementById(outputid).innerHTML = listing;
    
}

function dispaly() {
    document.getElementById("display").innerHTML = JSON.stringify(resume_users, undefined, 2)
}

console.log(resume_users)


function mulData1(p_key){
    if(!resume_users[p_key]){
        resume_users[p_key]=[]
    }
    resume_users[p_key].push(each_tmp)
    each_tmp={}
    dispaly()
}

function mulData(ele){
    each_tmp[ele.name]=ele.value;
}




                