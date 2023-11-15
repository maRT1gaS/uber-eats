import "../../mock-server/restaurants.js";

const getTemplateRestaurantCard = (
  title,
  imgSrc,
  coast,
  typeKitchen,
  timeDelivery
) => {
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

  const catalogRestaurantsListItemImgElem = document.createElement("img");
  catalogRestaurantsListItemImgElem.alt = title;
  catalogRestaurantsListItemImgElem.loading = "lazy";
  catalogRestaurantsListItemImgElem.src = imgSrc;
  catalogRestaurantsListItemImgElem.width = 308;

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

  catalogRestaurantsListItemInfoElem.appendChild(
    catalogRestaurantsListItemInfoTitleElem
  );
  catalogRestaurantsListItemInfoElem.appendChild(
    catalogRestaurantsListItemInfoAdditionalElem
  );
  catalogRestaurantsListItemInfoElem.appendChild(
    catalogRestaurantsListItemInfoDeliveryTimeElem
  );

  catalogRestaurantsListItemElem.appendChild(catalogRestaurantsListItemImgElem);
  catalogRestaurantsListItemElem.appendChild(
    catalogRestaurantsListItemInfoElem
  );

  return catalogRestaurantsListItemElem;
};

document.addEventListener("DOMContentLoaded", () => {
  const catalogRestaurantList = document.getElementById(
    "catalog-restaurants-list"
  );

  const catalogRestaurantListElem = document.getElementById(
    "catalog-restaurants-list-loader"
  );

  fetch(window.location.href + "api/restaurants")
    .then((res) => {
      return res.json();
    })
    .then((restaurants) => {
      let i = 0;
      const restaurantsLength = restaurants.length;

      for (; i < restaurantsLength; i += 1) {
        const { title, coast, typeKitchen, dileveryTime, imgSrc } = restaurants[i];

        const templateRestaurant = getTemplateRestaurantCard(
          title,
          imgSrc,
          coast,
          typeKitchen,
          dileveryTime
        );

        // catalogRestaurantListElem.remove();
        // catalogRestaurantList.appendChild(templateRestaurant);
      }
    });
});
