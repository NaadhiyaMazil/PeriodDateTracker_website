// Sample data for Cycle Length Over Time
const cycleLengthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // X-axis labels
    datasets: [
      {
        label: 'Cycle Length (days)',
        data: [28, 30, 27, 29, 31], // Cycle lengths
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
  
  // Sample data for Symptom Frequency
  const symptomFrequencyData = {
    labels: ['Cramps', 'Headache', 'Fatigue', 'Bloating', 'Mood Swings'], // X-axis labels
    datasets: [
      {
        label: 'Frequency',
        data: [10, 7, 12, 8, 6], // Symptom frequencies
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  // Configure Chart.js options for better appearance
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  
  // Render Cycle Length Over Time chart
  const cycleLengthCtx = document.getElementById('cycleLengthChart').getContext('2d');
  new Chart(cycleLengthCtx, {
    type: 'line', // Line chart for cycle length
    data: cycleLengthData,
    options: chartOptions,
  });
  
  // Render Symptom Frequency chart
  const symptomFrequencyCtx = document.getElementById('symptomFrequencyChart').getContext('2d');
  new Chart(symptomFrequencyCtx, {
    type: 'bar', // Bar chart for symptom frequency
    data: symptomFrequencyData,
    options: chartOptions,
  });
  
