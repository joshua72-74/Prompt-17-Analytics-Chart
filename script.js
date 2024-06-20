 // Converting string to required date format 
 let deadline = new Date("Jun 20, 2024 20:50:00").getTime();

 // To call defined fuction every second
 let x = setInterval(function () {
 
     // Getting current time in required format
     let now = new Date().getTime();
 
     // Calculating the difference
     let t = deadline - now;
 
     // Getting value of days, hours, minutes, seconds
     let days = Math.floor(t / (1000 * 60 * 60 * 24));
     let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
     let seconds = Math.floor((t % (1000 * 60)) / 1000);
 
     // Output the remaining time
     document.getElementById("timer").innerHTML = days + "d:" + hours + "h:" + minutes + "m:" + seconds + "s";
 
     // Output for over time
     if (t < 0) {
     clearInterval(x);
     document.getElementById("timer")
     .innerHTML = "EXPIRED";
     }
 
 }, 1000);


//  
// w3schools Chart.js is used below

const xValues = ["India", "China", "Russia", "USA", "Other"];
const yValues = [50, 49, 44, 24, 20];
const barColors = ["red", "green","blue","orange","black"];

new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Participation from different nations %"
      }
    }
  });


  const x2Values = [2010,2012,2014,2016,2018,2020,2022,2024];
  const y2Values = [7,8,9,9,10,14,15,16];
  
  new Chart("myChart2", {
    type: "line",
    data: {
      labels: x2Values,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: y2Values
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        yAxes: [{ticks: {min: 6, max:16}}],
      }
    }
  });