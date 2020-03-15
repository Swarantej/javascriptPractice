const map = new Map();
//To Set values of the map
map.set('Question','When did you graduate your college?');
map.set(1,2010);
map.set(2,2014);
map.set(3,'Not Graduated');
map.set('correct',2);
map.set(true,'Congratulations!Correct Answer!');
map.set(false,'Wrong Answer!Please try Again!');

//To get the value from the map

    //console.log(map.get(2));

//To get the Size of map
    //console.log(map.size);

//To delete the key and value from map

    //console.log(map.delete(3));

//To check the map has certain value

    //console.log(map.has(2));

//To clear the map

    //console.log(map.clear());

//Iterating using forEach

/*
 map.forEach((value,key)=>
    console.log(`For Each Looop ::: This is the value : ${value} for the key: ${key} `)
 )
*/
 //Using forOF method to get the Key value pairs
 // We use .Entries() method which returns all the values of the map and 
 //we can then use destructuring to store the key and values in 2 seperate variables 
 console.log(map.get('Question'));

 for(let[key,value] of map.entries()){
     if(typeof(key)==='number'){
        console.log(`Option ${key}:${value} `)
     }
   
 }

 const ans = parseInt(prompt('Enter the option:'));

 const answ = (ans===map.get('correct'));
 console.log(map.get((answ)));