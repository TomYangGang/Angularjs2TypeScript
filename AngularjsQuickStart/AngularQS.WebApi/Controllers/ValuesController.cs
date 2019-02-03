﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.Extensions.Localization;

namespace AngularQS.WebApi.Controllers
{
   
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly IStringLocalizer<ValuesController> _localizer;

        public ValuesController(IStringLocalizer<ValuesController> localizer)
        {
            _localizer = localizer;
        }

        
        [HttpGet("all")]
        [ValidateAntiForgeryToken]
        public string GetList()
        {
            return _localizer["Hello"];
        }

        // GET api/values
        [Produces("application/json")]
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2",nameof(IEnumerable) };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        // GET api/values/
        [Obsolete]
        [HttpGet("test")]
        public ActionResult<string> Test(int id)
        {
            return "value";
        }
    }
}
