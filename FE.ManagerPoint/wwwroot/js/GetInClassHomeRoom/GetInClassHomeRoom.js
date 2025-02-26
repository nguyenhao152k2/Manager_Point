﻿//giao vien chu nhiem
// Kỳ 1
function GetDataGradePointS1(idClass) {
    $.ajax({
        url: `https://localhost:44335/gradepoint/GradePointByClass?idClass=${idClass}&semester=1`,
        method: 'GET',
        success: function (res) {
            var data = JSON.parse(res);
            var columns = [
                { title: 'Họ và Tên', data: 'UserName' },
                { title: 'Lớp', data: 'ClassName' },
                ...data.data[0].SubjectClasses.map(function (subject) {
                    return {
                        title: subject.SubjectName,
                        data: function (row) {
                            let subjectData = row.SubjectClasses.find(s => s.SubjectName === subject.SubjectName);
                            return subjectData.Avegare;
                        }
                    };
                }),
                { title: 'Điểm trung bình', data: 'TotalPoint' },
                { title: 'Xếp loại', data: 'AcademicAbility' },
                //{ title: 'Xếp loại', data: 'Rank' },
            ];

            $('#GradePointStudent-1').DataTable({
                layout: {
                    topStart: {
                        buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
                    }
                },
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
                "processing": true,
                data: data.data,
                columns: columns,
                "searching": true,
                "paging": true,
                "lengthChange": true,
                "info": true,
                "pageLength": 20,
            });
        }
    });
}

