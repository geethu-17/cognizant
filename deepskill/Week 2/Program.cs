using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RetailInventory.Data;
using RetailInventory.Models;

namespace RetailInventory
{
    class Program
    {
        static async Task Main(string[] args)
        {
            // Lab 1
            Console.WriteLine("========== LAB 1 ==========");
            Console.WriteLine("Retail Inventory System using EF Core 8.0\n");

            // Lab 2
            Console.WriteLine("========== LAB 2 ==========");
            using var context = new AppDbContext();
            Console.WriteLine("Database Context Created Successfully.\n");

            // Lab 3
            Console.WriteLine("========== LAB 3 ==========");
            context.Database.EnsureCreated();
            Console.WriteLine("Database Created Successfully.\n");

            // Lab 4
            Console.WriteLine("========== LAB 4 ==========");

            if (!await context.Categories.AnyAsync())
            {
                var electronics = new Category { Name = "Electronics" };
                var groceries = new Category { Name = "Groceries" };

                await context.Categories.AddRangeAsync(electronics, groceries);

                var product1 = new Product
                {
                    Name = "Laptop",
                    Price = 75000,
                    Category = electronics
                };

                var product2 = new Product
                {
                    Name = "Rice Bag",
                    Price = 1200,
                    Category = groceries
                };

                await context.Products.AddRangeAsync(product1, product2);
                await context.SaveChangesAsync();

                Console.WriteLine("Data Inserted Successfully.\n");
            }
            else
            {
                Console.WriteLine("Data Already Exists.\n");
            }

            // Lab 5
            Console.WriteLine("========== LAB 5 ==========");

            var products = await context.Products.ToListAsync();

            Console.WriteLine("All Products:");
            foreach (var p in products)
            {
                Console.WriteLine($"{p.Name} - ₹{p.Price}");
            }

            var product = await context.Products.FindAsync(1);
            Console.WriteLine($"\nFound Product: {product?.Name}");

            var expensive = await context.Products.FirstOrDefaultAsync(p => p.Price > 50000);
            Console.WriteLine($"Expensive Product: {expensive?.Name}");

            Console.WriteLine("\nAll Labs (1 to 5) Executed Successfully.");

            Console.ReadKey();
        }
    }
}