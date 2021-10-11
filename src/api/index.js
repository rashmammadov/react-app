// import hexEncrypt from "crypto-js/enc-hex";
// import sha1 from "crypto-js/sha1";

// const API_SECRET = "VUuhnYE4fhcHIIBHCtazV92S87WznBbc1ugPTBhWGdNqwVUI7O";
// const API_TIME = Math.floor(Date.now() / 1000);

// const BASE_URL = "https://api.corezoid.com/api/2/json/";

export const fetchApi = async (body) => {
  // const signature = hexEncrypt.stringify(
  //   sha1(API_TIME + API_SECRET + body + API_SECRET)
  // );
  // const url = `${BASE_URL}${API_SECRET}/${API_TIME}/${signature}`;

  const url = `https://www.corezoid.com/api/1/json/public/990107/e0fc609e6052298be0990c23ff64084de87b0c75`;

  fetch(url, {
    method: "POST",
    body,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Requested-With",
    },
  })
    .then((res) => res.json())
    .then((responseJSON) => {
      console.log(responseJSON);
    })
    .catch(console.log);
};

// CryptoJS.enc.Hex.stringify(
//     CryptoJS.SHA1(time + secret + body + secret)
// );
