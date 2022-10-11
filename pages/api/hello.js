// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const getGenre = async () => {
  fetch("https://api.github.com/users/manishmshiva")
    // Handle success
    .then((response) => response.json()) // convert to json
    .then((json) => console.log(json)) //print data to console
    .catch((err) => console.log("Request Failed", err)); // Catch errors
};
