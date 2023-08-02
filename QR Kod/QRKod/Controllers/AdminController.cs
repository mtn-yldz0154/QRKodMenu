using BuisnessLayer.Buisness;
using DataAcsessLayer.Concrete.EfCore;
using EntityLayer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace QRKod.Controllers
{
    public class AdminController : Controller
    {

        private IMenuService _menuService;
        private ICategoryService _categoryService;
        private IProductService _productService;

        public AdminController(IMenuService menuService, ICategoryService categoryService, IProductService productService) { 
        
            _categoryService= categoryService;
            _menuService= menuService;
            _productService= productService;
        
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Menus()
        {
            var menus = _menuService.GetAll();
            return View(menus);
        }

        public IActionResult AddMenu()
        {

            return View();

        }

        [HttpPost]
        public IActionResult AddMenu(Menu menu)
        {
            _menuService.Create(menu);

            return RedirectToAction("menus");
        }

        public IActionResult MenuDetails(int id)
        {
            using (var db=new Context())
            {
                var ctg = db.Categories.Where(i => i.MenuId == id).ToList();
                ViewBag.menu = db.Menus.Where(i => i.Id == id).Select(i => i.Name).FirstOrDefault();
                return View(ctg);
            }

         
        }

        public IActionResult DeleteMenu(int id)
        {
            _menuService.Delete(id);
            return Redirect("/admin/menus");
        }

        public IActionResult UpdateMenu(int id)
        {
            var menu=_menuService.GetMenuById(id);
            return View(menu);
        }
        [HttpPost]
        public IActionResult UpdateMenu(Menu menu)
        {
            _menuService.Update(menu);

            return Redirect("/admin/updatemenu/"+menu.Id);
        }


        public IActionResult Categories()
        {
            using (var db = new Context())
            {
                var ctg = db.Categories.Include(i=>i.Menu).ToList();
              
                return View(ctg);
            }
            
        }


        public IActionResult AddCategory() {
            List<SelectListItem> values = (from i in _menuService.GetAll().ToList()
                                           select new SelectListItem
                                           {
                                               Text = i.Name,
                                               Value = i.Id.ToString()
                                           }).ToList();
            ViewBag.Values = values;
            return View();
        
        }


        [HttpPost]
        public IActionResult AddCategory(Category category)
        {
            _categoryService.Create(category);

            return RedirectToAction("Categories");
        }

        public IActionResult CategoryDetail(int id)
        {
            var prd = _categoryService.GetProducts(id);
            using (var db = new Context())
            {
               
                ViewBag.ctg = db.Categories.Where(i => i.Id == id).Select(i => i.Name).FirstOrDefault();
               
            }
            return View(prd);
        }
      
        public IActionResult UpdateCategories(int id)
        {
            List<SelectListItem> values = (from i in _menuService.GetAll().ToList()
                                           select new SelectListItem
                                           {
                                               Text = i.Name,
                                               Value = i.Id.ToString()
                                           }).ToList();
            ViewBag.Values = values;

            var ctg= _categoryService.GetCategoryById(id);
            return View(ctg);
        }

        [HttpPost]
        public IActionResult UpdateCategories(Category category)
        {
           _categoryService.Update(category);
            return Redirect("/admin/UpdateCategories/"+category.Id);
        }

        public IActionResult DeleteCategory(int id)
        {
            _categoryService.Delete(id);

            return RedirectToAction("Categories");
        }

        public IActionResult Products()
        {
            using (var db = new Context())
            {
                var prd = db.Products.Include(i => i.Category).ToList();

                return View(prd);
            }
        }


        public IActionResult AddProduct()
        {
            List<SelectListItem> values = (from i in _categoryService.GetAll().ToList()
                                           select new SelectListItem
                                           {
                                               Text = i.Name,
                                               Value = i.Id.ToString()
                                           }).ToList();
            ViewBag.Values = values;

            return View();

        }


        [HttpPost]
        public IActionResult AddProduct(Product product)
        {
            _productService.Create(product);

            return RedirectToAction("products");
        }

        public IActionResult ProductDetail(int id) {
            var prd=_productService.GetProductById(id);
            using (var db=new Context())
            {
                ViewBag.ctg =db.Categories.Where(i=>i.Id== prd.CategoryId).Select(i=>i.Name).FirstOrDefault();
            }

            List<SelectListItem> values = (from i in _productService.GetProductDetails(id).ToList()
                                           select new SelectListItem
                                           {
                                               Text = i.Ozellik+" - "+ i.Price.ToString() + "TL  ",
                                              
                                               Value = i.Id.ToString()
                                           }).ToList();
            ViewBag.Values = values;

            ViewBag.Detail = _productService.GetProductDetails(id);


            return View(prd);
        
        }

        public IActionResult UpdateProduct(int id)
        {
            var product= _productService.GetProductById(id);
            List<SelectListItem> values = (from i in _categoryService.GetAll().ToList()
                                           select new SelectListItem
                                           {
                                               Text = i.Name,
                                               Value = i.Id.ToString()
                                           }).ToList();
            ViewBag.Values = values;
            return View(product);
        }
        [HttpPost]
        public IActionResult UpdateProduct(Product product)
        {

            _productService.Update(product);

            return Redirect("/admin/UpdateProduct/"+product.Id);
        }

        public IActionResult DeleteProduct(int id)
        {
            _productService.Delete(id);
            return RedirectToAction("Products");

        }

        [HttpPost]
        public IActionResult AddDetails(ProductDetails details)
        {
            using (var db=new Context())
            {
                db.ProductDetails.Add(details);
                db.SaveChanges();
            }


            return Redirect("/admin/ProductDetail/" + details.ProductId);
        }
    }
}
