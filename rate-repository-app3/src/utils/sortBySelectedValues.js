const sortBySelectedValues = (sortBy) => {
    let obj;
    switch (sortBy) {
        case "ASC":
            obj = {
                orderDirection: "ASC"
            };
            break;
        case "DESC":
            obj = {
                orderDirection: "DESC"
            };
            break;
        case "CREATED_AT":
            obj = {
                orderDirection: "CREATED_AT"
            };
            break;
        case "":
            obj = {};
    }

    return obj;
};

export default sortBySelectedValues;