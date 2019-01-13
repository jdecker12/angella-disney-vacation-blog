using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GoDisneyBlog.Data;
using GoDisneyBlog.Data.Entities;
using Microsoft.Extensions.Logging;

namespace GoDisneyBlog.Controllers
{
    [Route("api/[Controller]")]
    public class CardsController: Controller
    {
        private IGoDisneyRepository _repository;
        private ILogger<CardsController> _logger;

        public CardsController(IGoDisneyRepository repository,  ILogger<CardsController> logger)
        {
            _logger = logger;
            _repository = repository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_repository.GetCard());
            }
            catch(Exception ex)
            {
                _logger.LogError("Failed to get card data");
                return BadRequest($"Failed to get card data {ex}");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(_repository.GetCardById(id));
            }
            catch(Exception ex)
            {
                _logger.LogError("Failed to get card data by id");
                return BadRequest($"Failed to get card data by id {ex}");
            }
        }

    }
}
