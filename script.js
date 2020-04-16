// /*
//     This code will only return the first section component
//     even though there are three components with the same
//     class
// */
// const sectionEl = document.querySelector(".article__section")

// /*
//     This code will only return the third section component
// */
// const footerEl = document.querySelector(".article__footer")

// /*
//     Get reference to the section with the class of `smallText`
//     and remove that class. Then add a new class of `largeText`
// */
// const smallTextEl = document.querySelector(".smallText")
// smallTextEl.classList.remove("smallText")
// smallTextEl.classList.add("largeText")

let firstSection = document.querySelector('.article_header');
firstSection.textContent = ("Welcome to Ashon's Blog");

let importantArticle = document.querySelectorAll('.article_header')
for (let index = 0; index < importantArticle.length; index++) {
    importantArticle[index].classList.add('important')
}

console.log(importantArticle)

// let dashArticle = document.querySelector('.dashed');
// dashArticle.remove = (".dashed")

document.querySelector(".dashed").classList.remove("dashed")

// console.log(dashArticle)

let asideBox = document.querySelector('.aside-box');

console.log(asideBox)