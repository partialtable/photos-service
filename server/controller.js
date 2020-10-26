const model = require('./model');

const getRestaurant = (req, res) => {
  const { id } = req.params;

  model.getRestaurant(id, (err, restaurant) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(restaurant.rows);
    }
  });
};

const getRestaurantPhotos = (req, res) => {
  const { id } = req.params;
  model.getRestaurantPhotos(id, (err, photos) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(photos.rows);
    }
  });
};

const photosByCategory = (req, res) => {
  const { restaurantId, categoryId } = req.params;
  model.photosByCategory(restaurantId, categoryId, (err, photos) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(photos);
    }
  });
};

const addRestaurant = (req, res) => {
  const {
    name, city, state, country, stars, cuisine,
  } = req.body;
  model.addRestaurant(name, city, state, country, stars, cuisine, (err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send('Restaurant added');
    }
  });
};

const addPhotos = (req, res) => {
  const {
    url, description, userid, categoryid, restaurantid,
  } = req.body;
  model.addPhotos(
    url, description, userid, categoryid, restaurantid, (err) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).send('Photo added');
      }
    },
  );
};

const updatePhoto = (req, res) => {
  model.updatePhoto(req.body, (err) => {
    console.log(req.body)
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send();
    }
  });
};

const removePhoto = (req, res) => {
  model.removePhoto(req.body, (err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send();
    }
  });
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
