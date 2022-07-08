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
    public class folderTrashController : ControllerBase
    {
        private readonly MediafierContext _mediafiercontext;
        public folderTrashController(MediafierContext x)
        {
            _mediafiercontext = x;
        }
        [HttpDelete("hardDel/{id}")]
        public void Delete(int id)
        {
            var folds = _mediafiercontext.Document.Where(result => result.DocFolderId == id).ToList();
            folds.ForEach(result => _mediafiercontext.Document.Remove(result));
            _mediafiercontext.SaveChanges();
            var res = _mediafiercontext.Folders.Where(result => result.FoldersId == id).ToList();
            res.ForEach(result => _mediafiercontext.Folders.Remove(result));
            _mediafiercontext.SaveChanges();
        }
        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            var del = _mediafiercontext.Folders.Where(o => o.FoldersCreatedBy == id && o.FoldersIsdeleted == true);
            return Ok(del);
        }
    }
}