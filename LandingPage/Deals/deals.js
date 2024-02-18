const db = supabase.createClient(
  "https://aereniuhvgnpnbdrmurm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlcmVuaXVodmducG5iZHJtdXJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ1MTA0OTYsImV4cCI6MjAyMDA4NjQ5Nn0.KMcT_nSussrJLW0BhF15U86jcMqxGHklGrerQPAAyhI"
);
const container = document.getElementById("deals-container");
var toAdd = document.createDocumentFragment();

async function init() {
  const { data, error } = await db.from("deals").select("*");
  console.log("xxx", data);

  for (let i = 0; i <= data.length; i++) {
    let box = document.createElement("div");
    let box2 = document.createElement("div");
    box2.className = "price";
    let names = document.createElement("h3");
    names.className = "productName";
    let image = document.createElement("img");
    let pricebefore = document.createElement("p");
    let priceafter = document.createElement("p");
    // images area
    image.src = data[i].image_url;
    image.width = 100;
    image.className = "images";
    // images end

    box.className = "box-container";

    names.innerHTML = data[i].name;
    priceafter.innerHTML = "Now: " + data[i].price_after;
    pricebefore.innerHTML = data[i].price_before;
    priceafter.className = "priceA";
    pricebefore.className = "priceB";

    box.appendChild(image);
    box.appendChild(names);
    box2.appendChild(priceafter);
    box2.appendChild(pricebefore);
    box.appendChild(box2);

    container.appendChild(box);
  }
}

init();
