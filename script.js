const searchform = document.getElementById('recipe-form');
const searchInput = document.getElementById('recipe-input');
const resultslist  = document.getElementById('recipes');  


searchform.addEventListener('submit', (event)=>{
  event.preventDefault();
  searchRecipes();
})

async function searchRecipes(){
  // e.preventDefault()
  const searchValue = searchInput.value.trim()
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
  //console.log(response.meals);
  const data = await response.json()
  //console.log(data)
  console.log(data.meals)
   
  displayResults(data.meals)
}

function displayResults(recipes) {
  let html = '';
  recipes.forEach((recipes) => {
      html += `
      <div class="meal">
          <img src="${recipes.strMealThumb}" alt=""></img>
          <h3>${recipes.strMeal}</h3>
          <ul>
              ${recipes.strInstructions}
          </ul>
          <a href="${recipes.strYoutube}" target="_blank">View Recipe</a>
     </div> 
      `
  })
  resultslist.innerHTML = html;
}


document.querySelector('.searchButton').addEventListener('click', () => {
  const searchInput = document.querySelector('.searchInput').value.trim();
  if (searchInput) {
      fetchRecipes(searchInput);
  } else {
      alert('Please enter an ingredient.');
  }
}
);
