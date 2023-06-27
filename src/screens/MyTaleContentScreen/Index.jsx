import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { fetchTales } from "../../database/database";
import MyTaleList from "../../components/MyTaleList/MyTaleList";

function MyTaleContentScreen() {
  const [loadedTales, setLoadedTales] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadedTales() {
      const tales = await fetchTales();
      setLoadedTales(tales);
    }
    if (isFocused) {
      loadedTales();
      //setLoadedPlaces(curPlaces =>[...curPlaces, route.params.place])
    }
  }, [isFocused]);

  return <MyTaleList tales={loadedTales} />;
}

export default MyTaleContentScreen;
