const rangeInput = document.getElementById("price");
const priceDisplay = document.getElementById("price-range");
const sellItems = document.querySelectorAll(".sell-item");

function updateSellItemDisplay() {
    const value = parseInt(rangeInput.value, 10);
    const activeTags = Array.from(document.querySelectorAll(".keywords-wrapper span")).map(span => span.innerText.trim());
    const itemsWrapper = document.querySelector(".items-wrapper");
    const sellItems = Array.from(itemsWrapper.getElementsByClassName("sell-item"));

    sellItems.forEach(item => {
        const itemPrice = parseInt(item.querySelector("p").textContent.replace("$", ""), 10);
        const itemTags = Array.from(item.querySelectorAll('.item-tags span')).map(span => span.innerText.trim());

        const matchesPrice = itemPrice >= value;
        const matchesTags = activeTags.length === 0 || activeTags.some(tag => itemTags.includes(tag));

        item.style.display = matchesPrice && matchesTags ? 'block' : 'none';
    });
}

// Event listeners for sorting buttons
document.getElementById("price-descending").addEventListener("click", () => {
    const itemsWrapper = document.querySelector(".items-wrapper");
    const sellItems = Array.from(itemsWrapper.getElementsByClassName("sell-item"));

    const sortedItems = sellItems.sort((a, b) => {
        const priceA = parseInt(a.querySelector("p").textContent.replace("$", ""), 10);
        const priceB = parseInt(b.querySelector("p").textContent.replace("$", ""), 10);
        return priceB - priceA; // High to low sorting
    });

    itemsWrapper.innerHTML = "";
    sortedItems.forEach(item => itemsWrapper.appendChild(item));
});

document.getElementById("price-ascending").addEventListener("click", () => {
    const itemsWrapper = document.querySelector(".items-wrapper");
    const sellItems = Array.from(itemsWrapper.getElementsByClassName("sell-item"));

    const sortedItems = sellItems.sort((a, b) => {
        const priceA = parseFloat(a.querySelector("p").textContent.replace("$", ""));
        const priceB = parseFloat(b.querySelector("p").textContent.replace("$", ""));
        return priceA - priceB; // Low to high sorting
    });

    itemsWrapper.innerHTML = "";
    sortedItems.forEach(item => itemsWrapper.appendChild(item));
});

document.querySelectorAll(".clothes-wrapper label, .color-wrapper label, .size-wrapper label").forEach(tag => {
    tag.addEventListener("click", () => {
        toggleTag(tag, document.querySelector(".keywords-wrapper"));
        updateSellItemDisplay();
    });
});

/* price range */
rangeInput.addEventListener("input", () => {
    priceDisplay.textContent = `$${rangeInput.value}-2000`;
    updateSellItemDisplay();
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
    } else {
        const tagToRemove = Array.from(keywordsWrapper.querySelectorAll("span"))
            .find(span => span.innerText.trim().startsWith(tagElement.innerText.trim()));
        if (tagToRemove) {
            tagToRemove.remove();
        }
    }
    updateSellItemDisplay();
}

let tags = document.querySelectorAll(".tags span");

tags.forEach(tag => {
    tag.addEventListener("click", () => {
        tag.classList.toggle("checked");
    });
});

const searchBox = document.getElementById("sell-searchbox");

const filterItems = () => {
    const searchValue = searchBox.value.toLowerCase();
    const sellItems = document.querySelectorAll(".sell-item");

    sellItems.forEach(item => {
        const itemName = item.querySelector("h4").textContent.toLowerCase();
        if (itemName.includes(searchValue)) {
            item.style.display = "block";
        } 
        else {
            item.style.display = "none";
        }
    });
};

searchBox.addEventListener("input", filterItems);

const signInBtn = document.getElementById("sign");
const signIn = document.getElementById("sign-in");
const registerBtn = document.getElementById("register");
const closeBtn = document.getElementById("close-btn");
const header = document.querySelector("form h2")
const overlay = document.getElementById("overlay");

signInBtn.addEventListener("click", () => {
    header.innerText = "Sign In"
    signIn.style.display = "flex";
    overlay.style.display = "block";
    document.body.classList.add('no-scroll');
})

registerBtn.addEventListener("click", () => {
    header.innerText = "Register"
    signIn.style.display = "flex";
    overlay.style.display = "block";
    document.body.classList.add('no-scroll');
})

closeBtn.addEventListener("click", () => {
    signIn.style.display = "none";
    overlay.style.display = "none";
    document.body.classList.remove('no-scroll');
})

/*form*/

let pass = document.getElementById("password");
let msg = document.getElementById("message");
let str = document.getElementById("strength");

pass.addEventListener("input", () => {
    if(pass.value.length > 0){
        pass.style.borderBottom = "1px solid #888888";
        msg.style.display = "block";
    }
    else{
        pass.style.borderBottom = "1px solid #d4d4d4";
        msg.style.display = "none";
    }
    if(pass.value.length < 4){
        str.innerText = "weak";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    }
    else if(pass.value.length >= 4 && pass.value.length <=8){
        str.innerText= "medium";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    }
    else if(pass.value.length >=8){
        str.innerText = "strong";
        pass.style.borderColor = "#26d730"
        msg.style.color = "#26d730";
    }
})

let emailError = document.getElementById("email-error");
let email = document.getElementById("email");

email.addEventListener("input", () => {

    if(email.value.length == 0){
        emailError.style.display = "block"
        emailError.style.color = "#ff5925"
        emailError.innerHTML = "Email is required"
    }
    else if(email.value.length >= 10){
        emailError.style.display = "block"
        emailError.innerHTML = ""
    }
});

const submit = document.getElementById("submit");

function checkFormValidity() {
    const isValid = email.value.length > 10 && pass.value.length > 8;
    submit.disabled = !isValid;
}

email.addEventListener('input', checkFormValidity);
pass.addEventListener('input', checkFormValidity);

submit.addEventListener("click", (e) => {
    if(header.innerText === "Sign In"){
        e.preventDefault();
        alert("Successfully Sign in !");
    }
    else{
        e.preventDefault();
        alert("Successfully Register !");
    }

})

