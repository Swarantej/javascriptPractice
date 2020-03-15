import axios from 'axios';
export default class Search{
    constructor(query){
        this.query = query;
    }

   async getResults(){
    try{
        const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`)
        console.log(res);
        this.rec = res.data.recipes;
        console.log(this.rec);
    }catch(error){
        alert(error);
    }
}

}