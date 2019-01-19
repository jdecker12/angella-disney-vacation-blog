using GoDisneyBlog.Data.Entities;
using System.Collections;
using System.Collections.Generic;

namespace GoDisneyBlog.Data
{
    public interface IGoDisneyRepository
    {
        IEnumerable<Card> GetCard();
        Card GetCardById(int id);
        bool SaveAll();
        void AddEntity(object model);
    }
}