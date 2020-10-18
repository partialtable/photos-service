
DROP DATABASE IF EXISTS restaurantphotos;

CREATE DATABASE restaurantphotos;

\c restaurantphotos;

-- CITY, STATE, GENRE, STARS,
CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  city VARCHAR(40),
  state VARCHAR(40),
  country VARCHAR(40),
  stars INT NOT NULL,
  cuisine VARCHAR(40)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY, -- id specific to each user
  firstName VARCHAR(20) NOT NULL, -- user first name
  lastName VARCHAR(20) NOT NULL, -- user last name
  username VARCHAR(25) NOT NULL UNIQUE,
  avatarPic VARCHAR(60) NOT NULL -- link to user's picture
);

CREATE TABLE category (
  id SERIAL PRIMARY KEY,
  categories VARCHAR(30) UNIQUE -- categories of photos (menu, drinks, pasta, soups)
);

CREATE TABLE photos (
  id SERIAL primary key, -- id specific to each photo
  url VARCHAR(100) NOT NULL, -- individual photos link
  description VARCHAR(200) NOT NULL, -- photo name/description

  -- FOREIGN KEY(userId) REFERENCES users(id),
  -- FOREIGN KEY(categoryId) REFERENCES category(id)
  userId int references users(id) NOT NULL,
  categoryId int references category(id) NOT NULL,
  restaurantId int references restaurants(id) NOT NULL
);

