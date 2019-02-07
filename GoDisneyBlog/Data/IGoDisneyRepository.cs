using GoDisneyBlog.Data.Entities;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GoDisneyBlog.Data
{
    public interface IGoDisneyRepository
    {
        IEnumerable<Card> GetCard();
        Card GetCardById(int id);
        Task<bool> SaveAllAsync();
        void AddEntity(object model);
        void DeleteEntity(object model);
        Card GetCardByName(string name);
    }
}