import { TypesUsers } from "./types";

interface ActionLoadUsers {
  type: string;
}
interface ActionCreateUsers {
  type: string;
  payload: {
    name: string;
  };
}

interface Actions {
  load(): ActionLoadUsers;
  create(name: string): ActionCreateUsers;
}

const actionsUsers: Actions = {
  load: () => ({
    type: TypesUsers.LOAD,
  }),
  create: (name: string) => ({
    type: TypesUsers.CREATE,
    payload: {
      name,
    },
  }),
};

export default actionsUsers;
