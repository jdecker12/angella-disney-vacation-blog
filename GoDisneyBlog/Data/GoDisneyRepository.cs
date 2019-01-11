using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GoDisneyBlog.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace GoDisneyBlog.Data
{
    public class GoDisneyRepository : IGoDisneyRepository
    {
        private GoDisneyContext _context;

        public GoDisneyRepository(GoDisneyContext context)
        {
            _context = context;
        }

        public IEnumerable<Card> GetCardData()
        {
            return _context.Cards
                .Include(c => c.CardContents)
                .ToList();
        }
        
    }
}
