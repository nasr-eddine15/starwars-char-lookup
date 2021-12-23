const express = require("express");
const app = express();
const axios = require("axios");
// axios.defaults.baseURL = "https://swapi.py4e.com/api/";

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("serving");
});

app.get("/api/people/:personId", async (req, res) => {
  const personId = req.params.personId;
  try {
    const person = await axios.get(
      "https://swapi.py4e.com/api/people/" + personId
    );
    var result = {
      name: person.data.name,
      height: person.data.height,
      mass: person.data.mass,
      hair_color: person.data.hair_color,
      skin_color: person.data.skin_color,
      gender: person.data.gender,
      birth_year: person.data.birth_year,
    };
    // console.log(person.data);
    const homeworld = await axios.get(person.data.homeworld);
    result = {
      ...result,
      home_planet: {
        title: homeworld.data.name,
        terrain: homeworld.data.terrain,
        population: homeworld.data.population,
      },
    };
    // console.log(homeworld.data);
    const species = await axios.get(person.data.species[0]);
    result = {
      ...result,
      species: {
        name: species.data.name,
        average_lifespan: species.data.average_lifespan,
        classification: species.data.classification,
        language: species.data.language,
      },
      films: [],
    };
    // console.log(species.data);

    let filmArray = person.data.films.map((url) => axios.get(url));
    Promise.all(filmArray).then((results) => {
      const films = results.map((film) => film.data);
      films.forEach((film) => {
        result.films.push({
          title: film.title,
          director: film.director,
          producers: film.producer,
          release_date: film.release_date,
        });
        // console.log(result);
      });
      // console.log(result);
      res.send(result);
    });
    // console.log(result);
  } catch (err) {
    console.log(err.message);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serving at http://localhost:${port}`);
});
