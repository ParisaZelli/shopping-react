const productList = [
  {
    id: "1",
    title: "Iphone",
    price: 5400,
    image: "/images/05-iphone.png",
  },
  {
    id: "2",
    title: "Macbook",
    price: 9700,
    image: "/images/06-macbook.png",
  },
  {
    id: "3",
    title: "Airpod",
    price: 2000,
    image: "/images/01-airpod.png",
  },
  {
    id: "4",
    title: "Mouse",
    price: 500,
    image: "/images/08-mouse.jpg",
  },
  {
    id: "5",
    title: "Headphone",
    price: 3000,
    image: "/images/03-headphone.png",
  },
  {
    id: "6",
    title: "Microphone",
    price: 1000,
    image: "/images/07-microphone.png",
  },
  {
    id: "7",
    title: "Apple Watch",
    price: 5000,
    image: "/images/02-appleWatch.png",
  },
  {
    id: "8",
    title: "ipad",
    price: 65000,
    image: "/images/04-ipad.png",
  },
];

function getProductData(id) {
  let productData = productList.find((item) => item.id === id);

  return productData;
}

export { productList, getProductData };

