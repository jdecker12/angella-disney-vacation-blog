using System.Collections;

namespace GoDisneyBlog.Data
{
    public interface IGoDisneyRepository
    {
        IEnumerable GetCardData();
    }
}