using AutoMapper;
using Lider_V_APIService.Models;
using Lider_V_APIService.Models.Dto;

namespace Lider_V_APIService.Helpers
{
    public class MappingConfig
    {
        public static MapperConfiguration RegisterMaps()
        {
            var mappingConfig = new MapperConfiguration(config =>
            {
                config.CreateMap<ProductDto, Product>().ReverseMap();
            });

            return mappingConfig;
        }
    }
}
