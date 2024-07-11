function setupGrid() {
    console.log(userId);
    this.$table = $('#gradepoint_table').DataTable({
        "language": {
            "sProcessing": "Đang xử lý...",
            "sLengthMenu": "Xem _MENU_ mục",
            "sZeroRecords": "Không tìm thấy dòng nào phù hợp",
            "sInfo": "Đang xem _START_ đến _END_ trong tổng số _TOTAL_ mục",
            "search": "Tìm kiếm",
            "emptyTable": "Không có dữ liệu",
            "sInfoEmpty": "Đang xem 0 đến 0 trong tổng số 0 mục",
            "sInfoFiltered": "(được lọc từ _MAX_ mục)",
            "sInfoPostFix": "",
            "sUrl": "",
            "oPaginate": {
                "sFirst": "Đầu",
                "sPrevious": "Trước",
                "sNext": "Tiếp",
                "sLast": "Cuối"
            }
        },
        "pageLength": 10,
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": `https://localhost:44335/gradepoint/get_all?id=${userId}`,
            "data": function (d) {
                delete d.columns;
                d.search = d.search.value;
                d.classid = $('#class').val();
                d.semester = $('#semester').val();
            },
            "dataSrc": "data",
        },
        "rowId": "Id",
        "columns": [
            { "data": "subjectName", "orderable": false },
            { "data": "ExaminationPoint", "orderable": false },
            { "data": "Midterm_Grades", "orderable": false },
            { "data": "Final_Grades", "orderable": false },
            { "data": "Average", "orderable": false },
        ],
        "searching": true,
        "paging": true,
        "lengthChange": true,
        "info": true,
        "pageLength": 10,
        "drawCallback": function (settings) {
            var api = this.api();
            var total = 0;
            var count = 0;

            api.column(4, { page: 'current' }).data().each(function (data, index) {
                if (!isNaN(data) && data !== null && data !== '') {
                    total += parseFloat(data);
                    count++;
                }
            })

            var average = count > 0 ? total / count : 0;

            $('#average_output').text(average.toFixed(2));
            $('#classification_output').text("Khá");
        }
    });
    window.dt = this.$table;

}


function GetAllYear() {
    this.$table = $('#gradepoint_year_table').DataTable({
        "language": {
            "sProcessing": "Đang xử lý...",
            "sLengthMenu": "Xem _MENU_ mục",
            "sZeroRecords": "Không tìm thấy dòng nào phù hợp",
            "sInfo": "Đang xem _START_ đến _END_ trong tổng số _TOTAL_ mục",
            "search": "Tìm kiếm",
            "emptyTable": "Không có dữ liệu",
            "sInfoEmpty": "Đang xem 0 đến 0 trong tổng số 0 mục",
            "sInfoFiltered": "(được lọc từ _MAX_ mục)",
            "sInfoPostFix": "",
            "sUrl": "",
            "oPaginate": {
                "sFirst": "Đầu",
                "sPrevious": "Trước",
                "sNext": "Tiếp",
                "sLast": "Cuối"
            }
        },
        "pageLength": 10,
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": `https://localhost:44335/gradepoint/get_all_year?id=${userId}&classes=${classId}`,
            "data": function (d) {
                delete d.columns;
                d.search = d.search.value;
            },
            "dataSrc": "data",
        },
        "rowId": "Id",
        "columns": [
            { "data": "SubjectName", "orderable": false },
            { "data": "Semester1", "orderable": false },
            { "data": "Semester2", "orderable": false },
            { "data": "Average_Whole_year", "orderable": false },

        ],

        "searching": true,
        "paging": true,
        "lengthChange": true,
        "info": true,
        "pageLength": 10,
        "drawCallback": function (settings) {
            var api = this.api();
            var total = 0;
            var count = 0;

            // Iterate over all rows of the column `Average_Whole_year`
            api.column(3, { page: 'current' }).data().each(function (data, index) {
                if (!isNaN(data) && data !== null && data !== '') {
                    total += parseFloat(data);
                    count++;
                }
            });

            var average = count > 0 ? total / count : 0;

            // Hiển thị điểm trung bình cả năm với id 'average_output_year'
            $('#average_output_year').text(average.toFixed(2));
            $('#classification_output_year').text("Khá");
        }
    });
    window.dt = this.$table;

}


