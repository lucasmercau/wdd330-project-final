function productCardTemplate(product) {
    const empty = "";
    const zero = "0.00";
    const bookExample = "./images/book-example.jpg";
    return `<li class="product-card">
      <a href="${product.volumeInfo.canonicalVolumeLink}">
        <img src="${product.volumeInfo.imageLinks.smallThumbnail || bookExample}" alt="Image of ${product.volumeInfo.title}">
        <h2 class="card__brand">${product.volumeInfo.title || empty}</h2>
        <h3 class="card__name">${product.volumeInfo.authors  || empty}</h3>
        <p class="${product.saleInfo.saleability.toLowerCase()}">${product.saleInfo.saleability.replace(/_/g, ' ') || zero}</p>
      </a>
    </li>`
}

export default class CardTemplate {
    constructor(list, listElement) {
        this.list = list;
        this.listElement = listElement;
    }
    async init() {
        const list = this.list;
        this.renderList(list.items || list);
    }
    // renderList(list) {
    //     renderListWithTemplate(productCardTemplate, this.listElement, list);
    // }
    renderList(list) { // Stretch Activity Step 1
      const newList = list.map(item => {
        if(item.volumeInfo.imageLinks == undefined) {
        item.volumeInfo.imageLinks = `"smallThumbnail":"./images/book-example.jpg"`;}
            });
      const htmlStrings = list.map(productCardTemplate);
    
      this.listElement.insertAdjacentHTML("afterbegin", htmlStrings.join(""));
    }
}