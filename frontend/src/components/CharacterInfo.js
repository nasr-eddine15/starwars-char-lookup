import { Col, Row } from "antd";
import FilmInfo from "./FilmInfo";

var _ = require("lodash");

const CharacterInfo = (props) => {
  const { char } = props;
  // console.log(char);

  const leftSpace = 7;
  const rightSpace = 10;

  return (
    <div className="char-info">
      {_.isEmpty(char) ? (
        ""
      ) : (
        <div className="row-space">
          <Row>
            <Col span={leftSpace} className="info-title">
              Name:
            </Col>
            <Col span={leftSpace}>{char.name}</Col>
          </Row>
          <Row>
            <Col span={leftSpace} className="info-title">
              Height:
            </Col>
            <Col span={leftSpace}>
              {char.height}
              {char.height === "N/A" ? "" : "cm"}
            </Col>
          </Row>
          <Row>
            <Col span={leftSpace} className="info-title">
              Mass:
            </Col>
            <Col span={leftSpace}>
              {char.mass}
              {char.mass === "N/A" ? "" : "kg"}
            </Col>
          </Row>
          <Row>
            <Col span={leftSpace} className="info-title">
              Hair Color:
            </Col>
            <Col span={leftSpace}>{char.hair_color}</Col>
          </Row>
          <Row>
            <Col span={leftSpace} className="info-title">
              Skin Color:
            </Col>
            <Col span={leftSpace}>{char.skin_color}</Col>
          </Row>
          <Row>
            <Col span={leftSpace} className="info-title">
              Gender:
            </Col>
            <Col span={leftSpace}>{char.gender}</Col>
          </Row>
          <Row>
            <Col span={leftSpace} className="info-title">
              Birth Year:
            </Col>
            <Col span={leftSpace}>{char.birth_year}</Col>
          </Row>
          {/* home planet */}
          <Row>
            <Col span={leftSpace} className="info-title">
              Home Planet:
            </Col>
          </Row>
          <Row>
            <Col span={leftSpace}></Col>
            <Col span={leftSpace} className="info-subtitle">
              Title:
            </Col>
            <Col span={rightSpace}>{char.home_planet.title}</Col>
          </Row>
          <Row>
            <Col span={leftSpace}></Col>
            <Col span={leftSpace} className="info-subtitle">
              Terrain:{" "}
            </Col>
            <Col span={rightSpace}>{char.home_planet.terrain}</Col>
          </Row>
          <Row>
            <Col span={leftSpace}></Col>
            <Col span={leftSpace} className="info-subtitle">
              Population:{" "}
            </Col>
            <Col span={rightSpace}>{char.home_planet.population}</Col>
          </Row>
          {/* species */}
          <Row>
            <Col span={leftSpace} className="info-title">
              Species:
            </Col>
          </Row>
          <Row>
            <Col span={leftSpace}></Col>
            <Col span={leftSpace} className="info-subtitle">
              Name:{" "}
            </Col>
            <Col span={rightSpace}>{char.species.name}</Col>
          </Row>
          <Row>
            <Col span={leftSpace}></Col>
            <Col span={leftSpace} className="info-subtitle">
              Average Lifespan:{" "}
            </Col>
            <Col span={rightSpace}>{char.species.average_lifespan}</Col>
          </Row>
          <Row>
            <Col span={leftSpace}></Col>
            <Col span={leftSpace} className="info-subtitle">
              Classification:{" "}
            </Col>
            <Col span={rightSpace}>{char.species.classification}</Col>
          </Row>
          <Row>
            <Col span={leftSpace}></Col>
            <Col span={leftSpace} className="info-subtitle">
              Language:{" "}
            </Col>
            <Col span={rightSpace}>{char.species.language}</Col>
          </Row>
          {/* I could modularize this even more by making planet, species and film components to declutter... */}
          <Row>
            <Col span={leftSpace} className="info-title">
              Films:
            </Col>
          </Row>
          {char.films.map((film) => (
            <FilmInfo info={film} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CharacterInfo;
