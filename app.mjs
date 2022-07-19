let networkNames = ["glo", "9mobile", "airtel", "mtn"];
let networks = {
  "glo": ["0705","0805","0807","0811","0815","0905"],
  "airtel": ["0701","0708","0802","0808","0812","0902","0907","0901"],
  "mtn": ["0703",'0706',"0803","0806","0810","0813","0814","0816","0903","0906"],
  "9mobile": ["0809","0817","0818", "0908","0909"]
}
let images = {
  "glo": "images/glo.png",
  "airtel": "images/airtel.svg",
  "mtn": "images/mtn.jpeg",
  "9mobile": "images/9mobile.png",
  "unknown": "images/question.png"
}
let logo = document.querySelector("#logo");
logo.setAttribute("width", (logo.parentElement.clientHeight-4)+"px");
function watchInput(){
  let inp = document.querySelector("#tel");
  inp.addEventListener("input", function(e){
    let value = `${this.value}`.replaceAll(" ","");
    let prefix = "";
    if (value.startsWith("0")){
     prefix += value.slice(0,4);
    }
    if (value.startsWith("+234")){
     prefix += ("0"+value.slice(4,7));
    }
    let found = false;
    for (let nw of networkNames){
      if (networks[nw].includes(prefix)){
        logo.setAttribute("src",images[nw]);
        logo.src = images[nw];
        console.log(prefix, nw);
        console.log(images[nw]);
        found ^=1;
      }
    }
    if (!found){
      logo.setAttribute("src", images['unknown']);
       // console.log(prefix)
    }
  })
}
function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
    watchInput();
  };
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //