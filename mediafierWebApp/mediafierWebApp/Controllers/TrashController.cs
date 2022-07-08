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
    public class TrashController : ControllerBase
    {
        private readonly MediafierContext _mediafiercontext;
        public TrashController(MediafierContext x)
        {
            _mediafiercontext = x;
        }

        [HttpDelete("hardDel/{id}")]
        public void Delete(int id)
        {
            var filedel = _mediafiercontext.Document.Where(res => res.DocId == id).ToList();
            filedel.ForEach(res => _mediafiercontext.Document.Remove(res));
            _mediafiercontext.SaveChanges();
        }
        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            var del = _mediafiercontext.Document.Where(o => o.DocFolderId == id && o.DocIsDeleted == true);
            return Ok(del);
        }


    }
}