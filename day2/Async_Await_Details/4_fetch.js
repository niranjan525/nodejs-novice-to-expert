const axios = require("axios");

async function getEmailsAwait(endpoint) {
      const res = await axios.get(endpoint);
      const emails = res.data.map(comment => comment.email);
      console.log(emails);
}

async function getEmailsPromise(endpoint) {
      axios.get(endpoint).then((res) => {
            const emails = res.data.map(comment => comment.email);
            console.log(emails);
      });

}

getEmailsPromise('https://jsonplaceholder.typicode.com/comments');
getEmailsAwait('https://jsonplaceholder.typicode.com/comments');