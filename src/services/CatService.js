const MAX_NUMBER_OF_RESULTS = process.env.MAX_NUMBER_OF_RESULTS || 5;

/* Main file which does the logic implementation to check the rating and return top 5 results*/
export const CatService = () => {
    const getTopFiveCatsChildFriendly = (cats) => {
        const topChildFriendlyCats = cats.filter((cat) => cat.child_friendly === 5);
        // TO DO - Repeat below for the other 2 methods as well; can move to a common method; skipping this for now as others have 5 records minimum
        if (topChildFriendlyCats.length >= MAX_NUMBER_OF_RESULTS) {
            return topChildFriendlyCats.slice(0, MAX_NUMBER_OF_RESULTS);
        } else {
            let rating = 4;
            do {
                topChildFriendlyCats.push(cats.filter(
                    (cat) => cat.child_friendly === rating
                ));
                rating -= 1;
            } while (rating > 0 || topChildFriendlyCats.length < MAX_NUMBER_OF_RESULTS);
            return topChildFriendlyCats.flat().slice(0, MAX_NUMBER_OF_RESULTS);
        }
    };

    const getTopFiveCatsDogFriendly = (cats) => {
        const topDogFriendlyCats = cats.filter((cat) => cat.dog_friendly === 5);
        return topDogFriendlyCats.slice(0, MAX_NUMBER_OF_RESULTS);
    };

    const getTopFiveCatsStrangerFriendly = (cats) => {
        const topStrangerFriendlyCats = cats.filter((cat) => cat.stranger_friendly === 5);
        return topStrangerFriendlyCats.slice(0, MAX_NUMBER_OF_RESULTS);
    };

    // Assumption needs clarification; equal weighting means they all have the same rating?
    const getTopFiveFriendlyBreeds = (cats) => {
        const allCats = [];
        let rating = 5;
        do {
            allCats.push(cats.filter( (cat) => cat.child_friendly === rating && cat.dog_friendly === rating && cat.stranger_friendly === rating));
            rating -= 1;
        } while (rating > 0 || allCats.length < MAX_NUMBER_OF_RESULTS);

        return allCats.flat().slice(0, MAX_NUMBER_OF_RESULTS);
    };

    return {
        getTopFiveCatsChildFriendly,
        getTopFiveCatsStrangerFriendly,
        getTopFiveCatsDogFriendly,
        getTopFiveFriendlyBreeds,
    };
};
