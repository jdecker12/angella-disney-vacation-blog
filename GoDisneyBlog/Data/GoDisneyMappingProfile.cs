using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using GoDisneyBlog.Data.Entities;
using GoDisneyBlog.ViewModels;

namespace GoDisneyBlog.Data
{
    public class GoDisneyMappingProfile: Profile
    {
        public GoDisneyMappingProfile()
        {
            CreateMap<Card, CardViewModel>()
                .ForMember(c => c.thisCardId, ex => ex.MapFrom(c => c.Id))
                .ReverseMap();

            CreateMap<CardContent, CardContentsViewModel>()
                .ReverseMap();
        }
    }
}
