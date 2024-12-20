import Heading from "./Heading";
import { LevelContext } from "./levelContext";

export default function Section({level, children}){
    return (
        <>
          <LevelContext.Provider value={level}>
            {children}
          </LevelContext.Provider>
        </>
    )
}