import { TypesAuth } from "./types";

interface ActionLoadAutn {
  type: string;
}

interface Actions {
  load(): ActionLoadAutn;
}

const actionsAuth: Actions = {
  load: () => ({
    type: TypesAuth.LOAD,
  }),
};

export default actionsAuth;
