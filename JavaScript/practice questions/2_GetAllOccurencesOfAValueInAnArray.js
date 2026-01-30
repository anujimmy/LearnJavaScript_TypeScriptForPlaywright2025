let msg = ['hi','this','is','javascript','coding','this','coding','auto','this'];

let i = 0;
let stringtofind = 'this'

while(i <= msg.length -1){
    let iOccurence = msg.indexOf(stringtofind,i);
    if (iOccurence != -1){
        console.log(iOccurence);
        i = iOccurence +1;
    }else{
        console.log( stringtofind + " is missing in this array, pls check");
        break;
    }
}

console.log('***With for loop**');

for(i=0;i<=msg.length-1;){
   let iOccurence = msg.indexOf(stringtofind,i);
    if (iOccurence != -1){
        console.log(iOccurence);
        i = iOccurence +1;
    }else{
        console.log( stringtofind + " is missing in this array, pls check");
        break;

    } 
}

