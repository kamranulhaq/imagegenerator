const accessKey ="KMG5JVibKLCfB2xJfT_7psupIOABkft53anDGRd2M_g"
const serchform = document.getElementById("Search-form");
const SerchBox = document.getElementById("Serch-box");
const Serchresult = document.getElementById("Serch-result");
const morebtn = document.getElementById("serch-more");

let keyword ="";
let page = 1;

async function SerchImages (){
     keyword = SerchBox.value;
     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=9`;
     const response = await fetch(url);
     const data = await response.json();
    
     if (page===1){
        Serchresult.innerHTML="";
     }

    const results = data.results;
    results.map((results)=>{
        const image = document.createElement("img");
        image.src = results.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = results.links.html;
        imageLink.target= "_blank";
        imageLink.appendChild(image);
        Serchresult.appendChild(imageLink);
    })
    morebtn.style.display="block"

}
serchform .addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    SerchImages()
})
morebtn.addEventListener ("click",()=>{
page++
 SerchImages()

})



