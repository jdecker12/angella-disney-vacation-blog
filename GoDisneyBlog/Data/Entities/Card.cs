using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoDisneyBlog.Data.Entities
{
    public class Card
    {
        public int Id { get; set; }
        public string CardTitle { get; set; }
        public string CardBody { get; set; }
        public string CardImg { get; set; }
        public string CardLink { get; set; }
    }
}
