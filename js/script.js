const searchCocktail = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //console.log(searchText);


    searchField.value = '';


    const url = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`

    console.log(url)

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.drinks))

}



const displaySearchResult = drinks => {
    const searchResult = document.getElementById('search-result');


    searchResult.innerHTML = '';
    drinks.forEach(drink => {
        //  console.log(drink);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick='loadDrinkDetail(${drink.idDrink})' class="card h-100">
                <img src="${drink.strDrinkThumb}" class="crad-img-top" alt="">
            <div class="card-body"> 
                <h5 class="card-title">${drink.strDrink}</h5>
                <p class="card-text">${drink.strCategory}</p>

        </div>
        </div>
        `

        searchResult.appendChild(div)

    })
}



const loadDrinkDetail = drinkId => {
    console.log(drinkId);
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
    fetch(url)
        .then(res => res.json())
        .then(data => singleMealDetail(data.drinks[0]))


}







const singleMealDetail = drink => {
    console.log(drink);

    const drinkDetails = document.getElementById('drink-details');
    const div = document.createElement('add');
    div.classList.add('card')
    div.innerHTML = `    <img src="${drink.strDrinkThumb}" class="crad-img-top" alt="">
    <div class="card-body"> 
        <h5 class="card-title">${drink.strDrink}</h5>
        <p class="card-text">${drink.strCategory}</p>`

    drinkDetails.appendChild(div);
}