import { Container, Content } from "./style";

import arrowImg from "./../../images/icon-arrow.svg";
import { useState, useContext } from "react";

import { DataLocationContext } from "./../../context/DataLocationContext";

export const Header = () => {
  const [dataInput, setDataInput] = useState("");

  const { fetchDataLocation, datalocation } = useContext(DataLocationContext);

  return (
    <Container>
      <Content>
        <h1>IP Address Tracker</h1>
        <div className="input-button">
          <input
            required
            pattern="^([0-9]{1,3}\.){3}[0-9]{1,3}$"
            type="text"
            placeholder="Search for any IP address or domain"
            value={dataInput}
            onChange={(e) => setDataInput(e.target.value)}
          />
          <button onClick={() => fetchDataLocation(dataInput)}>
            <img src={arrowImg} alt="icone arrow image" />
          </button>
        </div>
        <div className="results-info">
          <div>
            <span>IPP ADDRESS</span>
            <p>{datalocation?.ip}</p>
          </div>
          <div>
            <span>LOCATION</span>
            <p>{datalocation?.location}</p>
          </div>
          <div>
            <span>TIMEZONE</span>
            <p>{datalocation?.timezone}</p>
          </div>
          <div>
            <span>ISP</span>
            <p>{datalocation?.isp}</p>
          </div>
        </div>
      </Content>
    </Container>
  );
};
