
const { validator} = require('./src/services/validation/validator');
const { CatService } = require('./src/services/CatService');
const { CAT_BREED_ENUM } = require('./src/common/constants.js');
const {CatServiceHandler } = require('./src/services/handler/catServiceExt.js');

export const handler = async (event) => {
  const catBreed = event.queryStringParameters && event.queryStringParameters.breed_type ? event.queryStringParameters.breed_type : null;
  const validationResult = validator(catBreed);

  if (validationResult) {
    const breeds = await CatServiceHandler();
    let result;
    switch (catBreed.toLowerCase()) {
      case CAT_BREED_ENUM.CHILD_FRIENDLY:
        result = await CatService().getTopFiveCatsChildFriendly(breeds);
        break;
      case CAT_BREED_ENUM.STRANGER_FRIENDLY:
        result = await CatService().getTopFiveCatsStrangerFriendly(breeds);
        break;
      case CAT_BREED_ENUM.DOG_FRIENDLY:
        result = await CatService().getTopFiveCatsDogFriendly(breeds);
        break;
      default:
        result = await CatService().getTopFiveFriendlyBreeds(breeds);
      }
      return {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'success',
            input: result,
          },
          null,
          2
        ),
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify(
          {
            message: 'The selected options can only be one of child_friendly, stranger_friendly, dog_friendly and all'
          },
          null,
          2
        ),
      };
    }
};


