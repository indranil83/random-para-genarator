const input=document.getElementById("numofwords");
const container=document.querySelector(".container");
const generateword=(n)=>{
    let text="";
   const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   for (let i=0;i<n;++i){
    const random=(Math.random()*25).toFixed(0);
    text+=letters[random];
   }
   return text
};


const generatepara=()=>{
     const numofwords= Number(input.value);


    const para=document.createElement("p");
    let data="";
   for (let i=0;i<numofwords;++i){
    const randomNumber=(Math.random()*15).toFixed(0);
    data+=generateword(randomNumber);
    data+=" ";
   }
 

    para.innerText=data;
    para.setAttribute("class","paras");
    container.append(para);

}
