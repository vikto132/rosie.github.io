
function toggleTimeline(type, id) {
    const listImg = pictureSilder[type];
    const element = document.getElementById(id);
    if (element.classList.contains('invisible')) {
        element.classList.remove('invisible');
    }
    let list = '';
    let count = 0
    listImg.forEach(element => {
        let template = `  <div class="carousel-item ${count == 0 ? 'active':''}">
        <img src="./assets/images/${type}/${element}"
            class="d-block w-100" alt="...">
        </div>`
        list += template;
        count++;
    });
    const imageContainer = element.children[0].children[0];
    imageContainer.innerHTML = list;
}

