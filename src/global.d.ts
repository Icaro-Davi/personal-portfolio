import pt from "../locale/pt.json";

type Messages = typeof pt;

declare global {
  interface IntlMessages extends Messages {}
}
