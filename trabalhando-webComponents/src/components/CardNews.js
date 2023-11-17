class Cardnews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Annonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");


        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/photo-default.png";
        newsImage.alt = "descrição da imagem";

        cardRight.appendChild(newsImage);
        
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);


        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', sans-serif;
        }
    
        .card {
            width: 80%;
            display: flex;
            box-shadow: 9px 9px 27px 0px rgb(0, 0, 0);
            -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            justify-content: space-between;
            margin: 20px;
        }
        
        .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10px;
        }
        
        .card__left span {
            font-weight: 700;
        }
        
        .card__left a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
        }
        
        .card__left p {
            color: gray;
        }
        
        img {
            width: 100%;
            max-height: 450px;
        }
        `;

        return style;
    }
}

customElements.define("card-news", Cardnews);