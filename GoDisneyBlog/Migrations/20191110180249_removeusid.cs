using Microsoft.EntityFrameworkCore.Migrations;

namespace GoDisneyBlog.Migrations
{
    public partial class removeusid : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DecryptionKeys_AspNetUsers_User",
                table: "DecryptionKeys");

            migrationBuilder.DropIndex(
                name: "IX_DecryptionKeys_User",
                table: "DecryptionKeys");

            migrationBuilder.RenameColumn(
                name: "User",
                table: "DecryptionKeys",
                newName: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_DecryptionKeys_UserId",
                table: "DecryptionKeys",
                column: "UserId",
                unique: true,
                filter: "[UserId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_DecryptionKeys_AspNetUsers_UserId",
                table: "DecryptionKeys",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DecryptionKeys_AspNetUsers_UserId",
                table: "DecryptionKeys");

            migrationBuilder.DropIndex(
                name: "IX_DecryptionKeys_UserId",
                table: "DecryptionKeys");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "DecryptionKeys",
                newName: "User");

            migrationBuilder.CreateIndex(
                name: "IX_DecryptionKeys_User",
                table: "DecryptionKeys",
                column: "User",
                unique: true,
                filter: "[User] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_DecryptionKeys_AspNetUsers_User",
                table: "DecryptionKeys",
                column: "User",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
