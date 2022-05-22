const vegetablesPromise = new Promise((resolve, reject)=>{
    let vegetablesArray = ["Tomato", "Cucumber","Carrot","Gamba","Lettuce","Onion","Corn","Mushrooms"];
    setTimeout(()=>{
        resolve(vegetablesArray);
    },3000);
});

async function salad(){
    console.log("Please wait for the data to upload");
    let vegetables= await vegetablesPromise;
    console.log("We were able to find the information please wait");
    vegetables.forEach(element => {
        console.log(element);
        let divSalad=document.createElement("div");
        document.body.appendChild(divSalad);
        divSalad.innerText+=element;
    });
}
salad()