using BuisnessLayer.Buisness;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace QRKodAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private ICategoryService _categoryService;

        public CategoryController(ICategoryService categoryService)
        {
            _categoryService= categoryService;
        }

        public IActionResult Category()
        {
            var category = _categoryService.GetAll();

            return Ok(category);
        }

        [HttpGet("{id}")]
        public IActionResult Products(int id) {     
            var prd= _categoryService.GetProducts(id);
            return Ok(prd);

        }

    }
}
