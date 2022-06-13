const ctx=document.getElementById('myChart').getContext("2d")
const labels = [
    10,11,12,13,14,15,16,17,18,19,20,21
  ];
 let gradient=ctx.createLinearGradient(0,0,0,400)
 gradient.addColorStop(0,"rgba(116, 206, 185, 0.6)")
 gradient.addColorStop(1,"rgba(116, 206, 185,0 )")
  const data = {
    labels: labels,
    datasets: [{
      label: "Statistics",
      backgroundColor: gradient,
      borderColor: 'rgba(116, 206, 185, 1)',
      fill:true,
      lineTension:0.4,
      hoverRadius:12,
      data: [38800,38900,38750,38800,38900,38800,38850,38800,38900,38800,39050,38700]
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      responsive:true,
    }
  };

  const myChart = new Chart(
    ctx,
    config
  );