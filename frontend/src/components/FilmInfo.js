import { Col, Row } from "antd";

const FilmInfo = (props) => {
  const { info } = props;

  const leftSpace = 7;
  const rightSpace = 10;

  return (
    <div>
      <Row>
        <Col span={leftSpace}></Col>
        <Col span={leftSpace} className="info-subtitle">
          Title:{" "}
        </Col>
        <Col span={rightSpace}>{info.title}</Col>
      </Row>
      <Row>
        <Col span={leftSpace}></Col>
        <Col span={leftSpace} className="info-subtitle">
          Director:{" "}
        </Col>
        <Col span={rightSpace}>{info.director}</Col>
      </Row>
      <Row>
        <Col span={leftSpace}></Col>
        <Col span={leftSpace} className="info-subtitle">
          Producers:{" "}
        </Col>
        <Col span={rightSpace}>{info.producers}</Col>
      </Row>
      <Row>
        <Col span={leftSpace}></Col>
        <Col span={leftSpace} className="info-subtitle">
          Release Date:{" "}
        </Col>
        <Col span={rightSpace}>{info.release_date}</Col>
      </Row>
    </div>
  );
};

export default FilmInfo;
