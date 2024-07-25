
let tags = document.querySelectorAll(".tags span");

tags.forEach(tag => {
    tag.addEventListener("click" , () => {
        tag.classList.toggle("checked");
    })
})

function updateSellItemDisplay() {
    const keywordsWrapper = document.querySelector(".keywords-wrapper");
    const sellItems = document.querySelectorAll(".sell-item");
    const activeTags = Array.from(keywordsWrapper.querySelectorAll('span')).map(span => span.innerText.trim());

    sellItems.forEach(item => {
        const itemTags = Array.from(item.querySelectorAll('.item-tags span')).map(span => span.innerText.trim());
        // If the item has any tag matching the active tags, display it, otherwise hide it
        const shouldDisplay = itemTags.some(tag => activeTags.includes(tag));
        item.style.display = shouldDisplay ? 'block' : 'none';
    });
}

let asideTags = document.querySelectorAll(".clothes-wrapper label");

/*asideTag Check*/
asideTags.forEach(asideTag => {
    asideTag.addEventListener("click", () => {
        asideTag.classList.toggle("aside-checked");
        const keywordsWrapper = document.querySelector(".keywords-wrapper");

        if(asideTag.classList.contains("aside-checked")){
            const newTag = document.createElement("span");
            newTag.innerHTML = `${asideTag.innerText} <i class="fa-solid fa-xmark"></i>`;
            keywordsWrapper.appendChild(newTag);

            newTag.querySelector("i").addEventListener("click", () => {
                newTag.remove();
                asideTag.classList.toggle("aside-checked");
            });
        }
        else{
            const newKeywordsWrapper = keywordsWrapper.querySelectorAll("span");
            newKeywordsWrapper.forEach(newKeywordsTag => {
                if(newKeywordsTag.innerText.trim() === asideTag.innerText.trim()){
                    newKeywordsTag.remove();
                }
            })
        }
        updateSellItemDisplay()
    })
})

let colorTags = document.querySelectorAll(".color-wrapper label");

colorTags.forEach(colorTag => {
    colorTag.addEventListener("click", () => {
        colorTag.classList.toggle("aside-checked");
        const keywordsWrapper = document.querySelector(".keywords-wrapper");

        if(colorTag.classList.contains("aside-checked")){
            const newTag = document.createElement("span");
            newTag.innerHTML = `${colorTag.innerText} <i class="fa-solid fa-xmark"></i>`;
            keywordsWrapper.appendChild(newTag);

            newTag.querySelector("i").addEventListener("click", () => {
                newTag.remove();
                colorTag.classList.toggle("aside-checked");
            });
        }
        else{
            const newKeywordsWrapper = keywordsWrapper.querySelectorAll("span");
            newKeywordsWrapper.forEach(newKeywordsTag => {
                if(newKeywordsTag.innerText.trim() === colorTag.innerText.trim()){
                    newKeywordsTag.remove();
                }
            })
        }
        updateSellItemDisplay()
    })
})

let sizeTags = document.querySelectorAll(".size-wrapper label");

sizeTags.forEach(sizeTag => {
    sizeTag.addEventListener("click", () => {
        sizeTag.classList.toggle("aside-checked");
        const keywordsWrapper = document.querySelector(".keywords-wrapper");

        if(sizeTag.classList.contains("aside-checked")){
            const newTag = document.createElement("span");
            newTag.innerHTML = `${sizeTag.innerText} <i class="fa-solid fa-xmark"></i>`;
            keywordsWrapper.appendChild(newTag);

            newTag.querySelector("i").addEventListener("click", () => {
                newTag.remove();
                sizeTag.classList.toggle("aside-checked");
            });
        }
        else{
            const newKeywordsWrapper = keywordsWrapper.querySelectorAll("span");
            newKeywordsWrapper.forEach(newKeywordsTag => {
                if(newKeywordsTag.innerText.trim() === sizeTag.innerText.trim()){
                    newKeywordsTag.remove();
                }
            })
        }
        updateSellItemDisplay()
    })
})


/* change the price with input range*/

const rangeInput = document.getElementById("price");
const priceDisplay = document.getElementById("price-range");

rangeInput.addEventListener("input", () => {
    const value = rangeInput.value;
    priceDisplay.textContent = `$${value}-2000`;
})

const keywordsWrapper = document.querySelector(".keywords-wrapper");
const sellItems = document.getElementsByClassName("sell-item");

if(keywordsWrapper.contains("span")){
    sellItems.style.display = "none";
}