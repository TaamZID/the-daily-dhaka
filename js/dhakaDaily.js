const loadCategory = async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  const res = await fetch(url);
  const data = await res.json();
  displayCategory(data.data.news_category);
};

const displayCategory = (categories) => {
  const categoryName = document.getElementById("category");
  categories.forEach((category) => {
    const categoryDiv = document.createElement("li");
    categoryDiv.innerHTML = `
    <li><a>${category.category_name}</a></li>
    `;
    categoryName.appendChild(categoryDiv);
  });
};

loadCategory();
