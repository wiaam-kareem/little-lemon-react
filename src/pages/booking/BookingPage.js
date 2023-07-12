import Container from "../../global/components/Container";
import Layout from "../../global/components/Layout";
import BookingForm from "./BookingForm";
import { useEffect, useReducer } from "react";
import { fetchAPI } from "../../services/api";
import timesToOptions from "../../services/timesToOptions";
import BookingHero from "./BookingHero";

const OCCASIONS = [
  { value: "Birthday", label: "Birthday" },
  { value: "Anniversary", label: "Anniversary" },
];
const ACTIONS = {
  INITIAL_TIMES: "initial",
  UPDTE_TIMES: "updateTimes",
};

export default function BookingPage() {
  useEffect(() => {
    dispatch({ type: ACTIONS.INITIAL_TIMES });
    return () => {};
  }, []);

  const availableTimesReducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.INITIAL_TIMES:
        const times = fetchAPI(new Date());
        return timesToOptions(times);
      case ACTIONS.UPDTE_TIMES:
        const updatedTimes = fetchAPI(action.payload.date);
        return timesToOptions(updatedTimes);
      default:
        return state;
    }
  };
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

  return (
    <Layout
      children={
        <>
          <BookingHero />
          <Container
            children={
              <BookingForm
                occasions={OCCASIONS}
                availableTimes={availableTimes}
                setAvailableTimes={(selectedDate) =>
                  dispatch({
                    type: ACTIONS.UPDTE_TIMES,
                    payload: { date: new Date(selectedDate) },
                  })
                }
              />
            }
          />
        </>
      }
    />
  );
}
