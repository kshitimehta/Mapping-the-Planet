'use strict';

    const inputs = document.getElementsByTagName('input');
    let EF_values = {EF_electricity: 0.7, EF_gas: 6.6, EF_vehicle: 0.037, EF_meat: 0.03644, EF_vegetable:0.003, EF_flying:0.115};
    
    for (let input of inputs) {
      input.addEventListener("keyup", ()=>{
            document.getElementById("result").innerHTML = calculate_cacbon() ;
      });   
    }

    function calculate_cacbon(){
        let result = 0;
        let electricity = document.getElementById("electricity").value;
        let gas = document.getElementById("gas").value;
        let vehicle = document.getElementById("vehicle").value;
        let meat = document.getElementById("meat").value;
        let vegetable = document.getElementById("vegetable").value;
        let flying = document.getElementById("flying").value;
        result += EF_values["EF_electricity"]*electricity + EF_values["EF_gas"]*gas;
        result += EF_values["EF_vehicle"]*vehicle + EF_values["EF_meat"]*meat*365 + EF_values["EF_vegetable"]*vegetable*365;
        result += EF_values["EF_flying"]*flying;
        return result.toFixed(3);
    }
   
    