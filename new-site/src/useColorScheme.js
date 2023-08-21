import { useEffect, useMemo } from "react";
import createPersistedState from "use-persisted-state";
const useColorSchemeState = createPersistedState("colorScheme");

export function useColorScheme(){
    const systemPrefersDark = "dark"
    
      const [isLight, setIsLight] = useColorSchemeState();
      const value = useMemo(
        () => (isLight === undefined ? !!systemPrefersDark : isLight),
        [isLight, systemPrefersDark]
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