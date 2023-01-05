import DataRepository from "./DataRepository";
import UserRepository from "./UserRepository";

const repositories = {
    data: DataRepository,
    user: UserRepository,
};

export default {
    get: (name) => repositories[name],
};
