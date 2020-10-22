DROP DATABASE IF EXISTS restaurantphotos;

CREATE DATABASE restaurantphotos;

\c restaurantphotos;

-- CITY, STATE, GENRE, STARS,
CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  city VARCHAR(40),
  state VARCHAR(50),
  country VARCHAR(100),
  stars INT NOT NULL,
  cuisine VARCHAR(40)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY, -- id specific to each user
  firstname VARCHAR(30) NOT NULL, -- user first name
  lastname VARCHAR(30) NOT NULL, -- user last name
  username VARCHAR(60) NOT NULL,
  avatarpic VARCHAR(60) NOT NULL -- link to user's picture
);

CREATE TABLE category (
  id SERIAL PRIMARY KEY,
  categories VARCHAR(30) -- categories of photos (menu, drinks, pasta, soups)
);

CREATE TABLE photos (
  id SERIAL primary key, -- id specific to each photo
  url VARCHAR(100) NOT NULL, -- individual photos link
  description VARCHAR(200) NOT NULL, -- photo name/description
  userid int references users(id) NOT NULL,
  categoryid int references category(id) NOT NULL,
  restaurantid int references restaurants(id) NOT NULL
);

COPY restaurants (name, city, state, country, stars, cuisine) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/restaurantTableCsv/restaurantTable0.csv' DELIMITER ',' CSV header;
COPY restaurants (name, city, state, country, stars, cuisine) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/restaurantTableCsv/restaurantTable1.csv' DELIMITER ',' CSV header;
COPY restaurants (name, city, state, country, stars, cuisine) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/restaurantTableCsv/restaurantTable2.csv' DELIMITER ',' CSV header;
COPY restaurants (name, city, state, country, stars, cuisine) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/restaurantTableCsv/restaurantTable3.csv' DELIMITER ',' CSV header;
COPY restaurants (name, city, state, country, stars, cuisine) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/restaurantTableCsv/restaurantTable4.csv' DELIMITER ',' CSV header;

COPY category (categories) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/categoriesTableCsv/categoriesTable.csv' DELIMITER ',' CSV header;

COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable1.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable2.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable3.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable4.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable5.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable6.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable7.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable8.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable9.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable10.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable11.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable12.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable13.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable14.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable15.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable16.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable17.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable18.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable19.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable20.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable21.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable22.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable23.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable24.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable25.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable26.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable27.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable28.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable29.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable30.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable31.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable32.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable33.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable34.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable35.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable36.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable37.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable38.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable39.csv' DELIMITER ',' CSV header;
COPY users (firstname, lastname, username, avatarpic) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/usersTableCsv/userTable40.csv' DELIMITER ',' CSV header;

COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable1.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable2.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable3.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable4.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable5.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable6.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable7.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable8.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable9.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable10.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable11.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable12.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable13.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable14.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable15.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable16.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable17.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable18.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable19.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable20.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable21.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable22.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable23.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable24.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable25.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable26.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable27.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable28.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable29.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable30.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable31.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable32.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable33.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable34.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable35.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable36.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable37.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable38.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable39.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable40.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable41.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable42.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable43.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable44.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable45.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable46.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable47.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable48.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable49.csv' DELIMITER ',' CSV header;
COPY photos (url, description, userid, categoryid, restaurantid) FROM '/Users/theo/Desktop/HR/SDC/photos-carousel-service/database/postgreSQL/CSV/photosTableCsv/photosTable50.csv' DELIMITER ',' CSV header;