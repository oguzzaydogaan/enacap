using DTOs.DTOs;
using Entities.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repositories.EF_Core;

namespace enacap.Controllers
{
    [Route("api/coins")]
    [ApiController]
    public class CoinsController : ControllerBase
    {
        private readonly CoinDTO _coinDTO;
        public CoinsController(CoinDTO coinDTO)
        {
            _coinDTO = coinDTO;
        }

        [HttpGet]
        public async Task<IActionResult> GetCoins()
        {
            var coins = await _coinDTO.GetAllCoinsAsync();
            return Ok(coins);
        }

        [HttpGet("{symbol}")]
        public async Task<IActionResult> GetCoin(string symbol)
        {
            var coin = await _coinDTO.GetCoinBySymbolAsync(symbol);
            if (coin == null)
            {
                return NotFound();
            }
            return Ok(coin);
        }

        [HttpPost]
        public async Task<IActionResult> CreateCoin([FromBody] Coin coin)
        {
            if (coin == null)
            {
                return BadRequest();
            }
            await _coinDTO.AddCoinAsync(coin);
            return StatusCode(201, coin);
        }
    }
}
