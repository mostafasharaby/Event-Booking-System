﻿using EventBooking.Application.DTOs;
using EventBooking.Application.Pagination;
using MediatR;

namespace Auth.Application.Queries
{
    public class GetAllAppUsers : IRequest<PaginatedResult<UserDto>>
    {
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
    }

}
