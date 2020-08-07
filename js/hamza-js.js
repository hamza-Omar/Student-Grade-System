const calculate = () =>{
    let math = document.getElementById('math').value;
    let sci = document.getElementById('sci').value;
    let socio = document.getElementById('socio').value;
    let lan = document.getElementById('lan').value;
    let art = document.getElementById('art').value;
    let phy = document.getElementById('phy').value;
    let lang = document.getElementById('lang').value;
    
    let TotalNumber = parseFloat(math) + parseFloat(sci) + parseFloat(socio) + parseFloat(lan) + parseFloat(art) + parseFloat(phy) + parseFloat(lang);
    
    let percentage = Number((TotalNumber/700 * 100).toFixed(1));
    
    let grades = " ";
    if(percentage<=100 && percentage>= 80){
        grades = 'A';
    }else if(percentage<=79 && percentage>= 70){
        grades = 'B';
    }else if(percentage<=69 && percentage>= 60){
        grades = 'C';
    }else if(percentage<=59 && percentage>= 50){
        grades = 'D';
    }
    if(percentage<50){
        document.getElementById('Dataview').innerHTML=`Out of 700 total, you have got ${TotalNumber} <br> and secured percentage ${percentage}% \n
        \n You have failed in your Examination`;
    
}else     

    document.getElementById('Dataview').innerHTML=`Out of 700 total, you have got ${TotalNumber} \n and secured percentage ${percentage}% \n
    You are positioned at Grade ${grades}.`;
}