
const { CAT_BREED_ENUM } = require('../../common/constants');

/* This method is to check the validity of the URL*/
export const validator = (breedType) => {
    if (!breedType || !Object.values(CAT_BREED_ENUM).includes(breedType.toLowerCase())) {
        return false;
    }
    return true;
};