using Lider_V_APIService.Models;
using Lider_V_APIService.Models.Dto;

namespace Lider_V_APIService.Services
{
    public interface IAccountRepository
    {
        Task<string> GenerateJwtTokenByUser(User user);
    }
}
