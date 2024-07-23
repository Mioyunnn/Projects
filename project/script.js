const tags = document.querySelectorAll(".tags span");

tags.forEach(tag => {
    tag.addEventListener("click" , () => {
        tag.classList.toggle("checked");
    })
})

let asideTags = document.querySelectorAll(".clothes-wrapper label");

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
            });
        }
        else{
            const tags = keywordsWrapper.querySelectorAll("span");
            tags.forEach(tag => {
                if(tag.innerText.trim() === asideTag.innerText.trim()){
                    tag.remove();
                }
            })
        }
    })
})