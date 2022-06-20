import { useEffect } from "react";
import useDarkMode from "./hooks/useDarkMode";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "./redux-tookit/globalSlice";

export default function SwitchToggle() {
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useDarkMode();
  console.log("🚀 ~ file: App.js ~ line 14 ~ App ~ darkMode", darkMode);

  useEffect(() => {
    dispatch(toggleDarkMode(darkMode));
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    // dispatch(toggleDarkMode(!darkMode));
  };
  return <button onClick={handleToggleDarkMode}>Toggle dark mode</button>;
}
