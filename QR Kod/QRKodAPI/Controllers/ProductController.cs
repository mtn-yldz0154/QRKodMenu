using BuisnessLayer.Buisness;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace QRKodAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService= productService;
        }

        public IActionResult Products()
        {
            var products = _productService.GetAll();

            return Ok(products);
        }

        [Route("product/{id}")]
        [HttpGet("{id}")]
        public IActionResult Product(int id)
        {
            var product = _productService.GetProductById(id);
            product.ProductDetails = _productService.GetProductDetails(id);

            return Ok(product);
        }


        [Route("Detail/{id}")]
        [HttpGet("{id}")]
        public IActionResult ProductDetail(int id)
        {
            var product = _productService.GetProductDetails(id);

            return Ok(product);
        }

    }
}
