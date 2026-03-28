document.addEventListener("DOMContentLoaded", () => {

   const recipes = [
    {
        id: 1,
        title: { uk: "Млинці", en: "Pancakes" },
        category: "breakfast",
        img: "img/Pancakes.png",
        desc: { uk: "Смачні млинці", en: "Tasty pancakes" },
        ingredients: {
            uk: ["1 склянка молока", "1 яйце", "1 склянка борошна", "2 ст.л. цукру", "щіпка солі", "масло для смаження"],
            en: ["1 cup milk", "1 egg", "1 cup flour", "2 tbsp sugar", "pinch of salt", "butter for frying"]
        },
        steps: {
            uk: ["Змішати молоко, яйце, цукор та сіль", "Додати борошно і збити тісто", "Смажити на розігрітій сковороді з маслом по 1–2 хв з кожного боку"],
            en: ["Mix milk, egg, sugar, and salt", "Add flour and whisk batter", "Fry on a heated pan with butter 1–2 min each side"]
        }
    },
    {
        id: 2,
        title: { uk: "Омлет", en: "Omelette" },
        category: "breakfast",
        img: "img/Omelette.png",
        desc: { uk: "Яєчний омлет", en: "Egg omelette" },
        ingredients: {
            uk: ["2 яйця", "2 ст.л. молока", "щіпка солі", "щіпка перцю", "масло для смаження"],
            en: ["2 eggs", "2 tbsp milk", "pinch of salt", "pinch of pepper", "butter for frying"]
        },
        steps: {
            uk: ["Збити яйця з молоком, сіллю і перцем", "Налити на сковороду з маслом", "Смажити на середньому вогні 3–4 хвилини"],
            en: ["Whisk eggs with milk, salt, and pepper", "Pour into a pan with butter", "Cook on medium heat 3–4 minutes"]
        }
    },
    {
        id: 3,
        title: { uk: "Борщ", en: "Borscht" },
        category: "lunch",
        img: "img/Borscht.png",
        desc: { uk: "Український борщ", en: "Ukrainian soup" },
        ingredients: {
            uk: ["1 буряк", "1 морква", "1 картопля", "1 цибуля", "капуста", "томатна паста", "сіль, перець, лавровий лист", "сметана"],
            en: ["1 beetroot", "1 carrot", "1 potato", "1 onion", "cabbage", "tomato paste", "salt, pepper, bay leaf", "sour cream"]
        },
        steps: {
            uk: ["Нарізати овочі", "Відварити буряк, додати інші овочі", "Додати томатну пасту та приправи", "Варити 20–30 хвилин"],
            en: ["Chop vegetables", "Boil beetroot, add other vegetables", "Add tomato paste and seasonings", "Cook 20–30 minutes"]
        }
    },
    {
        id: 4,
        title: { uk: "Суп", en: "Soup" },
        category: "lunch",
        img: "img/Soup.png",
        desc: { uk: "Легкий овочевий суп", en: "Light vegetable soup" },
        ingredients: {
            uk: ["2 картоплі", "1 морква", "1 цибуля", "зелень", "сіль, перець"],
            en: ["2 potatoes", "1 carrot", "1 onion", "herbs", "salt, pepper"]
        },
        steps: {
            uk: ["Нарізати овочі", "Відварити у воді до готовності", "Додати сіль, перець та зелень"],
            en: ["Chop vegetables", "Boil in water until cooked", "Add salt, pepper, and herbs"]
        }
    },
    {
        id: 5,
        title: { uk: "Салат", en: "Salad" },
        category: "dinner",
        img: "img/Salad.png",
        desc: { uk: "Овочевий салат", en: "Vegetable salad" },
        ingredients: {
            uk: ["Помідори", "Огірки", "Салатні листя", "Олія", "Сіль, перець"],
            en: ["Tomatoes", "Cucumbers", "Lettuce", "Oil", "Salt, pepper"]
        },
        steps: {
            uk: ["Нарізати овочі", "Змішати з олією та спеціями"],
            en: ["Chop vegetables", "Mix with oil and seasonings"]
        }
    },
    {
        id: 6,
        title: { uk: "Паста", en: "Pasta" },
        category: "dinner",
        img: "img/Pasta.png",
        desc: { uk: "Італійська паста", en: "Italian pasta" },
        ingredients: {
            uk: ["200 г пасти", "томатний соус", "сіль, перець, зелень"],
            en: ["200g pasta", "tomato sauce", "salt, pepper, herbs"]
        },
        steps: {
            uk: ["Відварити пасту", "Змішати з соусом і спеціями", "Подавати гарячим"],
            en: ["Boil pasta", "Mix with sauce and seasonings", "Serve hot"]
        }
    },
    {
        id: 7,
        title: { uk: "Каша", en: "Porridge" },
        category: "breakfast",
        img: "img/Porridge.png",
        desc: { uk: "Вівсяна каша", en: "Oatmeal porridge" },
        ingredients: {
            uk: ["1 склянка вівсянки", "2 склянки молока", "сіль, цукор"],
            en: ["1 cup oats", "2 cups milk", "salt, sugar"]
        },
        steps: {
            uk: ["Довести молоко до кипіння", "Додати вівсянку та варити 5–7 хв", "Додати сіль та цукор"],
            en: ["Boil milk", "Add oats and cook 5–7 min", "Add salt and sugar"]
        }
    },
    {
        id: 8,
        title: { uk: "Курка", en: "Chicken" },
        category: "lunch",
        img: "img/Chicken.png",
        desc: { uk: "Запечена курка", en: "Baked chicken" },
        ingredients: {
            uk: ["1 курка", "сіль, перець, спеції", "олія"],
            en: ["1 chicken", "salt, pepper, spices", "oil"]
        },
        steps: {
            uk: ["Натерти курку спеціями", "Запікати 40–50 хв при 180°C"],
            en: ["Rub chicken with spices", "Bake 40–50 min at 180°C"]
        }
    },
    {
        id: 9,
        title: { uk: "Рис", en: "Rice" },
        category: "dinner",
        img: "img/Rice.png",
        desc: { uk: "Відварений рис", en: "Boiled rice" },
        ingredients: {
            uk: ["1 склянка рису", "2 склянки води", "сіль"],
            en: ["1 cup rice", "2 cups water", "salt"]
        },
        steps: {
            uk: ["Промити рис", "Відварити в підсоленій воді 15–20 хв"],
            en: ["Rinse rice", "Boil in salted water 15–20 min"]
        }
    },
    {
        id: 10,
        title: { uk: "Сирники", en: "Cheesecakes" },
        category: "breakfast",
        img: "img/Cheesecakes.png",
        desc: { uk: "Сирники зі смачною скоринкою", en: "Cheesecakes with a tasty crust" },
        ingredients: {
            uk: ["200 г сиру", "1 яйце", "2 ст.л. цукру", "2 ст.л. борошна", "олія для смаження"],
            en: ["200g cottage cheese", "1 egg", "2 tbsp sugar", "2 tbsp flour", "oil for frying"]
        },
        steps: {
            uk: ["Змішати сир з яйцем, цукром і борошном", "Сформувати коржики", "Смажити на сковороді до золотистої скоринки"],
            en: ["Mix cottage cheese with egg, sugar, and flour", "Form small patties", "Fry in pan until golden"]
        }
    },
    {
    id: 11,
    title: { uk: "Піца", en: "Pizza" },
    category: "dinner",
    img: "img/Pizza.png",
    desc: { uk: "Домашня піца", en: "Homemade pizza" },
    ingredients: {
        uk: ["тісто для піци", "томатний соус", "сир", "ковбаса", "гриби", "оливки"],
        en: ["pizza dough", "tomato sauce", "cheese", "sausage", "mushrooms", "olives"]
    },
    steps: {
        uk: [
            "Розкатати тісто",
            "Змастити томатним соусом",
            "Додати начинку",
            "Посипати сиром",
            "Випікати 15–20 хв при 180°C"
        ],
        en: [
            "Roll out the dough",
            "Spread tomato sauce",
            "Add toppings",
            "Sprinkle cheese",
            "Bake 15–20 min at 180°C"
        ]
    }
    },
    {
    id: 12,
    title: { uk: "Шоколадний кекс", en: "Chocolate cake" },
    category: "breakfast",
    img: "img/Cake.png",
    desc: { uk: "Ніжний шоколадний кекс", en: "Soft chocolate cake" },
    ingredients: {
        uk: ["2 яйця", "100 г цукру", "150 г борошна", "2 ст.л. какао", "100 мл молока", "1 ч.л. розпушувача"],
        en: ["2 eggs", "100g sugar", "150g flour", "2 tbsp cocoa", "100 ml milk", "1 tsp baking powder"]
    },
    steps: {
        uk: [
            "Збити яйця з цукром",
            "Додати молоко",
            "Додати борошно, какао і розпушувач",
            "Перемішати до однорідності",
            "Випікати 30 хв при 180°C"
        ],
        en: [
            "Beat eggs with sugar",
            "Add milk",
            "Add flour, cocoa, and baking powder",
            "Mix until smooth",
            "Bake 30 min at 180°C"
        ]
    }
    }
];

    let state = {
        search: "",
        filter: "all",
        lang: localStorage.getItem("lang") || "uk",
        theme: localStorage.getItem("theme") || "light"
    };

    // Ініціалізація теми
    document.body.classList.toggle("dark", state.theme === "dark");

    const container = document.getElementById("recipes");
    const searchInput = document.getElementById("search");
    const filterSelect = document.getElementById("filter");
    const themeBtn = document.getElementById("themeToggle");
    const langBtn = document.getElementById("langToggle");
    const detailsContainer = document.getElementById("recipeDetails");
    const backBtn = document.getElementById("backBtn");

    function updateInterface() {
        if (langBtn) langBtn.textContent = state.lang === "uk" ? "EN" : "UA";
        if (backBtn) backBtn.textContent = state.lang === "uk" ? "⬅ Назад" : "⬅ Back";
        
        const title = document.getElementById("title");
        if (title) title.textContent = state.lang === "uk" ? "Рецепти" : "Recipes";
        
        if (searchInput) searchInput.placeholder = state.lang === "uk" ? "Пошук..." : "Search...";
        
        renderRecipes();
        renderRecipeDetails();

        // Оновлення фільтра
        const optAll = document.getElementById("optAll");
        const optBreakfast = document.getElementById("optBreakfast");
        const optLunch = document.getElementById("optLunch");
        const optDinner = document.getElementById("optDinner");

        if (optAll) optAll.textContent = state.lang === "uk" ? "Всі" : "All";
        if (optBreakfast) optBreakfast.textContent = state.lang === "uk" ? "Сніданок" : "Breakfast";
        if (optLunch) optLunch.textContent = state.lang === "uk" ? "Обід" : "Lunch";
        if (optDinner) optDinner.textContent = state.lang === "uk" ? "Вечеря" : "Dinner";

        const homeText = document.getElementById("homeText");
        const heroText = document.getElementById("heroText");

        if (homeText) homeText.textContent = state.lang === "uk" ? "ГОЛОВНА" : "HOME";
        if (heroText) heroText.textContent = state.lang === "uk" ? "Смачні рецепти щодня" : "Delicious recipes every day";
    }

    function renderRecipes() {
        if (!container) return;
        
        let data = recipes.filter(r => {
            const matchesFilter = state.filter === "all" || r.category === state.filter;
            const matchesSearch = r.title[state.lang].toLowerCase().includes(state.search.toLowerCase());
            return matchesFilter && matchesSearch;
        });

        container.innerHTML = data.map(r => `
            <div class="card">
                <img src="${r.img}" alt="${r.title[state.lang]}">
                <h3>${r.title[state.lang]}</h3>
                <p>${r.desc[state.lang]}</p>
                <a href="recipe.html?id=${r.id}">${state.lang === "uk" ? "Деталі" : "Details"}</a>
            </div>
        `).join("");
    }

    function renderRecipeDetails() {
        if (!detailsContainer) return;

        const id = new URLSearchParams(window.location.search).get("id");
        const recipe = recipes.find(r => r.id == id);

        if (!recipe) {
            detailsContainer.innerHTML = `<h2>${state.lang === "uk" ? "Рецепт не знайдено" : "Recipe not found"}</h2>`;
            return;
        }

        detailsContainer.innerHTML = `
            <h2>${recipe.title[state.lang]}</h2>
            <img src="${recipe.img}" alt="${recipe.title[state.lang]}">
            <p>${recipe.desc[state.lang]}</p>
            <h3>${state.lang === "uk" ? "Інгредієнти:" : "Ingredients:"}</h3>
            <ul>${recipe.ingredients[state.lang].map(i => `<li>${i}</li>`).join("")}</ul>
            <h3>${state.lang === "uk" ? "Приготування:" : "Steps:"}</h3>
            <ol>${recipe.steps[state.lang].map(s => `<li>${s}</li>`).join("")}</ol>
        `;
    }

    // Події
    if (searchInput) {
        searchInput.addEventListener("input", e => {
            state.search = e.target.value;
            renderRecipes();
        });
    }

    if (filterSelect) {
        filterSelect.addEventListener("change", e => {
            state.filter = e.target.value;
            renderRecipes();
        });
    }

    themeBtn?.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        state.theme = document.body.classList.contains("dark") ? "dark" : "light";
        localStorage.setItem("theme", state.theme);
    });

    langBtn?.addEventListener("click", () => {
        state.lang = state.lang === "uk" ? "en" : "uk";
        localStorage.setItem("lang", state.lang);
        updateInterface();
    });

    backBtn?.addEventListener("click", () => window.history.back());

    updateInterface(); // Початковий запуск
});