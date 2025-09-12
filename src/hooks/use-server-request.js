import { useCallback } from "react";
import { useSelector } from "react-redux";
import { selectUserSession } from "../selectors";
import { server } from "../bff";

export const useServerRequest = () => {
  const session = useSelector(selectUserSession);

  return useCallback(
    (operation, ...params) => {
      const reqeust = ["register", "authorize", "fetchPost"].includes(operation)
        ? params
        : [session, ...params];

      console.log(
        `[useServerRequest] Operation: ${operation}, reqeust:`,
        reqeust
      );

      return server[operation](...reqeust);
    },
    [session]
  );
};
