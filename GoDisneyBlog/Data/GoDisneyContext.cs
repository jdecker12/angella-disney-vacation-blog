using GoDisneyBlog.Data.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoDisneyBlog.Data
{
    public class GoDisneyContext: IdentityDbContext<StoreUser>
    {
        public GoDisneyContext(DbContextOptions<GoDisneyContext>options): base(options)
        {}

       public DbSet<Card> Cards { get; set; }
       public DbSet<CardList> CardLists { get; set; }
    }
}
