function namaste() {
      return new Promise(resolve => {
            setTimeout(() => {
                  resolve('🙏');
            }, 2000);
      });
}

async function msg() {
      const msg = await namaste();
      console.log('Message: Namaste', msg);
}

msg();