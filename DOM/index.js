function showFilter() {
    document.getElementById('filterContent').style.display = 'block';
    document.getElementById('newContent').style.display = 'none';
}

function showAddNew() {
    document.getElementById('newContent').style.display = 'block';
    document.getElementById('newContent').style.width = '10%';
    document.getElementById('filterContent').style.display = 'none';
}

function addNewArticle() {
    var title = document.getElementById('inputHeader').value;
    var isOpinion = document.getElementById('opinionRadio').checked;
    var isRecipe = document.getElementById('recipeRadio').checked;
    var isLife = document.getElementById('lifeRadio').checked;
    var articleText = document.getElementById('inputArticle').value;

    var articleClass = "update";
    if (isOpinion) {
        articleClass = "Opinion";
    } else if (isRecipe) {
        articleClass = "Recipe";
    } else if (isLife) {
        articleClass = "Update";
    }

    var articleList = document.getElementById('articleList');

    newArticle = `<article class="${articleClass.toLowerCase()}" id="a4">
                    <span class="marker">${articleClass}</span>
                    <h2>${title}</h2>
                    <p>${articleText}</p>
                    <p><a href="moreDetails.html">Read more...</a></p>
                </article>`

    articleList.innerHTML += newArticle;
}

function filterArticles() {
    var filterOpinion = document.getElementById('opinionCheckbox').checked;
    var filterRecipe = document.getElementById('recipeCheckbox').checked;
    var filterLife = document.getElementById('updateCheckbox').checked;

    var opinionArticles = document.querySelectorAll('article.opinion')
    var recipeArticles = document.querySelectorAll('article.recipe')
    var lifeArticles = document.querySelectorAll('article.update')

    for (var i = 0; i < opinionArticles.length; i++) {
        if (filterOpinion) {
            opinionArticles[i].style.display = 'block';
        } else {
            opinionArticles[i].style.display = 'none';
        }
    }

    for (var i = 0; i < recipeArticles.length; i++) {
        if (filterRecipe) {
            recipeArticles[i].style.display = 'block';
        } else {
            recipeArticles[i].style.display = 'none';
        }
    }

    for (var i = 0; i < lifeArticles.length; i++) {
        if (filterLife) {
            lifeArticles[i].style.display = 'block';
        } else {
            lifeArticles[i].style.display = 'none';
        }
    }
}