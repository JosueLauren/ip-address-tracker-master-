import axios from "axios";
import { createContext, ReactNode, useState, useEffect } from "react";

const baseUrl =
  "https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_OwjN9xuWrkAwj6aj2V7GpNwJHjzWZ&ipAddress=";

interface DataLocationsProviderProps {
  children: ReactNode;
}

interface DataLocationState {
  ip: string;
  location: string;
  timezone: string;
  isp: string;
  lat: number;
  lon: number;
}

interface IDataLocationContext {
  datalocation: DataLocationState;
  fetchDataLocation: (inputValue: string) => void;
}

export const DataLocationContext = createContext<IDataLocationContext>(
  {} as IDataLocationContext
);

export function DataLocationProvider({ children }: DataLocationsProviderProps) {
  const [datalocation, setDataLocation] = useState<DataLocationState>(
    {} as DataLocationState
  );

  useEffect(() => {
    fetchDataLocation("");
  }, []);

  async function fetchDataLocation(dataInput: string) {
    try {
      const response = await axios.get(`${baseUrl}${dataInput}`);
      const data = response.data;

      const dataLocationFormat = {
        ip: data.ip,
        location: `${data.location.region}, ${data.location.country} `,
        timezone: data.location.timezone,
        isp: data.isp,
        lat: data.location.lat,
        lon: data.location.lng,
      };

      setDataLocation(dataLocationFormat);
    } catch (e) {
      alert("IP inválido!");
    }
  }

  return (
    <DataLocationContext.Provider value={{ datalocation, fetchDataLocation }}>
      {children}
    </DataLocationContext.Provider>
  );
}
