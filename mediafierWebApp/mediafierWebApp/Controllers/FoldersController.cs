using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using mediafierWebApp.Models;
using mediafierWebApp.RequestModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace mediafierWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoldersController : ControllerBase
    {
        // GET: api/Folders
        private readonly MediafierContext _mediafiercontext;
        public FoldersController(MediafierContext x)
        {
            _mediafiercontext = x;
        }
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            var res = _mediafiercontext.Folders.ToList();
            return Ok(res);
        }
        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var result = _mediafiercontext.Folders.Where(o => o.FoldersCreatedBy == id && o.FoldersIsdeleted == false);
                if (result == null) return NotFound();
                return Ok(result);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Error retrieving data from the database");
            }
        }

        // POST: api/Folders
        [HttpPost]
        public void Post([FromBody] FoldersRequest value)
        {
            Folders obj = new Folders();
            obj.FoldersName = value.FoldersName;
            obj.FoldersCreatedBy = value.FoldersCreatedBy;
            obj.FoldersCreatedAt = value.FoldersCreatedAt;
            obj.FoldersIsdeleted = value.FoldersIsdeleted;
            obj.FoldersIsdeleted = false;
            obj.IsFavourite = false;

            _mediafiercontext.Folders.Add(obj);
            _mediafiercontext.SaveChanges();
        }
        [HttpGet("Folders/{id}/{value}")]
        public IActionResult Get(int id, string value)
        {
            var result = _mediafiercontext.Folders.Where(obj => obj.FoldersName.Contains(value));
            return Ok(result);
        }

        [HttpPut("del/{id}")]
        public void SoftDelete(int id)
        {
            var deleteFold = _mediafiercontext.Folders.First(res => res.FoldersId == id);
            deleteFold.FoldersIsdeleted = true;
            _mediafiercontext.Folders.Update(deleteFold);
            _mediafiercontext.SaveChanges();
        }
        [HttpPut("favourite/{id}")]
        public void Favourites(int id)
        {
            var favFold = _mediafiercontext.Folders.First(res => res.FoldersId == id);
            favFold.IsFavourite = true;
            _mediafiercontext.Folders.Update(favFold);
            _mediafiercontext.SaveChanges();
        }
        [HttpPut("removefavourite/{id}")]
        public void removeFavourites(int id)
        {
            var favFold = _mediafiercontext.Folders.First(res => res.FoldersId == id);
            favFold.IsFavourite = false;
            _mediafiercontext.Folders.Update(favFold);
            _mediafiercontext.SaveChanges();
        }

    }

}