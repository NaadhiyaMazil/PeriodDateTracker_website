// Symptom Frequency Chart
const symptomFrequencyCtx = document.getElementById("symptomFrequencyChart").getContext("2d");
const symptomFrequencyChart = new Chart(symptomFrequencyCtx, {
  type: "bar",
  data: {
    labels: ["Cramps", "Headache", "Fatigue", "Mood Swings"],
    datasets: [
      {
        label: "Frequency",
        data: [10, 7, 15, 5],
        backgroundColor: "rgba(255, 77, 77, 0.8)",
        borderColor: "rgba(255, 77, 77, 1)",
        borderWidth: 1,
      },
    ],
  },
});

// Cycle Length Chart
const cycleLengthCtx = document.getElementById("cycleLengthChart").getContext("2d");
const cycleLengthChart = new Chart(cycleLengthCtx, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Cycle Length",
        data: [28, 27, 29, 28, 30],
        backgroundColor: "rgba(255, 153, 153, 0.5)",
        borderColor: "rgba(255, 77, 77, 1)",
        fill: true,
      },
    ],
  },
});
