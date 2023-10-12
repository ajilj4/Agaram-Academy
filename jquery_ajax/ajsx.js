function show_list(){
    $.ajax({
        type:"GET",
        url:"http://agaram.academy/api/action.php",
        data:{
          request : "get_user_resume",
          user : "ajiljv",
        },
        success: function(add){
              console.log(JSON.parse(add))
              let data=JSON.parse(add);
              console.log(data)
              let datas=JSON.parse(data.data[0].data)
              console.log(datas.user_name)
              
              let listing=""
              for (i=0;i<datas.length;i++){
                console.log(i)
                listing=listing + `
                <tr>
      
    </tr>

                `
              }
              document.getElementById("list_table").innerHTML=listing;
              console.log(listing)
        },
        error: function(err){
             alert("error")
        }
    }) 
}

// function show(a,b){
//     $.ajax({
//         type:"get",
//         url:"https://jsonplaceholder.typicode.com/comments?postId=1",
//         data:{},
//         success: function(add){
//               console.log(add)
//               let listing=""
//               document.getElementById('list_table').innerHTML=`<table class="table table-success table-striped">
//               <thead>
//               <tr>
//                 <th scope="col">userId</th>
//                 <th scope="col">id</th>
//                 <th scope="col">Title</th>
//               </tr>
//               <thead>
//               <tbody id="comment_list"><tbody></table>`
//               for (i=0;i<add.length;i++){
//                 listing=listing + `
//                 <tr>
//       <th scope="row" id='${add[i]}'>${add[i].postId}</th>
//       <td id='${add[i]}'>${add[i].id}</td>
//       <td id='${add[i]}'><button type="button" onclick="show(${[i]},${add[i].userId})">${add[i].name}</button></td>
//     </tr>

//                 `
//               }
//               document.getElementById("comment_list").innerHTML=listing;
//         },
//         error: function(err){
//              alert("error")
//         }
//     }) 
// }