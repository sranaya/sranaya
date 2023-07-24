
    function updateTime() {
      var currentTime = new Date();
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var seconds = currentTime.getSeconds();

      // Add leading zeros if necessary
      hours = (hours < 10 ? "0" : "") + hours;
      minutes = (minutes < 10 ? "0" : "") + minutes;
      seconds = (seconds < 10 ? "0" : "") + seconds;

      // Display the time
      document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;

      // Get the current date and day
      var currentDay = currentTime.toLocaleDateString("en-US", { weekday: "long" });
      var currentDate = currentTime.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

      // Display the date and day
      document.getElementById("date").innerHTML = currentDay + ", " + currentDate;
    }

    // Update the time every second
    setInterval(updateTime, 1000);
  