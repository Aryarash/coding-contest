const site_img_url = {
    "codechef" : "https://static.startuptalky.com/2021/04/codechef-logo-startuptalky.jpg",
    "hackerrank" : "https://repository-images.githubusercontent.com/231893793/cec60480-04a9-11eb-80c4-df7359d94047",
    "codeforce" : "https://repository-images.githubusercontent.com/390296311/0f6c1240-462e-47ff-870d-e2d0ebb181f1",
    "atcoder" : "https://img.atcoder.jp/assets/atcoder.png",
    "leetcode" : "https://leetcode.com/static/images/LeetCode_Sharing.png",
    "hackerearth" : "https://camo.githubusercontent.com/99a57a812f5f6c5ff7905942ca5566e25e547e4ccf2c3c4b0e9e7fa767bd2c03/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3630302f312a5f7145795a32495534314e334c7772575856343371672e6a706567",
    "kick start" : "https://repository-images.githubusercontent.com/134320311/897cdfb8-e8a8-4fcb-bda9-37561ab2ad88"
}

let url = "https://kontests.net/api/v1/all";
let response = fetch(url)

response.then((v) => {
    return v.json()
}).then((contests)=>{
    ihtml = "";
    for(item in contests){
        let name_site = (contests[item].site).trim();
        name_site = name_site.toLowerCase();
        let img_url = "https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming%20evolution.jpg?itok=WTj9-yNz";
        for(ky in site_img_url){
            if(name_site.includes(ky)){
                img_url = site_img_url[ky];
            }
        }
        ihtml += `<div class="card mx-2 my-2" style="width: 18rem; height: 18rem;">
            <img src=${img_url} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${contests[item].name}</h5>
                <p class="card-text"> Status is ${contests[item].status} and site is ${contests[item].site}</p>
                <p class="card-text"> In 24 Hours? ${contests[item].in_24_hours} </p>
                <p>Starts at: ${contests[item].start_time}
                <p>Starts at: ${contests[item].end_time}
                <a href="${contests[item].url}" class="btn btn-primary my-4" target="_blank">Visit Contest</a>
            </div>
        </div>`
    }
    cardContainer.innerHTML = ihtml
})
