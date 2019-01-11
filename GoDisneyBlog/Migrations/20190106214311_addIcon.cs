using Microsoft.EntityFrameworkCore.Migrations;

namespace GoDisneyBlog.Migrations
{
    public partial class addIcon : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CardIcon",
                table: "Cards",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CardIcon",
                table: "Cards");
        }
    }
}
