using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GoDisneyBlog.Migrations
{
    public partial class newclasses : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CardBody",
                table: "Cards",
                newName: "Category");

            migrationBuilder.AddColumn<int>(
                name: "CardBodyId",
                table: "Cards",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CardLinkName",
                table: "Cards",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "CardBody",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Category = table.Column<string>(nullable: true),
                    ParaOne = table.Column<string>(nullable: true),
                    ParaTwo = table.Column<string>(nullable: true),
                    ParaThree = table.Column<string>(nullable: true),
                    ParaFour = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CardBody", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cards_CardBodyId",
                table: "Cards",
                column: "CardBodyId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cards_CardBody_CardBodyId",
                table: "Cards",
                column: "CardBodyId",
                principalTable: "CardBody",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cards_CardBody_CardBodyId",
                table: "Cards");

            migrationBuilder.DropTable(
                name: "CardBody");

            migrationBuilder.DropIndex(
                name: "IX_Cards_CardBodyId",
                table: "Cards");

            migrationBuilder.DropColumn(
                name: "CardBodyId",
                table: "Cards");

            migrationBuilder.DropColumn(
                name: "CardLinkName",
                table: "Cards");

            migrationBuilder.RenameColumn(
                name: "Category",
                table: "Cards",
                newName: "CardBody");
        }
    }
}
