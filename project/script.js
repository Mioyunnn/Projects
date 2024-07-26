
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
function toggleTag(tagElement, keywordsWrapper) {
    const isChecked = tagElement.classList.toggle("aside-checked");

    if (isChecked) {
        const newTag = document.createElement("span");
        newTag.innerHTML = `${tagElement.innerText} <i class="fa-solid fa-xmark"></i>`;
        keywordsWrapper.appendChild(newTag);

        newTag.querySelector("i").addEventListener("click", () => {
            newTag.remove();
            tagElement.classList.remove("aside-checked");
            updateSellItemDisplay();
        });
    }
    else {
        const tagToRemove = Array.from(keywordsWrapper.querySelectorAll("span"))
            .find(span => span.innerText.trim().startsWith(tagElement.innerText.trim()));
        if (tagToRemove) {
            tagToRemove.remove();
        }
    }
    updateSellItemDisplay();
}

document.querySelectorAll(".clothes-wrapper label, .color-wrapper label, .size-wrapper label").forEach(tag => {
    tag.addEventListener("click", () => {
        toggleTag(tag, document.querySelector(".keywords-wrapper"));
    });
});

document.getElementById("reset-btn").addEventListener("click", () => {
    const keywordsWrapper = document.querySelector(".keywords-wrapper");
    keywordsWrapper.innerHTML = '';

    document.querySelectorAll(".clothes-wrapper label, .color-wrapper label, .size-wrapper label").forEach(tag => {
        tag.classList.remove("aside-checked");
    });

    document.querySelectorAll(".sell-item").forEach(item => {
        item.style.display = 'block';
    });
});

/* change the price with input range*/

const rangeInput = document.getElementById("price");
const priceDisplay = document.getElementById("price-range");

rangeInput.addEventListener("input", () => {
    const value = rangeInput.value;
    priceDisplay.textContent = `$${value}-2000`;
})

const keywordsWrapper = document.querySelector(".keywords-wrapper");

if(keywordsWrapper.contains("span")){
    sellItems.style.display = "none";
}