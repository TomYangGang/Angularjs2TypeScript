﻿using System;
using System.Collections.Generic;
using System.Text;
using AngularQS.Repository;

namespace AngularQS.Data.Models
{
    public class User:BaseModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}