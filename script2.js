var teamMembers = [
    "Welcome Ms Nguyen Tran Minh Tu to join CASA TEAM",
    "Welcome Ms Do Thi Minh Nguyet to join FEE TEAM",
    "Welcome Mr Mai Thanh Binh to join NON-NPL TEAM",
    "Welcome Mr Do Viet Trung to join NON-NPL TEAM",
    "Welcome Ms Nguyen Thi Thuc Trang to join NON-NPL TEAM",
    "Welcome Ms Nguyen Thi Tham to join CASA TEAM",
    "Welcome Ms Tran Ngoc Tuyet Anh to join FEE TEAM",
    "Welcome Mr Hoang Van Thieu to join CASA TEAM",
    "Welcome Mr Nguyen Xuan Dung to join NON-NPL TEAM",
    "Welcome Ms Nguyen Ngoc Ha to join FEE TEAM",
    "Welcome Mr Nguyen Giang Nam to join FEE TEAM",
    "Welcome Ms Nguyen Thi Hong Nhung to join CASA TEAM",
    "Welcome Ms Vu Hong Ha to join CASA TEAM",
    "Welcome Ms Le Thi Thanh Tam to join NON-NPL TEAM",
    "Welcome Mr Pham Hoang Tuan to join FEE TEAM",
    "Welcome Mr Tran The Anh to join CASA TEAM",
    "Welcome Mr Vu Xuan Toan to join NON-NPL TEAM",
    "Welcome Mr Phi Van Bao to join CASA TEAM",
    "Welcome Mr Tran Van Chinh to join CASA TEAM",
    "Welcome Mr Dang Tung Hung to join NON-NPL TEAM",
    "Welcome Mr Ha Huy Giap to join CASA TEAM",
    "Welcome Mr Nguyen Vinh Nguyen to join FEE TEAM",
    "Welcome Ms Diep Thi Hoa to join NON-NPL TEAM",
    "Welcome Mr Nguyen Van Tiep to join FEE TEAM",
    "Welcome Mr Nguyen Xuan Do to join FEE TEAM",
    "Welcome Ms Le Thi Kim Thoa to join FEE TEAM",
    "Welcome Ms Nguyen Hong Hanh to join NON-NPL TEAM",
    "Welcome Mr Tran Chi Linh to join FEE TEAM",
    "Welcome Mr Ho Van Nen to join NON-NPL TEAM",
    "Welcome Ms Le Thi Thu Thuy to join NON-NPL TEAM",
    "Welcome Mr Vo Tan Dat to join NON-NPL TEAM",
    "Welcome Mr Vo Hoang Lan to join FEE TEAM",
    "Welcome Mr Le Anh Tuan to join CASA TEAM",
    "Welcome Mr Pham Tuan Anh to join FEE TEAM",
    "Welcome Ms Vu Thi Tuyet to join CASA TEAM",
    "Welcome Mr Tran Dang Trung to join NON-NPL TEAM",
    "Welcome Mr Tran Quang Hung to join CASA TEAM",
    "Welcome Mr Dang Hoang Phuong Quang to join FEE TEAM",
    "Welcome Mr Do Thai Binh to join NON-NPL TEAM",
    "Welcome Ms Bui Thi Thu to join CASA TEAM",
    "Welcome Mr Nguyen The Quoc Bao to join FEE TEAM",
    "Welcome Ms Dang Thi Kim Cuong to join NON-NPL TEAM",
    "Welcome Mr Vu Huy Binh to join FEE TEAM",
    "Welcome Mr Nguyen Xua Truong join CASA TEAM",
    "Welcome Ms Nguyen Thi Thanh Hoa to join FEE TEAM",
    "Welcome Mr Pham Tien Dung to join CASA TEAM"
 
];

function searchTeam() {
    var searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    if (searchTerm === "") {
        resultDiv.innerHTML = "<p>Vui lòng nhập tên để tìm kiếm.</p>";
        return;
    }

    var foundMembers = teamMembers.filter(function(member) {
        return member.toLowerCase().includes(searchTerm);
    });

    if (foundMembers.length === 0) {
        resultDiv.innerHTML = "<p>Không tìm thấy thành viên nào có tên này.</p>";
    } else {
        foundMembers.forEach(function(member) {
            resultDiv.innerHTML += "<p>" + member + "</p>";
        });
    }
}
