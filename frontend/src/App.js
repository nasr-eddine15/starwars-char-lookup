import axios from "axios";
import { useEffect, useState } from "react";
import { Select, InputNumber, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import CharacterInfo from "./components/CharacterInfo";

import "./App.css";
import "./index.css";

const { Option } = Select;

function App() {
  const [characterResult, setCharacterResult] = useState({
    name: "N/A",
    height: "N/A",
    mass: "N/A",
    hair_color: "N/A",
    skin_color: "N/A",
    gender: "N/A",
    birth_year: "N/A",
    home_planet: {
      title: "N/A",
      terrain: "N/A",
      population: "N/A",
    },
    species: {
      name: "N/A",
      average_lifespan: "N/A",
      classification: "N/A",
      language: "N/A",
    },
    films: [
      {
        title: "N/A",
        director: "N/A",
        producers: "N/A",
        release_date: "N/A",
      },
    ],
  });
  const [defaultNames, setDefaultNames] = useState([]);
  const [charId, setCharId] = useState(1);
  const [personId, setPersonId] = useState(1);
  const [charDisabled, setCharDisabled] = useState(false);
  const [idDisabled, setIdDisabled] = useState(false);

  useEffect(() => {
    // populate names of first 10 people returned from this endpoint given that we use for the drop down menu, not going to make 88 calls at once due to potential rate limiting
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        setDefaultNames(
          res.data.results.map((char) => {
            return char.name;
          })
        );
      })
      .catch((err) => console.log(err.message));
    // console.log(defaultNames);
  }, []);

  const disableIdSelect = () => {
    setIdDisabled(true);
    setCharDisabled(false);
  };
  const disableCharSelect = () => {
    setCharDisabled(true);
    setIdDisabled(false);
  };
  const handleCharChange = (e) => {
    setCharId(e.value);
  };
  const handleIdChange = (e) => {
    setPersonId(e);
  };

  const handleSubmit = () => {
    if (idDisabled) {
      axios
        .get(`http://localhost:5000/api/people/${charId}`)
        .then((res) => {
          setCharacterResult(res.data);
        })
        .catch((err) => console.log(err.message));
    } else {
      axios
        .get(`http://localhost:5000/api/people/${personId}`)
        .then((res) => {
          setCharacterResult(res.data);
        })
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <div>
      <div className="heading">
        <h1 className="title">Star Wars</h1>
        <h2 className="subtitle">CHARACTER DATAPAD</h2>
      </div>

      <div className="results">
        <div className="search-area">
          <p className="prompt">Please select character or person id</p>
          <Space size="large">
            <Select
              className="char-select"
              labelInValue
              defaultValue={{ value: "Select Character" }}
              style={{ width: 200 }}
              onSelect={handleCharChange}
              disabled={charDisabled ? "disabled" : ""}
              onClick={disableIdSelect}
            >
              {defaultNames.map((name, index) => (
                <Option key={index} value={index + 1}>
                  {name} ({index + 1})
                </Option>
              ))}
            </Select>
            <div onClick={disableCharSelect}>
              <InputNumber
                min={1}
                max={88}
                value={personId}
                onChange={handleIdChange}
                disabled={idDisabled ? "disabled" : ""}
              />
            </div>
            <Button
              // type="primary"
              shape="round"
              icon={<SearchOutlined />}
              size="large"
              className="search-button"
              onClick={handleSubmit}
            >
              Search
            </Button>
          </Space>
        </div>

        <div className="display-box">
          <CharacterInfo char={characterResult} />
        </div>
      </div>
    </div>
  );
}

export default App;
