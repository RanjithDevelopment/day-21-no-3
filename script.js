// here i use the async await function  getdisneydetails to fetch details from disney APi
async function getdisneydetails() {
    // fetch from the API url
    let fetchdetails = await fetch("https://api.disneyapi.dev/characters");
    // converting a fetch response in json format and store it in a varible
    let result = await fetchdetails.json();
    let array = result.data;
    for (var i = 0; i <= array.length - 1; i++) {
        // if you dont kow the character names spelling you can pick it from here

        console.log(array[i].name);
        let inputvalue = document.querySelector(".inputfields").value;
        if (inputvalue == array[i].name) {
            let div = document.createElement("div");
            div.setAttribute("class", "resultcontainer");
            div.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
<div class="row no-gutters">
  <div class="col-md-4">
    <img src=${array[i].imageUrl} alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <h5 class="card-title">CHARACTER NAME :</h5>
    <hr>
      <h5 class="card-title">${array[i].name}</h5>
      
    </div>
  </div>
</div>
</div>`;
            var a = document.querySelector(".container");
            a.append(div);
        }
    }
}
async function getnames(){
    let fetchnames = await fetch("https://api.disneyapi.dev/characters");
    // converting a fetch response in json format and store it in a varible
    let result1 = await fetchnames.json();
    let array1 = result1.data;
    for (var i = 0; i <= array1.length - 1; i++) {
        // if you dont kow the character names spelling you can pick it from here
        console.log(array1[i].name);
        let div1 = document.createElement("div");
        div1.setAttribute("class", "resultcontainer");
        div1.innerHTML = `${array1[i].name}`;
        var b = document.querySelector(".container1");
        b.append(div1);
    }
    
}