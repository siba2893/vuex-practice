const products = [
  {
    id: 1,
    title: "iPad 4 Mini",
    price: 500.01,
    inventory: 2
  },
  {
    id: 2,
    title: "Sansumg Galaxy 4",
    price: 300,
    inventory: 3
  },
  {
    id: 3,
    title: "t-shirt",
    price: 25,
    inventory: 10
  }
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(products), 1000);
  },

  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      Math.random() > 0.5 || navigator.userAgent.indexOf("PhantomJS") > -1
        ? cb()
        : errorCb();
    }, 100);
  }
};
