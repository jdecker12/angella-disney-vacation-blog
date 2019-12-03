﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace GoDisneyBlog.Migrations
{
    public partial class userid : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<string>(
                name: "User",
                table: "DecryptionKeys",
                nullable: true);

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DecryptionKeys_AspNetUsers_User",
                table: "DecryptionKeys");

            migrationBuilder.DropIndex(
                name: "IX_DecryptionKeys_User",
                table: "DecryptionKeys");

            migrationBuilder.DropColumn(
                name: "User",
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
    }
}