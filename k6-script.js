import { sleep } from "k6";
import http from "k6/http";

export const options = {
  stages: [
    { duration: "30s", target: 200 },
    { duration: "30s", target: 500 },
    { duration: "1m", target: 1000 },
    { duration: "30s", target: 200 },
    { duration: "30s", target: 50 },
  ],
  ext: {
    loadimpact: {
      distribution: {
        "amazon:us:ashburn": { loadZone: "amazon:us:ashburn", percent: 100 },
      },
    },
  },
};

export default function main() {
  let response;
  const restaurantId = Math.random((Math.floor() * 50000000 - 1) + 1);
  const categoryId = Math.random((Math.floor() * 15 - 1) + 1);
  const userId = Math.random((Math.floor() * 3000000 - 1) + 1);
  const url = 'yahooo@gmail.com';
  const description = 'Giant food';

  // Get Restaurant By Id
  response = http.get(`http://localhost:2500/api/restaurants/photos`);

  // Automatically added sleep
  sleep(.1);
}
