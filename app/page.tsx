"use client";
import { Divide, Search } from "lucide-react";
import WeatherApp from "./WeathApp";
import { useEffect, useState } from "react";
import { IWeather } from "@/type";

export default function Home() {
  const [data, setData] = useState<IWeather>();
  const [search, setSearch] = useState("yemen");
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.weatherbit.io/v2.0/current?city=${search}&key=3fcc74d47b7c48c4b9d1d5612440dde9&include=minutely`
      );
      const json = await res.json();
      console.log(json);
      setData({
        data: json.data,
        minutely: json.minutely,
      });
      console.log(data);
    };
    fetchData();
  }, [search]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 p-8">
      <div className="relative flex-1 max-w-4xl mx-auto">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          size={20}
        />
        <input
          type="text"
          placeholder="Search city..."
          className="w-full pl-10 pr-4 py-3  text-black rounded-lg border border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {!data && (
        <div className="animate-spin mx-auto mt-5 border-t-2 border-t-white rounded-full size-12 "></div>
      )}
      {data && <WeatherApp data={data} />}
    </div>
  );
}
