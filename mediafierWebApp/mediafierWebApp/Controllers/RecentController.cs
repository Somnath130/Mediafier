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
    public class RecentController : ControllerBase
    {
        private readonly MediafierContext _mediafiercontext;
        public RecentController(MediafierContext x)
        {
            _mediafiercontext = x;
        }
        [HttpGet("recentsFile/{userId}/{folderId}/{time}")]
        public IActionResult showRecent(int userId, int folderId, int time)
        {
            int m = 0;
            try
            {

                if (time == 1)
                {
                    var createdAt = DateTime.Now.AddHours(-1);

                    var res = _mediafiercontext.Document.Where(o => o.DocCreatedAt >= createdAt && o.DocCreatedBy == userId && o.DocFolderId == folderId && o.DocIsDeleted == false);
                    return Ok(res);
                }
                else if (time == 6)
                {
                    var createdAt = DateTime.Now.AddHours(-6);

                    var res = _mediafiercontext.Document.Where(o => o.DocCreatedAt >= createdAt && o.DocCreatedBy == userId && o.DocFolderId == folderId && o.DocIsDeleted == false);
                    return Ok(res);
                }
                else if (time == 12)
                {
                    var createdAt = DateTime.Now.AddHours(-12);

                    var res = _mediafiercontext.Document.Where(o => o.DocCreatedAt >= createdAt && o.DocCreatedBy == userId && o.DocFolderId == folderId && o.DocIsDeleted == false);
                    return Ok(res);
                }
                else
                {
                    var createdAt = DateTime.Now.AddHours(-24);

                    var res = _mediafiercontext.Document.Where(o => o.DocCreatedAt >= createdAt && o.DocCreatedBy == userId && o.DocFolderId == folderId && o.DocIsDeleted == false);
                    return Ok(res);
                }

            }
            catch (Exception e)
            {
                m = 404;
                return StatusCode(m);
            }

        }

    }
}