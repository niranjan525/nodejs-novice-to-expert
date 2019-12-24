function yesOrNo() {
      return new Promise((resolve, reject) => {
            const val = Math.round(Math.random() * 1); // 0 or 1, at random

            val ? resolve('Lucky!!') : reject('Unlucky 😠 !!');
            // resolve('Lucky!!')
      });
}


async function msg() {
      try {
            const msg = await yesOrNo();
            console.log("Resolve: ", msg);
      } catch (err) {
            console.log("Reject:", err);
      }
}

// console.log(msg());
// msg().then((data) => {console.log(data);}).catch((err)=>{});
// msg();
// msg();
// msg();
// msg();

// msg().catch(x => console.log(x));

function invoke() {
      msg();
      msg();
      msg();
      msg();
      msg();
      msg();
      msg();
      msg();
      msg();
      msg();
      msg();
}

invoke();








// -------- upgrade -------------
// async function msg() {
//       try {
//             const msg = await yesOrNo();
//             console.log("Resolve: ", msg);
//       } catch (err) {
//             console.log("Reject:", err);
//       }
// }





