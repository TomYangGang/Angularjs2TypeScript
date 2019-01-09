﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularQS.CommandModel;
using AngularQS.Common;
using AngularQS.DomainModel;
using AngularQS.Services.IService;
using AngularQS.WebApi.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

namespace AngularQS.WebApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IConfiguration _config;

        public UserController(IUserService userService, IConfiguration config)
        {
            _userService = userService;
            _config = config;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody]UserAddCommand userParam)
        {
            var appSettings = new AppSettings();
            _config.GetSection("AppSettings").Bind(appSettings);
            var user = _userService.Authenticate(userParam.UserName, userParam.Password, appSettings.Secret);

            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(user);
        }

        [HttpGet]
        public ActionResult<IEnumerable<UserViewModel>> Gets()
        {
            var result = _userService.GetList().Select(x => new UserViewModel()
            {
                Id = x.Id,
                UserName = x.UserName,
                Password = x.Password
            });

            return new ActionResult<IEnumerable<UserViewModel>>(result);
        }
    }
}