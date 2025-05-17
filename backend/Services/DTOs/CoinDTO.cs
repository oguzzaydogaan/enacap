using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Entities.Models;
using Repositories.EF_Core;

namespace DTOs.DTOs
{
    public class CoinDTO
    {
        private readonly CoinRepository _coinRepository;
        private readonly HttpClient _httpClient;
        private readonly string _baseUrl;
        public CoinDTO(CoinRepository coinRepository, HttpClient client)
        {
            _coinRepository = coinRepository;
            _httpClient = client;
            _baseUrl = "https://data-api.binance.vision";
        }

        public async Task<List<Coin>?> GetAllCoinsAsync()
        {
            var coins = await _coinRepository.GetAllCoinsAsync();

            return coins;
        }

        public async Task<Coin?> GetCoinBySymbolAsync(string symbol)
        {
            var coin = await _coinRepository.GetCoinBySymbolAsync(symbol);
            if (coin == null)
            {
                return null;
            }
            var httpClient = _httpClient;
            httpClient.BaseAddress = new Uri(_baseUrl);
            string query = "?symbol=" + symbol;
            var response = await httpClient.GetStringAsync($"/api/v3/ticker/price{query}");
            using var jsonDocument = JsonDocument.Parse(response);
            string? price = jsonDocument.RootElement.GetProperty("price").GetString();
            coin.Price = price!=null ? price : "0";
            return coin;
        }

        public async Task AddCoinAsync(Coin coin)
        {
            await _coinRepository.AddCoinAsync(coin);
        }
    }
}
