import DataRepository from "./DataRepository";

const repositories = {
    data: DataRepository,
};

export default {
    get: (name) => repositories[name],
};
