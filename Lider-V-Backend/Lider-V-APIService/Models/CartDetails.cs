﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Lider_V_APIService.Models
{
    public class CartDetails
    {
        [Key]
        public int? CartDetailsId { get; set; }
        public int? CartHeaderId { get; set; }
        [ForeignKey("CartHeaderId")]
        public virtual CartHeader CartHeader { get; set; }
        public int? ProductId { get; set; }
        [ForeignKey("ProductId")]
        public virtual Product Product { get; set; }
        public int? Count { get; set; }
    }
}
