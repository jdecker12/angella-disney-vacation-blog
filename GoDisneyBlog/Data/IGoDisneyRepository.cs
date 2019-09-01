﻿using GoDisneyBlog.Data.Entities;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GoDisneyBlog.Data
{
    public interface IGoDisneyRepository
    {
        Task<IEnumerable<Card>> GetCard();
        Task<Card> GetCardById(int id);
        Task<bool> SaveAllAsync();
        void AddEntity(object model);
        void DeleteEntity(object model);
       Task<Card> GetCardByName(string name);
    }
}