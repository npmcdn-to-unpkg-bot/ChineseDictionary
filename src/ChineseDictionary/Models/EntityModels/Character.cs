﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ChineseDictionary.Models.EntityModels
{
    public class Character
    {
        public int Id { get; set; }
        [Required, MaxLength(10)]
        public string Symbol { get; set; }
        public string SimplifiedSymbol { get; set; }
        public List<CharacterPronunciation> CharacterPronunciations { get; set; }
    }
}
