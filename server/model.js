const client = require('../psqlDatabase');

// works
const getRestaurant = (id, cb) => {
  const q = `SELECT * FROM restaurants WHERE id = ${id}`;
  client.query(q, cb);
};

// works
const getRestaurantPhotos = (id, cb) => {
  const q = `SELECT * FROM photos WHERE restaurantid = ${id} LIMIT 100`;
  client.query(q, cb);
};

// works
const photosByCategory = (restaurantId, categoryId, cb) => {
  const q = `SELECT *, categories FROM photos INNER JOIN category ON photos.categoryid=category.id WHERE category.id=${categoryId} AND photos.restaurantid=${restaurantId}`;
  client.query(q, cb);
};

// works
const addRestaurant = (name, city, state, country, stars, cuisine, cb) => {
  const q = `INSERT INTO restaurants (name, city, state, country, stars, cuisine) VALUES ('${name}', '${city}', '${state}', '${country}', ${stars}, '${cuisine}')`;
  client.query(q, cb);
};

// works
const addPhotos = (
  url, description, userid, categoryid, restaurantid, cb,
) => {
  const addPhoto = `INSERT INTO photos (url, description, userid, categoryid, restaurantid) VALUES ('${url}', '${description}', ${userid}, ${categoryid}, ${restaurantid})`;
  // insert user, then category, then photos
  client.query(addPhoto, cb);
};

// works
const updatePhoto = (info, cb) => {
  // update user or photos information
  const {
    url, description, userid, id, restaurantid,
  } = info;
  const q = `UPDATE photos SET url = '${url}', description = '${description}', userid = ${userid} WHERE id=${id} AND restaurantid=${restaurantid}`;
  client.query(q, cb);
};

const removePhoto = (info, cb) => {
  // either photoid or description
  const { photoid, restaurantid } = info;
  const q = `DELETE FROM photos WHERE id = ${photoid} AND restaurantid = ${restaurantid}`;
  client.query(q, cb);
};

module.exports = {
  getRestaurant,
  getRestaurantPhotos,
  photosByCategory,
  addPhotos,
  addRestaurant,
  updatePhoto,
  removePhoto,
};
