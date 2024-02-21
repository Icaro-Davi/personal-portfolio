import { useContext } from "react";
import FileWindowContext from "./context";

const useFileWindowContext = () => useContext(FileWindowContext);
export default useFileWindowContext;