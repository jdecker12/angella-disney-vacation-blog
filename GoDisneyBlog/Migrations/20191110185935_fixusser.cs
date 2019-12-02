using Microsoft.EntityFrameworkCore.Migrations;

namespace GoDisneyBlog.Migrations
{
    public partial class fixusser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_DecryptionKeys_UserId",
                table: "DecryptionKeys");

            migrationBuilder.CreateIndex(
                name: "IX_DecryptionKeys_UserId",
                table: "DecryptionKeys",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_DecryptionKeys_UserId",
                table: "DecryptionKeys");

            migrationBuilder.CreateIndex(
                name: "IX_DecryptionKeys_UserId",
                table: "DecryptionKeys",
                column: "UserId",
                unique: true,
                filter: "[UserId] IS NOT NULL");
        }
    }
}
