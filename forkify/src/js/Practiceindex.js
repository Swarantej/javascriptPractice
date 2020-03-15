import year from './models/search';
import { add,multiply } from './views/searchView';
console.log(`Using export and import concept add ${add(2,3)} and multiple ${multiply(3,3)} and ${year} `);

//Import and change the variable name using as keyword

import { add as a , multiply as m} from './views/searchView';
console.log(`Using export and import and chaging varibale concept concept add ${a(4,5)} and multiple ${m(4,4)} and ${year} `);


//Import using * and accessing the same using .methods
import * as test from './views/searchView';
console.log(`Using export and * import concept add ${test.add(6,7)} and multiple ${test.multiply(5,5)} and ${year} `);