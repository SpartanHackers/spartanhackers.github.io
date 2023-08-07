import React from "react";
import Toggle from "react-toggle";
import { useEffect, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import createPersistedState from "use-persisted-state";
import { useColorScheme } from "./useColorScheme";

const useColorSchemeState = createPersistedState("colorScheme");

export function useColorScheme() {
  const systemPrefersLight = useMediaQuery(
    {
      query: "(prefers-color-scheme: light)",
    },
    undefined
  );

  const [isLight, setIsLight] = useColorSchemeState();
  const value = useMemo(
    () => (isLight === undefined ? !!systemPrefersLight : isLight),
    [isLight, systemPrefersLight]
  );

  useEffect(() => {
    if (value) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [value]);

  return {
    isLight: value,
    setIsLight,
  };
}

export const DarkModeToggle = () => {
    const { isDark, setIsLight } = useColorScheme();
    var toggle = document.getElementById("dark-toggle");
    if (checkBox.checked == false){
        setIsLight(document.getElementById("dark-toggle"));
    }else{
        setIsLight(document.getElementById("dark-toggle"));
    }
    return (
      <Toggle
        checked={isDark}
        onChange={({ target }) => setIsLight(target.checked)}
      />
    );
  };