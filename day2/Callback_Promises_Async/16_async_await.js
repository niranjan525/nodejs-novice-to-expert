const mypromise = new Promise((resolve, reject) => {
      resolve("Successfully resolved");
});

async function temp() {

     return "My result";
}

temp().then((data)=>{console.log(data)});