document.addEventListener('DOMContentLoaded', function () {
    var toggler = document.querySelectorAll(".caret");
    toggler.forEach(function (toggle) {
        toggle.addEventListener("click", function () {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("caret-down");
        });
    });
});

function showRecipe(recipeId) {
    var recipes = document.querySelectorAll(".recipe");
    recipes.forEach(function (recipe) {
        recipe.classList.remove("active");
    });
    document.getElementById(recipeId).classList.add("active");
}
