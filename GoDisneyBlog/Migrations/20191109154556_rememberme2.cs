using Microsoft.EntityFrameworkCore.Migrations;

namespace GoDisneyBlog.Migrations
{
    public partial class rememberme2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DecryptionKeys_AspNetUsers_UserId1",
                table: "DecryptionKeys");

            migrationBuilder.DropIndex(
                name: "IX_DecryptionKeys_UserId1",
                table: "DecryptionKeys");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "DecryptionKeys");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "DecryptionKeys");

            migrationBuilder.AddColumn<int>(
                name: "RememberMeId",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_RememberMeId",
                table: "AspNetUsers",
                column: "RememberMeId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_DecryptionKeys_RememberMeId",
                table: "AspNetUsers",
                column: "RememberMeId",
                principalTable: "DecryptionKeys",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_DecryptionKeys_RememberMeId",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_RememberMeId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "RememberMeId",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "DecryptionKeys",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "DecryptionKeys",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_DecryptionKeys_UserId1",
                table: "DecryptionKeys",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_DecryptionKeys_AspNetUsers_UserId1",
                table: "DecryptionKeys",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
