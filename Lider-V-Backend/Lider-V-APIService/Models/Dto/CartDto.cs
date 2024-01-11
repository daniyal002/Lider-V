namespace Lider_V_APIService.Models.Dto
{
    public class CartDto
    {
        public CartHeader CartHeader { get; set; }
        public IEnumerable<CartDetails> CartDetails { get; set; }
    }
}
