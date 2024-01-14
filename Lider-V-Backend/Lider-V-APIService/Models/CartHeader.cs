using System.ComponentModel.DataAnnotations;

namespace Lider_V_APIService.Models
{
    public class CartHeader
    {
        [Key]
        public int CartHeaderId { get; set; }
        public string UserId { get; set; }
    }
}
