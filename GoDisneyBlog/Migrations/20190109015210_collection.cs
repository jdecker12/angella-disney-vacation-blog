using Microsoft.EntityFrameworkCore.Migrations;

namespace GoDisneyBlog.Migrations
{
    public partial class collection : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cards_CardBodies_CardBodyId",
                table: "Cards");

            migrationBuilder.DropIndex(
                name: "IX_Cards_CardBodyId",
                table: "Cards");

            migrationBuilder.DropColumn(
                name: "CardBodyId",
                table: "Cards");

            migrationBuilder.AddColumn<int>(
                name: "CardId",
                table: "CardBodies",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_CardBodies_CardId",
                table: "CardBodies",
                column: "CardId");

            migrationBuilder.AddForeignKey(
                name: "FK_CardBodies_Cards_CardId",
                table: "CardBodies",
                column: "CardId",
                principalTable: "Cards",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CardBodies_Cards_CardId",
                table: "CardBodies");

            migrationBuilder.DropIndex(
                name: "IX_CardBodies_CardId",
                table: "CardBodies");

            migrationBuilder.DropColumn(
                name: "CardId",
                table: "CardBodies");

            migrationBuilder.AddColumn<int>(
                name: "CardBodyId",
                table: "Cards",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Cards_CardBodyId",
                table: "Cards",
                column: "CardBodyId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cards_CardBodies_CardBodyId",
                table: "Cards",
                column: "CardBodyId",
                principalTable: "CardBodies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
