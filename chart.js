async function drawLineChart() {
  const data = await d3.json("/my_weater_data.json");
  console.log(data);
}

drawLineChart();
