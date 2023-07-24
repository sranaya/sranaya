let id=document.getElementById("id1");
let cost=document.getElementById("cost1");
let item=document.getElementById("item");
let dateandtime=document.getElementById("dateandtime");

let arraylist=[];

function Add(){
    let newitem={
        id : id.value,
        cost : cost.value,
        item : item.value,
        dateandtime : dateandtime.value
    }
    arraylist.push(newitem);
}

      function createui(each){
        let {id,cost,item,dateandtime} = each;
        const html = `<ul>
                        <li>${id}</li>
                        <li>${cost}</li>
                        <li>${item}</li>
                        <li>${dateandtime}</li>
                        </ul>`
        document.getElementById("lists").innerHTML += html;
      }

      function showlist() {
        document.getElementById("lists").innerHTML=""
        for(each of arraylist) {
            createui(each)
        }
      }
      function Delete() {
        document.getElementById("lists").innerHTML=""
        for(each of arraylist) {
            createui(each)
        }
      }