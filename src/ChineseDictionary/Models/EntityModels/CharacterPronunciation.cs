﻿using System.ComponentModel.DataAnnotations;

namespace ChineseDictionary.Models.EntityModels
{
    public class CharacterPronunciation
    {
        public int Id { get; set; }
        [Required]
        public int CharacterId { get; set; }
        [Required]
        public Character Character { get; set; }
        [Required]
        public int PronunciationId { get; set; }
        [Required]
        public Pronunciation Pronunciation { get; set; }
        public string Description { get; set; }
    }
}
