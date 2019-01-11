using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GoDisneyBlog.Migrations
{
    public partial class cardcontent : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CardBodies");

            migrationBuilder.CreateTable(
                name: "CardContent",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Category = table.Column<string>(nullable: true),
                    ParaOne = table.Column<string>(nullable: true),
                    ParaTwo = table.Column<string>(nullable: true),
                    ParaThree = table.Column<string>(nullable: true),
                    ParaFour = table.Column<string>(nullable: true),
                    CardId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CardContent", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CardContent_Cards_CardId",
                        column: x => x.CardId,
                        principalTable: "Cards",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CardContent_CardId",
                table: "CardContent",
                column: "CardId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CardContent");

            migrationBuilder.CreateTable(
                name: "CardBodies",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CardId = table.Column<int>(nullable: true),
                    Category = table.Column<string>(nullable: true),
                    ParaFour = table.Column<string>(nullable: true),
                    ParaOne = table.Column<string>(nullable: true),
                    ParaThree = table.Column<string>(nullable: true),
                    ParaTwo = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CardBodies", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CardBodies_Cards_CardId",
                        column: x => x.CardId,
                        principalTable: "Cards",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CardBodies_CardId",
                table: "CardBodies",
                column: "CardId");
        }
    }
}
