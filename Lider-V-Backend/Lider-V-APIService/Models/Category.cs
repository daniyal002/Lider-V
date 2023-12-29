﻿using System.ComponentModel.DataAnnotations;

namespace Lider_V_APIService.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        public string CategoryName { get; set; }
        public int DisplayOrder { get; set; }
    }
}
