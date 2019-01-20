﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GoDisneyBlog.Data;
using GoDisneyBlog.Data.Entities;
using Microsoft.Extensions.Logging;
using GoDisneyBlog.ViewModels;
using AutoMapper;

namespace GoDisneyBlog.Controllers
{
    [Route("api/[Controller]")]
    public class CardsController: Controller
    {
        private IGoDisneyRepository _repository;
        private ILogger<CardsController> _logger;
        private IMapper _mapper;

        public CardsController(IGoDisneyRepository repository,  
                                ILogger<CardsController> logger,
                                 IMapper mapper)
        {
            _logger = logger;
            _repository = repository;
            _mapper = mapper;

        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var cards = _repository.GetCard();
                return Ok(_mapper.Map<IEnumerable<Card>, IEnumerable<CardViewModel>>(cards));
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
                var card = _repository.GetCardById(id);
                if (card != null)
                {
                    return Ok(_mapper.Map<Card, CardViewModel>(card));
                }
                else
                {
                    return NotFound();
                }
            }
            catch(Exception ex)
            {
                _logger.LogError("Failed to get card data by id");
                return BadRequest($"Failed to get card data by id {ex}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]CardViewModel model)
        {

            var newCard = _mapper.Map<CardViewModel, Card>(model);
            try
            {
                if (ModelState.IsValid)
                {
                    _repository.AddEntity(newCard);
                    if (await _repository.SaveAllAsync())
                    {

                        return Created($"/api/cards/{newCard.Id}", _mapper.Map<Card, CardViewModel>(newCard));
                    }
                }
            }
            catch(Exception ex)
            {
                _logger.LogError($"Failed to save card info. {ex}");
                
            }

            return BadRequest("Failed to save card info.");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var oldCard = _repository.GetCardById(id);
                if (oldCard == null) return NotFound($"Could not find Card with an id of {id}");

                _repository.DeleteEntity(oldCard);

                if (await _repository.SaveAllAsync())
                {
                    return Ok();
                }

            }
            catch(Exception ex)
            {
                _logger.LogError($"Could not delete old card {ex}");
            }
            return BadRequest($"Failed to update old card"); 
        }

    }
}
