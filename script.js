function trackOrder() {
  let trackingNumber = document.getElementById("trackingNumber").value;
  let trackingStatus = document.getElementById("trackingStatus");
  let progressBar = document.getElementById("progressBar");

  if (trackingNumber === "") {
      trackingStatus.innerHTML = "<p style='color:red;'>Enter a tracking number</p>";
      return;
  }

  let statuses = [
      "Order Placed 🛒",
      "Order Processed 🏭",
      "Shipped 🚚",
      "Out for Delivery 📦",
      "Delivered ✅"
  ];

  let progress = 0;
  trackingStatus.innerHTML = `<p><strong>Tracking: ${trackingNumber}</strong></p><p>Status: ${statuses[progress]}</p>`;
  progressBar.style.width = "20%";

  let interval = setInterval(() => {
      progress++;
      if (progress < statuses.length) {
          trackingStatus.innerHTML = `<p><strong>Tracking: ${trackingNumber}</strong></p><p>Status: ${statuses[progress]}</p>`;
          progressBar.style.width = `${(progress + 1) * 20}%`;
      } else {
          clearInterval(interval);
      }
  }, 2000);
}
