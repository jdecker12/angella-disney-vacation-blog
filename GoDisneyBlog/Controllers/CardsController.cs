﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GoDisneyBlog.Data;
using Microsoft.Extensions.Logging;

namespace GoDisneyBlog.Controllers
{
    [Route("api/[Controller]")]
    public class CardsController: Controller
    {
        private GoDisneyRepository _repository;
        private ILogger<CardsController> _logger;

        public CardsController(GoDisneyRepository repository,  ILogger<CardsController> logger)
        {
            _logger = logger;
            _repository = repository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_repository.GetCardData());
            }
            catch(Exception ex)
            {
                _logger.LogError("Failed to get card data");
                return BadRequest($"Failed to get card data {ex}");
            }
        }
        
    }
}
