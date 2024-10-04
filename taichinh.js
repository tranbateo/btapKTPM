document.getElementById('add-report-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn việc gửi form

    // Lấy giá trị từ các trường nhập liệu
    const date = document.getElementById('date').value;
    const type = document.getElementById('type').value;
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;

    // Tạo một hàng mới trong bảng báo cáo
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${date}</td>
        <td>${type}</td>
        <td>${amount}</td>
        <td>${description}</td>
    `;
    
    // Thêm hàng mới vào bảng
    document.getElementById('report-list').appendChild(newRow);

    // Xóa giá trị nhập vào sau khi thêm
    document.getElementById('add-report-form').reset();
});
