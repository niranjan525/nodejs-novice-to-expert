function namaste() {
      return new Promise(resolve => {
            setTimeout(() => {
                  resolve('🙏');
            }, 200);
      });
}

function greet() {
      return new Promise(resolve => {
            setTimeout(() => {
                  resolve(' Welcome');
            }, 300);
      });
}

function place() {
      return new Promise(resolve => {
            setTimeout(() => {
                  resolve('to Bengaluru!');
            }, 500);
      });
}

async function msg() {
      const a = await namaste();
      const b = await greet();
      const c = await place();
      console.log(a, b, c);

      // ---- OR ---- 
      // to execute in parallel
      // const results = await Promise.all([namaste(), greet(), place()]);
      // console.log(results[0], results[1], results[2]);

}

msg();