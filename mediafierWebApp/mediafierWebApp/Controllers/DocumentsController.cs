﻿using System;
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
    public class DocumentsController : ControllerBase
    {
        // GET: api/Documents
        private readonly MediafierContext _mediafiercontext;
        public DocumentsController(MediafierContext y)
        {
            _mediafiercontext = y;
        }
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            var res = _mediafiercontext.Document.ToList();
            return Ok(res);
        }



        // POST: api/Documents
        [HttpPost]
        public void Post([FromBody] DocumentRequest value)
        {
            Document obj = new Document();
            obj.DocName = value.DocName;
            obj.DocContentType = value.DocContentType;
            obj.DocSize = value.DocSize;
            obj.DocCreatedBy = value.DocCreatedBy;
            obj.DocCreatedAt = value.DocCreatedAt;
            obj.DocFolderId = value.DocFolderId;
            obj.DocIsDeleted = value.DocIsDeleted;
            _mediafiercontext.Document.Add(obj);
            _mediafiercontext.SaveChanges();
        }
        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var result = _mediafiercontext.Document.Where(o => o.DocFolderId == id);
                if (result == null) return NotFound();
                return Ok(result);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                "Error retrieving data from the database");
            }
        }

        // PUT: api/Documents/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var del = _mediafiercontext.Document.Where(r => r.DocId == id).ToList();
            del.ForEach(r => _mediafiercontext.Document.Remove(r));
            _mediafiercontext.SaveChanges();
        }
    }
}

