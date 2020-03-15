/////////////////////////////////
// CODING CHALLENGE

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name 
and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

class Element{
    constructor(name,buildYear){
    this.name = name;
    this.buildYear = buildYear;
    }
}

class Park extends Element{

    constructor(name,buildYear,area,numOfTrees){
        super(name,buildYear);
        this.area = area;
        this.numOfTrees= numOfTrees;
    }

    treeDensity(){
        const density = this.numOfTrees/this.area;
        console.log(`The park ${this.name} is having the tree density of
                    ${density} trees per sq Km`);
    }

}


class Street extends Element{
    constructor(name,buildYear,length,size=3){
        super(name,buildYear)
        this.length=length;
        this.size= size;
    }

    classifyStreet(){
        const classification = new Map();
        classification.set(1,'tiny');
        classification.set(2,'small');
        classification.set(3,'normal');
        classification.set(4,'big');
        classification.set(5,'huge');
        console.log(`The street ${this.name} is built in the year ${this.buildYear} with area
                    ${this.area} is classified as ${this.size} street`);
    }
}

const allParks= [new Park('Green Park',1990,0.1,1000),
                new Park('Red Park',1995,0.2,1500),
                new Park('Blue Park',2000,0.5,1800),
                new Park('Orange Park',2005,1,1910),
                new Park('Yellow Park',2010,2.5,2200) ];


 const allStreets= [new Street('Green Street',1990,0.1,'Tiny'),
 new Street('Red Street',1995,0.2,'small'),
 new Street('Blue Street',2000,0.5,'big'),
 new Street('Orange Street',2005,1,'big'),
 new Street('Yellow Street',2010,2.5,'huge') ];

 //Creating the seperate function for calculating average age
 function cal(arr){
     const sum = arr.reduce((prev,cur,index) => prev+cur,0);
     return [sum,sum/arr.length];
 }

 function reportParks(p){
     console.log('-----------Park Report-----------')
     //Display the density of each park
     p.forEach(el => el.treeDensity());

     //Calculate average age

     const ages = p.map(el => 2020- el.buildYear);
     const[totalAge,avgAge]= cal(ages);
     console.log(`our ${p.length} parks has average age of ${avgAge} years`);

     //Which park has more than 1000 trees
     const i = p.map(el=> el.numOfTrees).findIndex(el => el >=1000);
     console.log(`${p[i].name} has more than 1000 tress`);

 }

 function reportStreet(s){
    console.log('-----------Street Report-----------')

    //total  and avg length of street
    const[totalLength,avgLength] =  cal(s.map(el => el.length));
    console.log(`Our ${s.length} has total length of ${totalLength} km, and with average length of ${avgLength} km`);

    //Classify SIze
    s.forEach(el => el.classifyStreet());

}

reportParks(allParks);
reportStreet(allStreets);