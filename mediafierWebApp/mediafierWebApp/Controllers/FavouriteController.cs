using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using mediafierWebApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace mediafierWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavouriteController : ControllerBase
    {
        private readonly MediafierContext _mediafiercontext;
        public FavouriteController(MediafierContext x)
        {
            _mediafiercontext = x;
        }
        [HttpGet("favFold/{id:int}")]
        public IActionResult Get(int id)
        {
            var favFold = _mediafiercontext.Folders.Where(o => o.FoldersCreatedBy == id && o.IsFavourite == true);
            return Ok(favFold);
        }
        [HttpGet("favFile/{id:int}")]
        public IActionResult GetFile(int id)
        {
            var favFile = _mediafiercontext.Document.Where(o => o.DocFolderId == id && o.IsFavourite == true);
            return Ok(favFile);
        }
    }
}