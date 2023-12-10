import "../../mock-server/restaurants.js";

const buttonTopElId = "button-top";
const catalogRestaurantListElId = "catalog-restaurants-list";
const catalogRestaurantLisLoaderElId = "catalog-restaurants-list-loader";

document.addEventListener("DOMContentLoaded", () => {
  const buttonTopEl = document.getElementById(buttonTopElId);

  buttonTopEl.addEventListener("click", handleOnButtonTop);

  const catalogRestaurantList = document.getElementById(
    catalogRestaurantListElId
  );
  const catalogRestaurantListElem = document.getElementById(
    catalogRestaurantLisLoaderElId
  );

  fetch(window.location.origin + "/api/restaurants")
    .then((res) => {
      return res.json();
    })
    .then((restaurants) => {
      let i = 0;
      const restaurantsLength = restaurants.length;

      for (; i < restaurantsLength; i += 1) {
        const { title, coast, typeKitchen, dileveryTime, imgSrc } =
          restaurants[i];

        const templateRestaurant = getTemplateRestaurantCard(
          title,
          imgSrc,
          coast,
          typeKitchen,
          dileveryTime
        );

        catalogRestaurantListElem.remove();
        catalogRestaurantList.appendChild(templateRestaurant);
      }
    });
});

function handleOnButtonTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function getTemplateRestaurantCard(
  title,
  imgSrc,
  coast,
  typeKitchen,
  timeDelivery
) {
  const templateTypeKitchem = typeKitchen.reduce((acc, val, index) => {
    if (index === typeKitchen.length - 1) {
      return acc + val;
    }

    return acc + val + " &middot; ";
  }, "");

  const catalogRestaurantsListItemElem = document.createElement("div");
  catalogRestaurantsListItemElem.classList.add(
    "catalog__restaurants__list__item"
  );

  const anchorLinkElem = document.createElement("a");
  anchorLinkElem.classList.add("catalog__restaurants__list__item__link");
  anchorLinkElem.href = "#";

  const catalogRestaurantsListItemImgWrapElem = document.createElement("div");
  catalogRestaurantsListItemImgWrapElem.classList.add(
    "catalog__restaurants__list__item__img_wrap"
  );

  const catalogRestaurantsListItemImgElem = document.createElement("img");
  catalogRestaurantsListItemImgElem.alt = title;
  catalogRestaurantsListItemImgElem.loading = "lazy";
  catalogRestaurantsListItemImgElem.src = imgSrc;
  catalogRestaurantsListItemImgElem.classList.add(
    "catalog__restaurants__list__item__img"
  );

  const catalogRestaurantsListItemInfoElem = document.createElement("div");
  catalogRestaurantsListItemInfoElem.classList.add(
    "catalog__restaurants__list__item__info"
  );

  const catalogRestaurantsListItemInfoTitleElem = document.createElement("h6");
  catalogRestaurantsListItemInfoTitleElem.classList.add(
    "catalog__restaurants__list__item__info__title"
  );
  catalogRestaurantsListItemInfoTitleElem.innerText = title;

  const catalogRestaurantsListItemInfoAdditionalElem =
    document.createElement("span");
  catalogRestaurantsListItemInfoAdditionalElem.classList.add(
    "catalog__restaurants__list__item__info__additional"
  );
  catalogRestaurantsListItemInfoAdditionalElem.innerHTML =
    coast + " &middot; " + templateTypeKitchem;

  const catalogRestaurantsListItemInfoDeliveryTimeElem =
    document.createElement("span");
  catalogRestaurantsListItemInfoDeliveryTimeElem.classList.add(
    "catalog__restaurants__list__item__info__delivery-time"
  );
  catalogRestaurantsListItemInfoDeliveryTimeElem.innerText = timeDelivery;

  catalogRestaurantsListItemElem.appendChild(anchorLinkElem);
  catalogRestaurantsListItemInfoElem.appendChild(
    catalogRestaurantsListItemInfoTitleElem
  );
  catalogRestaurantsListItemInfoElem.appendChild(
    catalogRestaurantsListItemInfoAdditionalElem
  );
  catalogRestaurantsListItemInfoElem.appendChild(
    catalogRestaurantsListItemInfoDeliveryTimeElem
  );

  catalogRestaurantsListItemImgWrapElem.appendChild(
    catalogRestaurantsListItemImgElem
  );
  catalogRestaurantsListItemElem.appendChild(
    catalogRestaurantsListItemImgWrapElem
  );
  catalogRestaurantsListItemElem.appendChild(
    catalogRestaurantsListItemInfoElem
  );

  return catalogRestaurantsListItemElem;
}
