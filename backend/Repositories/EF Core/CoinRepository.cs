using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities.Models;
using Microsoft.EntityFrameworkCore;

namespace Repositories.EF_Core
{
    public class CoinRepository
    {
        private readonly RepositoryContext _context;
        public CoinRepository(RepositoryContext context)
        {
            _context = context;
        }
        public async Task<List<Coin>> GetAllCoinsAsync()
        {
            return await _context.Coins.ToListAsync();
        }
        public async Task<Coin?> GetCoinBySymbolAsync(string symbol)
        {
            return await _context.Coins.Where(c => c.Symbol == symbol).SingleOrDefaultAsync();
        }
        public async Task AddCoinAsync(Coin coin)
        {
            await _context.Coins.AddAsync(coin);
            await _context.SaveChangesAsync();
        }
    }
}
