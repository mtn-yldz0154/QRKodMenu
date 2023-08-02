using BuisnessLayer.Buisness;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace QRKodAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuController : ControllerBase
    {
        private IMenuService _menuService;

        public MenuController(IMenuService menuService) { 
        
        _menuService= menuService;
        
        }

        public IActionResult Menus()
        {
            var menus = _menuService.GetAll();
          
            return Ok(menus);
        }
        [HttpGet("{id}")]
        public IActionResult Menu(int id)
        {
            var ctg=_menuService.GetCategories(id);

            return Ok(ctg);
        }

    }
}
