var johnDetails = {
    name: 'John',
    bills: [124,48,268,180,42],
    calcTip: function(){
        this.tip = [];
        this.finalBill = [];
        var percentage;
        for(var i=0; i<this.bills.length;i++){ 
            var bill = this.bills[i];
            if(bill<50){
               percentage = bill*0.2;

            }else if(bill > 50 && bill <200){
                percentage = bill*0.15;
            }else{
                percentage = bill*0.1;
            }
           
            this.tip[i]= percentage;
           //this.tip[i] = bill * percentage;
           this.finalBill[i] = this.tip[i]+bill;       
         }
        
    }
}
johnDetails.calcTip();
console.log(johnDetails);


var markDetails = {
    name: 'Mark',
    markbills:[77,375,110,45],
    markcalcTip: function(){
        this.marktip=[];
        this.markfinalBill = [];
        var markpercentage;
        for(var i = 0; i<this.markbills.length;i++){
            var markbill =this.markbills[i];
            if(markbill<100){
                markpercentage = 0.2;
 
             }else if(markbill > 100 && markbill <300){
                markpercentage = 0.1;
             }else{
                markpercentage = 0.3;
             }
            
             //this.tip[i]= percentage;
            this.marktip[i] = markbill * markpercentage;
            this.markfinalBill[i] = this.marktip[i]+markbill;  

        }
        
    }
}
 markDetails.markcalcTip();
console.log(markDetails);

//Calculationg Average of tips for the tips
var sum= 0;
function calcAvg(tips){
    for(var i =0; i<tips.length;i++){
        sum = sum+tips[i];
    }
    return sum/tips.length;

}


//Now add the tips to the John and Mark objects and passing the tips from John & Mark Objects as an arguments

johnDetails.average = calcAvg(johnDetails.tip);
markDetails.average = calcAvg(markDetails.marktip);

if(johnDetails.average>markDetails.average){
    console.log('John Tip Avg '+johnDetails.average+ ' is greater than Mark\'s '+markDetails.average)
}else{
    console.log('John Tip Avg '+johnDetails.average+ ' is less than Mark\'s '+markDetails.average)
}