import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "./elements/Image";
import { useInterval } from "../utils";
import ReviewDisplayCard from "./ReviewDisplayCard";
import { GET_REVIEWS_URL } from "./APIPaths";

const ListReviews = () => {
  const [reviewsList, setReviewsList] = useState([]);

  const get_url = GET_REVIEWS_URL;

  const getData = () => {
    axios.get(get_url).then((response) => setReviewsList(response.data));
    console.log(reviewsList);
  };
  //   useEffect(() => {
  //     axios.get(get_url).then((response) => setReviewsList(response.data));
  //     console.log(reviewsList);
  //   }, []);

  useInterval(() => {
    getData();
  }, 1000);

  return (
    <div>
      <h1>yolooooooooooooooo</h1>
      {reviewsList?.length > 0 ? (
        <div>
          {reviewsList.map((review) => (
            <div className="eachReviewCard">
              <ReviewDisplayCard
                title={review.address}
                review={review.propertyReview}
              />
            </div>
          ))}
        </div>
      ) : (
        <div> No data available</div>
      )}
    </div>
  );
};

// WriteReview.propTypes = propTypes;
// WriteReview.defaultProps = defaultProps;

export default ListReviews;
