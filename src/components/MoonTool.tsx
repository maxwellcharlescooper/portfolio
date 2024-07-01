import React, { useState, useEffect } from "react";
import Styled from "../styles/Styles";
import Colors from "../styles/Colors";
import SearchBar from "../components/SearchBar";
import calls from "../api/api";
import { AxiosResponse } from "axios";
import Functions from "../util/Functions";

type MoonToolProps = {
  cityOrZip?: string;
};

const { FlexColumn, MoonToolBox, FlexRow } = Styled;
const { fetchMoonPhase, fetchMoonImage } = calls;
const { formatMoonPhase, getDaysUntilNextFullMoon } = Functions;

const MoonTool = ({ cityOrZip }: MoonToolProps) => {
  const [value, setValue] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [moonData, setMoonData] = useState<AxiosResponse<any, any>>();
  const [moonImageData, setMoonImageData] = useState<AxiosResponse<any, any>>();
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  const handleSearch = () => setSearchTerm(value);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const hours = String(today.getHours());
  const minutes = String(today.getMinutes());

  useEffect(() => {
    console.log(year, month, day);
    fetchMoonPhase(searchTerm, `${year}-${month}-${day}`)
      .then(data => {
        if (!!data) {
          setMoonData(data);
        }
      })
      .catch(e => console.error(e));
    fetchMoonImage(`${year}-${month}-${day}`, hours, minutes)
      .then(data => {
        if (!!data) {
          setMoonImageData(data);
        }
      })
      .catch(e => console.error(e));
  }, [searchTerm]);
  console.log(moonImageData);
  const phase = moonData?.data?.days[0]?.moonphase;
  const moonrise = moonData?.data?.days[0]?.moonrise;
  const moonset = moonData?.data?.days[0]?.moonset;
  return (
    <MoonToolBox>
      MOON
      {"\n"}
      {"\n"}
      {"\n"}
      <SearchBar
        value={value}
        onChange={onChange}
        handleSearch={() => handleSearch()}
      />
      {moonData && (
        <div style={{ whiteSpace: "pre-line", justifyContent: "center" }}>
          <>right now:</>
          <div>{today.toDateString()}</div>
          {"\n"}
          <div>{formatMoonPhase(phase).string || "N/A"}</div>
          {"\n"}
          <div>{String.fromCodePoint(formatMoonPhase(phase).emoji)}</div>
          {"\n"}
          <div>moonrise:</div>
          <div>{moonrise || "N/A"}</div>
          {"\n"}
          <div>moonset:</div>
          <div>{moonset || "N/A"}</div>
          {"\n"}
          <div>next full moon in:</div>
          <div>{getDaysUntilNextFullMoon(phase)}</div>
        </div>
      )}
    </MoonToolBox>
  );
};

export default MoonTool;
