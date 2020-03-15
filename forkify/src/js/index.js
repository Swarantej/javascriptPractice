import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import { elements , renderLoader,clearLoader} from './views/base';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
/** 
const search = new Search('pizza');
console.log(search);
console.log(search.getResults());
*/

/** Global State of the application
 * Search Object
 * Current reciepe Object
 *  Shopping List Object
 * Liked reciepe
 * 
 */




 //Create a new empty state object
 const state = {};
 
//window.state =state;

 /**
  * SEARCH CONTROLLER
  */

 //For controller for search Object

 const controlSearch = async() => {
     //Get query from View
     //Passing static data, generally we need to get the data from View/UI
     const query = searchView.getInput();
     //const query = 'pizza' ;
  
     console.log(query);
     if(query){
         //Create a new search object and add to the state
         state.search = new Search(query);

         //Prepare UI for the results display - TO DO in View
         searchView.clearInput();
         searchView.clearResults();
         //Loader
         renderLoader(elements.searchRes);
         try{
            //Search for Recipes
         await state.search.getResults();

         //Render(Display) the results in UI - TO DO in View
         console.log('Results from the Controller')
         //console.log(state.search.result)
         //Clear Loader
         clearLoader();
         searchView.renderResults(state.search.rec);
         }catch(error){
            console.log('Something went wrong');
            clearLoader();
         }

         

     }
 }


 //Add the event listener to the Search button
 elements.searchForm.addEventListener('submit', e =>{
      //Preventing the default loading of the app
      console.log('@@@@@ Results from the Controller')
      e.preventDefault();
      controlSearch();
  });

  

  //Event Listerner for Pagination button
   
  elements.searchResPages.addEventListener('click',e =>{
     const btn =  e.target.closest('.btn-inline');
     if(btn){
         const goToPage = parseInt(btn.dataset.goto,10);
         console.log(goToPage)
         searchView.clearResults();
         searchView.renderResults(state.search.rec,goToPage);
     }
    
  })


  /**
   * RECIPE CONTROLLER
   */

   const controlRecipe = async() =>{
       //Get recipe id from URL
       const id = window.location.hash.replace('#','');
       console.log(id);
       if(id){
           recipeView.clearRecipe();
           //Prepare UI for changes
           renderLoader(elements.recipe);

           //Highlight the selected
           if(state.search) searchView.highlightSelected(id);

           //Create new Recipe Obj
           state.recipe = new Recipe(id);

           try{
              //get Recipe Data
           await state.recipe.getRecipe();
           state.recipe.parseIngredients();
            //CalcTimings and Servings
            state.recipe.calTime();
            state.recipe.calServings();
 
            //render Reciepe 
                clearLoader();
                recipeView.renderRecipe(
                    state.recipe,
                    state.likes.isLiked(id));
            //console.log(state.recipe);
           }
           catch(error){
               alert('Error Processing Recipe');


           }
         

          
       }
   }
  // window.addEventListener('hashchange',controlRecipe);
//    /window.addEventListener('load',controlRecipe);

   //Adding same event listener for diff func
   ['hashchange','load'].forEach(event=>window.addEventListener(event,controlRecipe));


   //@@@@@@@@@@@########## LIST CONTROLLER ##############@@@@@@@@@@@
    const controlList = () => {
        //Create a new list IF there is none yet
        if(!state.list) state.list = new List();

        //Add each ingredient to the list and UI
        state.recipe.ingredients.forEach(el =>{
            const item = state.list.addItem(el.count,el.unit,el.ingredient);
            listView.renderItem(item);
        });
    }


    //@@@@@@@@@@@@@@@@@@@@@@ LIKE CONTROLLER  ############@@@@@@@@@@@@@@@
    
    

    const controlLike= () =>{
        if(!state.likes) state.likes = new Likes();
        const currentID = state.recipe.id;
        //User not yet liked 
        if(!state.likes.isLiked(currentID)){
            //Add like to the state
            const newLike = state.likes.addLike(
                currentID,
                state.recipe.title,
                state.recipe.author,
                state.recipe.img
            )

            //Toggle button
            likesView.toggleLikeBtn(true);

            //Add like to UI
            likesView.renderLike(newLike);

               // console.log(state.likes);
        
        //USer has liked the current recipe
        }else{
             //Remove like to the state
            state.likes.deleteLike(currentID);
            //Toggle button
            likesView.toggleLikeBtn(false);


            //Remove like to UI
            //console.log(state.likes);
            likesView.deleteLike(currentID);
        }
     
        likesView.toggleLikeMenu(state.likes.getNumLikes());
    };

    //Read the data from local storage
    window.addEventListener('load',() =>{

        state.likes = new Likes();
        //Restor likes
        state.likes.readStorage();
        //Toggle like menu button
        likesView.toggleLikeMenu(state.likes.getNumLikes());
    
        //Render the existing likes
        state.likes.likes.forEach(like => likesView.renderLike(like));
        });

    //Handle delete and update list item events

    elements.shopping.addEventListener('click', e => {
        const id = e.target.closest('.shopping__item').dataset.itemid;
        //Handle Delete button
        if(e.target.matches('.shopping__delete, .shopping__delete *')){
            //Delete from state
            state.list.deleteItem(id);
            //Delete UI 
            listView.deleteItem(id);

            //Handle count update
        }else if(e.target.matches('.shopping__count-value')){
            const val = parseFloat(e.target.value,10);
            state.list.updateCount(id,val);
        }

    });

    



   //Handling reciepe buttons
   elements.recipe.addEventListener('click',e=>{
    //below code will work if target matches below element or any of its child elements
    if(e.target.matches('.btn-decrease,.btn-decrease *')){
        //Decrease button is clicked
        if(state.recipe.servings>1){
            
        state.recipe.updateServings('dec');
        recipeView.updateServingsIngredients(state.recipe);
        }
        
    }else if(e.target.matches('.btn-increase,.btn-increase *')){
        //Increase button is clickec
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);
    }else if(e.target.matches('.recipe__btn-add, .recipe__btn-add *')){
        controlList();
    }else if(e.target.matches('.recipe__love, .recipe__love *')){
        controlLike();
    }


   // console.log(state.recipe);
   });


   //window.l = new List();
  //const r = new Recipe('47746');
  //r.getRecipe();
  //console.log(r);