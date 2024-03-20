import { usePlayer } from "@empirica/core/player/classic/react";
import React, { useState } from "react";
// import { Alert } from "../components/Alert";
import { Button } from "../components/Button";
import "./ExitSurvey.css";

export function ExitSurvey({ next }) {
  const labelClassName = "block text-sm font-medium text-gray-700 my-2";
  const inputClassName =
    "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-empirica-500 focus:border-empirica-500 sm:text-sm";
  const player = usePlayer();

  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [advertise, setAdvertise] = useState("");
  const [feedback, setFeedback] = useState("");
  const [fair, setFair] = useState("");
  const [education, setEducation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    player.set("exitSurvey", {
      age,
      gender,
      advertise,
      feedback,
      education,
    });
    setSubmitted(true);
    setTimeout(() => {
      window.open(
        "https://google.com",
        "_blank"
      );
      next();
    }, 60000);
  }

  function handleEducationChange(e) {
    setEducation(e.target.value);
  }

  return (
    <div className="py-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* <Alert title="Bonus">
        <p>
          Please submit the following code to receive your bonus:{" "}
          <strong>{player.id}</strong>.
        </p>
        <p className="pt-1">
          Your final <strong>bonus</strong> is in addition of the{" "}
          <strong>1 base reward</strong> for completing the HIT.
        </p>
      </Alert> */}

      <form
        className="mt-12 space-y-8 divide-y divide-gray-200"
        onSubmit={handleSubmit}
      >
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
          {submitted ? (
            <div className="submit-page flex flex-col items-center justify-center h-full">
              <p>
                <strong>Thanks for your response!</strong>
              </p>
              <div className="mt-4">
                <a
                  href="https://google.com"
                  target="_blank"
                >
                  <p className="survey-link">Click here to continue</p>
                </a>
              </div>
            </div>
          ) : (
              <>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Exit Survey
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Please answer the following short survey. You do not have to
                    provide any information you feel uncomfortable with.
                  </p>
                </div>
                <div className="space-y-8 mt-6">
                  <div className="flex flex-row">
                    <div>
                      <label htmlFor="email" className={labelClassName}>
                        Age
                      </label>
                      <div className="mt-1">
                        <input
                          id="age"
                          name="age"
                          type="number"
                          autoComplete="off"
                          className={inputClassName}
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="ml-5">
                      <label htmlFor="email" className={labelClassName}>
                        Gender
                      </label>
                      <div className="mt-1">
                        <input
                          id="gender"
                          name="gender"
                          autoComplete="off"
                          className={inputClassName}
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className={labelClassName}>
                      Highest Education Qualification
                    </label>
                    <div className="grid gap-2">
                      <Radio
                        selected={education}
                        name="education"
                        value="high-school"
                        label="High School"
                        onChange={handleEducationChange}
                      />
                      <Radio
                        selected={education}
                        name="education"
                        value="bachelor"
                        label="US Bachelor's Degree"
                        onChange={handleEducationChange}
                      />
                      <Radio
                        selected={education}
                        name="education"
                        value="master"
                        label="Master's or higher"
                        onChange={handleEducationChange}
                      />
                      <Radio
                        selected={education}
                        name="education"
                        value="other"
                        label="Other"
                        onChange={handleEducationChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-x-6 gap-y-3">
                    <label className={labelClassName}>
                      Would you prefer to advertise a product's true quality or
                      exaggerate in the future?
                    </label>

                    <label className={labelClassName}>
                      Could you explain what made you decide to do this?
                    </label>

                    <br />

                    <textarea
                      className={inputClassName}
                      dir="auto"
                      id="advertise"
                      name="advertise"
                      rows={4}
                      value={advertise}
                      onChange={(e) => setAdvertise(e.target.value)}
                    />

                    <textarea
                      className={inputClassName}
                      dir="auto"
                      id="feedback"
                      name="feedback"
                      rows={4}
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                    />
                  </div>

                  <div className="mb-12">
                    <Button type="submit">Click here to continue</Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export function Radio({ selected, name, value, label, onChange }) {
  return (
    <label className="text-sm font-medium text-gray-700">
      <input
        className="mr-2 shadow-sm sm:text-sm"
        type="radio"
        name={name}
        value={value}
        checked={selected === value}
        onChange={onChange}
      />
      {label}
    </label>
  );
}
