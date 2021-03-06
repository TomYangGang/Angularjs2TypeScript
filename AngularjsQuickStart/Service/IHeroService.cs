﻿using System.Collections.Generic;
using Data;

namespace Service
{
    public interface IHeroService
    {
        List<Hero> GetHeros();
        void AddHero(string name, string email);
        void EditHero(int id, string name);
        void DeleteHero(int id);
        List<Hero> GetHerosByKeywords(string keywords);
    }
}
