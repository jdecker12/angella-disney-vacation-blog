using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GoDisneyBlog.Migrations
{
    public partial class lists : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cards_CardBody_CardBodyId",
                table: "Cards");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CardBody",
                table: "CardBody");

            migrationBuilder.RenameTable(
                name: "CardBody",
                newName: "CardBodies");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CardBodies",
                table: "CardBodies",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "CardLists",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Category = table.Column<string>(nullable: true),
                    ItemOne = table.Column<string>(nullable: true),
                    ItemTwo = table.Column<string>(nullable: true),
                    ItemThree = table.Column<string>(nullable: true),
                    ItemFour = table.Column<string>(nullable: true),
                    ItemFive = table.Column<string>(nullable: true),
                    ItemSix = table.Column<string>(nullable: true),
                    ItemSeven = table.Column<string>(nullable: true),
                    ItemEight = table.Column<string>(nullable: true),
                    ItemNine = table.Column<string>(nullable: true),
                    ItemTen = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CardLists", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Cards_CardBodies_CardBodyId",
                table: "Cards",
                column: "CardBodyId",
                principalTable: "CardBodies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cards_CardBodies_CardBodyId",
                table: "Cards");

            migrationBuilder.DropTable(
                name: "CardLists");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CardBodies",
                table: "CardBodies");

            migrationBuilder.RenameTable(
                name: "CardBodies",
                newName: "CardBody");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CardBody",
                table: "CardBody",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Cards_CardBody_CardBodyId",
                table: "Cards",
                column: "CardBodyId",
                principalTable: "CardBody",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
