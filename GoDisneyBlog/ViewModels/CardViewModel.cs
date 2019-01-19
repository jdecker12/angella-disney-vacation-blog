using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoDisneyBlog.ViewModels
{
    public class CardViewModel
    {
        public int thisCardId { get; set; }
        [Required]
        public string cardCategory { get; set; }
        [Required]
        public string cardTitle { get; set; }
        [Required]
        [MinLength(9)]
        public string cardImg { get; set; }
        public string cardLink { get; set; }
        public string cardLinkName { get; set; }
        [Required]
        public string cardIcon { get; set; }

        public ICollection<CardContentsViewModel> cardContents { get; set; }

    }
}
