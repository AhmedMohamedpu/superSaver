const db = supabase.createClient(
  "https://aereniuhvgnpnbdrmurm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlcmVuaXVodmducG5iZHJtdXJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ1MTA0OTYsImV4cCI6MjAyMDA4NjQ5Nn0.KMcT_nSussrJLW0BhF15U86jcMqxGHklGrerQPAAyhI"
);
const container = document.getElementById("deals-container");
const bucket = document.getElementById("bucket-container");

async function init() {
  const { data, error } = await db.from("deals").select("*");
  console.log("xxx", data);

  for (let i = 0; i < data.length; i++) {
    // console.log(data[i].name.image_url);
    // const imageelement = document.createElement("img");
    // const nameelement = document.createElement("h3");
    // imageelement.src = data[i].image_url;
    // imageelement.className = "images";
    // nameelement.className = "names";
    // nameelement.innerHTML = data[i].name;
    // container.appendChild(imageelement);
    // container.appendChild(nameelement);
    for (let i = 0; i < data.length; i++) {
      console.log(data.name);
      const imageelement = document.createElement("img");
      const nameelement = document.createElement("h3");
      const pricebeforeelement = document.createElement("p");
      const priceafterelement = document.createElement("p");

      imageelement.src = data[i].image_url;
      nameelement.innerHTML = data[i].name;
      pricebeforeelement.innerHTML = "price before " + data[i].price_before;
      priceafterelement.innerHTML = "price After " + data[i].price_after;

      imageelement.className = "images";
      nameelement.className = "names";
      pricebeforeelement.className = "priceB";
      priceafterelement.className = "priceA";

      container.appendChild(imageelement);
      container.appendChild(nameelement);
      container.appendChild(pricebeforeelement);
      container.appendChild(priceafterelement);
    }
  }
}

init();

// for (let i = 0; i < data.length; i++) {
//   console.log(data[i].name.image_url);
//   const imageelement = document.createElement("img");
//   const nameelement = document.createElement("h3");
//   imageelement.src = data[i].image_url;
//   imageelement.className = "images";
//   nameelement.className = "names";
//   nameelement.innerHTML = data[i].name;
//   container.appendChild(imageelement);
//   container.appendChild(nameelement);

// for(let i = 0; i < data.length; i++) {
//   console.log(data.name.image_url.id.created_at.price_before.price_after.deal_ends);
//   const imageelement = document.createElement("img");
//   const nameelement = document.createElement("h3");
//   const pricebeforeelement = document.createElement("p");
//   const priceafterelement = document.createElement("p");
//   imageelement.src = data[i].image_url;
//   nameelement.innerHTML = data[i].name;
//   pricebeforeelement.innerHTML = data[i].price_before;
//   priceafterelement.innerHTML = data[i].price_after;
//   container.appendChild(imageelement);
//   container.appendChild(nameelement);
//   container.appendChild(pricebeforeelement);
//   container.appendChild(priceafterelement);

// }
