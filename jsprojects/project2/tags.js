const tagInput = document.querySelector(".tag-input");
const tagsUl = document.querySelector(".tags");
const tagInputField = document.querySelector(".tag-input__field");

let tags = []; // Array to store tags

function createTag(tagName) {
  const tag = document.createElement("li");
  tag.classList.add("tag");
  tag.innerHTML = `<span class="tag-text">${tagName}</span><span class="tag-remove">&#10006;</span>`;

  tag.addEventListener("click", () => {
    removeTag(tag.innerHTML);
    
    console.log(tag.innervalue);
  });

  tagsUl.appendChild(tag);
}

function removeTag(tagName) {
  tags = tags.filter((tag) => tag !== tagName);
  tags.map((el,ind)=> {
    addTag(el);
  })
}

function addTag(tagName) {
  tagName = tagName.trim(); // Remove leading/trailing spaces
  if (tagName && !tags.includes(tagName)) {
    tags.push(tagName);
    createTag(tagName);
    tagInputField.value = "";
  }
}

tagInputField.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTag(tagInputField.value);
  }
});

// Optional: Allow adding tags with comma separation
tagInputField.addEventListener("keyup", (event) => {
  if (event.key === "," && !tagInputField.value.endsWith(", ")) {
    addTag(tagInputField.value);
  }
});
