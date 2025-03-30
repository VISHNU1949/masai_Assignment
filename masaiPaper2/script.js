// Initialize LocalStorage
document.addEventListener("DOMContentLoaded", () => {
    loadRecipes();
});

// Handle Form Submission
document.getElementById("recipe-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("recipe-name").value;
    let ingredients = document.getElementById("ingredients").value.split(",");
    let category = document.getElementById("category").value;
    let steps = document.getElementById("steps").value;

    if (!name || !ingredients || !steps) {
        alert("Please fill out all fields.");
        return;
    }

    let newRecipe = { name, ingredients, category, steps };
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    recipes.push(newRecipe);
    localStorage.setItem("recipes", JSON.stringify(recipes));

    document.getElementById("recipe-form").reset();
    loadRecipes();
});

// Load Recipes from LocalStorage
function loadRecipes(filter = "All") {
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    let recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = "";

    recipes.forEach(recipe => {
        if (filter === "All" || recipe.category === filter) {
            let card = document.createElement("div");
            card.classList.add("recipe-card");
            card.innerHTML = `
                <h3>${recipe.name}</h3>
                <p><strong>Category:</strong> ${recipe.category}</p>
                <h4>Ingredients:</h4>
                <ul>${recipe.ingredients.map(ing => <li>${ing}</li>).join("")}</ul>
                <h4>Steps:</h4>
                <p>${recipe.steps}</p>
            `;
            recipeList.appendChild(card);
        }
    });
}

// Filter Recipes
document.getElementById("filter-category").addEventListener("change", function () {
    loadRecipes(this.value);
});
