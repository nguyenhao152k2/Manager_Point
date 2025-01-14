﻿using BLL.Services.Implement;
using BLL.Services.Interface;
using BLL.ViewModels.Class;
using Manager_Point.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
	[Route("api/[controller]")]
    [ApiController]
    public class ImportFile
    {
        public IFormFile file { get; set; }
         public int userId { get; set; }

	}
    public class ClassesController : Controller
    {
        IClassServices _classService;
        IGradePointServices
            _gradePointServices;
        public ClassesController(IClassServices classService, IGradePointServices gradePointServices)
        {
            _classService = classService;
            _gradePointServices = gradePointServices;
        }
        [HttpGet("/class/get_all")]
        public async Task<IActionResult> Get_All_Item(int offset = 0, int limit = 10, string search = "")
        {
            return Ok(await _classService.Get_All_Async(offset, limit, search));
        }

        [HttpGet("/class/get_list")]
        public IActionResult Get_List()
        {
            return Ok(_classService.Get_List());
        }

        [HttpGet("/class/get_by_id")]
        public async Task<IActionResult> Get_By_Id(int id)
        {
            return Ok(await _classService.Get_By_Id(id));
        }

        [HttpGet("/class/get_by_id_user")]
        public async Task<IActionResult> Get_By_Id_user(int user_id)
        {
            return Ok(await _classService.Get_By_Id_User_vm_class(user_id));
        }

        [HttpPost("/class/create")]
		public async Task<IActionResult> Create_Item([FromBody] vm_create_class request)
		{
			if (request == null)
			{
				return BadRequest("request null check object again, make sure request have a value");
			}

			var checkcode =  _classService.Get_List().FirstOrDefault(c => c.ClassCode == request.ClassCode);
			if (checkcode !=  null || checkcode?.ClassCode.Count() > 0)
			{
				return Json( new { message = "The class code already exists" });
			};

			return Ok(await _classService.Create_Item(request));
		}


		[HttpPost("/class/batch_create")]
        public async Task<IActionResult> Batch_Create_Item([FromBody] List<vm_create_class> requests)
        {
            if (requests == null) { return BadRequest("request null check object again, make sure request have a value"); }
            return Ok(await _classService.Batch_Create_Item(requests));
        }

        [HttpPut("/class/modified")]
        public async Task<IActionResult> Modified_Item(int id, [FromBody] vm_update_class request)
        {
            if (request == null) { return BadRequest("request null check object again, make sure request have a value"); }
			var checkcode = _classService.Get_List().FirstOrDefault(c => c.ClassCode == request.ClassCode && c.Id != id);
			if (checkcode != null || checkcode?.ClassCode.Count() > 0)
			{
				return Json(new { message = "The class code already exists" });
			};
			return Ok(await _classService.Modified_Item(id, request));
        }

        [HttpDelete("/class/remove")]
        public async Task<IActionResult> Remove_Item(int id)
        {
            return Ok(await _classService.Remove_Item(id));
        }

        [HttpDelete("/class/batch_remove")]
        public async Task<IActionResult> Batch_Remove_Item(List<int> ids)
        {
            return Ok(await _classService.Batch_Remove_Item(ids));
        }

        [HttpPost("/class/import_excel")]
        public async Task<IActionResult> ImportUsersFromExcel([FromForm] IFormFile file, [FromForm] string userId)
        {
            if (file == null || file.Length <= 0)
            {
                return BadRequest("File is required.");
            }

            try
            {
                using var memoryStream = new MemoryStream();
                await file.CopyToAsync(memoryStream);
                memoryStream.Position = 0;

                int addPointCount = await _gradePointServices.ImportFromExcel(memoryStream,Convert.ToInt32(userId));

                return Ok($"Successfully added {addPointCount} Point from Excel.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error importing Point: {ex.Message}");
            }
        }
        //[HttpPost("/class/import_excel")]
        //public async Task<IActionResult> ImportUsersFromExcel(IFormFile file, int userId)
        //{
        //	if (file == null || file.Length <= 0)
        //	{
        //		return BadRequest("File is required.");
        //	}

        //	try
        //	{
        //		using var memoryStream = new MemoryStream();
        //		await file.CopyToAsync(memoryStream);
        //		memoryStream.Position = 0;

        //		int addPointCount = await _gradePointServices.ImportFromExcel(memoryStream);

        //		return Ok($"Successfully added {addPointCount} Point from Excel.");
        //	}
        //	catch (Exception ex)
        //	{
        //		return StatusCode(500, $"Error importing Point: {ex.Message}");
        //	}
        //}
    }
}
