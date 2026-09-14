const purchaseForm = document.querySelector("#purchase-form");

function showOrderPopup(message) {
    const popup = document.createElement("div");
    popup.className = "order-popup";

    const popupBox = document.createElement("div");
    popupBox.className = "order-popup__box";
    popupBox.setAttribute("role", "dialog");
    popupBox.setAttribute("aria-modal", "true");
    popupBox.setAttribute("aria-labelledby", "order-popup-title");

    const popupTitle = document.createElement("h2");
    popupTitle.id = "order-popup-title";
    popupTitle.textContent = "Поръчката е приета";

    const popupMessage = document.createElement("p");
    popupMessage.textContent = message;

    const closeButton = document.createElement("button");
    closeButton.className = "button";
    closeButton.type = "button";
    closeButton.textContent = "Затвори";

    closeButton.addEventListener("click", function () {
        popup.remove();
    });

    popupBox.append(popupTitle, popupMessage, closeButton);
    popup.append(popupBox);
    document.body.append(popup);
    closeButton.focus();
}

if (purchaseForm) {
    purchaseForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = purchaseForm.elements.name.value.trim();
        showOrderPopup(name + ", благодарим за поръчката!");
    });
}

const reviewForm = document.querySelector("#review-form");

if (reviewForm) {
    reviewForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const comment = reviewForm.elements.comment.value.trim();
        const reviewsList = document.querySelector(".reviews-list");

        const newReview = document.createElement("article");
        newReview.className = "review";

        const reviewHeader = document.createElement("header");
        reviewHeader.innerHTML = "<strong>Нов потребител</strong><span class=\"stars\" aria-label=\"5 от 5 звезди\">★★★★★</span>";

        const reviewText = document.createElement("p");
        reviewText.textContent = comment;

        newReview.append(reviewHeader, reviewText);
        reviewsList.prepend(newReview);
        reviewForm.reset();
    });
}