//Kỳ 2
function GetDataGradePointS2(idClass) {
    $.ajax({
        url: `https://localhost:44335/gradepoint/GradePointByClass1?idClass=${idClass}&semester=2`,
        method: 'GET',
        success: function (res) {
            var data = JSON.parse(res);
            var columns = [
                { title: 'Họ và Tên', data: 'UserName' },
                { title: 'Lớp', data: 'ClassName' },
                ...data.data[0].SubjectClasses.map(function (subject) {
                    return {
                        title: subject.SubjectName,
                        data: function (row) {
                            let subjectData = row.SubjectClasses.find(s => s.SubjectName === subject.SubjectName);
                            
                              //  subjectData.ExaminationPoint = subjectData.ExaminationPoint.join(',').replace(/,/g, '; ');
                            return subjectData.Avegare;
                        }
                    };
                }),
                { title: 'Điểm trung bình', data: 'TotalPoint' },
                { title: 'Xếp loại', data: 'AcademicAbility' },
                //{ title: 'Xếp loại 1', data: 'Rank' },
            ];

            $('#GradePointStudent-2').DataTable({
                layout: {
                    topStart: {
                        buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
                    }
                },
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
                "processing": true,
                data: data.data,
                columns: columns,
                "searching": true,
                "paging": true,
                "lengthChange": true,
                "info": true,
                "pageLength": 20,
            });
        }
    });
}
function GetDataGradePointS3(idClass) {
    $.ajax({
        url: `https://localhost:44335/gradepoint/GradePointByClassAllYear?idClass=${idClass}`,
        method: 'GET',
        success: function (res) {
            var data = JSON.parse(res);
            var columns = [
                { title: 'Họ và Tên', data: 'UserName' },
                { title: 'Lớp', data: 'ClassName' },
                ...data.data[0].SubjectClasses.map(function (subject) {
                    return {
                        title: subject.SubjectName,
                        data: function (row) {
                            return row.SubjectClasses.find(s => s.SubjectName === subject.SubjectName).Avegare;
                        }
                    };
                }),
                { title: 'Điểm trung bình', data: 'TotalPoint' },
                { title: 'Xếp loại', data: 'AcademicAbility' },
                //{ title: 'Danh hiệu', data: 'Rank' },
                //{ title: 'Thuộc loại', data: 'Conduct' } 
            ];

            $('#GradePointStudent-3').DataTable({
                layout: {
                    topStart: {
                        buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
                    }
                },
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
                "processing": true,
                data: data.data,
                columns: columns,
                "searching": true,
                "paging": true,
                "lengthChange": true,
                "info": true,
                "pageLength": 20,
            });
        }
    });
}
// giao vien bo mon
function GetDataGradePointBySubject(idClass) {
    var userId = sessionStorage.getItem("UserId");
    if (!userId) {
        console.error("UserId không tồn tại trong session.");
        return;
    }
    console.log(userId);
    $.ajax({
        url: `https://localhost:44335/gradepoint/subject?idClass=${idClass}&idUser=${userId}&semester=1`,
        method: 'GET',
        success: function (res) {
            var data = JSON.parse(res);
            
            var columns = [
                { data: 'Id', title: 'ID', visible: false },
                /*{ data: 'UserId', title: 'UserId' },
                { data: 'SubjectId', title: 'SubjectId' },
                { data: 'ClassId', title: 'ClassId' },
                { data: 'Semester', title: 'Semester' },*/
                { data: 'userName', title: 'Tên học sinh' },
                { data: 'subjectName', title: 'Môn học' },
               // { data: 'ExaminationPoint', title: 'Điểm thành phần' },
                {
                    data: 'ExaminationPoint',
                    title: 'Điểm thành phần',
                    render: function (data, type, row) {
                        if (type === 'display') {
                            return String(data).replace(/,/g, '; ');
                        }
                        return data;
                    }
                },
                { data: 'Midterm_Grades', title: 'Điểm giữa kỳ' },
                { data: 'Final_Grades', title: 'Điểm cuối kỳ' },
                { data: 'Average', title: 'Điểm trung bình' },
                {
                    title: 'Thao tác',
                    render: function (data, type, row) {
                        let tp = `<div class="btn btn-primary" onclick="openModalWithId(${row.Id})">Vào điểm thành phần</div>`;
                        let bd = `<a  class="btn btn-success" onclick="GetById(${row.ClassId},${row.SubjectId}, ${row.UserId}, ${row.Semester})" >Vào điểm </a>`;
                        return `<div class="bdct">  ${bd} ${tp} </div>`;
                    }

                }
            ];

            $('#Subject-1').DataTable({
                layout: {
                    topStart: {
                        buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
                    }
                },
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
               // "processing": true,
                data: data.data,
                columns: columns,
                "searching": true,
                "paging": true,
                "lengthChange": true,
                "info": true,
                "pageLength": 100,
            });
        }
    });
}
function GetDataGradePointBySubject2(idClass) {
    var userId = sessionStorage.getItem("UserId");


    if (!userId) {
        console.error("UserId không tồn tại trong session.");
        return;
    }
    $.ajax({
        url: `https://localhost:44335/gradepoint/subject?idClass=${idClass}&idUser=${userId}&semester=2`,
        method: 'GET',
        success: function (res) {
            var data = JSON.parse(res);

            var columns = [
                { data: 'Id', title: 'ID', visible: false },
               /* { data: 'UserId', title: 'UserId' },
                { data: 'SubjectId', title: 'SubjectId' },
                { data: 'ClassId', title: 'ClassId' },
                { data: 'Semester', title: 'Semester' },*/
                { data: 'userName', title: 'Tên học sinh' },
                { data: 'subjectName', title: 'Môn học' },
                {
                    data: 'ExaminationPoint',
                    title: 'Điểm thành phần',
                    render: function (data, type, row) {
                        if (type === 'display') {
                            return String(data).replace(/,/g, '; ');
                        }
                        return data;
                    }
                },
                { data: 'Midterm_Grades', title: 'Điểm giữa kỳ' },
                { data: 'Final_Grades', title: 'Điểm cuối kỳ' },
                { data: 'Average', title: 'Điểm trung bình' },
                {
                    title: 'Thao tác',
                    render: function (data, type, row) {
                        let tp = `<div class="btn btn-primary" onclick="openModalWithId(${row.Id})">Vào điểm thành phần</div>`;
                        let bd = `<a  class="btn btn-success" onclick="GetById(${row.ClassId},${row.SubjectId}, ${row.UserId}, ${row.Semester})" >Vào điểm </a>`;
                        return `<div  class="bdct">  ${bd}  ${tp} </div>`;
                    }

                }
            ];

            $('#Subject-2').DataTable({
                layout: {
                    topStart: {
                        buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
                    }
                },
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
                "processing": true,
                data: data.data,
                columns: columns,
                "searching": true,
                "paging": true,
                "lengthChange": true,
                "info": true,
                "pageLength": 100,
            });
        }
    });
}
function GetDataGradePointBySubject3(idClass) {
    var userId = sessionStorage.getItem("UserId");


    if (!userId) {
        console.error("UserId không tồn tại trong session.");
        return;
    }
    $.ajax({
        url: `https://localhost:44335/gradepoint/subject?idClass=${idClass}&idUser=${userId}&semester=3`,
        method: 'GET',
        success: function (res) {
            var data = JSON.parse(res);

            var columns = [
              
                { data: 'UserName', title: 'Tên học sinh' },
                { data: 'SubjectName', title: 'Môn học' },
                { data: 'Semester1', title: 'Kỳ 1' },
                { data: 'Semester2', title: 'Kỳ 2' },
                { data: 'Average_Whole_year', title: 'Điểm trung bình' }
            ];

            $('#Subject-3').DataTable({
                layout: {
                    topStart: {
                        buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
                    }
                },
                "language": {
                    "sProcessing": "Đang xử lý...",
                    "sLengthMenu": "Xem _MENU_ mục",
                    "sZeroRecords": "Không tìm thấy dòng nào phù hợp",
                    "sInfo": "Đang xem _START_ đến _END_ trong tổng số _TOTAL_ mục",
                    "search": " Tìm kiếm",
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
                "processing": true,
                data: data.data,
                columns: columns,
                "searching": true,
                "paging": true,
                "lengthChange": true,
                "info": true,
                "pageLength": 100,
            });
        }
    });
}
function GetClassInfo(classInfo) {
    let html = `<div class="card-body">
                    <h3 class="card-title">Lớp: ${classInfo.name}</h3>
                    <h6 class="card-subtitle mb-2 text-muted">Mã lớp: ${classInfo.classCode}</h6>
                    <p class="card-text">Khối: ${classInfo.gradeLevel}</p>
                    <p class="card-text">Tên khóa học: ${classInfo.courseName}</p>
                </div>`
    document.getElementById("classInfo").innerHTML = html

}
function Import_Excel(callback) {
    var userId = sessionStorage.getItem("UserId");
    if (!userId) {
        console.error("UserId không tồn tại trong session.");
        return;
    }
    var fd = new FormData();
    var files = $('#file_excel')[0].files[0];
    fd.append('file', files);
    fd.append('userId', userId);
    $.ajax({
        url: `https://localhost:44335/class/import_excel`,
        method: "POST",
        data: fd,
        contentType: false,
        processData: false,
        success: function (result) {
            if (callback && typeof callback === "function") {
                callback();
            }
          
            console.log(result);
            location.reload();
        },
        error: function (xhr, status, error) {
            var errorMessage = xhr.responseJSON.message;
            toastr.error(errorMessage, "Lỗi vui lòng kiểm tra lại file excel");
        }
    })
}


// ngươi dùng ở đây là học sinh
function GetById(ClassId, SubjectId, UserId, Semester) {
    $.ajax({
        url: `https://localhost:44335/gradepoint/get_by_id`,
        method: "GET",
        data: {
            ClassId: ClassId,
            UserId: UserId,
            SubjectId: SubjectId,
            Semester: Semester
        },
        success: function (res) {
            if (res == null) {
                toastr.error('Không tìm thấy người dùng');
                return;
            }
            console.log(res);
            $("#id").val(res.id);
            $("#className").val(res.className);
            $("#subjectName").val(res.subjectName);
            $("#userName").val(res.userName);
            $("#user_Code").val(res.user_Code);
            $("#semester").val(res.semester);
            $("#midterm_Grades").val(res.midterm_Grades);
            $("#final_Grades").val(res.final_Grades);
            $("#updateModal").modal("show");
        },
    });
}


function updateTranscript(id, object, callback) {
    $.ajax({
        url: `https://localhost:44335/gradepoint/modified?id=${id}`,
        method: "PUT",
        data: JSON.stringify(object),
        contentType: 'application/json',
        success: function (res) {
            location.reload()
            if (callback && typeof callback === "function") {
                callback();
            }
            
        },
    });
}

function openModalWithId(id) {
    document.getElementById('id').value = id;
    var modal = new bootstrap.Modal(document.getElementById('createModal'));
    modal.show();
}
function createPoint(object, callback) {
    $.ajax({
        url: `https://localhost:44335/examination/create`,
        method: 'POST',
        data: JSON.stringify(object),
        contentType: 'application/json',
        success: function (res) {
            location.reload();
            if (callback && typeof callback === "function") {
                callback();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Error:', textStatus, errorThrown);
            console.error('Response:', jqXHR.responseText);
        }
    });
}

