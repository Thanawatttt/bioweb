fetch('https://timeapi.io/api/Time/current/zone?timeZone=Asia/Bangkok')
  .then(response => response.json())
  .then(data => {
    const currentYear = new Date(data.dateTime).getFullYear();
    document.getElementById('current-year').textContent = currentYear;
  })
  .catch(error => {
    console.error('Error fetching the current year:', error);
    // กรณีเกิดข้อผิดพลาด สามารถตั้งค่าปีสำรองได้ เช่น
    document.getElementById('current-year').textContent = '2025';
  });

