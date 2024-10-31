import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

const App = () => {
  // const [clicks, setClicks] = useState(() => {
  //   const savedGrades = localStorage.getItem("saved-grades");
  //   if (savedGrades !== null)
  //     return {
  //       good: 0,
  //       neutral: 0,
  //       bad: 0,
  //     };
  //   else {
  //     return JSON.parse(savedGrades);
  //   }
  // });

  const [clicks, setClicks] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("clicks")) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
  );

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  const updateFeedback = (feedbackType) => {
    setClicks((oldClicks) => ({
      ...oldClicks,
      [feedbackType]: oldClicks[feedbackType] + 1,
    }));
  };
  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("clicks", JSON.stringify(clicks));
  }, [clicks]);

  return (
    <div className="container">
      <Description
        name="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options
        update={updateFeedback}
        reset={resetFeedback}
        total={totalFeedback}
      />
      <Feedback clicks={clicks} total={totalFeedback} />
    </div>
  );
};

export default App;
