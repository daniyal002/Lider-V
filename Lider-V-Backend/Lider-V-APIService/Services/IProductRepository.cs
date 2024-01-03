using Lider_V_APIService.Models.Dto;

namespace Lider_V_APIService.Services
{
    public interface IProductRepository
    {
        Task<IEnumerable<ProductDto>> GetProductsAsync();
        Task<ProductDto> GetProductByIdAsync(int id);
        Task<ProductDto> CreateUptateProductAsync(ProductDto productDto);
        Task<bool> DeleteProduct(int id);
    }
}
